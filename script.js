'use strict';
// {"name":"tackle","url":"https://pokeapi.co/api/v2/move/33/"}
//http://pokeapi.co/api/v2/pokemon-form/

//GLOBAL VARIABLES
var pokemon1;
var pokemon2;
var pokemon1Health = 100;
var pokemon2Health = 100;
var userTurn;
var accuracy;
var power;
var el = document.createElement('h5');

function ajax(method, url, handler, data) {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    if(this.readyState === 4){
      if(this.status === 200) {
        handler(null, JSON.parse(this.responseText));
      } else {
        handler(this.statuscode, null);
      }
    }
  };

  req.open(method, url);
  if (method === 'POST') {
    req.setRequestHeader("Content-type", "application/JSON");
    req.send(data);
  } else {
  req.send();
  }
}


var us1mv1Data;
var us1mv1damageClass;
var us1mv1accuracy;
var us1mv1power;
var us1mv2Data;
var us1mv2damageClass;
var us1mv2accuracy;
var us1mv2power;
var us1mv3Data;
var us1mv3damageClass;
var us1mv3accuracy;
var us1mv3power;
var us1mv4Data;
var us1mv4damageClass;
var us1mv4accuracy;
var us1mv4power;

var us2mv1Data;
var us2mv1damageClass;
var us2mv1accuracy;
var us2mv1power;
var us2mv2Data;
var us2mv2damageClass;
var us2mv2accuracy;
var us2mv2power;
var us2mv3Data;
var us2mv3damageClass;
var us2mv3accuracy;
var us2mv3power;
var us2mv4Data;
var us2mv4damageClass;
var us2mv4accuracy;
var us2mv4power;


var sprite1 = document.getElementById('pokeSelect1');
function getPokemonSprite() {
  ajax("GET", "http://pokeapi.co/api/v2/pokemon/" + sprite1.value, function(err, data) {
    //console.log(data);
    var sprites = data.sprites.front_default;
    document.getElementsByTagName('img')[0].setAttribute('src', sprites);
    var pokemon = data.name;
    pokemon1 = data;
    document.getElementById("user1Pokemon").innerHTML = pokemon.toUpperCase();
    movesFinderPokemon1();
    statsPokemon1();


    ajax("GET", "https://pokeapi.co/api/v2/move/" + us1mv1.value, function(err, data) {
      us1mv1Data = data;
      //console.log(data.accuracy);
      //console.log(us1mv1Data[damage_class][name]);
      us1mv1damageClass = us1mv1Data.damage_class.name;
      //console.log(damageClass);
      us1mv1accuracy = us1mv1Data.accuracy;
      us1mv1power = us1mv1Data.power;

    });
    ajax("GET", "https://pokeapi.co/api/v2/move/" + us1mv2.value, function(err, data) {
      us1mv2Data = data;
      //console.log(data.accuracy);
      //console.log(us1mv2Data[damage_class][name]);
      us1mv2damageClass = us1mv2Data.damage_class.name;
      //console.log(damageClass);
      us1mv2accuracy = us1mv2Data.accuracy;
      us1mv2power = us1mv2Data.power;

    });
    ajax("GET", "https://pokeapi.co/api/v2/move/" + us1mv3.value, function(err, data) {
      us1mv3Data = data;
      //console.log(data.accuracy);
      //console.log(us1mv3Data[damage_class][name]);
      us1mv3damageClass = us1mv3Data.damage_class.name;
      //console.log(damageClass);
      us1mv3accuracy = us1mv3Data.accuracy;
      us1mv3power = us1mv3Data.power;

    });
    ajax("GET", "https://pokeapi.co/api/v2/move/" + us1mv4.value, function(err, data) {
      us1mv4Data = data;
      //console.log(data.accuracy);
      //console.log(us1mv4Data[damage_class][name]);
      us1mv4damageClass = us1mv4Data.damage_class.name;
      //console.log(damageClass);
      us1mv4accuracy = us1mv4Data.accuracy;
      us1mv4power = us1mv4Data.power;

    });
  });
}
var pokeBtn1 = document.getElementById('btnPokeSelect1');
pokeBtn1.addEventListener('click', getPokemonSprite);

var sprite2 = document.getElementById('pokeSelect2');
function getPokemon2Sprite() {
  ajax("GET", "http://pokeapi.co/api/v2/pokemon/" + sprite2.value, function(err, data) {
    //console.log(data);
    var sprites = data.sprites.front_default;
    document.getElementsByTagName('img')[1].setAttribute('src', sprites);
    var pokemon = data.name;
    pokemon2 = data;
    document.getElementById("user2Pokemon").innerHTML = pokemon.toUpperCase();
    movesFinderPokemon2();
    statsPokemon2();

      ajax("GET", "https://pokeapi.co/api/v2/move/" + us2mv1.value, function(err, data) {
        us2mv1Data = data;
        //console.log(data.accuracy);
        //console.log(us2mv1Data[damage_class][name]);
        us2mv1damageClass = us2mv1Data.damage_class.name;
        //console.log(damageClass);
        us2mv1accuracy = us2mv1Data.accuracy;
        us2mv1power = us2mv1Data.power;

      });
      ajax("GET", "https://pokeapi.co/api/v2/move/" + us2mv2.value, function(err, data) {
        us2mv2Data = data;
        //console.log(data.accuracy);
        //console.log(moveData[damage_class][name]);
        us2mv2damageClass = us2mv2Data.damage_class.name;
        //console.log(damageClass);
        us2mv2accuracy = us2mv2Data.accuracy;
        us2mv2power = us2mv2Data.power;

      });
      ajax("GET", "https://pokeapi.co/api/v2/move/" + us2mv3.value, function(err, data) {
        us2mv3Data = data;
        //console.log(data.accuracy);
        //console.log(us2mv3Data[damage_class][name]);
        us2mv3damageClass = us2mv3Data.damage_class.name;
        //console.log(damageClass);
        us2mv3accuracy = us2mv3Data.accuracy;
        us2mv3power = us2mv3Data.power;

      });
      ajax("GET", "https://pokeapi.co/api/v2/move/" + us2mv4.value, function(err, data) {
        us2mv4Data = data;
        //console.log(data.accuracy);
        //console.log(us2mv4Data[damage_class][name]);
        us2mv4damageClass = us2mv4Data.damage_class.name;
        //console.log(damageClass);
        us2mv4accuracy = us2mv4Data.accuracy;
        us2mv4power = us2mv4Data.power;
      });
  });
}
var pokeBtn2 = document.getElementById('btnPokeSelect2');
pokeBtn2.addEventListener('click', getPokemon2Sprite);

function beginBattle(){
  user1Health.innerText = "Hp: " + pokemon1Health.toString();
  user2Health.innerText = "Hp: " + pokemon2Health.toString();
  //console.log('in Begin Battle')
  if(pokemon1.hasOwnProperty('name') && pokemon2.hasOwnProperty('name')){
    //console.log("inside pokemon1 property")
    if(diceRoll() < 5){
      userTurn = pokemon1;
      var turn = document.getElementById('turn');
      turn.appendChild(el);
      el.innerText = "User 1";
    } else {
      userTurn = pokemon2;
      var turn = document.getElementById('turn');
      turn.appendChild(el);
      el.innerText = "User 2";
      el.setAttribute('id', 'turnHeader');
    }

    buttonEnabling();
    document.getElementById('btnPokeSelect1').disabled = true;
    document.getElementById('btnPokeSelect2').disabled = true;
    document.getElementById('battleBegin').disabled = true;
  }
  pokemon1Health = 100;
  pokemon2Health = 100;
  user1Health.innerHTML = "Hp: 100";
  user2Health.innerHTML = "Hp: 100";
}

var battleButton = document.getElementById('battleBegin');
battleButton.addEventListener('click', beginBattle);



var us1mv1 = document.getElementById('us1mv1');
var us1mv2 = document.getElementById('us1mv2');
var us1mv3 = document.getElementById('us1mv3');
var us1mv4 = document.getElementById('us1mv4');
var us2mv1 = document.getElementById('us2mv1');
var us2mv2 = document.getElementById('us2mv2');
var us2mv3 = document.getElementById('us2mv3');
var us2mv4 = document.getElementById('us2mv4');

us1mv1.addEventListener('click', getMove1);
us1mv2.addEventListener('click', getMove1);
us1mv3.addEventListener('click', getMove1);
us1mv4.addEventListener('click', getMove1);
us2mv1.addEventListener('click', getMove2);
us2mv2.addEventListener('click', getMove2);
us2mv3.addEventListener('click', getMove2);
us2mv4.addEventListener('click', getMove2);

var moveData;
//Move event listener
function getMove1(event) {

  if(event.target.id === "us1mv1") {
    moveData = us1mv1Data;
  } else if (event.target.id === "us1mv2") {
    moveData = us1mv2Data;
  } else if (event.target.id === "us1mv3") {
    moveData = us1mv3Data;
  } else if (event.target.id === "us1mv4") {
    moveData = us1mv4Data;
  } else {
    console.log("I fucked up in get Move 1");
  }

  var damageClass;
    console.log(moveData);
    damageClass = moveData.damage_class.name;
    accuracy = moveData.accuracy;
    power = moveData.power;
attack();

}

//Move event listener
function getMove2(event) {

  if(event.target.id === "us2mv1") {
    moveData = us2mv1Data;
  } else if (event.target.id === "us2mv2") {
    moveData = us2mv2Data;
  } else if (event.target.id === "us2mv3") {
    moveData = us2mv3Data;
  } else if (event.target.id === "us2mv4") {
    moveData = us2mv4Data;
  } else {
    console.log("I fucked up in get Move 2");
  }

  var damageClass;
    console.log(moveData);
    damageClass = moveData.damage_class.name;
    accuracy = moveData.accuracy;
    power = moveData.power;
attack();

}

var turnHeader = document.getElementById('turnHeader');

//DICE ROLL
function diceRoll() {
    return Math.floor(Math.random() * 10 + 1);
}


//ATTACK
function attack() {
  //DETERMINE ATTACKER
  if(userTurn === pokemon1){
    //console.log("inside user 1 attack");
    //attacking pokemon2Health;
    //console.log(pokemon1);
    accJudge();
    userTurn = pokemon2;
    checkHealth();
    buttonEnabling();
  } else if (userTurn === pokemon2) {
    //console.log("inside user 2");
    // attacking pokemon1Health;
    //console.log(pokemon2);
    accJudge2();
    userTurn = pokemon1;
    checkHealth();
    buttonEnabling();
  } else {
    console.log("I don't know what the fuck is going on inside Attack");
  }
}


var user1Health = document.querySelector('#us1Health');
var user2Health = document.querySelector('#us2Health');


//ACCURACY DICE ROLL FOR ATTACK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function accJudge() {
  //console.log(accuracy);
  compareSpeed();
  //find way to add bonuses where appropriate.
  //compareAttack2Defense();
  console.log(power);
  if(diceRoll() < accuracy / 10) {
    //console.log(accuracy);
    //successful attack, deduct attack power from health
      pokemon2Health -=  power;
      //console.log(pokemon2Health);
      user2Health.innerText = "Hp: " + pokemon2Health.toString();
      alert("Attack successful");
  } else {
    return alert("Your attack missed!");
  }
  console.log(power);
}
function accJudge2() {
  //console.log(accuracy);
  compareSpeed();
  //compareAttack2Defense();
  console.log(power);
  if(diceRoll() < accuracy / 10) {
    //console.log(accuracy);
    //successful attack, deduct attack power from health
      pokemon1Health -=  power;
      //console.log(pokemon1Health);
      user1Health.innerText = "Hp: " + pokemon1Health.toString();
      alert("Attack successful");
  } else {
    return alert("Your attack missed!");

  }
  console.log(power);
}
//disable user 1 moves
function disablePokemon1Buttons() {
  document.querySelector('#us1mv1').disabled = true;
  document.querySelector('#us1mv2').disabled = true;
  document.querySelector('#us1mv3').disabled = true;
  document.querySelector('#us1mv4').disabled = true;
}
disablePokemon1Buttons();
//disable user 2 moves
function disablePokemon2Buttons() {
  document.querySelector('#us2mv1').disabled = true;
  document.querySelector('#us2mv2').disabled = true;
  document.querySelector('#us2mv3').disabled = true;
  document.querySelector('#us2mv4').disabled = true;
}
disablePokemon2Buttons();
//enable User1 moves
function enablePokemon1Buttons() {
  document.querySelector('#us1mv1').disabled = false;
  document.querySelector('#us1mv2').disabled = false;
  document.querySelector('#us1mv3').disabled = false;
  document.querySelector('#us1mv4').disabled = false;
}
//enable User2 moves
function enablePokemon2Buttons() {
  document.querySelector('#us2mv1').disabled = false;
  document.querySelector('#us2mv2').disabled = false;
  document.querySelector('#us2mv3').disabled = false;
  document.querySelector('#us2mv4').disabled = false;
}
//toggle buttons
function buttonEnabling() {
  if(userTurn === pokemon2) {
    disablePokemon1Buttons();
    //enable user 2 moves
    enablePokemon2Buttons();

  } else if(userTurn === pokemon1) {
    disablePokemon2Buttons();
    enablePokemon1Buttons();
  } else {

  }
}


//HEALTH CHECK
function checkHealth() {
    if(pokemon1Health <= 0 || pokemon2Health <= 0){
      if(pokemon1Health <= 0) {

        //disable user 1 moves
        disablePokemon1Buttons();
        //Disable user2 moves
        disablePokemon2Buttons();
        alert(pokemon1.name.toUpperCase() + " has fainted and " + pokemon2.name.toUpperCase() + " has won!");
        endBattle();
      } else if (pokemon2Health <= 0) {
        //disable user 1 moves
        disablePokemon1Buttons();
        //Disable user2 moves
        disablePokemon2Buttons();
        alert(pokemon2.name.toUpperCase() + " has fainted and " + pokemon1.name.toUpperCase() + " has won!");
        endBattle();
      } else {

      }
  }
}
//End battle function
function endBattle() {
  userTurn = null;
  document.getElementById('btnPokeSelect1').disabled = false;
  document.getElementById('btnPokeSelect2').disabled = false;
  document.getElementById('battleBegin').disabled = false;
  el.innerHTML = "Winner!";


}

//loop through selected pokemon to get moves name
// pokemon1.moves[i].move.name will get names of move
//pokemon1.moves[i].move.url will get url of move
//Will need to use GET request to get move data for power and accuracy stats

//This could be prettier but for now will be 2 functions ONE FOR EACH POKEMON
function movesFinderPokemon1() {
  var movesArray = [];
  for(var i = 0; i < pokemon1.moves.length; i++) {
    //console.log(pokemon1.moves[i].move.name);
    if(pokemon1.moves[i].version_group_details[0].level_learned_at === 0) {
      movesArray.push(pokemon1.moves[i].move.name);
    }
  }
  //console.log(movesArray);
    var move1 = movesArray[diceRoll(movesArray.length)];
    var move2 = movesArray[diceRoll(movesArray.length)];
    var move3 = movesArray[diceRoll(movesArray.length)];
    var move4 = movesArray[diceRoll(movesArray.length)];

    document.querySelector('#us1mv1').value = move1;
    document.querySelector('#us1mv1').innerHTML = move1;
    document.querySelector('#us1mv2').value = move2;
    document.querySelector('#us1mv2').innerHTML = move2;
    document.querySelector('#us1mv3').value = move3;
    document.querySelector('#us1mv3').innerHTML = move3;
    document.querySelector('#us1mv4').value = move4;
    document.querySelector('#us1mv4').innerHTML = move4;
}


function movesFinderPokemon2() {
  var movesArray = [];
  for(var i = 0; i < pokemon2.moves.length; i++) {
    //console.log(pokemon1.moves[i].move.name);
    if(pokemon2.moves[i].version_group_details[0].level_learned_at === 0) {
      movesArray.push(pokemon2.moves[i].move.name);
    }
  }
  //console.log(movesArray);
  var move1 = movesArray[diceRoll(movesArray.length)];
  var move2 = movesArray[diceRoll(movesArray.length)];
  var move3 = movesArray[diceRoll(movesArray.length)];
  var move4 = movesArray[diceRoll(movesArray.length)];

  document.querySelector('#us2mv1').value = move1;
  document.querySelector('#us2mv1').innerHTML = move1;
  document.querySelector('#us2mv2').value = move2;
  document.querySelector('#us2mv2').innerHTML = move2;
  document.querySelector('#us2mv3').value = move3;
  document.querySelector('#us2mv3').innerHTML = move3;
  document.querySelector('#us2mv4').value = move4;
  document.querySelector('#us2mv4').innerHTML = move4;
}


//GET POKEMON STATS
//pokemon.stats[i].base_stat === stat value
//pokemon.stats[i].base_stat.stat[name] === stat name
var stats1 = {};
function statsPokemon1(){
  for(var k = 0; k < pokemon1.stats.length; k++){
    stats1[pokemon1.stats[k].stat.name] = pokemon1.stats[k].base_stat;
  }
}
var stats2 = {};
function statsPokemon2(){
  for(var k = 0; k < pokemon2.stats.length; k++){
    stats2[pokemon2.stats[k].stat.name] = pokemon2.stats[k].base_stat;
  }
}


//Time to start factoring in stats to attacks
function compareSpeed(){
  var pokemon1Speed = stats1.speed / stats2.speed;
  var pokemon2Speed = stats2.speed / stats1.speed;
  if (userTurn === pokemon1) {
    accuracy *= pokemon1Speed;
  } else if (userTurn === pokemon2) {
    accuracy *= pokemon2Speed;
  } else {
    console.log("I fucked up somewhere in compare Speed");
  }
}

function compareAttack2Defense(){
  var pokemon1Attack = stats1.attack / stats2.defense;
  var pokemon2Attack = stats2.attack / stats1.defense;
  if(userTurn === pokemon1) {
    power *= pokemon1Attack;
  } else if (userTurn === pokemon2) {
    power *= pokemon2Attack;
  } else {
    console.log("I fucked up in compare Attack 2 Defense");
  }
}

function compareAttackandDefense() {

}

// function compareSpecialAttack2Defense() {
//   var pokemon1SpecialAttack = stats1[special-attack] / stats2[special-defense];
//   var pokemon2SpecialAttack = stats2[special-attack] / stats1[special-defense];
//   if (userTurn === pokemon1) {
//     power *= pokemon1SpecialAttack;
//   } else if(userTurn === pokemon2){
//     power *= pokemon2SpecialAttack;
//   } else {
//     console.log("I fucked up in special Attack 2 Defense");
//   }
// }




//