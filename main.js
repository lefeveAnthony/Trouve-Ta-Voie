let voies = [
  "1-vert",
  "1-noir",
  "1-blanc",
  "2-",
  "3-violet",
  "3-vert",
  "4-blanc",
  "4-jaune",
  "4-orange",
  "5-rouge",
  "5-vert",
  "5-bleu",
  "6-orange",
  "6-noir/blanc",
  "6-Rouge+vert",
  "6-Rouge",
  "7-jaune",
  "7-bleu",
  "7-vert",
  "8-blanc",
  "8-marron",
  "8-rouge",
  "9-orange",
  "9-vert",
  "9-rose",
  "10-bleu",
  "10-rouge",
  "10-blanc",
  "10-noir",
  "11-vert",
  "11-jaune",
  "11-orange",
  "12-jaune",
  "12-violet",
  "12-bleu",
  "13-rose",
  "13-violet",
  "13-marbrée",
  "13-blanc",
  "14-jaune",
  "14-blanc",
  "14-rouge",
  "15-vert",
  "15-gris",
  "15-violet",
  "16-jaune",
  "16-orange",
  "16-blanc",
  "16-gris",
  "17-rouge",
  "17-orange",
  "17-bleu",
  "17-violet",
  "18-blanc",
  "18-jaune",
  "18-noir",
  "19-bleu",
  "19-gris",
  "19-violet",
  "20-jaune",
  "20-rouge",
  "20-vert",
  "21-gris",
  "21-bleu",
  "21-orange",
  "21-violet",
  "22-noir",
  "22-violet",
  "22-rouge",
  "22-vert"
];


function getNb(max){
  return Math.floor(Math.random() * max);
  
}

function tirer() {
  let tab = voies.length + 1;
  let result = voies[getNb(tab)].split("-");
  let textMur = document.getElementById("result_mur").innerText = result[0];
  let textVoie = document.getElementById("result_voie").innerText = result[1];
}

function displayMenu() {
  let menu = document.querySelector(".menu");
  let iconMenu = document.querySelector(".settings");
  if(menu.style.transform === "translateX(100%)"){
    menu.style.transform = "translateX(0)";
    menu.style.animation = "undisplay-menu 1s forwards";
    iconMenu.style.background = "#99CC66";
    iconMenu.src = "img/icon_settings.png";
    console.log("désaffiche");
  }else{
    menu.style.transform = "translateX(100%)";
    menu.style.animation = "display-menu 1s forwards";
    iconMenu.style.background = "#fff";
    iconMenu.src = "img/icon_settings_hover.png";
    console.log("affiche");
  }
}
