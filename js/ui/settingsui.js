// default buffs for settings go here
var buffslist = [
    
    { id: 0, talented: false, t2_3p: false }, // shout 2048
    0, // heroic presence
    0, // lotp/rampage 17007
    { id: 0, talented: false }, // SoE/Horn 25528
    0, // tsa 27066
    0, // swift ret 53648
    0, // feroc insp 75447
    { id: 0, talented: false }, // WF 25587
    { id: 0, talented: false }, // GotW 26991
    0, // bok 25898
    { id: 0, talented: true }, // bow 27143
    0, // AI 27127
    0, // fel intel 57567
    { id: 0, talented: true }, // PW:F 25392
    
];

var filteredbuffs = [];
var playerconsumes = {
    
};
var petconsumes = {

};

var replenishment = false;
var two_min_cds = 120;
var three_min_cds = 180;

// filters out ids with 0s for the getStatsFromBuffs formula
function removeZeros(){
    
    function filterById(obj) {
      if (Number.isFinite(obj.id) && obj.id !== 0 || obj > 0) 
      {
        return true;
      } 
      return false;
    }
    
    filteredbuffs = buffslist.filter(filterById);
}

// called each time buffs change to filter zeros, get, recalc, and display them
function selectedOptionsResults(){
    removeZeros();
    selectedbuffs = getStatsFromBuffs(filteredbuffs);
    consumestats = getPlayerStatsFromConsumes(playerconsumes);
    petconsumestats = getPetStatsFromConsumes(petconsumes);
    initialize();
    displayStats();
    gearSlotsDisplay();
    storeData();

}

function auraUptimeSettings(){
    let hmuptime = document.getElementById("hmuptime").value;
    let hmbonus = document.getElementById("hmbonus").selected;
    let jowuptime = document.getElementById("jowuptime").value;
    let jocuptime = document.getElementById("jocuptime").value;
    let ffuptime = document.getElementById("ffuptime").value;
    let sauptime = document.getElementById("sauptime").value;
    let sunderapp = document.getElementById("sunderapp").value;
    let ieuptime = document.getElementById("ieuptime").value;
    let bfuptime = document.getElementById("bfuptime").value;
    let manguptime = document.getElementById("mangleuptime").value;
    let coeuptime = document.getElementById("coeuptime").value;

    debuffs.hm.uptime_g = parseInt(hmuptime);
    debuffs.hm.improved = hmbonus ? true : false;
    debuffs.judgewisdom.uptime_g = parseInt(jowuptime);
    debuffs.judgecrusader.uptime_g = parseInt(jocuptime);
    debuffs.faeriefire.uptime_g = parseInt(ffuptime);
    debuffs.sunder.uptime_g = parseInt(sauptime);
    debuffs.sunder.stacktime = parseInt(sunderapp);
    debuffs.expose.uptime_g = parseInt(ieuptime);
    debuffs.mangle.uptime_g = parseInt(manguptime);
    debuffs.bloodfrenzy.uptime_g = parseInt(bfuptime);
    debuffs.curseofele.uptime_g = parseInt(coeuptime);

    getStatsCapData();
    storeData();
}

function fightSettings(){
    let simulations = document.getElementById("simulations").value;
    let minfight = document.getElementById("minfight").value;
    let maxfight = document.getElementById("maxfight").value;
    let msdelay = document.getElementById("latency").value;
    let playerup = document.getElementById("playeruptime").value;
    let petup = document.getElementById("petuptime").value;
    let weave = document.getElementById("weavetime").value;
    iterations = parseInt(simulations);
    minfighttimer = parseInt(minfight);
    maxfighttimer = parseInt(maxfight);
    latency = parseInt(msdelay)/1000;
    playeruptime = parseInt(playerup);
    petuptime = parseInt(petup);
    weavetime = JSON.parse(weave);
    storeData();

}

// check for AP stat buff toggle and modifier
function apCheck() {
    let isChecked = document.getElementById("apbuff").checked;
    let isTalented = document.getElementById("apbuffmod").selected;
    let isBonus = document.getElementById("apbuffbonus").selected;
    buffslist[0].id = isChecked ? 2048 : 0;
    buffslist[0].talented = isTalented ? true : false;
    buffslist[0].t2_3p = isBonus ? true : false;
    selectedOptionsResults();

}
// check for Heroic Presence toggle
function heroicpresCheck() {
    let isChecked = document.getElementById("heroicpres").checked; 
    buffslist[1] = isChecked ? 6562 : 0;
    selectedOptionsResults();

}

// check for crit buff toggle
function critCheck() {
    let isChecked = document.getElementById("critbuff").checked; 
    buffslist[2] = isChecked ? 17007 : 0;
    selectedOptionsResults();

}
// check for agi/str buff toggle and modifier
function agiStrCheck() {
    let isChecked = document.getElementById("agistrbuff").checked;
    let isTalented = document.getElementById("imptotem").selected;
    buffslist[3].id = isChecked ? 25528 : 0;
    buffslist[3].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for % AP toggle
function apPercentCheck() {
    let isChecked = document.getElementById("appercent").checked; 
    buffslist[4] = isChecked ? 27066 : 0;
    selectedOptionsResults();

}
// check for minor haste buff toggle
function minorHasteCheck() {
    let isChecked = document.getElementById("minorhaste").checked; 
    buffslist[5] = isChecked ? 53648 : 0;
    selectedOptionsResults();

}
// check for minor damage buff toggle
function minorDmgCheck() {
    let isChecked = document.getElementById("minordmg").checked; 
    buffslist[6] = isChecked ? 75447 : 0;
    selectedOptionsResults();

}
// check for melee haste toggle and modifier
function meleeHasteCheck() {
    let isChecked = document.getElementById("meleehaste").checked;
    buffslist[7] = isChecked ? 25587 : 0;
    selectedOptionsResults();

}
// check for Gift of the Wild toggle and modifier
function gotwCheck() {
    let isChecked = document.getElementById("gotw").checked;
    let isTalented = document.getElementById("gotwmod").selected;
    buffslist[8].id = isChecked ? 26991 : 0;
    buffslist[8].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for kings toggle
function kingsCheck() {
    let isChecked = document.getElementById("kings").checked;
    buffslist[9] = isChecked ? 25898 : 0;
    selectedOptionsResults();

}
// check for mp5 buff toggle and modifier
function manaRegenCheck() {
    let isChecked = document.getElementById("mp5buff").checked;
    let isTalented = document.getElementById("mp5buffmod").selected;
    buffslist[10].id = isChecked ? 27143 : 0;
    buffslist[10].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for Arcane Brilliance toggle
function aiCheck() {
    let isChecked = document.getElementById("ai").checked; 
    buffslist[11] = isChecked ? 27127 : 0;
    buffslist[12] = isChecked ? 0 : buffslist[12];
    document.getElementById("felintel").checked = false;
    selectedOptionsResults();

}
// check for Fel Intelligence toggle
function felIntelCheck() {
    let isChecked = document.getElementById("felintel").checked;
    buffslist[12] = isChecked ? 57567 : 0;
    buffslist[11] = isChecked ? 0 : buffslist[11];
    document.getElementById("ai").checked = false; 
    selectedOptionsResults();

}
// check for Prayer of Fortitude toggle and modifier
function fortCheck() {
    let isChecked = document.getElementById("fort").checked;
    let isTalented = document.getElementById("fortmod").selected;
    buffslist[13].id = isChecked ? 25392 : 0;
    buffslist[13].talented = isTalented ? true : false;
    selectedOptionsResults();

}

// check for kings toggle
function replenishCheck() {
    let isChecked = document.getElementById("replenish").checked;
    replenishment = isChecked;
    selectedOptionsResults();

}
// below functions check if selected check the list of items then call the update
function initializeFlaskDropdown() {

    let initial_flask = '';
    
    if (localStorage.getItem('flask') !== null){
        let savedflask = localStorage.getItem('flask');

        initial_flask = savedflask;
    } else {
        initial_flask = '0';
    }
    
    var flaskOptions = "";
    for (let id in FLASKS) {
        flaskOptions += "<option value= "+id+" >" + FLASKS[id].name + "</option>";
      }   
    document.getElementById('flask').innerHTML = flaskOptions;
    document.getElementById('flask').value = initial_flask;
}

function flaskSelection(value) {
    
    if (value == '0') {
        delete playerconsumes.flask;
    } else {
        playerconsumes.flask = value;
    }
    if ((document.getElementById("battle").value != "0" || document.getElementById("guardian").value != "0") && document.getElementById("flask").value != "0") {
        document.getElementById("battle").value = "0";
        document.getElementById("guardian").value = "0";
        delete playerconsumes.battle_elixir;
        delete playerconsumes.guardian_elixir;
    }
    selectedOptionsResults();
}

function initializeBattleDropdown() {

    let initial_battle = '';
    
    if (localStorage.getItem('battle') !== null){
        let savedbattle = localStorage.getItem('battle');

        initial_battle = savedbattle;
    } else {
        initial_battle = '0';
    }
    
    var battleOptions = "";
    for (let id in BATTLE_ELIXIRS) {
        battleOptions += "<option value= "+id+" >" + BATTLE_ELIXIRS[id].name + "</option>";
      }   
    document.getElementById('battle').innerHTML = battleOptions;
    document.getElementById('battle').value = initial_battle;
}

function battleSelection(value) {
    
    if (value == '0') {
        delete playerconsumes.battle_elixir;
    } else {
        playerconsumes.battle_elixir = value;
    }
    if (document.getElementById("flask").value != "0" && document.getElementById("battle").value != "0") {
        document.getElementById("flask").value = "0";
        delete playerconsumes.flask;
    }
    selectedOptionsResults();
}

function initializeGuardDropdown() {

    let initial_guardian = '';
    
    if (localStorage.getItem('guardian') !== null){
        let savedguardian = localStorage.getItem('guardian');
        initial_guardian = savedguardian;
    } else {
        initial_guardian = '0';
    }
    
    var guardOptions = "";
    for (let id in GUARDIAN_ELIXIRS) {
        guardOptions += "<option value= "+id+" >" + GUARDIAN_ELIXIRS[id].name + "</option>";
      }   
    document.getElementById('guardian').innerHTML = guardOptions;
    document.getElementById('guardian').value = initial_guardian;
}

function guardSelection(value) {
    
    if (value == '0') {
        delete playerconsumes.guardian_elixir;
    } else {
        playerconsumes.guardian_elixir = value;
    }
    if (document.getElementById("flask").value != "0" && document.getElementById("guardian").value != "0") {
        document.getElementById("flask").value = "0";
        delete playerconsumes.flask;
    }
    selectedOptionsResults();
}

function initializeFoodDropdown() {

    let initial_food = '';
    
    if (localStorage.getItem('food') !== null){
        let savedfood = localStorage.getItem('food');

        initial_food = savedfood;
    } else {
        initial_food = '0';
    }
    
    var foodOptions = "";
    for (let id in FOODS) {
        foodOptions += "<option value= "+id+" >" + FOODS[id].name + "</option>";
      }   
    document.getElementById("food").innerHTML = foodOptions;
    document.getElementById('food').value = initial_food;
}

function foodSelection(value) {
    
    if (value == '0') {
        delete playerconsumes.food;
    } else {
        playerconsumes.food = value;
    }
    selectedOptionsResults();
}

function initializePetFoodDropdown() {

    let initial_petfood = '';
    
    if (localStorage.getItem('petfood') !== null){
        let savedpetfood = localStorage.getItem('petfood');

        initial_petfood = savedpetfood;
    } else {
        initial_petfood = '0';
    }
    
    var petfoodOptions = "";
    for (let id in PET_FOODS) {
        petfoodOptions += "<option value= "+id+" >" + PET_FOODS[id].name + "</option>";
      }   
    document.getElementById("petfood").innerHTML = petfoodOptions;
    document.getElementById('petfood').value = initial_petfood;
}

function petFoodSelection(value) {
    
    if (value == '0') {
        delete petconsumes.pet_food;
    } else {
        petconsumes.pet_food = value;
    }
    selectedOptionsResults();
}

// 0 for night elf, 1 for dwarf, 2 for draenei, 3 for orc, 4 for troll, 5 for tauren, 6 for blood elf
function getRace() {
    selectedRace = parseInt(document.getElementById("race").value);
    document.getElementById("racedisplay").innerHTML = races[selectedRace][level].name;
    selectedOptionsResults();
}

function initializePetDropdown() {

    let pets_length = PET_FAMILY.length;
    let initial_pet = '';

    if (localStorage.getItem('petselect') !== null){
        let savedpet = JSON.parse(localStorage.getItem('petselect'));
        initial_pet = savedpet;
    } else {
        initial_pet = 0;
    }
    
    var petOptions = "";
    for (let i=0; i < pets_length; i++) {
        petOptions += "<option value= "+i+" >" + PET_FAMILY[i].name + "</option>";
      }   
    document.getElementById("petSelect").innerHTML = petOptions;
    document.getElementById('petSelect').value = initial_pet;
}

function getPet() {

    selectedPet = parseInt(document.getElementById("petSelect").value);
    //document.getElementById("petdisplay").innerHTML
    selectedOptionsResults();
}

function getLevel() {
    
    level = parseInt(document.getElementById('levelSelect').value);
    selectedOptionsResults();
}

function selectTalents(talent){

    
    let customtalentlink = document.getElementById("customtalent").value;
    talent = (talent == null) ? '0' : talent;
    let regioncheck = customtalentlink.substr(0,30);
    let customtalents = "";
    if(regioncheck !== "https://www.wowhead.com/wotlk/") {
        customtalents = customtalentlink.slice(51);
    }
    else {
        customtalents = customtalentlink.slice(49);
    }
    
    switch (talent) {
        case "bm70":
            talents = BM_70;
            //document.getElementById("talentlink").innerHTML = "https://www.wowhead.com/wotlk/talent-calc/hunter/" + talent_presets[0];
            document.getElementById("currtalent").innerHTML = "BM 70 no Hit";
            document.getElementById("specimg").src = "images/Ability_Hunter_BeastTaming.png";
        break;
        case "bm70hit":
            talents = BM_70_Hit;
            //document.getElementById("talentlink").innerHTML = "https://www.wowhead.com/wotlk/talent-calc/hunter/" + talent_presets[1];
            document.getElementById("currtalent").innerHTML = "BM 70 3% Hit";
            document.getElementById("specimg").src = "images/Ability_Hunter_BeastTaming.png";
        break;
        case "mm70":
            talents = MM_70;
            //document.getElementById("talentlink").innerHTML = "https://www.wowhead.com/wotlk/talent-calc/hunter/" + talent_presets[2];
            document.getElementById("currtalent").innerHTML = "MM 70 no Hit";
            document.getElementById("specimg").src = "images/Ability_Marksmanship.png";
        break;
        case "mm70hit":
            talents = MM_70_Hit;
            //document.getElementById("talentlink").innerHTML = "https://www.wowhead.com/wotlk/talent-calc/hunter/" + talent_presets[3];
            document.getElementById("currtalent").innerHTML = "MM 70 3% Hit";
            document.getElementById("specimg").src = "images/Ability_Marksmanship.png";
        break;
        case "sv70":
            talents = SV_70;
            //document.getElementById("talentlink").innerHTML = "https://www.wowhead.com/wotlk/talent-calc/hunter/" + talent_presets[4];
            document.getElementById("currtalent").innerHTML = "SV 70 no Hit";
            document.getElementById("specimg").src = "images/Ability_Hunter_Camoflauge.png";
        break;
        case "sv70hit":
            talents = SV_70_Hit;
            //document.getElementById("talentlink").innerHTML = "https://www.wowhead.com/wotlk/talent-calc/hunter/" + talent_presets[5];
            document.getElementById("currtalent").innerHTML = "SV 70 3% Hit";
            document.getElementById("specimg").src = "images/Ability_Hunter_Camoflauge.png";
        break;
        case "bm80":
            talents = BM_80;
            //document.getElementById("talentlink").innerHTML = "https://www.wowhead.com/wotlk/talent-calc/hunter/" + talent_presets[6];
            document.getElementById("currtalent").innerHTML = "BM 80 no Hit";
            document.getElementById("specimg").src = "images/Ability_Hunter_BeastTaming.png";
        break;
        case "bm80hit":
            talents = BM_80_Hit;
            //document.getElementById("talentlink").innerHTML = "https://www.wowhead.com/wotlk/talent-calc/hunter/" + talent_presets[7];
            document.getElementById("currtalent").innerHTML = "BM 80 3% Hit";
            document.getElementById("specimg").src = "images/Ability_Hunter_BeastTaming.png";
        break;
        case "mm80":
            talents = MM_80;
            //document.getElementById("talentlink").innerHTML = "https://www.wowhead.com/wotlk/talent-calc/hunter/" + talent_presets[8];
            document.getElementById("currtalent").innerHTML = "MM 80 no Hit";
            document.getElementById("specimg").src = "images/Ability_Marksmanship.png";
        break;
        case "mm80hit":
            talents = MM_80_Hit;
            //document.getElementById("talentlink").innerHTML = "https://www.wowhead.com/wotlk/talent-calc/hunter/" + talent_presets[9];
            document.getElementById("currtalent").innerHTML = "MM 80 3% Hit";
            document.getElementById("specimg").src = "images/Ability_Marksmanship.png";
        break;
        case "sv80":
            talents = SV_80;
            //document.getElementById("talentlink").innerHTML = "https://www.wowhead.com/wotlk/talent-calc/hunter/" + talent_presets[10];
            document.getElementById("currtalent").innerHTML = "SV 80 no Hit";
            document.getElementById("specimg").src = "images/Ability_Hunter_Camoflauge.png";
        break;
        case "sv80hit":
            talents = SV_80_Hit;
            //document.getElementById("talentlink").innerHTML = "https://www.wowhead.com/wotlk/talent-calc/hunter/" + talent_presets[11];
            document.getElementById("currtalent").innerHTML = "SV 80 3% Hit";
            document.getElementById("specimg").src = "images/Ability_Hunter_Camoflauge.png";
        break;
        case "0":
            if (customtalentlink !== "") {
                talents = parseTalents(customtalents);
                document.getElementById("currtalent").innerHTML = "custom";
                document.getElementById("specimg").src = "images/Ability_Marksmanship.png";
            }
        break;
    }
    whtalentlink = customtalentlink;
    talentindex = talent;
    selectedOptionsResults();
}
function initializeglyphsDropdown() {

    let initial_glyph = '';
    
    if (localStorage.getItem('glyphs') !== null){
        let savedglyphs = JSON.parse(localStorage.getItem('glyphs'));

        initial_glyph = savedglyphs;
    } else {
        initial_glyph = '';
    }
    
    var glyphOptions = "";
    for (let id in GLYPHS_DATA) {
        if(GLYPHS_DATA[id].phase <= phase){
            //console.log(GLYPHS_DATA[id].phase)
            glyphOptions += "<option value= "+id+" >" + GLYPHS_DATA[id].name + "</option>";
        }
    }
    
    document.getElementById("glyphSelect1").innerHTML = glyphOptions;
    document.getElementById('glyphSelect1').value = initial_glyph[0];
    document.getElementById("glyphSelect2").innerHTML = glyphOptions;
    document.getElementById('glyphSelect2').value = initial_glyph[1];
    document.getElementById("glyphSelect3").innerHTML = glyphOptions;
    document.getElementById('glyphSelect3').value = initial_glyph[2];
}

function glyphSelection1(value) {
    
    if (value == '0') {
        selected_glyphs[0] = '';
    } else {
        selected_glyphs[0] = parseInt(value);
    }
    glyphs = selectGlyphs(selected_glyphs);
    selectedOptionsResults();
}
function glyphSelection2(value) {
    
    if (value == '0') {
        selected_glyphs[1] = '';
    } else {
        selected_glyphs[1] = parseInt(value);
    }
    glyphs = selectGlyphs(selected_glyphs);
    selectedOptionsResults();
}
function glyphSelection3(value) {
    
    if (value == '0') {
        selected_glyphs[2] = '';
    } else {
        selected_glyphs[2] = parseInt(value);
    }
    glyphs = selectGlyphs(selected_glyphs);
    selectedOptionsResults();
}

function spellEnableCheck(){
    let rapidcheck = document.getElementById("rapidcheck").checked;
    let lustcheck = document.getElementById("lustcheck").checked;
    let runecheck = document.getElementById("runecheck").checked;
    let beastwithincheck = document.getElementById("beastcheck").checked;
    let racialcheck = document.getElementById("racialcheck").checked;
    let potioncheck = document.getElementById("potioncheck").checked;

    usable_CDs.rapid.enable = rapidcheck;
    usable_CDs.lust.enable = lustcheck;
    usable_CDs.rune.enable = runecheck;
    usable_CDs.beastwithin.enable = beastwithincheck;
    usable_CDs.berserking.enable = racialcheck;
    usable_CDs.bloodfury.enable = racialcheck;
    usable_CDs.potion.enable = potioncheck;
    
    buildAurasObj();
    storeData();

}

function spellOffsets(){
    let rapidoffset = document.getElementById("rapidoffset").value;
    let beastoffset = document.getElementById("beastoffset").value;
    let racialoffset = document.getElementById("racialoffset").value;
    let lustoffset = document.getElementById("lustoffset").value;
    let startpotoffset = document.getElementById("startpotoffset").value;

    usable_CDs.rapid.offset = parseInt(rapidoffset);
    usable_CDs.beastwithin.offset = parseInt(beastoffset);
    usable_CDs.berserking.offset = parseInt(racialoffset);
    usable_CDs.bloodfury.offset = parseInt(racialoffset);
    usable_CDs.lust.offset = parseInt(lustoffset);
    usable_CDs.potion.offset = parseInt(startpotoffset);
    storeData();
}

function spellOptions(){
    
    let spellcdoption = document.getElementById("spellcdoption").value;
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
    
    storeData();
}
