var rapidcd = 300;
var lustcd = 600;
var sunderstart = 0;
var racialenable = true;
var beastenable = true;

var readiness = {enable:false, cooldown: 0, basecd: 180};
var queueReadiness = false;

var auras = {
    // actives
    potion: {timer:0, cd:0, basecd:60, duration:15, uptime:0, primary:true, used:"", ticks: 0, offset:0},// coded
    rune: {enable:true, cooldown:0,basecd:900, offset:0},
    lust: {enable:true, timer:0, cooldown:0,basecd:lustcd, duration:40, uptime:0, offset:0},// coded
    rapid: {enable:true, timer:0, cooldown:0,basecd:rapidcd, duration:15, uptime:0, offset:0},// coded
    berserk: {enable:false, timer:0, cooldown:0,basecd:180, duration:10, uptime:0, offset:0},// coded
    bloodfury: {enable:false, timer:0, cooldown:0,basecd:120, duration: 15, uptime:0, offset:0},// coded
    beastwithin: {enable:true, timer:0, cooldown:0,basecd:120, duration: 18, uptime:0, offset:0},// coded
    aptrink1: {enable:false, uptime:0, offset:0, basecd:120},// coded
    aptrink2: {enable:false, uptime:0, offset:0, basecd:120},// coded
    // procs
    imphawk: {enable:false,timer:0, duration:12, uptime:0},// coded
    executioner: {enable:false, timer:0, ppm:1, duration:15, uptime:0},// coded
    mongoose: {enable:false, timer:0, ppm:1, duration:15, uptime:0},// coded
    naarusliver: {enable:false, timer:0, cooldown:0, procchance:10, duration: 20, stacks: 0, uptime:0},// coded
    mastertact: {enable:false, timer:0, procchance:6, duration: 8, uptime:0},// coded
 
 }

 var debuffs = {
    hm: {uptime_g:100, timer:0, duration:300, improved:true, rap:500, uptime:0},
    judgewisdom: {uptime_g:98, timer:0, duration:20, uptime:0},
    judgecrusader: {uptime_g:98, timer:0, duration:20, crit:3, uptime:0},
    sunder: {uptime_g:98, timer:0, duration:30, stacktime:5, stacks:1, arp:0.04, uptime:0},
    faeriefire: {uptime_g:98, timer:0, duration:300, crit:3, arp:0.05, uptime:0},
    expose: {uptime_g:90, timer:0, duration:30, arp:0.2, uptime:0},
    bloodfrenzy: {uptime_g:98, timer:0, duration:12, dmgbonus:1.04, uptime:0},
    curseofele: {uptime_g:98, timer:0, duration:120, dmgbonus:1.13, uptime:0},
    mangle: {uptime_g:98, timer:0, duration:60, dmgbonus:1.3, uptime:0}
 }

 var buff_uptimes = {
    potion: 0,
    lust: 0,
    rapid: 0,
    berserk: 0,
    bloodfury: 0,
    beastwithin: 0,
    aptrink1: 0,
    aptrink2: 0,
    imphawk: 0,
    beastlord: 0,
    executioner: 0,
    mongoose: 0,
    naarusliver: 0,
    mastertact: 0,
}
var debuff_uptimes = {
    hm: 0,
    judgewisdom: 0,
    judgecrusader: 0,
    sunder: 0,
    faeriefire: 0,
    expose: 0,
    bloodfrenzy: 0,
    curseofele: 0,
    mangle: 0
}

var talent_auras = {
    imp_hawk: {},
    imp_steady: {},
    lock_load: {},
    expose_weakness: {},
    master_tact: {},
    sniper_training: {},
    hunt_party: {}
}

/** Initializes auras for procs and actives */
function initializeAuras() {
    // set up on use AP trinkets diff from the rest of auras
    let aptrink1 = currentgear.auras[gear.trinket1.id] || {};
    let aptrink2 = currentgear.auras[gear.trinket2.id] || {};
    let aptrink1rap = (aptrink1.hasOwnProperty('stats')) ? aptrink1.stats.RAP : 0;
    let aptrink2rap = (aptrink2.hasOwnProperty('stats')) ? aptrink2.stats.RAP : 0;
 
    auras.aptrink1.timer = 0;
    auras.aptrink1.cooldown = 0;
    auras.aptrink1.duration = aptrink1.duration;
    auras.aptrink1.basecd = aptrink1.cd;
    auras.aptrink1.AP = aptrink1rap;
    auras.aptrink1.enable = (!aptrink1.is_proc && auras.aptrink1.AP > 0) ? true : false;
    auras.aptrink1.name = TRINKETS[gear.trinket1.id].name;

    auras.aptrink2.timer = 0;
    auras.aptrink2.cooldown = 0;
    auras.aptrink2.duration = aptrink2.duration;
    auras.aptrink2.basecd = aptrink2.cd;
    auras.aptrink2.AP = aptrink2rap;
    auras.aptrink2.enable = (!aptrink2.is_proc && auras.aptrink2.AP > 0) ? true : false;
    auras.aptrink2.name = TRINKETS[gear.trinket2.id].name;
    
    // proc trinket enables
    auras.naarusliver.enable = ((gear.trinket1.id === 34427) || (gear.trinket2.id === 34427)) ? true : false; 
 
    auras.beastwithin.enable = ((talents.beast_within > 0) && beastenable) ? true : false;
    auras.mastertact.enable = (talents.master_tac > 0) ? true : false;
    auras.imphawk.enable = (talents.imp_hawk > 1) ? true : false;

    auras.mongoose.enable = (gear.mainhand.enchant === 27984) ? true : false;
    auras.executioner.enable = (gear.mainhand.enchant === 42974) ? true : false;

    for(let prop in auras){
        auras[prop].uptime = 0;
    }
    
    for(let prop in debuffs){
        debuffs[prop].uptime = 0;
    }
 
    if (selectedRace == 3) { // orc
       auras.bloodfury.enable = true;
       auras.berserk.enable = false;
    } else if (selectedRace == 4){ // troll
       auras.berserk.enable = true;
       auras.bloodfury.enable = false;
    } else {
       auras.berserk.enable = false;
       auras.bloodfury.enable = false;
    }
    rapidcd = 300 - talents.rapid_killing * 60;
    auras.rapid.basecd = rapidcd;

    readiness.enable = (talents.readiness > 0) ? true : false;

    return;
 }

 function ResetAuras(){
    killcommand.cooldown = 0;
    pet.frenzy.timer = 0;
    
    auras.lust.timer = 0;
    auras.berserk.timer = 0;
    auras.bloodfury.timer = 0;
    auras.potion.timer = 0;
    auras.rapid.timer = 0;
    auras.beastwithin.timer = 0;
    auras.aptrink1.timer = 0;
    auras.aptrink2.timer = 0;
    auras.imphawk.timer = 0;
    auras.executioner.timer = 0;
    auras.mongoose.timer = 0;
    auras.dragonspine.timer = 0;
    auras.naarusliver.timer = 0;

    auras.lust.cooldown = auras.lust.offset;
    auras.berserk.cooldown = auras.berserk.offset;
    auras.bloodfury.cooldown = auras.bloodfury.offset;
    auras.potion.cooldown = (auras.potion.primary) ? auras.potion.offset : 0;
    auras.rune.cooldown = auras.rune.offset;
    auras.rapid.cooldown = auras.rapid.offset;
    auras.beastwithin.cooldown = auras.beastwithin.offset;
    auras.aptrink1.cooldown = auras.aptrink1.offset;
    auras.aptrink2.cooldown = auras.aptrink2.offset;
    auras.naarusliver.cooldown = 0;

    debuffs.hm.timer = 0;
    debuffs.judgewisdom.timer = 0;
    debuffs.judgecrusader.timer = 0;
    debuffs.sunder.timer = 0;
    debuffs.expose.timer = 0;
    debuffs.faeriefire.timer = 0;
    debuffs.bloodfrenzy.timer = 0;
    debuffs.curseofele.timer = 0;
    debuffs.mangle.timer = 0;

    sharedtrinketcd = 0;
    readiness.cooldown = 0;

    return;
 }

/** Sets cooldowns for certain auras based on spell CD behaviour setting from settings. */
function setSpellCDs(){
    auras.rapid.basecd = (rapidcd === 180) ? three_min_cds : rapidcd;
    auras.berserk.basecd = three_min_cds;

    auras.bloodfury.basecd = two_min_cds;
    auras.aptrink1.basecd = two_min_cds;
    auras.aptrink2.basecd = two_min_cds;
    auras.tenacity.basecd = two_min_cds;
    auras.potion.basecd = two_min_cds;
    auras.beastwithin.basecd = two_min_cds;

    return;
}

/** Executes functions related to stepping time values for auras.
 * @param steptime Takes the time for the current step to modify auras and cooldowns.
 */
function updateAuras(steptime) {
    // set timer of on use AP trinkets

    IntervalAuraHandler();
    stepauras(steptime);
    uptimeCalc();

    // proc cooldowns
    if(auras.naarusliver.cooldown > 0)        { auras.naarusliver.cooldown = Math.max(auras.naarusliver.cooldown - steptime,0); } 
    // active cooldowns
    if(auras.lust.cooldown > 0)               { auras.lust.cooldown = Math.max(auras.lust.cooldown - steptime,0); }
    if(auras.potion.cooldown > 0)             { auras.potion.cooldown = Math.max(auras.potion.cooldown - steptime,0); }
    if(auras.rune.cooldown > 0)               { auras.rune.cooldown = Math.max(auras.rune.cooldown - steptime,0); }
    if(auras.bloodfury.cooldown > 0)          { auras.bloodfury.cooldown = Math.max(auras.bloodfury.cooldown - steptime,0); }
    if(auras.berserk.cooldown > 0)            { auras.berserk.cooldown = Math.max(auras.berserk.cooldown - steptime,0); }
    if(auras.rapid.cooldown > 0)              { auras.rapid.cooldown = Math.max(auras.rapid.cooldown - steptime,0); }
    if(auras.beastwithin.cooldown > 0)        { auras.beastwithin.cooldown = Math.max(auras.beastwithin.cooldown - steptime,0); }
    if(auras.aptrink1.enable && (auras.aptrink1.cooldown > 0))  { auras.aptrink1.cooldown = Math.max(auras.aptrink1.cooldown - steptime,0); }
    if(auras.aptrink2.enable && (auras.aptrink2.cooldown > 0))  { auras.aptrink2.cooldown = Math.max(auras.aptrink2.cooldown - steptime,0); }
    if(readiness.cooldown > 0)                { readiness.cooldown = Math.max(readiness.cooldown - steptime,0); }
    
    return;   
 }

/** Executes steps each aura timer down by steptime.
 * @param steptime Takes the time for the current step to modify auras and cooldowns.
 */
function stepauras(steptime) {
    // actives
    if(auras.lust.timer > 0)               { auras.lust.timer = Math.max(auras.lust.timer - steptime,0); }
    if(auras.berserk.timer > 0)            { auras.berserk.timer = Math.max(auras.berserk.timer - steptime,0); }
    if(auras.bloodfury.timer > 0)          { auras.bloodfury.timer = Math.max(auras.bloodfury.timer - steptime,0); }
    if(auras.potion.timer > 0)             { auras.potion.timer = Math.max(auras.potion.timer - steptime,0); }
    if(auras.rapid.timer > 0)              { auras.rapid.timer = Math.max(auras.rapid.timer - steptime,0); }
    if(auras.beastwithin.timer > 0)        { auras.beastwithin.timer = Math.max(auras.beastwithin.timer - steptime,0); }
    if(auras.aptrink1.timer > 0)           { auras.aptrink1.timer = Math.max(auras.aptrink1.timer - steptime,0); }
    if(auras.aptrink2.timer > 0)           { auras.aptrink2.timer = Math.max(auras.aptrink2.timer - steptime,0); }
    // procs
    if(auras.imphawk.timer > 0)            { auras.imphawk.timer = Math.max(auras.imphawk.timer - steptime,0); }
    if(auras.executioner.timer > 0)        { auras.executioner.timer = Math.max(auras.executioner.timer - steptime,0); }
    if(auras.mongoose.timer > 0)           { auras.mongoose.timer = Math.max(auras.mongoose.timer - steptime,0); }
    if(auras.naarusliver.timer > 0)        { auras.naarusliver.timer = Math.max(auras.naarusliver.timer - steptime,0); }
    if(auras.mastertact.timer > 0)         { auras.mastertact.timer = Math.max(auras.mastertact.timer - steptime,0); }
    // if talented, expose treated like a proc
    if(debuffs.exposeweakness.timer > 0 && talents.exp_weakness > 0)   { debuffs.exposeweakness.timer = Math.max(debuffs.exposeweakness.timer - steptime,0); }
    
    // the following can go negative so that when it switches from active to inactive the time between steps is kept
    if(debuffs.hm.timer > 0)               { debuffs.hm.timer = debuffs.hm.timer - steptime; }
    if(debuffs.judgewisdom.timer > 0)      { debuffs.judgewisdom.timer = debuffs.judgewisdom.timer - steptime; }
    if(debuffs.judgecrusader.timer > 0)    { debuffs.judgecrusader.timer = debuffs.judgecrusader.timer - steptime; }
    if(debuffs.sunder.timer > 0)           { debuffs.sunder.timer = debuffs.sunder.timer - steptime; }
    if(debuffs.expose.timer > 0)           { debuffs.expose.timer = debuffs.expose.timer - steptime; }
    if(debuffs.faeriefire.timer > 0)       { debuffs.faeriefire.timer = debuffs.faeriefire.timer - steptime; }
    if(debuffs.bloodfrenzy.timer > 0)      { debuffs.bloodfrenzy.timer = debuffs.bloodfrenzy.timer - steptime; }
    if(debuffs.curseofele.timer > 0)      { debuffs.curseofele.timer = debuffs.curseofele.timer - steptime; }
    if(debuffs.mangle.timer > 0)      { debuffs.mangle.timer = debuffs.mangle.timer - steptime; }

    // count down the timer on shared CDs for trinkets
    if(sharedtrinketcd > 0) { sharedtrinketcd = Math.max(sharedtrinketcd - steptime,0); }

    // reset stacks
    if(auras.naarusliver.timer === 0){ auras.naarusliver.stacks = 0;}

    return;
}

/** totals the uptime in seconds of the buffs to be later extracted for % uptimes */
function uptimeCalc() {
    // actives
    if(auras.lust.timer > 0)               { auras.lust.uptime += Math.min(auras.lust.timer,steptime); }
    if(auras.berserk.timer > 0)            { auras.berserk.uptime += Math.min(auras.berserk.timer,steptime); }
    if(auras.bloodfury.timer > 0)          { auras.bloodfury.uptime += Math.min(auras.bloodfury.timer,steptime); }
    if(auras.potion.timer > 0)             { auras.potion.uptime += Math.min(auras.potion.timer,steptime); }
    if(auras.rapid.timer > 0)              { auras.rapid.uptime += Math.min(auras.rapid.timer,steptime); }
    if(auras.beastwithin.timer > 0)        { auras.beastwithin.uptime += Math.min(auras.beastwithin.timer,steptime); }
    if(auras.aptrink1.timer > 0)           { auras.aptrink1.uptime += Math.min(auras.aptrink1.timer,steptime); }
    if(auras.aptrink2.timer > 0)           { auras.aptrink2.uptime += Math.min(auras.aptrink2.timer,steptime); }
    // procs
    if(auras.imphawk.timer > 0)            { auras.imphawk.uptime += Math.min(auras.imphawk.timer,steptime); }
    if(auras.executioner.timer > 0)        { auras.executioner.uptime += Math.min(auras.executioner.timer,steptime); }
    if(auras.mongoose.timer > 0)           { auras.mongoose.uptime += Math.min(auras.mongoose.timer,steptime); }
    if(auras.naarusliver.timer > 0)        { auras.naarusliver.uptime += Math.min(auras.naarusliver.timer,steptime); }
    if(auras.mastertact.timer > 0)         { auras.mastertact.uptime += Math.min(auras.mastertact.timer,steptime); }
    if(debuffs.exposeweakness.timer > 0 && talents.exp_weakness > 0) { debuffs.exposeweakness.uptime += Math.min(debuffs.exposeweakness.timer,steptime); }
    
    // for debugging debuffs - tracking actual uptime
    if(debuffs.hm.timer > 0 && !debuffs.hm.inactive) { debuffs.hm.uptime += steptime; }
    else if(debuffs.hm.timer < 0) {
       debuffs.hm.uptime += steptime;
    }
    if(debuffs.judgewisdom.timer > 0 && !debuffs.judgewisdom.inactive) { debuffs.judgewisdom.uptime += steptime; }
    else if(debuffs.judgewisdom.timer < 0) {
       debuffs.judgewisdom.uptime += steptime;
    }
    if(debuffs.judgecrusader.timer > 0 && !debuffs.judgecrusader.inactive) { debuffs.judgecrusader.uptime += steptime; }
    else if(debuffs.judgecrusader.timer < 0) {
       debuffs.judgecrusader.uptime += steptime;
    }
    if(debuffs.sunder.timer > 0 && !debuffs.sunder.inactive) { debuffs.sunder.uptime += steptime; }
    else if(debuffs.sunder.timer < 0) {
       debuffs.sunder.uptime += steptime;
    }
    if(debuffs.expose.timer > 0 && !debuffs.expose.inactive) { debuffs.expose.uptime += steptime; }
    else if(debuffs.expose.timer < 0) {
       debuffs.expose.uptime += steptime;
    }
    if(debuffs.faeriefire.timer > 0 && !debuffs.faeriefire.inactive) { debuffs.faeriefire.uptime += steptime; }
    else if(debuffs.faeriefire.timer < 0) {
       debuffs.faeriefire.uptime += steptime;
    }
    if(debuffs.bloodfrenzy.timer > 0 && !debuffs.bloodfrenzy.inactive) { debuffs.bloodfrenzy.uptime += steptime; }
    else if(debuffs.bloodfrenzy.timer < 0) {
       debuffs.bloodfrenzy.uptime += steptime;
    }
    if(debuffs.curseofele.timer > 0 && !debuffs.curseofele.inactive) { debuffs.curseofele.uptime += steptime; }
    else if(debuffs.curseofele.timer < 0) {
       debuffs.curseofele.uptime += steptime;
    }
    if(debuffs.mangle.timer > 0 && !debuffs.mangle.inactive) { debuffs.mangle.uptime += steptime; }
    else if(debuffs.mangle.timer < 0) {
       debuffs.mangle.uptime += steptime;
    }

    return;
}

/** Initializes auras that are triggered on a fixed interval. Sets the refresh rate 
  * and interval for a given fight length. */
function intervalAuraInitializer(){

    // hunters mark
    if(debuffs.hm.uptime_g > 0){
        let hm_total_time = (debuffs.hm.uptime_g === 100) ? fightduration : (fightduration * debuffs.hm.uptime_g) / 100;
        let hm_refresh_int = Math.ceil(hm_total_time / debuffs.hm.duration);
        let hm_refresh_dec = (hm_total_time / debuffs.hm.duration) - Math.floor(hm_total_time / debuffs.hm.duration);
        debuffs.hm.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.hm.inactive = false; // flag for debuff being active or not
        debuffs.hm.interval = (fightduration - hm_total_time) / (hm_refresh_int);; // interval of inactive
        debuffs.hm.full_refresh = hm_refresh_int; // # of applications as whole integer
        debuffs.hm.part_refresh_dur = hm_refresh_dec * debuffs.hm.duration; // duration of a partial refresh to end the fight
    }

    // wisdom
    if(debuffs.judgewisdom.uptime_g > 0){
        let judgewisdom_total_time = (debuffs.judgewisdom.uptime_g === 100) ? fightduration : (fightduration * debuffs.judgewisdom.uptime_g) / 100;
        let judgewisdom_refresh_int = Math.ceil(judgewisdom_total_time / debuffs.judgewisdom.duration);
        let judgewisdom_refresh_dec = (judgewisdom_total_time / debuffs.judgewisdom.duration) - Math.floor(judgewisdom_total_time / debuffs.judgewisdom.duration);
        let judgewisdom_refresh_partial = judgewisdom_refresh_dec * debuffs.judgewisdom.duration;
        let judgewisdom_remaining_dur_interval = (fightduration - judgewisdom_total_time) / (judgewisdom_refresh_int);
        debuffs.judgewisdom.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.judgewisdom.inactive = false; // flag for debuff being active or not
        debuffs.judgewisdom.interval = judgewisdom_remaining_dur_interval; // interval of inactive
        debuffs.judgewisdom.full_refresh = judgewisdom_refresh_int; // # of applications as whole integer
        debuffs.judgewisdom.part_refresh_dur = judgewisdom_refresh_partial; // duration of a partial refresh to end the fight
    }

    // crusader
    if(debuffs.judgecrusader.uptime_g > 0){
        let judgecrusader_total_time = (debuffs.judgecrusader.uptime_g === 100) ? fightduration : (fightduration * debuffs.judgecrusader.uptime_g) / 100;
        let judgecrusader_refresh_int = Math.ceil(judgecrusader_total_time / debuffs.judgecrusader.duration);
        let judgecrusader_refresh_dec = (judgecrusader_total_time / debuffs.judgecrusader.duration) - Math.floor(judgecrusader_total_time / debuffs.judgecrusader.duration);
        debuffs.judgecrusader.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.judgecrusader.inactive = false; // flag for debuff being active or not
        debuffs.judgecrusader.interval = (fightduration - judgecrusader_total_time) / (judgecrusader_refresh_int); // interval of inactive
        debuffs.judgecrusader.full_refresh = judgecrusader_refresh_int; // # of applications as whole integer
        debuffs.judgecrusader.part_refresh_dur = judgecrusader_refresh_dec * debuffs.judgecrusader.duration; // duration of a partial refresh to end the fight
    }

    // sunder
    if(debuffs.sunder.uptime_g > 0){
        let sunder_total_time = (debuffs.sunder.uptime_g === 100) ? fightduration : (fightduration * debuffs.sunder.uptime_g) / 100;
        let sunder_refresh_int = Math.ceil(sunder_total_time / debuffs.sunder.duration);
        let sunder_refresh_dec = (sunder_total_time / debuffs.sunder.duration) - Math.floor(sunder_total_time / debuffs.sunder.duration);
        debuffs.sunder.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.sunder.inactive = false; // flag for debuff being active or not
        debuffs.sunder.interval = (fightduration - sunder_total_time) / (sunder_refresh_int); // interval of inactive
        debuffs.sunder.full_refresh = sunder_refresh_int; // # of applications as whole integer
        debuffs.sunder.part_refresh_dur = sunder_refresh_dec * debuffs.sunder.duration; // duration of a partial refresh to end the fight
    }
    // faerie fire
    if(debuffs.faeriefire.uptime_g > 0){
        let faeriefire_total_time = (debuffs.faeriefire.uptime_g === 100) ? fightduration : (fightduration * debuffs.faeriefire.uptime_g) / 100;
        let faeriefire_refresh_int = Math.ceil(faeriefire_total_time / debuffs.faeriefire.duration);
        let faeriefire_refresh_dec = (faeriefire_total_time / debuffs.faeriefire.duration) - Math.floor(faeriefire_total_time / debuffs.faeriefire.duration);
        debuffs.faeriefire.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.faeriefire.inactive = false; // flag for debuff being active or not
        debuffs.faeriefire.interval = (fightduration - faeriefire_total_time) / (faeriefire_refresh_int); // interval of inactive
        debuffs.faeriefire.full_refresh = faeriefire_refresh_int; // # of applications as whole integer
        debuffs.faeriefire.part_refresh_dur = faeriefire_refresh_dec * debuffs.faeriefire.duration; // duration of a partial refresh to end the fight
    }

    // expose
    if(debuffs.expose.uptime_g > 0){
        let expose_total_time = (debuffs.expose.uptime_g === 100) ? fightduration : (fightduration * debuffs.expose.uptime_g) / 100;
        let expose_refresh_int = Math.ceil(expose_total_time / debuffs.expose.duration);
        let expose_refresh_dec = (expose_total_time / debuffs.expose.duration) - Math.floor(expose_total_time / debuffs.expose.duration);
        debuffs.expose.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.expose.inactive = false; // flag for debuff being active or not
        debuffs.expose.interval = (fightduration - expose_total_time) / (expose_refresh_int); // interval of inactive
        debuffs.expose.full_refresh = expose_refresh_int; // # of applications as whole integer
        debuffs.expose.part_refresh_dur = expose_refresh_dec * debuffs.expose.duration; // duration of a partial refresh to end the fight
    }

    // blood frenzy
    if(debuffs.bloodfrenzy.uptime_g > 0){
        let bloodfrenzy_total_time = (debuffs.bloodfrenzy.uptime_g === 100) ? fightduration : (fightduration * debuffs.bloodfrenzy.uptime_g) / 100;
        let bloodfrenzy_refresh_int = Math.ceil(bloodfrenzy_total_time / debuffs.bloodfrenzy.duration);
        let bloodfrenzy_refresh_dec = (bloodfrenzy_total_time / debuffs.bloodfrenzy.duration) - Math.floor(bloodfrenzy_total_time / debuffs.bloodfrenzy.duration);
        debuffs.bloodfrenzy.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.bloodfrenzy.inactive = false; // flag for debuff being active or not
        debuffs.bloodfrenzy.interval = (fightduration - bloodfrenzy_total_time) / (bloodfrenzy_refresh_int); // interval of inactive
        debuffs.bloodfrenzy.full_refresh = bloodfrenzy_refresh_int; // # of applications as whole integer
        debuffs.bloodfrenzy.part_refresh_dur = bloodfrenzy_refresh_dec * debuffs.bloodfrenzy.duration; // duration of a partial refresh to end the fight
    }
    // curse of elements
    if(debuffs.curseofele.uptime_g > 0){
        let curseofele_total_time = (debuffs.curseofele.uptime_g === 100) ? fightduration : (fightduration * debuffs.curseofele.uptime_g) / 100;
        let curseofele_refresh_int = Math.ceil(curseofele_total_time / debuffs.curseofele.duration);
        let curseofele_refresh_dec = (curseofele_total_time / debuffs.curseofele.duration) - Math.floor(curseofele_total_time / debuffs.curseofele.duration);     
        debuffs.curseofele.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.curseofele.inactive = false; // flag for debuff being active or not
        debuffs.curseofele.interval = (fightduration - curseofele_total_time) / (curseofele_refresh_int); // interval of inactive
        debuffs.curseofele.full_refresh = curseofele_refresh_int; // # of applications as whole integer
        debuffs.curseofele.part_refresh_dur = curseofele_refresh_dec * debuffs.curseofele.duration; // duration of a partial refresh to end the fight
    }
    // mangle
    if(debuffs.mangle.uptime_g > 0){
        let mangle_total_time = (debuffs.mangle.uptime_g === 100) ? fightduration : (fightduration * debuffs.mangle.uptime_g) / 100;
        let mangle_refresh_int = Math.ceil(mangle_total_time / debuffs.mangle.duration);
        let mangle_refresh_dec = (mangle_total_time / debuffs.mangle.duration) - Math.floor(mangle_total_time / debuffs.mangle.duration);
        debuffs.mangle.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.mangle.inactive = false; // flag for debuff being active or not
        debuffs.mangle.interval = (fightduration - mangle_total_time) / (mangle_refresh_int); // interval of inactive
        debuffs.mangle.full_refresh = mangle_refresh_int; // # of applications as whole integer
        debuffs.mangle.part_refresh_dur = mangle_refresh_dec * debuffs.mangle.duration; // duration of a partial refresh to end the fight
    }

}

/**Handles the debuff timers and stacks. Adds the timer value from IntervalAuraSetTime and prev timer to keep any
 * negative values and carry it over. For example, if a timer ends in 0.2s, but the next step is 0.3,
 * it would start the next timer at "time + (-0.1)" because the debuffs are independent of the player
 * steps and are applied potentially during a step. A timer of 30 would start at 29.9 on the next step.
 */
function IntervalAuraHandler(){
    if(debuffs.hm.timer <= 0 || debuffs.hm.inactive && (debuffs.hm.uptime_g < 98)) {debuffs.hm.stacks = 0;} // sets stacks to 0 when inactive
    if((debuffs.hm.timer <= 0) && (debuffs.hm.uptime_g > 0)) { debuffs.hm.timer += IntervalAuraSetTime("hm","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.judgewisdom.timer <= 0) && (debuffs.judgewisdom.uptime_g > 0)) { 
        debuffs.judgewisdom.timer += IntervalAuraSetTime("judgewisdom","debuff"); } // sets the timer to inactive or active

    if((debuffs.judgecrusader.timer <= 0) && (debuffs.judgecrusader.uptime_g > 0)) { 
        debuffs.judgecrusader.timer += IntervalAuraSetTime("judgecrusader","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.sunder.timer <= 0) && (debuffs.sunder.uptime_g > 0)) { 
        debuffs.sunder.timer += IntervalAuraSetTime("sunder","debuff"); } // sets the timer to inactive or active
    let timeforstack = debuffs.sunder.stacktime / 4;
    if ((debuffs.sunder.timer > 0) && (!debuffs.sunder.inactive) && (debuffs.sunder.stacks < 5)) {
        sunderstart = (sunderstart === 0 || ((sunderstart + 30) < steptimeend)) ? steptimeend : sunderstart;
        if ((sunderstart + timeforstack * debuffs.sunder.stacks) < steptimeend) {
            debuffs.sunder.stacks = (debuffs.sunder.stacks < 5) ? debuffs.sunder.stacks + 1 : 5;
        }
    }
    
    if((debuffs.faeriefire.timer <= 0) && (debuffs.faeriefire.uptime_g > 0)) { 
        debuffs.faeriefire.timer += IntervalAuraSetTime("faeriefire","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.expose.timer <= 0) && (debuffs.expose.uptime_g > 0)) { 
        debuffs.expose.timer += IntervalAuraSetTime("expose","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.bloodfrenzy.timer <= 0) && (debuffs.bloodfrenzy.uptime_g > 0)) { 
        debuffs.bloodfrenzy.timer += IntervalAuraSetTime("bloodfrenzy","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.curseofele.timer <= 0) && (debuffs.curseofele.uptime_g > 0)) { 
        debuffs.curseofele.timer += IntervalAuraSetTime("curseofele","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.mangle.timer <= 0) && (debuffs.mangle.uptime_g > 0)) { 
        debuffs.mangle.timer += IntervalAuraSetTime("mangle","debuff"); } // sets the timer to inactive or active
}

/** runs when timer is <= 0 for whichever debuff. Initializes timer as inactive for a set duration
 * given in the debuffInitialize() function and sets that timer to the initial inactive interval. 
 * Once this is called again, the function iterates the refresh count and flags it as active.
 * The active duration timer finishes and called again the timer goes back to inactive, repeating until all
 * full active durations have been used. Final duration is based on the % of remaining time for a full duration.
 * @param name debuff name
 */
function IntervalAuraSetTime(name,type){

        if(debuffs[name].uptime_g === 100){
            debuffs[name].inactive = true;
            //console.log(name)
        }
        if(debuffs[name].inactive){debuffs[name].refresh_ct++;}
        if(debuffs[name].refresh_ct === debuffs[name].full_refresh && debuffs[name].inactive){ 
            debuffs[name].refresh_ct++; 
        }
        if ((debuffs[name].refresh_ct <= debuffs[name].full_refresh) && (!debuffs[name].inactive)) {
            timer = debuffs[name].interval;
            //console.log(name)
            debuffs[name].inactive = true;
            if(debuffs[name].refresh_ct === debuffs[name].full_refresh){debuffs[name].refresh_ct++;}
            //console.log(timer);
        }
        else if ((debuffs[name].refresh_ct < debuffs[name].full_refresh) && (debuffs[name].inactive)){
            timer = debuffs[name].duration;
            debuffs[name].inactive = false;
            //console.log(timer);
        }
        else if (debuffs[name].refresh_ct > debuffs[name].full_refresh){
            timer = (debuffs[name].part_refresh_dur == 0) ? debuffs[name].duration : debuffs[name].part_refresh_dur;
            debuffs[name].inactive = false;
            //console.log(timer);
        }

    return timer;
}

/**Check for on use spells ready and usable, if ready and usable, set the duration and cooldown timers. */
function onUseSpellCheck(){
    let beastwithinreduc = (auras.beastwithin.timer > 0) ? 0.5 : 1;

    if((auras.potion.primary) && auras.potion.cooldown === 0 && potionHandling()) {
        if(combatlogRun && (auras.potion.used === 'Haste')) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player used " + auras.potion.used + " Potion";
            combatlogindex++;
        }
    }
    if(auras.rune.enable && auras.rune.cooldown === 0 && runeHandling()) {}
    
    if(auras.lust.enable && auras.lust.cooldown === 0){
        auras.lust.timer = (auras.lust.cooldown === 0) ? auras.lust.duration : auras.lust.timer; // set timer
        auras.lust.cooldown = (auras.lust.timer === auras.lust.duration) ? auras.lust.basecd: auras.lust.cooldown; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Blood Lust";
            combatlogindex++;
        }
    }
    let rapidcost = Math.floor(100 * beastwithinreduc);
    if(auras.rapid.enable && auras.rapid.cooldown === 0 && (currentMana >= rapidcost) && auras.rapid.timer == 0){
        auras.rapid.timer = (auras.rapid.cooldown === 0) ? auras.rapid.duration : auras.rapid.timer; // set timer
        auras.rapid.cooldown = (auras.rapid.timer === auras.rapid.duration) ? auras.rapid.basecd: auras.rapid.cooldown; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Rapid Fire";
            combatlogindex++;
        }
    }
    if(racialenable) {
        let berserkcost = (auras.berserk.enable) ? Math.floor(0.06 * BaseMana * beastwithinreduc) : 0;
        if(auras.berserk.enable && auras.berserk.cooldown === 0 && currentMana >= berserkcost){
            auras.berserk.timer = (auras.berserk.cooldown === 0) ? auras.berserk.duration : auras.berserk.timer; // set timer
            auras.berserk.cooldown = (auras.berserk.timer === auras.berserk.duration) ? auras.berserk.basecd: auras.berserk.cooldown; // set cd
            if(combatlogRun) {
                combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Berserking";
                combatlogindex++;
            }
        }
        else if(auras.bloodfury.enable && auras.bloodfury.cooldown === 0){
            auras.bloodfury.timer = (auras.bloodfury.cooldown === 0) ? auras.bloodfury.duration : auras.bloodfury.timer; // set timer
            auras.bloodfury.cooldown = (auras.bloodfury.timer === auras.bloodfury.duration) ? auras.bloodfury.basecd: auras.bloodfury.cooldown; // set cd
            if(combatlogRun) {
                combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Blood Fury";
                combatlogindex++;
            }
        }
    }
    if(auras.beastwithin.enable && auras.beastwithin.cooldown === 0){
        auras.beastwithin.timer = (auras.beastwithin.cooldown === 0) ? auras.beastwithin.duration : auras.beastwithin.timer; // set timer
        auras.beastwithin.cooldown = (auras.beastwithin.timer === auras.beastwithin.duration) ? auras.beastwithin.basecd: auras.beastwithin.cooldown; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains The Beast Within";
            combatlogindex++;
        }
    }
// trinkets on use, if's for non-shared CDs, if-else if's for shared CDs

    if(auras.aptrink1.enable && (auras.aptrink1.cooldown === 0) && (sharedtrinketcd === 0)) {
        auras.aptrink1.timer = (auras.aptrink1.cooldown === 0) ? auras.aptrink1.duration : auras.aptrink1.timer; // set timer
        auras.aptrink1.cooldown = (auras.aptrink1.timer === auras.aptrink1.duration) ? auras.aptrink1.basecd: auras.aptrink1.cooldown; // set cd
        sharedtrinketcd = auras.aptrink1.duration;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.aptrink1.name;
            combatlogindex++;
        }
    }
    else if(auras.aptrink2.enable && (auras.aptrink2.cooldown === 0) && (sharedtrinketcd === 0)) {
        auras.aptrink2.timer = (auras.aptrink2.cooldown === 0) ? auras.aptrink2.duration : auras.aptrink2.timer; // set timer
        auras.aptrink2.cooldown = (auras.aptrink2.timer === auras.aptrink2.duration) ? auras.aptrink2.basecd: auras.aptrink2.cooldown; // set cd
        sharedtrinketcd = auras.aptrink2.duration;            
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.aptrink2.name;
            combatlogindex++;
        }      
    }

    if (readiness.enable && (readiness.cooldown == 0) && auras.rapid.cooldown > 0) {
        if (SPELLS.multishot.enable && SPELLS.multishot.cd > 5) {
            queueReadiness = true;
            
        }
        else if (!SPELLS.multishot.enable && SPELLS.steadyshot.cd > 0) {
            queueReadiness = true;
            
        }
        else { queueReadiness = false;
        }
    }
}
