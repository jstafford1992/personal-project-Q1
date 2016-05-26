'use strict';
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
    //statsPokemon1();


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
    //statsPokemon2();
  });
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
}
var pokeBtn2 = document.getElementById('btnPokeSelect2');
pokeBtn2.addEventListener('click', getPokemon2Sprite);

var us1mv1 = document.getElementById('us1mv1');
var us1mv2 = document.getElementById('us1mv2');
var us1mv3 = document.getElementById('us1mv3');
var us1mv4 = document.getElementById('us1mv4');
var us2mv1 = document.getElementById('us2mv1');
var us2mv2 = document.getElementById('us2mv2');
var us2mv3 = document.getElementById('us2mv3');
var us2mv4 = document.getElementById('us2mv4');


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


function diceRoll() {
    return Math.floor(Math.random() * 10 + 1);
}
