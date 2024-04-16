//creiamo un arrey di oggetti per le bici 
const bikesList = [
        {   name: "Mountain Beast", 
            weight: 9500, 
        }, 

        {   name: "Speedster", 
            weight: 7800, 
        }, 

        {   name: "City Cruiser", 
            weight: 11000, 
        }, 

        {   name: "Touring Master", 
            weight: 10500, 
        }, 

        {   name: "Electric Explorer", 
            weight: 12000,
        }
];

let lightBike = bikesList[0];
console.log(lightBike);

bikesList.forEach((curBici) => {
    console.log(curBici, lightBike);
    if (curBici.weight < lightBike.weight) {
        lightBike = curBici;
    }
});

const {name, weight} = lightBike;
console.log(`La bici più leggera è ${name} con un peso di ${weight}`);
