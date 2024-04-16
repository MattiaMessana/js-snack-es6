const teams = [
    {
        nome: "Palermo",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Catania",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Messina",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Trapani",
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

teams.forEach((curTeam) => {
    curTeam.falliSubiti = numRandom(0, 100);
    curTeam.puntiFatti = numRandom(0, 100);
});

console.log(teams);

const newTeams = teams.map((curTeam => {
    const {nome , falliSubiti} = curTeam;
    return {
        nome,
        falliSubiti,
    };
}));



console.log(newTeams);

function numRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}