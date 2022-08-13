var spreaddata = {};
var uptimedata = {};
var manadata = {};

var spellresult = {
	autoshot: { Hit: 0, Miss: 0, Crit: 0, count: 0, dmg: 0 },
	steadyshot: { Hit: 0, Miss: 0, Crit: 0, count: 0, dmg: 0 },
	multishot: { Hit: 0, Miss: 0, Crit: 0, count: 0, dmg: 0 },
	aimedshot: { Hit: 0, Miss: 0, Crit: 0, count: 0, dmg: 0 },
	chimerashot: { Hit: 0, Miss: 0, Crit: 0, count: 0, dmg: 0 },
	arcaneshot: { Hit: 0, Miss: 0, Crit: 0, Partial: 0, count: 0, dmg: 0 },
	explosiveshot: { Hit: 0, Miss: 0, Crit: 0, Partial: 0, count: 0, dmg: 0 },
	killshot: { Hit: 0, Miss: 0, Crit: 0, count: 0, dmg: 0 },
	serpentsting: { Hit: 0, Miss: 0, Crit: 0, count: 0, dmg: 0 },
	blackarrow: { Hit: 0, Miss: 0, count: 0, dmg: 0 },
	silencingshot: { Hit: 0, Miss: 0, Crit: 0, count: 0, dmg: 0 },
	wild_quiver: { Hit: 0, Miss: 0, Crit: 0, Partial: 0, count: 0, dmg: 0 },
	chimera_serpent: { Hit: 0, Miss: 0, Crit: 0, Partial: 0, count: 0, dmg: 0 },
	pierce_shot: {count: 0, dmg: 0 },
	raptorstrike: { Hit: 0, Miss: 0, Dodge: 0, Crit: 0, count: 0, dmg: 0 },
	melee: { Hit: 0, Miss: 0, Crit: 0, Glance: 0, Dodge: 0, count: 0, dmg: 0 },
	petattack: { Hit: 0, Miss: 0, Crit: 0, Glance: 0, Dodge: 0, count: 0, dmg: 0 },
	pet_special: { Hit: 0, Miss: 0, Crit: 0, Dodge: 0, Partial: 0, count: 0, dmg: 0 },
	pet_focus_dump: { Hit: 0, Miss: 0, Crit: 0, Dodge: 0, count: 0, dmg: 0 }
};

var AURA_MAPPER = {};
var simresults = {};

function buildData(spread){

	let data = [];
	let results = {};
	spreaddata = {
		labels: [],
		datasets: []
	};

	spread.forEach(function (x) { results[x] = (results[x] || 0) + 1; });
	Object.keys(results).forEach(key => data.push({x:key,y:results[key]}));

	for(let i in spread) {
		spreaddata.labels.push(results[i]);
	}

	spreaddata.datasets.push({
		data: data,
		backgroundColor: 'rgba(170,	211, 114, 0.6)',
		borderColor: 'rgb(170,	211, 114)',
		borderWidth: 1,
		barPercentage: 1,
		categoryPercentage: 1,
	});
}
// creates the graphs for histogram, mana usage, and auras uptimes
function createHistogram(){
	histogram.destroy();
	ctx = document.getElementById('histogram').getContext('2d');
	histogram = new Chart(ctx, {
		type: 'bar',
		data: spreaddata,
		options: {
			scales: {
				x: {
					type: 'linear',
					offset: false,
					color: 'rgb(170,	211, 114)',
					grid: {
						offset: false
					},
					ticks: {
						stepSize: 10,
						color: 'white'
					},
					title: {
						display:true,
						text: 'DPS',
						font: {
							size: 14,
						},
						color: 'rgb(170,	211, 114)'
					}
				},
				y: {
					title: {
						display:true,
						text: 'Frequency',
						font: {
							size: 14,
						},
						color: 'rgb(170,	211, 114)'
					},
					ticks: {
						color: 'white'
					}
				//beginAtZero: true
				}
			},
			plugins: {
				legend: {
					display: false
				},
				tooltip: {
					callbacks: {
					//label: (item, obj) => ` ${obj.labels[item.index]} DPS: ${obj.datasets[0].data[item.index]}`,
					}
				}
			}
		}
	});

	horizontalbar.destroy();
	cty = document.getElementById('horizontalbar').getContext('2d');
	horizontalbar = new Chart(cty, {
		type: 'bar',
		data: uptimedata,
		options: {
			indexAxis: 'y',
			// Elements options apply to all of the options unless overridden in a dataset
			// In this case, we are setting the border of each horizontal bar to be 2px wide
			elements: {
				bar: {
				borderWidth: 2,
				}
			},
			scales: {
				x: {
				min: 0,
				max: 100,
				ticks: {
					color: 'white'
				},
				},
				y: {
				ticks: {
					color: 'white'
				}
				}
			},
			responsive: true,
			plugins: {
				legend: {
					display: false,
					position: 'right',
				},
				title: {
					display: true,
					text: 'Buff Uptimes',
					font: {
						size: 14,
					},
					color: 'white'
				},
				tooltip: {
					callbacks: {
						title: function(d) {
						return d[0].label;
						},
						label: function(d) {
						return d.raw + " %";
						}
					}
				}
			}
		},
	});

	managraph.destroy();
	ctz = document.getElementById("line-chart").getContext('2d');
	managraph = new Chart(ctz, {
		type: 'line',
		data: manadata,
		options: {
			elements: {
				point:{
					radius: 0
				},
			},
			scales: {
				x: {
					title: {
						display: true,
						text: 'Time (s)',
						font: {
						size: 14,
						},
						color: 'white'
					},
					ticks: {
						color: 'white',
						callback: function(value) { return this.getLabelForValue(value).toFixed(0) }
					},
				},
				y: {
					min: 0,
					max: Mana,
					title: {
						display:true,
						text: 'Mana',
						font: {
						size: 14,
						},
						color: 'white'
					},
					ticks: {
						color: 'white'
					}
				}
			},
			responsive: true,
			plugins: {
				legend: {
					display: false,
					position: 'right',
				},
				title: {
					display: true,
					text: 'Mana Usage on Final Iteration',
					color: 'white'
				},
				tooltip: {
					callbacks: {
						title: function(tooltipItems, data) {
						return '';
						},
						label: function(data) {
						return data.raw + " Mana";
						
						}
					}
				},
			},
		},
	});
}

var ctx = document.getElementById('histogram').getContext('2d');
var histogram = new Chart(ctx, {
	type: 'bar',
	data: spreaddata,
	options: {
		scales: {
			x: {
				type: 'linear',
				offset: false,
				color: 'rgb(170,	211, 114)',
				grid: {
					offset: false
				},
				ticks: {
					stepSize: 10
				},
				title: {
					display:true,
					text: 'DPS',
					color: 'rgb(170,	211, 114)'
				}
			},
			y: {
				title: {
					display:true,
					text: 'Frequency',
					color: 'rgb(170,	211, 114)'
				},
			//beginAtZero: true
			}
		},
		plugins: {
			legend: {
			display: false
			},
			tooltip: {
			callbacks: {
				//label: (item, obj) => ` ${obj.labels[item.index]} DPS: ${obj.datasets[0].data[item.index]}`,
			}
			}
		}
	}
});

function buildBuffUptimes(){
	// build names for auras from aura effect names
	for (let prop in buff_uptimes) {
		AURA_MAPPER[prop] = auras[prop].effect_name;
	}
	let filtereduptimes = Object.entries(buff_uptimes).filter(key => !key.includes('0.00'));
	let data = [];

	uptimedata = {
		labels: [],
		datasets: []
	};

	for (key in filtereduptimes) {
		uptimedata.labels.push(AURA_MAPPER[filtereduptimes[key][0]]);
		data.push(filtereduptimes[key][1]);
	}

	uptimedata.datasets.push({
		data: data,
		backgroundColor: 'rgba(0, 238, 255,0.6)',
		borderColor: 'rgb(0, 238, 255)',
		borderWidth: 1,
		barPercentage: 0.6,
		categoryPercentage: 0.8,
	});

}

const barconfig = {
	type: 'bar',
	data: uptimedata,
	options: {
		indexAxis: 'y',
		// Elements options apply to all of the options unless overridden in a dataset
		// In this case, we are setting the border of each horizontal bar to be 2px wide
		elements: {
			bar: {
				borderWidth: 2,
			}
		},
		responsive: true,
		plugins: {
			legend: {
				position: 'right',
			},
			title: {
				display: true,
				text: 'Buff Uptimes'
			}
		}
	},
};

var cty = document.getElementById('horizontalbar').getContext('2d');
var horizontalbar = new Chart(cty, barconfig);


function buildManaData(){

	let data = [];

	manadata = {
		labels: [],
		datasets: []
	};

	let arrlength = manalogarray.length;

	for (let i = 0; i < arrlength; i++) {
		manadata.labels[i] = manalogarray[i][0];
		data[i] = manalogarray[i][1];
	}

	manadata.datasets.push({
		data: data,
		borderColor: "#029ad1",
		fill: false,
	});

}

const lineconfig = {
		type: 'line',
		data: manadata,
		options: {
		elements: {
			point:{
				radius: 0
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: 'Time (s)',
					font: {
					size: 14,
					},
					color: 'white'
				},
				ticks: {
					color: 'white',
					callback: function(value) { return this.getLabelForValue(value).toFixed(0) }
				},
			},
				y: {
				min: 0,
				max: Mana,
				title: {
					display:true,
					text: 'Mana',
					font: {
					size: 14,
					},
					color: 'white'
				},
				ticks: {
					color: 'white'
				}
			}
		},
		responsive: true,
		plugins: {
			legend: {
				display: false,
				position: 'right',
			},
			title: {
				display: true,
				text: 'Mana Usage on Final Iteration',
				color: 'white'
			},
			tooltip: {
				callbacks: {
					title: function(tooltipItems, data) {
						return '';
					},
					label: function(data) {
						return data.raw + " Mana";
					
					}
				}
			},
		},
	},
}

var ctz = document.getElementById("line-chart").getContext('2d');
var managraph = new Chart(ctz, lineconfig);



// ***********************************************************************
// ** STATS on abilities   
// ***********************************************************************
function damageResults(){
	// initialize sim results 
	simresults = {
		autoshot: {},
		steadyshot: {},
		multishot: {},
		aimedshot: {},
		chimerashot: {},
		arcaneshot: {},
		explosiveshot: {},
		killshot: {},
		serpentsting: {},
		blackarrow: {},
		silencingshot: {},
		wild_quiver: {},
		chimera_serpent: {},
		pierce_shot: {},
		raptorstrike: {},
		melee: {},
		petattack: {},
		pet_special: {},
		pet_focus_dump: {}
	};
	// calculating percentages and totals per iteration for all spells listed
	for (let spell in simresults) {
	
		simresults[spell].casts = (spellresult[spell].count / iterations);
		simresults[spell].miss = (!!spellresult[spell].Miss) ? (spellresult[spell].Miss / spellresult[spell].count) * 100 : 0;
		simresults[spell].crit = (!!spellresult[spell].Crit) ? (spellresult[spell].Crit / spellresult[spell].count) * 100 : 0;
		simresults[spell].dodge = (!!spellresult[spell].Dodge) ? (spellresult[spell].Dodge / spellresult[spell].count) * 100 : 0;
		simresults[spell].partial = (!!spellresult[spell].Partial) ? (spellresult[spell].Partial / spellresult[spell].count) * 100 : 0;
		simresults[spell].glance = (!!spellresult[spell].Glance) ? (spellresult[spell].Glance / spellresult[spell].count) * 100 : 0;
		simresults[spell].hit = (!!spellresult[spell].Hit) ? (spellresult[spell].Hit / spellresult[spell].count) * 100 : 0;
		simresults[spell].avg = (spellresult[spell].dmg / spellresult[spell].count);
		simresults[spell].dps = (spellresult[spell].dmg / sumduration);
	}

	let newsimresults = Object.keys(simresults).map(key => ({action: key, results: simresults[key]}));
	let sortedsimresults = newsimresults.sort(compare);
	buildTable(sortedsimresults);

	//console.log("pet dmg => "+sumpetdmg / iterations);
	//console.log("total damage: " + sumdmg/iterations);
	//console.log("duration: " + (Math.round(sumduration/iterations * 100) / 100));
}

function buildTable(results){
	
	let actions = {};
	for (let spell in simresults) {
		if (spell === 'pet_special'){
			actions.pet_special = PET_SPELLS.pet_special?.spell_name;
		} 
		else if (spell === 'pet_focus_dump') {
			actions.pet_focus_dump = PET_SPELLS.pet_focus_dump.spell_name;
		}
		else if (spell === 'petattack') {
			actions[spell] = 'Auto Attack (Pet)';
		}
		else if (spell === 'autoshot') {
			actions[spell] = 'Auto Shot';
		}
		else if (spell === 'melee') {
			actions[spell] = 'Auto Attack (Player)';
		}
		else if (spell === 'wild_quiver') {
			actions[spell] = 'Wild Quiver';
		}
		else if (spell === 'chimera_serpent') {
			actions[spell] = 'Chimera Shot - Serpent';
		}
		else if (spell === 'pierce_shot') {
			actions[spell] = 'Piercing Shots';
		}
		else {
			actions[spell] = SPELLS[spell].spell_name;
		}
		
	}
	let act = '';
	let tbody = document.getElementById('tbody');
	tbody.innerHTML = '';
	let length = results.length
	for (let i = 0; i < length; i++) {
		let tr = "<tr>";
		if (results[i].results.dps > 0) {
			act = results[i].action; 
			tr += "<td style='text-align:right'>" + actions[act] + "</td>" + 
			"<td style='text-align:right'>" + (results[i].results.dps || 0).toFixed(2) + "</td>" + 
			"<td style='text-align:right'>" + (results[i].results.casts || 0).toFixed(2) + "</td>" +
			"<td style='text-align:right'>" + (results[i].results.avg || 0).toFixed(2) + "</td>" +
			"<td style='text-align:right'>" + (results[i].results.hit || 0).toFixed(2) + "</td>" +
			"<td style='text-align:right'>" + (results[i].results.crit || 0).toFixed(2) + "</td>" +
			"<td style='text-align:right'>" + (results[i].results.miss || 0).toFixed(2) + "</td>" +
			"<td style='text-align:right'>" + (results[i].results.dodge || 0).toFixed(2) + "</td>" +
			"<td style='text-align:right'>" + (results[i].results.glance || 0).toFixed(2) + "</td>" +
			"<td style='text-align:right'>" + (results[i].results.partial || 0).toFixed(2) + "</td>" +
			"</tr>";
			tbody.innerHTML += tr;
		}
	}
}
/** Compares the values of 2 numbers for sorting */
function compare(a, b) {
	// Use toUpperCase() to ignore character casing
	const dpsA = a.results.dps;
	const dpsB = b.results.dps;

	let comparison = 0;
	if (dpsA > dpsB) {
		comparison = -1;
	} else if (dpsA < dpsB) {
		comparison = 1;
	}
	return comparison;
}

/** Resets counts of spells used for stats */
function resultCountInitialize() {
	// player
	for (spellname in spellresult){
		spellresult[spellname].Hit = 0;
		spellresult[spellname].Crit = 0;
		spellresult[spellname].Miss = 0;
		spellresult[spellname].count = 0;
		spellresult[spellname].dmg = 0;
		
		if (spellname === 'pet_special' || spellname === 'wild_quiver' || spellname === 'arcaneshot' || spellname === 'chimera_serpent' || spellname === 'explosiveshot') {
			spellresult[spellname].Partial = 0;
		}
		if (spellname === 'pet_focus_dump' || spellname === 'petattack' || spellname === 'raptorstrike' || spellname === 'melee') {
			spellresult[spellname].Dodge = 0;
		}
		if (spellname === 'petattack' || spellname === 'melee') {
			spellresult[spellname].Glance = 0;
		}

	}
	return;
}

function spellResultSum(result, spellname) {

	if (result === RESULT.HIT) {
		spellresult[spellname].Hit++;
	}
	else if (result === RESULT.GLANCE) {
		spellresult[spellname].Glance++;
	}
	else if (result === RESULT.CRIT) {
		spellresult[spellname].Crit++;
	}
	else if (result === RESULT.MISS) {
		spellresult[spellname].Miss++;
	}
	else if (result === RESULT.DODGE) {
		spellresult[spellname].Dodge++;
	}
	else if (result === RESULT.PARTIAL) {
		spellresult[spellname].Partial++;
	}
	//console.log(result);
	//console.log(spellname);
	//console.log(spellresult);
	return;
}