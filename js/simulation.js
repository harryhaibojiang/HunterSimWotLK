var iterations = 10000;
var currentiteration = 0;
var weightiteration = 0;
var maxWeightIteration = 0;
var loopcheck = 0;
var minfighttimer = 120;
var maxfighttimer = 125;
var DPS = 0;
var petDPS = 0;
var mindps = 99999;
var maxdps = 0;
var totalduration = 0;
var totaldmgdone = 0;
var prevtimeend = 0;
var executecodetime = 0.000;
var latency = 0.04;
var currentgcd = 0;

var playeruptime = 100;
var petuptime = 100;
var weavetime = 0.8;
var isStatWeights = false;
var performancecheck1 = 0;
var performancecheck2 = 0;
const RESULT = {
    HIT: 0,
    MISS: 1,
    DODGE: 2,
    CRIT: 3,
    GLANCE: 4,
    PARTIAL: 5
};

var spread = [];
var countruns = 0;
var err = 0;
var avgDPS = 0;
var prevDPS = 0;
var sumdmg = 0;
var sumduration = 0;
var steptime = 0;
var steptimeend = 0;
var playertimeend = 0;
var playertimestart = 0;
var next_dot_time = 0;
var nextauto = 0;

var spell = '';
var petspell = '';
var dotspell = '';
var nextpetattack = 1;
var nextpetspell = 1;
var playerattackready = false;
var sumpetdmg = 0;
var fightduration = 0;
var combatlogarray = [];
var combatlogindex = 0;
var manalogarray = [];
var manalogindex = 0;
var filteredcombatlogarray = [];
var combatlogRun = false;

var statweights = { // accurate weights with 50k iterations at 7700 boss in default gear, p4 bis
    Agi: 0.9605143836014804,
    ArP: 0.16027539728151396,
    Crit: 0.8845501877480455,
    Expertise: 0.0017802250089289373,
    Haste: 0.6429055024228614,
    Hit: 1.0169360463006343,
    Int: 0.008956822203713273,
    MAP: 0.005536456701213411,
    MP5: 0.001402849113087541,
    MeleeCrit: 0.00013105937968703075,
    MeleeHit: 0.005894374426353958,
    RAP: 0.38799250528608353,
    RangeCrit: 0.8844191283683585,
    RangeHit: 1.0110416718742803,
    Str: 0,
    relentless:20.35, 
    beasttamer: 22.11, 
    dmgbonus: 0.75, 
    rangedmgbonus: 0.75
}

const RESULTARRAY = ["Hit","Miss","Dodge","Crit","Glance", "Partial Resist"];

/** Begins sim DPS functionality when ran with "Sim DPS - Loop" button. */
function startSync() {

    prevDPS = avgDPS;
    loopSim();

}

function loopSim() {
    return new Promise((resolve, reject) => {
        performancecheck1 = performance.now(); // test debug time check
        spread = [];
        countruns = 0;
        err = 0;
        mindps = 99999;
        maxdps = 0;
        sumdmg = 0;
        sumduration = 0;
        sumpetdmg = 0;
        resultCountInitialize();
        initializeAuras();
        // loop through iterations, run example combat log as the last iteration
        currentiteration = 0;
        loopcheck = 0;
        
        loopSimHelper(resolve, isStatWeights);
    });
}

function loopSimHelper(callback, isStatWeights) {
    currentiteration++;
    if (isStatWeights) { weightiteration++;}
    if (currentiteration === iterations) {
        combatlogRun = true;
    } else {combatlogRun = false;}
    runSim();
    sumdmg += totaldmgdone;
    sumpetdmg += petdmgdone;
    sumduration += totalduration;

    if (currentiteration < iterations) {
        let visualcheck = currentiteration / 100;

        if (visualcheck > loopcheck){
            loopcheck++;
            setTimeout(() => loopSimHelper(callback, isStatWeights), 0);
            if (isStatWeights) {

                let loadweightbar = (weightiteration / maxWeightIteration) * 100;
                document.getElementById("weightloadbar").style.width =  loadweightbar + "%";
            }
            let loadpercent = (currentiteration / iterations) * 100;
            document.getElementById("loadbar").style.width =  loadpercent + "%";
            displayDPSResults();
        }    
        else {
            loopSimHelper(callback, isStatWeights);
        }
    }
    else if (currentiteration === iterations){
        if (weightiteration === maxWeightIteration && isStatWeights) {
            document.getElementById("weightloadbar").style.width =  100 + "%";
        }
        document.getElementById("loadbar").style.width =  100 + "%";
        
        if (!isStatWeights) {
            finalResults();
          }
          callback();
    }
    avgDPS = (sumdmg+sumpetdmg) / sumduration;

}

function finalResults() {
    avgDPS = (sumdmg+sumpetdmg) / sumduration;
    // sets uptime to a % instead of seconds
    for (let prop in buff_uptimes) {
        buff_uptimes[prop] = (auras[prop].uptime / sumduration * 100).toFixed(2);
    }
    for (let prop in debuff_uptimes){
        debuff_uptimes[prop] = (debuffs[prop].uptime / sumduration * 100).toFixed(2);
    }

    damageResults();
    //console.log(pet);
    //console.log(buff_uptimes);
    //console.log(debuff_uptimes);
    //console.log(partybuff_uptimes);
    //console.log(currentMana);

    function standardError(x, u_x) {
        let n = x.length;
        let a = 0;
        x.forEach(
            function (x_i, index) {
                let b = (x_i - u_x);
                a += b * b;
            }
        );
        let stddev = Math.sqrt(a/(n-1));
        return stddev / (Math.sqrt(n));
    }

    err = standardError(spread,avgDPS);

    performancecheck2 = performance.now();
    executecodetime = (performancecheck2 - performancecheck1) / 1000; // milliseconds convert to sec
    displayDPSResults();

    let newspread = spread.map(function(each_element){
        return Number(Math.floor(each_element / 5) * 5);
    });
    buildBuffUptimes();
    buildManaData();
    buildData(newspread);
    createHistogram();
    //console.log("*****************");
}
/** Main loop function for simming iterations, ran for each iteration. */
function runSim() {
    maxsteps = rng(minfighttimer * 1000, maxfighttimer * 1000);
    fightduration = maxsteps / 1000;
    steptime = 0;
    let playertimestart = 0;
    steptimeend = 0;
    prevtimeend = 0;
    playertimestart = 0;
    playertimeend = 0;
    totalduration = 0;
    sunderstart = 0; // start time for sunder check initialized as 0, then steptime + 30 after first apply
    totaldmgdone = 0;
    DPS = 0;
    currentgcd = 0;
    currentMana = Mana;
    petdmgdone = 0;
    spell = '';
    nextpetattack = 1;
    nextpetspell = 1;
    playerattackready = false;
    combatlogarray = [];
    combatlogindex = 0;
    manalogarray = [];
    manalogindex = 0;
    nextauto = 0;
    gcds = [];
    index1 = 0;
    
    initializeSpells();
    ResetAuras();
    intervalAuraInitializer();

    while (totalduration < fightduration){

        // choices
        onUseSpellCheck();

        updateAuras(steptime);
        petAuras(steptime);

        /******* decide spell selection ******/
        //console.log("current spell: "+spell)
        if (spell === '') {

            if (queueReadiness) {
                spell = 'readiness';
            }
            else { spell = playerSpellChoice(); }
            //console.log("next spell: " + spell)
            if (spell !== 'autoshot'){
                playertimestart = startTime(spell);
            } else if (spell === 'autoshot' && steptimeend > 5 * Math.ceil(prevtimeend / 5)) {
                
                playertimestart = steptimeend + 5;
                playertimeend = playertimestart;
                spell = '';
            } else {
                playertimestart = steptimeend + 2;
                playertimeend = playertimestart;
                spell = '';
            }
        }
        if (petspell === '') {
            petspell = petSpellChoice();
            //console.log("next petspell: " + petspell)
        }

        if (dotCheckActive()) {
            dotspell = dotNextTick();
            next_dot_time = auras[dotspell].next_tick;
        }
        //console.log("current dot: "+dotspell)

        nextEvent(playertimestart);
        
        //console.log("time end => "+(Math.round(steptimeend * 1000) / 1000));
        petUpdateFocus();
        updateMana();
        if((combatlogRun) && (playertimeend != prevtimeend)) {
            manalogarray[manalogindex] = [playertimeend, currentMana];
            manalogindex++;
        }
        prevtimeend = steptimeend;
        totalduration = steptimeend;
        //console.log("total damage: " + totaldmgdone);
        //console.log("duration: " + (Math.round(totalduration * 100) / 100));
    }
    petDPS = petdmgdone / totalduration;
    DPS = totaldmgdone / totalduration + petDPS;
    if (DPS < mindps) { mindps = DPS; }
    if (DPS > maxdps) { maxdps = DPS; }
    spread[countruns] = DPS;
    countruns++;
}
function startStepInitialize(){
    fightduration = 180;
    initializeAuras();
    initializeSpells();
    intervalAuraInitializer();
    spell = '';
    nextpetattack = 1;
    nextpetspell = 1;
    nextauto = 0;
    petspell = 'pet_focus_dump'; // decision pet primary/secondary - random or based on CD?
    debuffs.hm.improved = false
}
/** This is used to step through a fight rather than do a while loop. Useful for debugging. */
function startStepOnly(){
    performancecheck1 = performance.now(); // test debug time check
    combatlogRun = true;
    // choices
    onUseSpellCheck();

    petAuras(steptime);

    /******* decide spell selection ******/
    //console.log("current spell: "+spell)
    
    if (spell === '') {

        if (queueReadiness) {
            spell = 'readiness';
        }
        else { spell = playerSpellChoice(); }
        //console.log("next spell: " + spell)
        if (spell !== 'autoshot'){
            playertimestart = startTime(spell);
        } else if (spell === 'autoshot' && steptimeend > 5 * Math.ceil(prevtimeend / 5)) {
            
            playertimestart = steptimeend + 5;
            playertimeend = playertimestart;
            spell = '';
        } else {
            playertimestart = steptimeend + 2;
            playertimeend = playertimestart;
            spell = '';
        }
        //console.log("spell picked => "+spell)
    }
    if (petspell === '') {
        petspell = petSpellChoice();
        //console.log("next petspell: " + petspell)
    }
    
    if (dotCheckActive()) {
        dotspell = dotNextTick();
        next_dot_time = auras[dotspell].next_tick;
    }

    nextEvent(playertimestart);
    
    //console.log("time end => "+(Math.round(steptimeend * 1000) / 1000));
    petUpdateFocus();
    updateMana();
    //console.log("step "+ steptime);
    prevtimeend = (steptimeend);
    totalduration = Math.min(maxfighttimer, steptimeend);
    updateAuras(steptime);
    avgDPS = totaldmgdone / totalduration;
    //console.log("steadys => "+ steadycount);
    //console.log("autos => " + autocount);
    //console.log("pet damage: " + petdmgdone);
    console.log("total damage: " + totaldmgdone);
    console.log("duration: " + (Math.round(totalduration * 1000) / 1000));
    //console.log("steptimecheck: " + steptimecheck)
    performancecheck2 = performance.now();
    executecodetime = (performancecheck2 - performancecheck1) / 1000; // milliseconds convert to sec
    displayDPSResults();
    //console.log("step time => " + (Math.round(steptime * 1000) / 1000));
    //console.log(auras);
    //console.log(pet);
    filteredcombatlogarray = combatlogarray.filter(key => key.includes("Player"));
    console.log("*****************");
}
/**Sets the start time for the next player event based on remaining cd's and selected spell. */
function startTime(spell){
    
    playertimestart = playertimeend;
    playertimestart += (spell === "steadyshot") ? Math.max(USED_SPELLS.steadyshot.cd,0) + latency : 0;
    playertimestart += (spell === "multishot") ? Math.max(USED_SPELLS.multishot.cd,0) + latency : 0;
    playertimestart += (spell === "arcaneshot") ? Math.max(USED_SPELLS.arcaneshot.cd,0) + latency : 0;
    playertimestart += (spell === "raptorstrike") ? Math.max(USED_SPELLS.raptorstrike.cd,0) + latency + 0.5 * weavetime: 0;
    playertimestart += (spell === "melee") ? Math.max(USED_SPELLS.melee.cd,0) + latency + 0.5 * weavetime : 0;
    playertimestart += (spell === "mongoose") ? Math.max(USED_SPELLS.mongoose.cd,0) + latency + 0.5 * weavetime : 0;
    playertimestart += (spell === "aimedshot") ? Math.max(USED_SPELLS.aimedshot.cd,0) + latency: 0;
    playertimestart += (spell === "readiness") ? Math.max(currentgcd - playertimeend,0) : 0;
    playertimestart += (spell === "serpentsting") ? Math.max(USED_SPELLS.serpentsting.cd,0) + latency: 0;
    playertimestart += (spell === "chimerashot") ? Math.max(USED_SPELLS.chimerashot.cd,0) + latency: 0;
    playertimestart += (spell === "explosiveshot") ? Math.max(USED_SPELLS.explosiveshot.cd,0) + latency: 0;
    playertimestart += (spell === "explosivetrap") ? Math.max(USED_SPELLS.explosivetrap.cd,0) + latency + 0.5 * weavetime : 0;
    playertimestart += (spell === "frosttrap") ? Math.max(USED_SPELLS.frosttrap.cd,0) + latency + 0.5 * weavetime : 0;
    playertimestart += (spell === "snaketrap") ? Math.max(USED_SPELLS.snaketrap.cd,0) + latency + 0.5 * weavetime : 0;
    playertimestart += (spell === "blackarrow") ? Math.max(USED_SPELLS.blackarrow.cd,0) + latency : 0;
    playertimestart += (spell === "killshot") ? Math.max(USED_SPELLS.killshot.cd,0) + latency: 0;
    playertimestart += (spell === "volley") ? Math.max(USED_SPELLS.volley.cd,0) + latency: 0;
    playertimestart += (spell === "silencingshot") ? Math.max(USED_SPELLS.silencingshot.cd,0): 0;
    playertimestart += (spell === "scattershot") ? Math.max(USED_SPELLS.scattershot.cd,0) + latency: 0;
    //console.log("next player start: " + playertimestart)
    return (playertimestart);
}

function roundFloat(number){
    return Math.round(number * 10000) / 10000;
}

function shootAutoShot() {
    
    //console.log("cast: auto")
    USED_SPELLS.autoshot.cd = rangespeed;
        
    if(combatlogRun) {
        combatlogarray[combatlogindex] = nextauto.toFixed(3) + " - Player casts Auto Shot. eWS => " + rangespeed.toFixed(2);
        combatlogindex++;
    }
    attackRange();
    nextauto += rangespeed;
    //console.log("next auto: "+nextauto)
}
/**This function decides which event to choose next for player or pet, kind of like an event queue. */
function nextEvent(playertimestart){

    update();
    let playercheck = (playerattackready) ? playertimeend : playertimestart;
    let dotcheck = (next_dot_time !== 0) ? next_dot_time : fightduration * 2; // if 0 set to duration outside range of time
    let eventchecktime = Math.min(nextauto, playercheck, nextpetattack, nextpetspell, dotcheck);
    // console.log("check0: "+(eventchecktime))
    // console.log("check1: "+(nextauto))
    // console.log("check2: "+(nextpetattack))
    // console.log("check3: "+(nextpetspell))
    // console.log("check4: "+(playercheck))
    // console.log("check6: "+(dotcheck))
    if (eventchecktime === nextauto) {
        //console.log("next auto: "+nextauto)
        //console.log("player time check: "+playercheck)
        //console.log("auto cd: "+USED_SPELLS.autoshot.cd)
        steptimeend = (nextauto);
        steptime = (steptimeend - prevtimeend);
        updateSpellCDs();
        shootAutoShot();
    }
    else if (eventchecktime === nextpetattack){
        //console.log("cast: petattack")
        let step = petAttack();
        steptimeend = step;
        steptime = steptimeend - prevtimeend;
        updateSpellCDs();
    }
    else if (eventchecktime === nextpetspell){ // check for pet yellows
        if(petspell !== ''){
            
            pet.focus -= PET_SPELLS[petspell].cost;
            //console.log("cast: " + PET_SPELLS[petspell].spell_name);
            let step = petSpell(petspell);
            steptimeend = step;
            steptime = steptimeend - prevtimeend;
            updateSpellCDs(petspell);
            petspell = '';
        }
        else if (petspell === '') { // else if pet yellow impossible
            steptimeend = nextpetspell;
            
            steptime = steptimeend - prevtimeend;
            updateSpellCDs(petspell);
            petspell = '';
            nextpetspell += 2;
            //console.log("not enough focus");
        }
    }    
    else if (eventchecktime === playercheck) {   

        if (!playerattackready){
            spellNextCast(playertimestart); // sets player time end
            //console.log("start cast: "+spell)
        }
        if (playertimeend === playercheck) { // do player hit
                
            if (spell === 'melee' || spell === 'raptorstrike' || spell === 'explosivetrap' || spell === 'frosttrap' || spell === 'snaketrap'){
                playertimeend += 0.5 * weavetime;
                steptimeend = playertimeend;
            }
            else {
                steptimeend = playertimeend;
            }
            steptime = (steptimeend - prevtimeend);
            //console.log("cast: "+spell)
            cast(spell);
            updateSpellCDs(spell);
            playerattackready = false;
            spell = '';
        }
        else if (playertimeend !== playercheck) {
            steptimeend = playercheck;
            steptime = (steptimeend - prevtimeend);
        }
    }
    else if(eventchecktime === dotcheck) {

        steptimeend = (dotcheck);
        steptime = (steptimeend - prevtimeend);
        let type = auras[dotspell].type;
        dotHandler(dotspell, '', false, type);
        updateSpellCDs();
        next_dot_time = 0;
        dotspell = '';
    }
    //  console.log("check0: "+(eventchecktime))
    //  console.log("check1: "+(nextauto))
    //  console.log("check2: "+(nextpetattack))
    //  console.log("check3: "+(nextpetspell))
    //  console.log("check4: "+(playercheck))
    //  console.log("check6: "+(dotcheck))
}
var gcds = [];
var index1 = 0;
function spellNextCast(){

    let rangehastemod =  range_wep.speed / rangespeed;
    let lastgcd = currentgcd;
    if (spell === 'steadyshot'){
        USED_SPELLS.steadyshot.cast = USED_SPELLS.steadyshot.base_cast / rangehastemod;
        currentgcd = playertimestart + 1.5; // gcd
        //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
        playertimeend = (USED_SPELLS.steadyshot.cast + playertimestart);
        if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player starts casting " + USED_SPELLS[spell].spell_name + " (" + USED_SPELLS.steadyshot.cast.toFixed(3) + "s cast). Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
            combatlogindex++;
        }
    }
    else if (spell === 'multishot'){
        USED_SPELLS.multishot.cast = USED_SPELLS.multishot.base_cast / rangehastemod;
        currentgcd = playertimestart + 1.5; // gcd
        //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
        playertimeend = (USED_SPELLS.multishot.cast + playertimestart);
        if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player starts casting " + USED_SPELLS[spell].spell_name + " (" + USED_SPELLS.multishot.cast.toFixed(3) + "s cast). Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
            combatlogindex++;
        }
    }
    else if (spell === 'aimedshot'){
        currentgcd = playertimestart + 1.5; // gcd
        //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
        playertimeend = playertimestart;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player casts " + USED_SPELLS[spell].spell_name + ". Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
            combatlogindex++;
        }
    }
    else if (spell === 'chimerashot'){
        currentgcd = playertimestart + 1.5; // gcd
        //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
        playertimeend = playertimestart;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player casts " + USED_SPELLS[spell].spell_name + ". Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
            combatlogindex++;
        }
    }
    else if (spell === 'explosiveshot'){
        currentgcd = playertimestart + 1.5; // gcd
        //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
        playertimeend = playertimestart;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player casts " + USED_SPELLS[spell].spell_name + ". Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
            combatlogindex++;
        }
    }
    else if (spell === 'killshot'){
        currentgcd = playertimestart + 1.5; // gcd
        //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
        playertimeend = playertimestart;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player casts " + USED_SPELLS[spell].spell_name + ". Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
            combatlogindex++;
        }
    }
    else if (spell === 'arcaneshot'){
        currentgcd = playertimestart + 1.5; // gcd
        //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
        playertimeend = playertimestart;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player casts " + USED_SPELLS[spell].spell_name + ". Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
            combatlogindex++;
        }
    }
    else if (spell === 'silencingshot'){
        playertimeend = playertimestart;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player casts " + USED_SPELLS[spell].spell_name;
            combatlogindex++;
        }
    }
    else if (spell === 'serpentsting'){
        currentgcd = playertimestart + 1.5; // gcd
        //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
        playertimeend = playertimestart;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player casts " + USED_SPELLS[spell].spell_name + ". Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
            combatlogindex++;
        }
    }
    else if (spell === 'blackarrow'){
        currentgcd = playertimestart + 1.5; // gcd
        //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
        playertimeend = playertimestart;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player casts " + USED_SPELLS[spell].spell_name + ". Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
            combatlogindex++;
        }
    }
    else if (spell === 'raptorstrike'){
        playertimeend = playertimestart;
    }
    else if (spell === 'melee'){
        playertimeend = playertimestart;
    }
    else if (spell === 'readiness'){
        currentgcd = playertimestart + 1; // gcd
        //console.log("gcd => " + (Math.round(currentgcd * 1000) / 1000));
        playertimeend = playertimestart;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimestart.toFixed(3) + " - Player casts Readiness. Next GCD => " + (Math.round(currentgcd * 1000) / 1000).toFixed(3) + "s";
            combatlogindex++;
        }
        auras.readiness.cd = auras.readiness.effect.base_cd;
        auras.rapid.cd = 0;
        queueReadiness = false;
    }
    playerattackready = true;
    if (spell !== 'raptor' && spell !== 'melee' && spell !== 'silencingshot') {
        gcds[index1] = [(currentgcd - lastgcd).toFixed(3), spell];
        index1++;
        //console.log(currentgcd)
        //console.log(lastgcd)
        //console.log(spell)
    }
    //console.log("playertimeend: "+playertimeend);
    
}

function petSpellChoice(){

    let t_ready_special = (!!PET_SPELLS.pet_special) ? PET_SPELLS.pet_special.cd : fightduration * 2;
    let t_ready_focus_dump = PET_SPELLS.pet_focus_dump.cd;
    
    // check for if petspecial matters for dps or not, ignored for certain pets
    let invalidpetspecial = (selectedPet == 9 || selectedPet == 10 || selectedPet == 11 
                            || selectedPet == 16 || selectedPet == 22 || selectedPet == 25)
    let special_use = (PET_SPELLS.pet_special?.cost <= pet.focus) && !invalidpetspecial; // check if cost is usable or not
    let focus_dump_use = (PET_SPELLS.pet_focus_dump.cost <= pet.focus);

    if (special_use && t_ready_special <= t_ready_focus_dump) {
        return 'pet_special'
    }
    else if (focus_dump_use && t_ready_focus_dump < t_ready_special) {
        return 'pet_focus_dump'
    } else return ''
}

function dotNextTick(){

    let fightend = fightduration * 2;
    let t_ready_blackarrow = (!!auras.blackarrow?.ticks > 0) ? auras.blackarrow.next_tick : fightend;
    let t_ready_serpentsting = (!!auras.serpentsting?.ticks > 0) ? auras.serpentsting.next_tick : fightend;
    let t_ready_immolatetrap = (!!auras.immolatetrap?.ticks > 0) ? auras.immolatetrap.next_tick : fightend;
    let t_ready_explosivetrap = (!!auras.explosivetrap?.ticks > 0) ? auras.explosivetrap.next_tick : fightend;
    let t_ready_explosiveshot = (!!auras.explosiveshot?.ticks > 0) ? auras.explosiveshot.next_tick : fightend;
    let t_ready_pet_specialcheck = (!!auras.pet_special?.ticks > 0) ? auras.pet_special.next_tick : fightend;
    let t_ready_pierce_shot = (!!auras.pierce_shot?.ticks > 0) ? auras.pierce_shot.next_tick : fightend;

    let minresult = Math.min(t_ready_blackarrow,t_ready_serpentsting, t_ready_immolatetrap, 
        t_ready_explosivetrap, t_ready_explosiveshot,t_ready_pet_specialcheck,t_ready_pierce_shot);
   // console.log(minresult)
    // if (minresult === 0) {
    //     return '';
    // }
    if (minresult === t_ready_blackarrow) {
        return 'blackarrow';
    }
    else if (minresult === t_ready_serpentsting) {
        return 'serpentsting';
    }
    else if (minresult === t_ready_immolatetrap) {
        return 'immolatetrap';
    }
    else if (minresult === t_ready_explosivetrap) {
        return 'explosivetrap';
    }
    else if (minresult === t_ready_explosiveshot) {
        return 'explosiveshot';
    }
    else if (minresult === t_ready_pet_specialcheck) {
        return 'pet_special';
    }
    else if (minresult === t_ready_pierce_shot) {
        return 'pierce_shot';
    }

}
var rotation_const = 0.5;
/** attempt at creating spell choices based on a ratio of speed and damage */
function playerSpellChoice(){
    let BasePlayer = BASE_PLAYER[level];
    
    exp_update();
	let t_ready_steady = settings.steadyshot ? USED_SPELLS.steadyshot.cd : fightduration * 2;
	let t_ready_multi = settings.multishot ? USED_SPELLS.multishot.cd : fightduration * 2;
    let t_ready_aimed = settings.aimedshot ? USED_SPELLS.aimedshot.cd : fightduration * 2;
	let t_ready_arcane = settings.arcaneshot ? USED_SPELLS.arcaneshot.cd : fightduration * 2;
    let t_ready_chimera = settings.chimerashot ? USED_SPELLS.chimerashot.cd : fightduration * 2;
    let t_ready_explosive = settings.explosiveshot ? USED_SPELLS.explosiveshot.cd : fightduration * 2;
    let t_ready_blackarrow = settings.blackarrow ? USED_SPELLS.blackarrow.cd : fightduration * 2;
    let t_ready_kill = settings.killshot ? USED_SPELLS.killshot.cd : fightduration * 2;
	
    let steadyuse = settings.steadyshot && (USED_SPELLS.steadyshot.cost / 100 * BasePlayer.BaseMana <= currentMana); // check if cost is usable or not
    let aimeduse = settings.aimedshot && (USED_SPELLS.aimedshot.cost / 100 * BasePlayer.BaseMana <= currentMana);
    let multiuse = settings.multishot && !settings.aimedshot &&(USED_SPELLS.multishot.cost / 100 * BasePlayer.BaseMana <= currentMana);
    let chimerause = settings.chimerashot && (USED_SPELLS.chimerashot.cost / 100 * BasePlayer.BaseMana <= currentMana);
    let explosiveuse = settings.explosiveshot && (USED_SPELLS.explosiveshot.cost / 100 * BasePlayer.BaseMana <= currentMana);
    let arcaneuse = settings.arcaneshot && !settings.explosiveshot && (USED_SPELLS.arcaneshot.cost / 100 * BasePlayer.BaseMana <= currentMana);
    let blackarrowuse = settings.blackarrow && (USED_SPELLS.blackarrow.cost / 100 * BasePlayer.BaseMana <= currentMana);
    let killuse = settings.killshot && (steptimeend > (fightduration * 0.8)) && (USED_SPELLS.killshot.cost / 100 * BasePlayer.BaseMana <= currentMana); // temp use greater than 80% duration
    let serpentuse = settings.serpentsting && (auras.serpentsting?.timer === 0) && (USED_SPELLS.serpentsting.cost / 100 * BasePlayer.BaseMana <= currentMana);
    let silenceuse = settings.silencingshot && (USED_SPELLS.silencingshot.cd === 0) && (USED_SPELLS.silencingshot.cost / 100 * BasePlayer.BaseMana <= currentMana);
    //console.log(currentMana)
	let h = rangespeed / range_wep.speed;

	let dmg_steady = 0;
	let dmg_multi = 0;
    let dmg_aimed = 0;
	let dmg_arcane = 0;
    let dmg_chimera = 0;
    let dmg_serpent = 0;
    let dmg_explosive = 0;
    let dmg_blackarrow = 0;
    let dmg_kill = 0;
	
	if(steadyuse){
		dmg_steady = exp_dmg_SteadyShot(range_wep, combatRAP);
	}
	if(multiuse){
		dmg_multi = exp_dmg_MultiShot(range_wep, combatRAP);
	}
    if(aimeduse){
		dmg_aimed = exp_dmg_AimedShot(range_wep, combatRAP);
	}
	if(arcaneuse){
		dmg_arcane = exp_dmg_ArcaneShot(combatRAP);
	}
    if(chimerause){
		dmg_chimera = exp_dmg_ChimeraShot(range_wep, combatRAP);
	}
    if(serpentuse){
        let bonus = (settings.chimerashot) ? 2 : 1;
		dmg_serpent = exp_dmg_SerpentSting(combatRAP) * bonus;
	}
    if(explosiveuse){
		dmg_explosive = exp_dmg_ExplosiveShot(combatRAP);
	}
	if(blackarrowuse){
		dmg_blackarrow = exp_dmg_BlackArrow(combatRAP) * 3; // doubled for estimating 6% buff and lnl
	}
    if(killuse){
		dmg_kill = exp_dmg_KillShot(range_wep, combatRAP);
	}
 
	let dmg_gain_arcane = (arcaneuse) ? dmg_arcane / Math.max(t_ready_arcane,1.5) : 0;
	let dmg_gain_multi = (multiuse) ? dmg_multi / Math.max(t_ready_multi, 1.5) : 0;
    let dmg_gain_aimed = (aimeduse) ? dmg_aimed / Math.max(t_ready_aimed, 1.5) : 0;
    let dmg_gain_chimera = (chimerause) ? dmg_chimera / Math.max(t_ready_chimera, 1.5) : 0;
	let dmg_gain_steady = (steadyuse) ? dmg_steady / Math.max(t_ready_steady, 2*h, 1.5) : 0;
    let dmg_gain_serpent = (serpentuse) ? dmg_serpent / 1.5 : 0;
    let dmg_gain_explosive = (explosiveuse) ? dmg_explosive / Math.max(t_ready_explosive, 1.5) : 0;
    let dmg_gain_blackarrow = (blackarrowuse) ? dmg_blackarrow / Math.max(t_ready_blackarrow, 1.5) : 0;
    let dmg_gain_kill = (killuse) ? dmg_kill / Math.max(t_ready_kill, 1.5) : 0;
    //console.log("arcane: "+dmg_gain_arcane)
    //console.log("multi: "+dmg_gain_multi)
    //console.log("steady: "+dmg_gain_steady)
    //console.log("aimed: "+dmg_gain_aimed)
    //console.log("chimera: "+dmg_gain_chimera)
    //console.log("serpent: " + dmg_gain_serpent)
    //console.log("explosive: " + dmg_gain_explosive)
    //console.log("blackarrow: " + dmg_gain_blackarrow)
    let maxresult = Math.max(1,dmg_gain_aimed,dmg_gain_multi,dmg_gain_arcane,dmg_gain_steady,dmg_gain_chimera,dmg_gain_serpent, dmg_gain_explosive, dmg_gain_blackarrow, dmg_gain_kill);

    let shot_gap = rotation_const;
    let t_check = shot_gap + (currentgcd - steptimeend); // gcd and shot gap check, added to improve gcd usage
    
    let multi_t_check = maxresult == dmg_gain_multi && t_ready_multi >= t_check;
    let aimed_t_check = maxresult == dmg_gain_aimed && t_ready_aimed >= t_check;
    let arcane_t_check = maxresult == dmg_gain_arcane && t_ready_arcane >= t_check;
    let chimera_t_check = maxresult == dmg_gain_chimera && t_ready_chimera >= t_check;
    let explosive_t_check = maxresult == dmg_gain_explosive && t_ready_explosive >= t_check;
    let blackarrow_t_check = maxresult == dmg_gain_blackarrow && t_ready_blackarrow >= t_check;

    let t_use_steady = (multi_t_check || aimed_t_check || arcane_t_check || chimera_t_check || explosive_t_check || blackarrow_t_check);
    //console.log("Blackarro time: "+t_ready_blackarrow)
    
    if(silenceuse) {
        return "silencingshot";
    }
    if(maxresult == dmg_gain_kill){
        return "killshot";
    }
    if(maxresult == dmg_gain_blackarrow && t_ready_blackarrow <= t_check){
        return "blackarrow";
    }
    if(maxresult == dmg_gain_serpent && t_check <= 2){
        return "serpentsting";
    }
    if(t_use_steady) {
        if(dmg_gain_arcane > dmg_gain_steady && !explosiveuse && t_ready_arcane <= t_check) {
            return "arcaneshot";
        }
        else {
            return "steadyshot";
        }
    }
    else if(maxresult == dmg_gain_steady){
		return "steadyshot";
	}
	if(maxresult == dmg_gain_multi && t_ready_multi <= t_check){
		return "multishot";
	}
	if(maxresult == dmg_gain_aimed && t_ready_aimed <= t_check){
        return "aimedshot";
    }
	if(maxresult == dmg_gain_arcane && t_ready_arcane <= t_check){
		return "arcaneshot";
	}
    if(maxresult == dmg_gain_chimera && t_ready_chimera <= t_check){
        return "chimerashot";
    }
    if(maxresult == dmg_gain_explosive && t_ready_explosive <= t_check){
        return "explosiveshot";
    }
    return "autoshot";
}

function statWeightLoop(){
    isStatWeights = true;
    useAverages = true;

    statweights = { Str: 0, Agi: 0, Int: 0, RAP: 0, RangeHit: 0, RangeCrit: 0, 
        Haste: 0, ArP: 0, MAP: 0, MeleeHit: 0, MeleeCrit: 0, Expertise: 0, MP5: 0, Hit:0, Crit:0,
        relentless:0, beasttamer: 0, dmgbonus: 0, rangedmgbonus: 0
    }
    let basedps = 0;
    let performance1 = performance.now(); // test debug time check
    let olditerations = iterations;
    iterations = 20000;
    weightiteration = 0;
    maxWeightIteration = iterations * 13;

        
    loopSim().then(() => {
        basedps = avgDPS;
        // ************** AGI *******************
        custom = {str: 0,agi: 50,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        iterations = iterations/2;
        return loopSim();       
    }).then(() => {
        // more followup work
        statweights.Agi = (avgDPS - basedps)/50;
        custom = {str: 0,agi: -50,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Agi = (Math.abs((avgDPS - basedps)/50)+statweights.Agi) / 2;
        // ************** RAP *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 100,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.RAP = Math.max((avgDPS - basedps) / 100, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: -100,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.RAP = (Math.abs((avgDPS - basedps)/100)+statweights.RAP) / 2;
        // ************** RANGECRIT *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 50,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.RangeCrit = Math.max((avgDPS - basedps) / 50, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: -50,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.RangeCrit = (Math.abs((avgDPS - basedps)/50)+statweights.RangeCrit) / 2;
        // ************** RANGEHIT *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: -30,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.RangeHit = Math.max((basedps - avgDPS) / 30, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: -30,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => { // save range hit
        // more followup work
        statweights.RangeHit = (Math.abs((avgDPS - basedps)/30)+statweights.RangeHit) / 2;
        // ************** HASTE *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 100,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Haste = Math.max((avgDPS - basedps) / 100, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: -100,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Haste = (Math.abs((avgDPS - basedps)/100)+statweights.Haste) / 2;
        // ************** ArP *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 100,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.ArP = Math.max((avgDPS - basedps) / 100, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: -100,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.ArP = (Math.abs((avgDPS - basedps)/100)+statweights.ArP) / 2;
        // ************** MAP *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 100,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MAP = Math.max((avgDPS - basedps) / 100, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: -100,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MAP = (Math.abs((avgDPS - basedps)/100)+statweights.MAP) / 2;
        // ************** MELEE HIT *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: -30,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MeleeHit = Math.max((basedps - avgDPS) / 30, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: -30,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MeleeHit = (Math.abs((avgDPS - basedps)/30)+statweights.MeleeHit) / 2;
        // ************** MELEE CRIT *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 50,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MeleeCrit = Math.max((avgDPS - basedps) / 50, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: -50,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MeleeCrit = (Math.abs((avgDPS - basedps)/50)+statweights.MeleeCrit) / 2;
        // ************** EXPERTISE *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 20,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Expertise = Math.max((avgDPS - basedps) / 20, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: -20,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Expertise = (Math.abs((avgDPS - basedps)/20)+statweights.Expertise) / 2;
        // ************** MP5 *******************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 50};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MP5 = Math.max((avgDPS - basedps) / 50, 0);
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: -50};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.MP5 = (Math.abs((avgDPS - basedps)/50)+statweights.MP5) / 2;
        // ************** INTELLECT *******************
        custom = {str: 0,agi: 0,int: 50,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Int = Math.max((avgDPS - basedps) / 50, 0);
        custom = {str: 0,agi: 0,int: -50,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        calcBaseStats();
        return loopSim();
    }).then(() => {
        // more followup work
        statweights.Int = (Math.abs((avgDPS - basedps)/50)+statweights.Int) / 2;
        // ************* RESET AND DISPLAY ****************
        custom = {str: 0,agi: 0,int: 0,RAP: 0,rangehit: 0,rangecrit: 0,
            haste: 0,arp: 0,MAP: 0,meleehit: 0,meleecrit: 0,expertise: 0,mp5: 0};
        console.log(statweights);
        calcBaseStats();
        let performance2 = performance.now(); // test debug time check
        executecodetime = (performance2 - performance1) / 1000; // milliseconds convert to sec
        displayDPSResults();
        displayStatWeights();
        iterations = olditerations;
        useAverages = false;
        isStatWeights = false;
        statweights.Crit = statweights.RangeCrit + statweights.MeleeCrit;
        statweights.Hit = statweights.RangeHit + statweights.MeleeHit;
        storeData();
        console.log("*****************");
    }).catch((e) => {
        alert(`LoopSim error: ${JSON.stringify(e)}`);
    });
}

function trinketSimLoop(){
    isStatWeights = true;
    useAverages = true;

    //let basedps = 0;
    let performance1 = performance.now(); // test debug time check
    let olditerations = iterations;
    iterations = 10000;
    weightiteration = 0;
    maxWeightIteration = iterations * 20;
    let oldtrink1 = gear.trinket1;
    let oldtrink2 = gear.trinket2;

    // initialize trinket baseline
    gear.trinket1 = { id: 23835 };
    gear.trinket2 = { id: 23835 };
    let basedps = 0;
    let DPSdiff = [];
    let loopnum = 0;
    initialize();
    let trinketlist = [
        {id: 21670, name: "Badge of the Swarmguard" },
        {id: 23041, name: "Slayer's Crest" },
        {id: 23206, name: "Mark of the Champion" },
        {id: 24128, name: "Figurine - Nightseye Panther" },
        {id: 28034, name: "Hourglass of the Unraveller" },
        {id: 28121, name: "Icon of Unyielding Courage" },
        {id: 28288, name: "Abacus of Violent Odds" },
        {id: 28579, name: "Romulo's Poison Vial" },
        {id: 28830, name: "Dragonspine Trophy" },
        {id: 29383, name: "Bloodlust Brooch" },
        {id: 30627, name: "Tsunami Talisman" },
        {id: 31856, name: "Darkmoon Card: Crusade" },
        {id: 32487, name: "Ashtongue Talisman of Swiftness" },
        {id: 32505, name: "Madness of the Betrayer" },
        {id: 32654, name: "Crystalforged Trinket" },
        {id: 32658, name: "Badge of Tenacity" },
        {id: 33831, name: "Berserker's Call" },
        {id: 34427, name: "Blackened Naaru Sliver" },
        {id: 35702, name: "Figurine - Shadowsong Panther" }

    ];
    loopSim().then(() => {
        basedps = avgDPS;
        // ************** AGI *******************
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        initialize();
        return loopSim();       
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work

        // ************** RAP *******************
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work

        // ************** RANGECRIT *******************
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work

        // ************** RANGEHIT *******************
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => { // save range hit
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        // ************** HASTE *******************

        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        // ************** ArP *******************

        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        // ************** MAP *******************

        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        // ************** MELEE HIT *******************

        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        // ************** MELEE CRIT *******************

        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        loopnum++;
        gear.trinket1 = { id: trinketlist[loopnum].id };
        console.log(gear.trinket1)
        console.log("begin " + loopnum);
        console.log(DPSdiff);
        // ************** EXPERTISE *******************

        initialize();
        return loopSim();
    }).then(() => {
        // more followup work
        
        DPSdiff[loopnum] = { dps: (avgDPS - basedps), name: trinketlist[loopnum].name };
        // more followup work

        // ************* RESET AND DISPLAY ****************
        gear.trinket1 = oldtrink1;
        gear.trinket2 = oldtrink2;
        initialize();
        let performance2 = performance.now(); // test debug time check
        executecodetime = (performance2 - performance1) / 1000; // milliseconds convert to sec
        displayDPSResults();
        //displayStatWeights();
        console.log(DPSdiff);
        trinketDPS = DPSdiff;
        iterations = olditerations;
        useAverages = false;
        isStatWeights = false;

        console.log("*****************");
    }).catch((e) => {
        alert(`LoopSim2 error: ${JSON.stringify(e)}`);
    });
}