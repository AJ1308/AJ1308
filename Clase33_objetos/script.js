const objeto = new Object();
const objeto2 = {};
const player = {};
player.name = "Messi";
player.country = "Argentina";
player.old = 32;
//Métodos
player.marcado = () => {
  return "ha anotado";
};

player.asistido = () => {
  return "ha asistido";
};
let stadium = {
  //Atributos
  name: "Lusail",
  country: "Qatar",
  competition: "Copa del Mundo",
  aforo: 80000,
  //Métodos
  match(equipo_A, equipo_B) {
    let goles_A = 0;
    let goles_B = 0;
    let resultado = "";

    goles_A = Math.round(Math.random() * 5);
    goles_B = Math.round(Math.random() * 5);

    equipo_A.goles += goles_A;
    equipo_B.goles = equipo_B.goles + goles_B;

    if ((goles_A > goles_B, goles_B > goles_A)) {
      //Equipo A ganó
      equipo_A.pts += 3;
    }
    if (goles_A < goles_B) {
      //Equipo B ganó
      equipo_B.pts += 3;
    }
    if (goles_A === goles_B) {
      //Empate
      equipo_A.pts += 1;
      equipo_B.pts += 1;
    }
    // resultado =
    //   equipo_A.name +
    //   " VS " +
    //   equipo_B.name +
    //   " Score: " +
    //   goles_A +
    //   " - " +
    //   goles_B
    resultado = ` ${equipo_A.name} VS ${equipo_B.name}  Score : ${goles_A} - ${goles_B}`;

    return resultado;
  },
};

let team_psg = {
  name: "PSG",
  country: "France",
  color: "Azul y Rojo",
  goles: 0,
  pts: 0,
};
let team_america = {
  name: "America",
  country: "Mexico",
  color: "Amarillo",
  goles: 0,
  pts: 0,
};
let team_cristal = {
  name: "Cristal",
  country: "Peru",
  color: "Celeste",
  goles: 0,
  pts: 0,
};
let team_rojos = {
  name: "Municipal",
  country: "Guatemala",
  color: "Rojo",
  goles: 0,
  pts: 0,
};
//MAIN

console.log(stadium.match(team_america, team_psg));
console.log(stadium.match(team_rojos, team_cristal));
console.log(stadium.match(team_cristal, team_america));
console.log(stadium.match(team_psg, team_rojos));

console.log(team_america);
console.log(team_rojos);
console.log(team_cristal);
console.log(team_psg);

//Notación con puntos
// console.log(player.name);
// console.log(player.country);
// console.log(player.name, player.marcado());

// //Notacion con corchetes
// console.log(team["name"]);
// console.log(team["competition"]);
// console.log(team.name, team.empatar());

/**Añadiendo propiedades */
