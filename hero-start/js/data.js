// Dades globals
export const magic = ["fire", "ice", "lightning", "wind"];
export const weapons = ["crossbow", "sword", "hatchet", "shield"];
export const character = ["witcher", "aragon", "vampire", "sirocu"];

// JSON
export const gem = [
  { name: "esmerald", fire: 2, ice: 2 },
  { name: "ruby", fire: 2, ice: 1 },
  { name: "diamond", fire: 2, wind: 2 },
  { name: "sapphire", lightning: 2, wind: 2 },
];

// Objeto del estado actual
export let stateHero = {
  name: "witcher",
  fullName: "The Witcher",
  skills: {
    attack: 4,
    defense: 3,
    speed: 5
  },
  aMagic: [],
  aWeapons: [],
  aGem: [],
  calculateIncrementMagic: function (gem) {
    return this.crossbow + this.magic.fire;
  },
  calculateAttack: function () {
    let pointsItems = this.aWeapons.length + this.aMagic.length;
    return this.skills.attack + pointsItems;
  },
  calculateDefense: function () {
    let pointsItems = 0;
    let found = this.aWeapons.find(e => e == 'shield');
    if (found) pointsItems++;
    return this.skills.defense + pointsItems;
  },
  changeCharacter: function ()  {
    let container = document.querySelector("#box-personaje");
    container.innerHTML = "";

  }
};

  