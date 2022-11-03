const GLYPHS_DATA = {
    
    42897:{
        name: 'Glyph of Aimed Shot',
        abrv:'aimed_shot',
        bonus: 2,
        icon: 'inv_glyph_majorhunter',
        phase: 0
    },
    42898:{
        name: 'Glyph of Arcane Shot',
        abrv:'arcane_shot',
        bonus: 0.2,
        icon: 'inv_glyph_majorhunter',
        phase: 0
    },
    42901:{
        name: 'Glyph of Aspect of the Viper',
        abrv:'aspect_viper',
        bonus: 10,
        icon: 'inv_glyph_majorhunter',
        phase: 1
    }, 
    42902:{
        name: 'Glyph of Bestial Wrath',
        abrv:'bestial_wrath',
        bonus: 20,
        icon: 'inv_glyph_majorhunter',
        phase: 1
    },        
    45625:{
        name: 'Glyph of Chimera Shot',
        abrv:'chimera_shot',
        bonus: 1,
        icon: 'inv_glyph_majorhunter',
        phase: 1
    },       
    45731:{
        name: 'Glyph of Explosive Shot',
        abrv:'explosive_shot',
        bonus: 4,
        icon: 'inv_glyph_majorhunter',
        phase: 1
    },
    45733:{
        name: 'Glyph of Explosive Trap',
        abrv:'explosive_trap',
        bonus: 1,
        icon: 'inv_glyph_majorhunter',
        phase: 1
    },
    42907:{
        name: 'Glyph of Hunter\'s Mark',
        abrv:'hunters_mark',
        bonus: 0.2,
        icon: 'inv_glyph_majorhunter',
        phase: 0
    },
    42908:{
        name: 'Glyph of Immolation Trap',
        abrv:'immolate_trap',
        bonus: 6,
        icon: 'inv_glyph_majorhunter',
        phase: 0
    },
    45732:{
        name: 'Glyph of Kill Shot',
        abrv:'kill_shot',
        bonus: 6,
        icon: 'inv_glyph_majorhunter',
        phase: 1
    },
    42900:{
        name: 'Glyph of Mending',
        abrv:'mending',
        icon: 'inv_glyph_majorhunter',
        phase: 0
    },
    42910:{
        name: 'Glyph of Multi-Shot',
        abrv:'multi_shot',
        bonus: 1,
        icon: 'inv_glyph_majorhunter',
        phase: 0
    },
    42911:{
        name: 'Glyph of Rapid Fire',
        abrv:'rapid_fire',
        bonus: 8,
        icon: 'inv_glyph_majorhunter',
        phase: 0
    },
    42912:{
        name: 'Glyph of Serpent Sting',
        abrv:'serpent_sting',
        bonus: 6,
        icon: 'inv_glyph_majorhunter',
        phase: 0
    },
    42913:{
        name: 'Glyph of Snake Trap',
        abrv:'snake_trap',
        bonus: 2,
        icon: 'inv_glyph_majorhunter',
        phase: 1
    },
    42914:{
        name: 'Glyph of Steady Shot',
        abrv:'steady_shot',
        bonus: 10,
        icon: 'inv_glyph_majorhunter',
        phase: 1
    },
    42901:{
        name: 'Glyph of the Beast',
        abrv:'aspect_beast',
        bonus: 2,
        icon: 'inv_glyph_majorhunter',
        phase: 1
    },
    42909:{
        name: 'Glyph of the Hawk',
        abrv:'aspect_hawk',
        bonus: 0.06,
        icon: 'inv_glyph_majorhunter',
        phase: 1
    },
    42915:{
        name: 'Glyph of Trueshot Aura',
        abrv:'trueshot_aura',
        bonus: 10,
        icon: 'inv_glyph_majorhunter',
        phase: 1
    },
    42916:{
        name: 'Glyph of Volley',
        abrv:'volley',
        bonus: 20,
        icon: 'inv_glyph_majorhunter',
        phase: 1
    },
}

var selected_glyphs = [45733, 45732, 42912]

function selectGlyphs(glyphs_array) {
    let glyphs = {}
    for (let i=0; i < glyphs_array.length; i++) {
        let obj = GLYPHS_DATA[glyphs_array[i]];
        //console.log(glyphs_array)
        if(!!obj.abrv){
            glyphs[obj.abrv] = (!!obj.bonus) ? obj.bonus : 0;
        }
    }
    return glyphs;
}
