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




//destructuring
const bike = document.getElementById("bike");


for (let i = 0 ; i < bikesList.length ; i++) {
    let weight = bikesList[i].weight;
    let name = bikesList[i].name;
    let minWeight = bikesList[i].weight

    if (minWeight < weight) {
        console.log();
    }
}


//stampo output 