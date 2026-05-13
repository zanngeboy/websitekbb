const container =
  document.getElementById("container");

const simbol = [
  "⚀","⚁","⚂",
  "⚃","⚄","⚅"
];

function rollAllDice(){

  container.innerHTML = "";

  let total = 0;

  let hasil = [];

  for(let i=0;i<9;i++){

    const angka =
      Math.floor(Math.random()*6)+1;

    total += angka;

    hasil.push(angka);

    const dice =
      document.createElement("div");

    dice.className = "dice";

    dice.innerHTML =
      simbol[angka-1];

    container.appendChild(dice);
  }

  document.getElementById("total")
    .innerHTML =
    "Total: " + total;

  kirimTelegram(hasil,total);
}

async function kirimTelegram(
  hasil,total
){

  await fetch(
    "http://localhost:3000/dadu",
    {
      method:"POST",

      headers:{
        "Content-Type":
        "application/json"
      },

      body:JSON.stringify({
        hasil,
        total
      })
    }
  );
}
