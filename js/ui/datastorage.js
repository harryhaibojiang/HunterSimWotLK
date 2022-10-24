// stores the variables and settings below
// for the user
/******************************************/

function storeData(){

    // gear
    localStorage.setItem('gear',JSON.stringify(gear));
    // buffs
    localStorage.setItem('buffs',JSON.stringify(buffslist));
    localStorage.setItem('replenish', replenishment);
    // player consumes
    localStorage.setItem('pla_consumes',JSON.stringify(playerconsumes));
    // pet consumes
    localStorage.setItem('pet_consumes',JSON.stringify(petconsumes));
    // debuffs
    localStorage.setItem('debuffs',JSON.stringify(debuffs));
    // statweights
    localStorage.setItem('statweights', JSON.stringify(statweights));
    // consumes
    localStorage.setItem('flask',document.getElementById("flask").value);
    localStorage.setItem('battle',document.getElementById("battle").value);
    localStorage.setItem('guardian',document.getElementById("guardian").value);

    localStorage.setItem('food',document.getElementById("food").value);
    localStorage.setItem('petfood',document.getElementById("petfood").value);
    // saves each value below as a string - fight settings
    localStorage.setItem('iterations',iterations);
    localStorage.setItem('minfight',minfighttimer);
    localStorage.setItem('maxfight',maxfighttimer);
    localStorage.setItem('latency',JSON.stringify(latency));
    localStorage.setItem('playeruptime',playeruptime);
    localStorage.setItem('petuptime',petuptime);
    localStorage.setItem('weavetime',JSON.stringify(weavetime));
    localStorage.setItem('petselect',selectedPet);
    localStorage.setItem('raceselect',selectedRace);
    localStorage.setItem('levelSelect',level);
    localStorage.setItem('target',JSON.stringify(target));
    // talents
    localStorage.setItem('talentindex',talentindex);
    localStorage.setItem('talents',JSON.stringify(talents));
    localStorage.setItem('whtalentlink',whtalentlink);
    localStorage.setItem('glyphs', JSON.stringify(selected_glyphs));
    // spell enables
    localStorage.setItem("rapidcheck", document.getElementById("rapidcheck").checked);
    localStorage.setItem("beastcheck", document.getElementById("beastcheck").checked);
    localStorage.setItem("racialcheck", document.getElementById("racialcheck").checked);
    localStorage.setItem("lustcheck", document.getElementById("lustcheck").checked);
    localStorage.setItem("runecheck", document.getElementById("runecheck").checked);

    // spell offsets
    localStorage.setItem("rapidoffset", document.getElementById("rapidoffset").value);
    localStorage.setItem("beastoffset", document.getElementById("beastoffset").value);
    localStorage.setItem("racialoffset", document.getElementById("racialoffset").value);
    localStorage.setItem("lustoffset", document.getElementById("lustoffset").value);
    localStorage.setItem("startpotoffset", document.getElementById("startpotoffset").value);
    //localStorage.setItem("runeoffset", document.getElementById("runeoffset").value);
    // spell options
    localStorage.setItem("spellcdoption", document.getElementById("spellcdoption").value);
    // settings for gear filters
    localStorage.setItem("phasecheck", document.getElementById("phasecheck").value);
    localStorage.setItem("raidcheck", document.getElementById("raidcheck").checked);
    localStorage.setItem("pvpcheck", document.getElementById("pvpcheck").checked);
    localStorage.setItem("boecheck", document.getElementById("boecheck").checked);
    localStorage.setItem("craftcheck", document.getElementById("craftcheck").checked);
    localStorage.setItem("bosscheck", document.getElementById("bosscheck").checked);
    localStorage.setItem("greencheck", document.getElementById("greencheck").checked);
    localStorage.setItem("repcheck", document.getElementById("repcheck").checked);
    localStorage.setItem("leathercheck", document.getElementById("leathercheck").checked);
    // saved gear sets
    localStorage.setItem("sets", JSON.stringify(SavedSets));
    // checks if saved before
    localStorage.setItem('savecheck','true');
}

function fetchData(){

    // gear
    gear = (localStorage.getItem('gear') != null) ? JSON.parse(localStorage.getItem('gear')) : gear;
    // buffs
    buffslist = (localStorage.getItem('buffs') != null) ? JSON.parse(localStorage.getItem('buffs')) : buffslist;
    replenishment = (localStorage.getItem('replenish') != null) ? JSON.parse(localStorage.getItem('replenish')) : replenishment;
    // player consumes
    playerconsumes = (localStorage.getItem('pla_consumes') != null) ? JSON.parse(localStorage.getItem('pla_consumes')):playerconsumes;
    // pet consumes
    petconsumes = (localStorage.getItem('pet_consumes') != null) ? JSON.parse(localStorage.getItem('pet_consumes')):petconsumes;
    // debuffs
    debuffs = (localStorage.getItem('debuffs') != null) ? JSON.parse(localStorage.getItem('debuffs')):debuffs;
    // statweights
    statweights = (localStorage.getItem('statweights') != null) ? JSON.parse(localStorage.getItem('statweights')):statweights;
    displayStatWeights();

    // saves each value below as a string - fight settings
    iterations = (localStorage.getItem('iterations') != null) ? parseInt(localStorage.getItem('iterations')) : iterations;
    minfighttimer = (localStorage.getItem('minfight') != null) ? parseInt(localStorage.getItem('minfight')) : minfighttimer;
    maxfighttimer = (localStorage.getItem('maxfight') != null) ? parseInt(localStorage.getItem('maxfight')) : maxfighttimer;
    latency = (localStorage.getItem('latency') != null) ? JSON.parse(localStorage.getItem('latency')):latency;
    playeruptime = (localStorage.getItem('playeruptime') != null) ? parseInt(localStorage.getItem('playeruptime')):playeruptime;
    petuptime = (localStorage.getItem('petuptime') != null) ? parseInt(localStorage.getItem('petuptime')):petuptime;
    weavetime = (localStorage.getItem('weavetime') != null) ? JSON.parse(localStorage.getItem('weavetime')):weavetime;
    selectedPet = (localStorage.getItem('petselect') != null) ? parseInt(localStorage.getItem('petselect')):selectedPet;
    selectedRace = (localStorage.getItem('raceselect') != null) ? parseInt(localStorage.getItem('raceselect')):selectedRace;
    level = (localStorage.getItem('levelSelect') != null) ? parseInt(localStorage.getItem('levelSelect')):level;

    target = (localStorage.getItem('target') != null) ? JSON.parse(localStorage.getItem('target')):target;
    // talents
    talentindex = (localStorage.getItem('talentindex') != null) ? localStorage.getItem('talentindex'):talentindex;
    whtalentlink = (localStorage.getItem('whtalentlink') != null) ? localStorage.getItem('whtalentlink'):whtalentlink;
    talents = (localStorage.getItem('talents') != null) ? JSON.parse(localStorage.getItem('talents')):talents;
    // spell enables
    usable_CDs.rapid.enable = (localStorage.getItem('rapidcheck') != null) ? JSON.parse(localStorage.getItem('rapidcheck')):usable_CDs.rapid.enable;
    usable_CDs.beastwithin.enable = (localStorage.getItem('beastcheck') != null) ? JSON.parse(localStorage.getItem('beastcheck')):usable_CDs.beastwithin.enable;
    if (localStorage.getItem('racialcheck') != null) {
        usable_CDs.berserking.enable = parseInt(localStorage.getItem('racialcheck'));
        usable_CDs.bloodfury.enable = parseInt(localStorage.getItem('racialcheck'));
        usable_CDs.arcanetorrent.enable = parseInt(localStorage.getItem('racialcheck'));
    }
    usable_CDs.lust.enable = (localStorage.getItem('lustcheck') != null) ? JSON.parse(localStorage.getItem('lustcheck')):usable_CDs.lust.enable;
    usable_CDs.rune.enable = (localStorage.getItem('runecheck') != null) ? JSON.parse(localStorage.getItem('runecheck')):usable_CDs.rune.enable;

    // spell offsets
    usable_CDs.rapid.offset = (localStorage.getItem('rapidoffset') != null) ? parseInt(localStorage.getItem('rapidoffset')) : usable_CDs.rapid.offset;
    usable_CDs.beastwithin.offset = (localStorage.getItem('beastoffset') != null) ? parseInt(localStorage.getItem('beastoffset')):usable_CDs.beastwithin.offset;
    if (localStorage.getItem('racialoffset') != null) {
        usable_CDs.berserking.offset = parseInt(localStorage.getItem('racialoffset'));
        usable_CDs.bloodfury.offset = parseInt(localStorage.getItem('racialoffset'));
        usable_CDs.arcanetorrent.offset = parseInt(localStorage.getItem('racialcheck'));
    }
    usable_CDs.lust.offset = (localStorage.getItem('lustoffset') != null) ? parseInt(localStorage.getItem('lustoffset')):usable_CDs.lust.offset;
    usable_CDs.potion.offset = (localStorage.getItem('startpotoffset') != null) ? parseInt(localStorage.getItem('startpotoffset')):usable_CDs.potion.offset;

    selected_glyphs = (localStorage.getItem('glyphs') != null) ? JSON.parse(localStorage.getItem('glyphs')) : selected_glyphs;

    // spell option
    let spellcdoption = '';
    if (localStorage.getItem('spellcdoption') != null) {
        spellcdoption = localStorage.getItem('spellcdoption');
        switch (spellcdoption) {
            case "2min":
                two_min_cds = 180;
                three_min_cds = 180;
            break;
            case "3min":
                two_min_cds = 120;
                three_min_cds = 240;
            break;
            case "CD":
                two_min_cds = 120;
                three_min_cds = 180;
            break;
        }
    } else { spellcdoption = "CD"; }

    phase = (localStorage.getItem("phasecheck") != null) ? parseInt(localStorage.getItem("phasecheck")) : phase;
    raidcheck = (localStorage.getItem("raidcheck") != null) ? JSON.parse(localStorage.getItem("raidcheck")) : raidcheck;
    pvpcheck = (localStorage.getItem("pvpcheck") != null) ? JSON.parse(localStorage.getItem("pvpcheck")) : pvpcheck;
    greencheck = (localStorage.getItem("greencheck") != null) ? JSON.parse(localStorage.getItem("greencheck")):greencheck;
    boecheck = (localStorage.getItem("boecheck") != null) ? JSON.parse(localStorage.getItem("boecheck")) : boecheck;
    leathercheck = (localStorage.getItem("leathercheck") != null) ? JSON.parse(localStorage.getItem("leathercheck")) : leathercheck;
    repcheck = (localStorage.getItem("repcheck") != null) ? JSON.parse(localStorage.getItem("repcheck")) : repcheck;
    bosscheck = (localStorage.getItem("bosscheck") != null) ? JSON.parse(localStorage.getItem("bosscheck")) : bosscheck;
    craftcheck = (localStorage.getItem("craftcheck") != null) ? JSON.parse(localStorage.getItem("craftcheck")) : craftcheck;

    SavedSets = (localStorage.getItem('sets') != null) ? JSON.parse(localStorage.getItem('sets')) : SavedSets;
    
    /* Display initialization for fetched values */
    // fight settings initialization
    document.getElementById("simulations").value = iterations;
    document.getElementById("minfight").value = minfighttimer;
    document.getElementById("maxfight").value = maxfighttimer;
    document.getElementById("latency").value = latency * 1000;
    document.getElementById("playeruptime").value = playeruptime;
    document.getElementById("petuptime").value = petuptime;
    document.getElementById("weavetime").value = weavetime.toFixed(1);
    document.getElementById("petSelect").value = selectedPet;
    document.getElementById("race").value = selectedRace;
    document.getElementById("levelSelect").value = level;
    document.getElementById("racedisplay").innerHTML = races[selectedRace][level].name;
    let targets = targetData.getNameKeyTargetPairs();
    let findtarget = targets.find(key => key.name == target.name);
    document.getElementById("targetSelect").value = findtarget.id;
    document.getElementById("armor").value = target.armor;
    document.getElementById("typeSelect").value = target.type;
    document.getElementById("level").value = target.level;

    document.getElementById("replenish").checked = replenishment;

    document.getElementById("flask").value = (localStorage.getItem("flask") != null) ?  localStorage.getItem('flask') : document.getElementById("flask").value;
    document.getElementById("battle").value = (localStorage.getItem("battle") != null) ?  localStorage.getItem('battle') : document.getElementById("battle").value;
    document.getElementById("guardian").value = (localStorage.getItem("guardian") != null) ?  localStorage.getItem('guardian') : document.getElementById("guardian").value;
    document.getElementById("food").value = (localStorage.getItem("food") != null) ?  localStorage.getItem('food') : document.getElementById("food").value;
    //console.log(localStorage.getItem("food"))
    document.getElementById("petfood").value = (localStorage.getItem("petfood") != null) ?  localStorage.getItem('petfood') : document.getElementById("petfood").value;
    
    // buffs visual initialization
    document.getElementById("apbuff").checked = (buffslist[0].id == 2048) ? true : false;
    document.getElementById("apbuffmod").selected = (buffslist[0].talented) ? true : false;
    document.getElementById("heroicpres").checked = (buffslist[1] == 6562) ? true : false;
    document.getElementById("critbuff").checked = (buffslist[2] == 17007) ? true : false;
    document.getElementById("agistrbuff").checked = (buffslist[3].id == 25528) ? true : false;
    document.getElementById("imptotem").selected = (buffslist[3].talented) ? true : false;
    document.getElementById("appercent").checked = (buffslist[4] == 27066) ? true : false;
    document.getElementById("minorhaste").checked = (buffslist[5] == 53648) ? true : false;
    document.getElementById("minordmg").checked = (buffslist[6] == 75447) ? true : false;
    document.getElementById("meleehaste").checked = (buffslist[7] == 25587) ? true : false;
    document.getElementById("gotw").checked = (buffslist[8].id == 26991) ? true : false;
    document.getElementById("gotwmod").selected = (buffslist[8].talented) ? true : false;
    document.getElementById("kings").checked = (buffslist[9] == 25898) ? true : false;
    document.getElementById("mp5buff").checked = (buffslist[10].id == 27143) ? true : false;
    document.getElementById("mp5buffmod").selected = (buffslist[10].talented) ? true : false;
    document.getElementById("ai").checked = (buffslist[11] == 27127) ? true : false;
    document.getElementById("felintel").checked = (buffslist[12] == 57567) ? true : false;
    document.getElementById("fort").checked = (buffslist[13].id == 25392) ? true : false;
    document.getElementById("fortmod").selected = (buffslist[13].talented) ? true : false;

    let errorchk_talent = (talentindex == "bm70" || talentindex == "bm70hit" || talentindex == "bm80" || talentindex == "bm80hit" || talentindex == "mm70" || talentindex == "mm70hit" || talentindex == "mm80" || talentindex == "mm80hit" || talentindex == "sv70" || talentindex == "sv70hit" || talentindex == "sv80" || talentindex == "sv80hit" || talentindex == "0")
    talentindex = (errorchk_talent) ? talentindex : "mm70";
    document.getElementById("talentselect").value = talentindex;
    document.getElementById("customtalent").value = whtalentlink;
    
    if (selected_glyphs.length >= 1) {
        document.getElementById('glyphSelect1').value = selected_glyphs[0];
    }
    if (selected_glyphs.length >= 2) {
        document.getElementById('glyphSelect2').value = selected_glyphs[1];
    }
    if (selected_glyphs.length >= 3) {
        document.getElementById('glyphSelect3').value = selected_glyphs[2];
    }
    
    // initialize saved debuffs visuals
    document.getElementById("hmuptime").value = debuffs.hm.uptime_g;
    document.getElementById("hmbonus").selected = debuffs.hm.improved ? true : false;
    document.getElementById("jowuptime").value = debuffs.judgewisdom.uptime_g;
    document.getElementById("jocuptime").value = debuffs.judgecrusader.uptime_g;
    document.getElementById("ffuptime").value = debuffs.faeriefire.uptime_g;
    document.getElementById("sauptime").value = debuffs.sunder.uptime_g;
    document.getElementById("sunderapp").value = debuffs.sunder.stacktime;
    document.getElementById("ieuptime").value = debuffs.expose.uptime_g;
    document.getElementById("bfuptime").value = debuffs.bloodfrenzy.uptime_g;
    document.getElementById("coeuptime").value = debuffs.curseofele.uptime_g;
    document.getElementById("mangleuptime").value = debuffs.mangle.uptime_g;

    // spell enables
    document.getElementById("rapidcheck").checked = usable_CDs.rapid.enable;
    document.getElementById("beastcheck").value = usable_CDs.beastwithin.enable;
    document.getElementById("racialcheck").value = (usable_CDs.berserking.enable || usable_CDs.bloodfury.enable);
    document.getElementById("lustcheck").checked = usable_CDs.lust.enable;
    document.getElementById("runecheck").checked = usable_CDs.rune.enable;

    // // spell offsets
    document.getElementById("rapidoffset").value = usable_CDs.rapid.offset;
    document.getElementById("beastoffset").value = usable_CDs.beastwithin.offset;
    document.getElementById("racialoffset").value = (usable_CDs.berserking.enable) ? usable_CDs.berserking.offset: usable_CDs.bloodfury.offset;
    document.getElementById("lustoffset").value = usable_CDs.lust.offset;
    document.getElementById("startpotoffset").value = usable_CDs.potion.offset;
    // spell options
    document.getElementById("spellcdoption").value = spellcdoption;

    document.getElementById("phasecheck").value = phase;
    document.getElementById("raidcheck").checked = raidcheck;
    document.getElementById("pvpcheck").checked = pvpcheck;
    document.getElementById("boecheck").checked = boecheck;
    document.getElementById("greencheck").checked = greencheck;
    document.getElementById("bosscheck").checked = bosscheck;
    document.getElementById("leathercheck").checked = leathercheck;
    document.getElementById("craftcheck").checked = craftcheck;
    document.getElementById("repcheck").checked = repcheck;
    
    selectTalents(talentindex);
    // initialize the settings after loading
    selectedOptionsResults();
}

function clearSettingsCache(){
    localStorage.clear();
}
