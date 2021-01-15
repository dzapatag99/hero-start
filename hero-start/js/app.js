import {magic, weapons, gem, character, stateHero} from "./data.js";


  function setCharacter(set){
    let container = document.querySelector("#personaje");
    container.innerHTML = "";
    container.innerHTML = `
        <div class="box-hero"><img src="img/hero-${set}.png" alt=""></div>
            <div id="skills">
            <div id="points-attack"></div>
            <div id="points-defense"></div>
        </div>
    `
  }

  function changeCharacter(){
     let buttons = document.querySelectorAll(".btn-character");
     for ( let i=0; i<buttons.length; i++){
         buttons[i].onclick = () => {
            setCharacter(buttons[i].value);
            buttons[i].classList.toggle("btn-character-on");
         }
     }
  }

  changeCharacter();