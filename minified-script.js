"use strict";function ajax(e,a,t,o){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===this.readyState&&(200===this.status?t(null,JSON.parse(this.responseText)):t(this.statuscode,null))},n.open(e,a),"POST"===e?(n.setRequestHeader("Content-type","application/JSON"),n.send(o)):n.send()}function getPokemonSprite(){ajax("GET","http://pokeapi.co/api/v2/pokemon/"+sprite1.value.toLowerCase(),function(e,a){var t=a.sprites.front_default;document.getElementsByTagName("img")[0].setAttribute("src",t);var o=a.name;pokemon1=a,document.getElementById("user1Pokemon").innerHTML=o.toUpperCase(),movesFinderPokemon1(),statsPokemon1(),typeOfPokemon1=pokemon1.types[pokemon1.types.length-1].type.name,ajax("GET","https://pokeapi.co/api/v2/move/"+us1mv1.value,function(e,a){us1mv1Data=a,us1mv1damageClass=us1mv1Data.damage_class.name,us1mv1damageType=us1mv1Data.type.name,us1mv1accuracy=us1mv1Data.accuracy,us1mv1power=us1mv1Data.power}),ajax("GET","https://pokeapi.co/api/v2/move/"+us1mv2.value,function(e,a){us1mv2Data=a,us1mv2damageClass=us1mv2Data.damage_class.name,us1mv2damageType=us1mv2Data.type.name,us1mv2accuracy=us1mv2Data.accuracy,us1mv2power=us1mv2Data.power}),ajax("GET","https://pokeapi.co/api/v2/move/"+us1mv3.value,function(e,a){us1mv3Data=a,us1mv3damageClass=us1mv3Data.damage_class.name,us1mv3damageType=us1mv3Data.type.name,us1mv3accuracy=us1mv3Data.accuracy,us1mv3power=us1mv3Data.power}),ajax("GET","https://pokeapi.co/api/v2/move/"+us1mv4.value,function(e,a){us1mv4Data=a,us1mv4damageClass=us1mv4Data.damage_class.name,us1mv4damageType=us1mv4Data.type.name,us1mv4accuracy=us1mv4Data.accuracy,us1mv4power=us1mv4Data.power})})}function getPokemon2Sprite(){ajax("GET","http://pokeapi.co/api/v2/pokemon/"+sprite2.value.toLowerCase(),function(e,a){var t=a.sprites.front_default;document.getElementsByTagName("img")[1].setAttribute("src",t);var o=a.name;pokemon2=a,document.getElementById("user2Pokemon").innerHTML=o.toUpperCase(),movesFinderPokemon2(),statsPokemon2(),typeOfPokemon2=pokemon2.types[pokemon2.types.length-1].type.name,ajax("GET","https://pokeapi.co/api/v2/move/"+us2mv1.value,function(e,a){us2mv1Data=a,us2mv1damageClass=us2mv1Data.damage_class.name,us2mv1damageType=us2mv1Data.type.name,us2mv1accuracy=us2mv1Data.accuracy,us2mv1power=us2mv1Data.power}),ajax("GET","https://pokeapi.co/api/v2/move/"+us2mv2.value,function(e,a){us2mv2Data=a,us2mv2damageClass=us2mv2Data.damage_class.name,us2mv2damageType=us2mv2Data.type.name,us2mv2accuracy=us2mv2Data.accuracy,us2mv2power=us2mv2Data.power}),ajax("GET","https://pokeapi.co/api/v2/move/"+us2mv3.value,function(e,a){us2mv3Data=a,us2mv3damageClass=us2mv3Data.damage_class.name,us2mv3damageType=us2mv3Data.type.name,us2mv3accuracy=us2mv3Data.accuracy,us2mv3power=us2mv3Data.power}),ajax("GET","https://pokeapi.co/api/v2/move/"+us2mv4.value,function(e,a){us2mv4Data=a,us2mv4damageClass=us2mv4Data.damage_class.name,us2mv4damageType=us2mv4Data.type.name,us2mv4accuracy=us2mv4Data.accuracy,us2mv4power=us2mv4Data.power})})}function beginBattle(){if(user1Health.innerText="Hp: "+pokemon1Health.toString(),user2Health.innerText="Hp: "+pokemon2Health.toString(),pokemon1.hasOwnProperty("name")&&pokemon2.hasOwnProperty("name")){if(diceRoll()<5){userTurn=pokemon1;var e=document.getElementById("turn");e.appendChild(el),el.innerText="User 1"}else{userTurn=pokemon2;var e=document.getElementById("turn");e.appendChild(el),el.innerText="User 2",el.setAttribute("id","turnHeader")}buttonEnabling(),document.getElementById("btnPokeSelect1").disabled=!0,document.getElementById("btnPokeSelect2").disabled=!0,document.getElementById("battleBegin").disabled=!0}pokemon1Health=1e3,pokemon2Health=1e3,user1Health.innerHTML="Hp: 1000",user2Health.innerHTML="Hp: 1000"}function getMove1(e){"us1mv1"===e.target.id?moveData=us1mv1Data:"us1mv2"===e.target.id?moveData=us1mv2Data:"us1mv3"===e.target.id?moveData=us1mv3Data:"us1mv4"===e.target.id?moveData=us1mv4Data:console.log("I fucked up in get Move 1"),console.log(moveData),damageClass=moveData.damage_class.name,accuracy=moveData.accuracy,power=moveData.power,attack()}function getMove2(e){"us2mv1"===e.target.id?moveData=us2mv1Data:"us2mv2"===e.target.id?moveData=us2mv2Data:"us2mv3"===e.target.id?moveData=us2mv3Data:"us2mv4"===e.target.id?moveData=us2mv4Data:console.log("I fucked up in get Move 2");var a;console.log(moveData),a=moveData.damage_class.name,accuracy=moveData.accuracy,power=moveData.power,attack()}function diceRoll(){return Math.floor(10*Math.random()+1)}function attack(){userTurn===pokemon1?(accJudge(),userTurn=pokemon2,checkHealth(),buttonEnabling()):userTurn===pokemon2?(accJudge2(),userTurn=pokemon1,checkHealth(),buttonEnabling()):console.log("I don't know what the fuck is going on inside Attack")}function accJudge(){return"physical"===damageClass?compareAttack2Defense():"special"===damageClass?compareSpecialAttack2Defense():"status"===damageClass?power=40:console.log("I fucked up in accJudge inside of if statement that affects how Power bonus is applied"),compareSpeed(),combineTypes(),diceRoll()<accuracy/10?(pokemon2Health-=power,user2Health.innerText="Hp: "+pokemon2Health.toString(),alert("Attack successful"),void console.log(power)):alert("Your attack missed!")}function accJudge2(){return"physical"===damageClass?compareAttack2Defense():"special"===damageClass?compareSpecialAttack2Defense():"status"===damageClass?power=40:console.log("I fucked up in accJudge inside of if statement that affects how Power bonus is applied"),compareSpeed(),combineTypes(),diceRoll()<accuracy/10?(pokemon1Health-=power,user1Health.innerText="Hp: "+pokemon1Health.toString(),alert("Attack successful"),void console.log(power)):alert("Your attack missed!")}function disablePokemon1Buttons(){document.querySelector("#us1mv1").disabled=!0,document.querySelector("#us1mv2").disabled=!0,document.querySelector("#us1mv3").disabled=!0,document.querySelector("#us1mv4").disabled=!0}function disablePokemon2Buttons(){document.querySelector("#us2mv1").disabled=!0,document.querySelector("#us2mv2").disabled=!0,document.querySelector("#us2mv3").disabled=!0,document.querySelector("#us2mv4").disabled=!0}function enablePokemon1Buttons(){document.querySelector("#us1mv1").disabled=!1,document.querySelector("#us1mv2").disabled=!1,document.querySelector("#us1mv3").disabled=!1,document.querySelector("#us1mv4").disabled=!1}function enablePokemon2Buttons(){document.querySelector("#us2mv1").disabled=!1,document.querySelector("#us2mv2").disabled=!1,document.querySelector("#us2mv3").disabled=!1,document.querySelector("#us2mv4").disabled=!1}function buttonEnabling(){userTurn===pokemon2?(disablePokemon1Buttons(),enablePokemon2Buttons()):userTurn===pokemon1&&(disablePokemon2Buttons(),enablePokemon1Buttons())}function checkHealth(){(0>=pokemon1Health||0>=pokemon2Health)&&(0>=pokemon1Health?(disablePokemon1Buttons(),disablePokemon2Buttons(),alert(pokemon1.name.toUpperCase()+" has fainted and "+pokemon2.name.toUpperCase()+" has won!"),endBattle()):0>=pokemon2Health&&(disablePokemon1Buttons(),disablePokemon2Buttons(),alert(pokemon2.name.toUpperCase()+" has fainted and "+pokemon1.name.toUpperCase()+" has won!"),endBattle()))}function endBattle(){userTurn=null,document.getElementById("btnPokeSelect1").disabled=!1,document.getElementById("btnPokeSelect2").disabled=!1,document.getElementById("battleBegin").disabled=!1,el.innerHTML="Winner!"}function movesFinderPokemon1(){for(var e=[],a=0;a<pokemon1.moves.length;a++)0===pokemon1.moves[a].version_group_details[0].level_learned_at&&e.push(pokemon1.moves[a].move.name);var t=e[diceRoll(e.length)],o=e[diceRoll(e.length)],n=e[diceRoll(e.length)],s=e[diceRoll(e.length)];document.querySelector("#us1mv1").value=t,document.querySelector("#us1mv1").innerHTML=t.toUpperCase(),document.querySelector("#us1mv2").value=o,document.querySelector("#us1mv2").innerHTML=o.toUpperCase(),document.querySelector("#us1mv3").value=n,document.querySelector("#us1mv3").innerHTML=n.toUpperCase(),document.querySelector("#us1mv4").value=s,document.querySelector("#us1mv4").innerHTML=s.toUpperCase()}function movesFinderPokemon2(){for(var e=[],a=0;a<pokemon2.moves.length;a++)0===pokemon2.moves[a].version_group_details[0].level_learned_at&&e.push(pokemon2.moves[a].move.name);var t=e[diceRoll(e.length)],o=e[diceRoll(e.length)],n=e[diceRoll(e.length)],s=e[diceRoll(e.length)];document.querySelector("#us2mv1").value=t,document.querySelector("#us2mv1").innerHTML=t.toUpperCase(),document.querySelector("#us2mv2").value=o,document.querySelector("#us2mv2").innerHTML=o.toUpperCase(),document.querySelector("#us2mv3").value=n,document.querySelector("#us2mv3").innerHTML=n.toUpperCase(),document.querySelector("#us2mv4").value=s,document.querySelector("#us2mv4").innerHTML=s.toUpperCase()}function statsPokemon1(){for(var e=0;e<pokemon1.stats.length;e++)stats1[pokemon1.stats[e].stat.name]=pokemon1.stats[e].base_stat}function statsPokemon2(){for(var e=0;e<pokemon2.stats.length;e++)stats2[pokemon2.stats[e].stat.name]=pokemon2.stats[e].base_stat}function compareSpeed(){var e=stats1.speed/stats2.speed,a=stats2.speed/stats1.speed;userTurn===pokemon1?e>1?accuracy=.1*accuracy+accuracy:1>e?accuracy-=.1*accuracy:console.log("I fucked up in Compare Speed userTurn 1"):userTurn===pokemon2?a>1?accuracy=.1*accuracy+accuracy:1>a?accuracy-=.1*accuracy:console.log("I fucked up in Compare Speed userTurn 2"):console.log("I fucked up somewhere in compare Speed")}function compareAttack2Defense(){var e=stats1.attack/stats2.defense,a=stats2.attack/stats1.defense;userTurn===pokemon1?e>1?power=.1*power+power:1>e?power-=.1*power:console.log("I fucked up in Compare attack to defense userTurn 1"):userTurn===pokemon2?a>1?power=.1*power+power:1>a?power-=.1*power:console.log("I fucked up in Compare attack to defense userTurn 2"):console.log("I fucked up in compare Attack 2 Defense somewhere and it's probably really bad")}function compareSpecialAttack2Defense(){var e=stats1["special-attack"]/stats2["special-defense"],a=stats2["special-attack"]/stats1["special-defense"];userTurn===pokemon1?e>1?power=.1*power+power:1>e?power-=.1*power:console.log("I fucked up in Compare Special Attack 2 defense userTurn 1"):userTurn===pokemon2?a>1?power=.1*power+power:1>a?power-=.1*power:console.log("I fucked up in Compare Special-attack to special-defense userTurn 2"):console.log("I fucked up in compare Special-Attack 2 Special-Defense somewhere and it's probably really bad")}function ifAttackType(){userTurn===pokemon1?doubleDamageTo.indexOf(pokemon2.types[pokemon2.types.length-1].type.name)>-1?(power=2*power,console.log("we are in Double power")):halfDamageTo.indexOf(pokemon2.types[pokemon2.types.length-1].type.name)>-1&&(power=.5*power,console.log("We are in half power")):userTurn===pokemon2&&(doubleDamageTo.indexOf(pokemon1.types[pokemon1.types.length-1].type.name)>-1?(power=2*power,console.log("we are in Double power")):halfDamageTo.indexOf(pokemon1.types[pokemon1.types.length-1].type.name)>-1&&(power=.5*power,console.log("We are in half power")))}function combineTypes(){"bug"===moveData.type.name?bugAttack():"dark"===moveData.type.name?darkAttack():"dragon"===moveData.type.name?dragonAttack():"electric"===moveData.type.name?electricAttack():"fairy"===moveData.type.name?fairyAttack():"fighting"===moveData.type.name?fightingAttack():"fire"===moveData.type.name?fireAttack():"flying"===moveData.type.name?flyingAttack():"ghost"===moveData.type.name?ghostAttack():"grass"===moveData.type.name?grassAttack():"ground"===moveData.type.name?groundAttack():"ice"===moveData.type.name?iceAttack():"normal"===moveData.type.name?normalAttack():"poison"===moveData.type.name?poisonAttack():"psychic"===moveData.type.name?psychicAttack():"rock"===moveData.type.name?rockAttack():"steel"===moveData.type.name?steelAttack():"water"===moveData.type.name?waterAttack():(console.log("I'm fucked, just royally fucked"),console.log("I'm fucking dead. Seriously I fucking hate this by now."))}function bugAttack(){doubleDamageTo=["psychic","grass","dark"],halfDamageTo=["fight","fire","flying","ghost","poison","steel","fairy"],ifAttackType()}function darkAttack(){doubleDamageTo=["ghost","psychic"],halfDamageTo=["dark","fight","fairy"],ifAttackType()}function dragonAttack(){doubleDamageTo=["dragon"],halfDamageTo=["steel"],noDamageTo=["fairy"],ifAttackType()}function electricAttack(){doubleDamageTo=["flying","water"],halfDamageTo=["dragon","electric","grass"],noDamageTo=["ground"],ifAttackType()}function fairyAttack(){doubleDamageTo=["dark","dragon","fight"],halfDamageTo=["fire","poison","steel"],ifAttackType()}function fightingAttack(){doubleDamageTo=["dark","ice","normal","rock","steel"],halfDamageTo=["bug","fairy","flying","poison","psychic"],noDamageTo=["ghost"],ifAttackType()}function fireAttack(){doubleDamageTo=["bug","grass","ice","steel"],halfDamageTo=["dragon","fire","rock","water"],ifAttackType()}function flyingAttack(){doubleDamageTo=["bug","fight","grass"],halfDamageTo=["electric","rock","steel"],ifAttackType()}function ghostAttack(){doubleDamageTo=["ghost","psychic"],halfDamageTo=["dark"],noDamageTo=["normal"],ifAttackType()}function grassAttack(){doubleDamageTo=["ground","rock","water"],halfDamageTo=["bug","dragon","fire","flying","grass","poison","steel"],ifAttackType()}function groundAttack(){doubleDamageTo=["electric","fire","poison","rock","steel"],halfDamageTo=["bug","grass"],ifAttackType()}function iceAttack(){doubleDamageTo=["dragon","flying","grass","ground"],halfDamageTo=["fire","ice","steel","water"],ifAttackType()}function normalAttack(){doubleDamageTo=[],halfDamageTo=["rock","steel"],noDamageTo=["ghost"],ifAttackType()}function poisonAttack(){doubleDamageTo=["grass","fairy"],halfDamageTo=["ghost","ground","poison","rock"],noDamageTo=["steel"],ifAttackType()}function psychicAttack(){doubleDamageTo=["fight","poison"],halfDamageTo=["psychic","steel"],noDamageTo=["dark"]}function rockAttack(){doubleDamageTo=["bug","fire","flying","ice"],halfDamageTo=["fight","ground","steel"],ifAttackType()}function steelAttack(){doubleDamageTo=["fairy","ice","rock"],halfDamageTo=["electric","fire","steel","water"],ifAttackType()}function waterAttack(){doubleDamageTo=["fire","ground","rock"],halfDamageTo=["dragon","grass","water"],ifAttackType()}var pokemon1,pokemon2,pokemon1Health=1e3,pokemon2Health=1e3,userTurn,accuracy,power,el=document.createElement("h5"),us1mv1Data,us1mv1damageClass,us1mv1accuracy,us1mv1power,us1mv2Data,us1mv2damageClass,us1mv2accuracy,us1mv2power,us1mv3Data,us1mv3damageClass,us1mv3accuracy,us1mv3power,us1mv4Data,us1mv4damageClass,us1mv4accuracy,us1mv4power,us1mv1damageType,us1mv2damageType,us1mv3damageType,us1mv4damageType,moveData,damageClass,us2mv1Data,us2mv1damageClass,us2mv1accuracy,us2mv1power,us2mv2Data,us2mv2damageClass,us2mv2accuracy,us2mv2power,us2mv3Data,us2mv3damageClass,us2mv3accuracy,us2mv3power,us2mv4Data,us2mv4damageClass,us2mv4accuracy,us2mv4power,us2mv1damageType,us2mv2damageType,us2mv3damageType,us2mv4damageType,typeOfPokemon1,typeOfPokemon2,doubleDamageTo,halfDamageTo,noDamageTo,sprite1=document.getElementById("pokeSelect1"),pokeBtn1=document.getElementById("btnPokeSelect1");pokeBtn1.addEventListener("click",getPokemonSprite);var sprite2=document.getElementById("pokeSelect2"),pokeBtn2=document.getElementById("btnPokeSelect2");pokeBtn2.addEventListener("click",getPokemon2Sprite);var battleButton=document.getElementById("battleBegin");battleButton.addEventListener("click",beginBattle);var us1mv1=document.getElementById("us1mv1"),us1mv2=document.getElementById("us1mv2"),us1mv3=document.getElementById("us1mv3"),us1mv4=document.getElementById("us1mv4"),us2mv1=document.getElementById("us2mv1"),us2mv2=document.getElementById("us2mv2"),us2mv3=document.getElementById("us2mv3"),us2mv4=document.getElementById("us2mv4");us1mv1.addEventListener("click",getMove1),us1mv2.addEventListener("click",getMove1),us1mv3.addEventListener("click",getMove1),us1mv4.addEventListener("click",getMove1),us2mv1.addEventListener("click",getMove2),us2mv2.addEventListener("click",getMove2),us2mv3.addEventListener("click",getMove2),us2mv4.addEventListener("click",getMove2);var turnHeader=document.getElementById("turnHeader"),user1Health=document.querySelector("#us1Health"),user2Health=document.querySelector("#us2Health");disablePokemon1Buttons(),disablePokemon2Buttons();var stats1={},stats2={};
