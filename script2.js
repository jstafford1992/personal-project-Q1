'use strict';

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
  });

  ajax("GET", "https://pokeapi.co/api/v2/move/" + us1mv1.value, function(err, data) {
    us1mv1Data = data;
    //console.log(data.accuracy);
    //console.log(moveData[damage_class][name]);
    us1mv1damageClass = moveData.damage_class.name;
    //console.log(damageClass);
    us1mv1accuracy = moveData.accuracy;
    us1mv1power = moveData.power;

  });
  ajax("GET", "https://pokeapi.co/api/v2/move/" + us1mv2.value, function(err, data) {
    us1mv2Data = data;
    //console.log(data.accuracy);
    //console.log(moveData[damage_class][name]);
    us1mv2damageClass = moveData.damage_class.name;
    //console.log(damageClass);
    us1mv2accuracy = moveData.accuracy;
    us1mv2power = moveData.power;

  });
  ajax("GET", "https://pokeapi.co/api/v2/move/" + us1mv3.value, function(err, data) {
    us1mv3Data = data;
    //console.log(data.accuracy);
    //console.log(moveData[damage_class][name]);
    us1mv3damageClass = moveData.damage_class.name;
    //console.log(damageClass);
    us1mv3accuracy = moveData.accuracy;
    us1mv3power = moveData.power;

  });
  ajax("GET", "https://pokeapi.co/api/v2/move/" + us1mv4.value, function(err, data) {
    us1mv4Data = data;
    //console.log(data.accuracy);
    //console.log(moveData[damage_class][name]);
    us1mv4damageClass = moveData.damage_class.name;
    //console.log(damageClass);
    us1mv4accuracy = moveData.accuracy;
    us1mv4power = moveData.power;

  });
}


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
  });
  ajax("GET", "https://pokeapi.co/api/v2/move/" + us2mv1.value, function(err, data) {
    us2mv1Data = data;
    //console.log(data.accuracy);
    //console.log(moveData[damage_class][name]);
    us2mv1damageClass = moveData.damage_class.name;
    //console.log(damageClass);
    us2mv1accuracy = moveData.accuracy;
    us2mv1power = moveData.power;

  });
  ajax("GET", "https://pokeapi.co/api/v2/move/" + us2mv2.value, function(err, data) {
    us2mv2Data = data;
    //console.log(data.accuracy);
    //console.log(moveData[damage_class][name]);
    us2mv2damageClass = moveData.damage_class.name;
    //console.log(damageClass);
    us2mv2accuracy = moveData.accuracy;
    us2mv2power = moveData.power;

  });
  ajax("GET", "https://pokeapi.co/api/v2/move/" + us2mv3.value, function(err, data) {
    us2mv3Data = data;
    //console.log(data.accuracy);
    //console.log(moveData[damage_class][name]);
    us2mv3damageClass = moveData.damage_class.name;
    //console.log(damageClass);
    us2mv3accuracy = moveData.accuracy;
    us2mv3power = moveData.power;

  });
  ajax("GET", "https://pokeapi.co/api/v2/move/" + us2mv4.value, function(err, data) {
    us2mv4Data = data;
    //console.log(data.accuracy);
    //console.log(moveData[damage_class][name]);
    us2mv4damageClass = moveData.damage_class.name;
    //console.log(damageClass);
    us2mv4accuracy = moveData.accuracy;
    us2mv4power = moveData.power;

  });
}


var us1mv1 = document.getElementById('us1mv1');
var us1mv2 = document.getElementById('us1mv2');
var us1mv3 = document.getElementById('us1mv3');
var us1mv4 = document.getElementById('us1mv4');
var us2mv1 = document.getElementById('us2mv1');
var us2mv2 = document.getElementById('us2mv2');
var us2mv3 = document.getElementById('us2mv3');
var us2mv4 = document.getElementById('us2mv4');
