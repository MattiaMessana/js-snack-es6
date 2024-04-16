//TEST
// alert("ciao");

const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
  ];

//variabili globali 
const autoBenzina = [];
const autoDiesel  = [];
const autoVarie   = [];

let auto = automobili[0];
console.log(auto);

let alimentazione = automobili[0].alimentazione;
console.log(alimentazione);


//ciclo for per inserire auto nell'array corrispondente 
for ( let i = 0 ; i < automobili.length ; i++) {
    if (alimentazione === "benzina" ) {
        autoBenzina.push(auto);
    } else if (alimentazione === "diesel") {
        autoDiesel.push(auto);
    } else {
        autoVarie.push(auto);
    }
} 

console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoVarie);