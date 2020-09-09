let superheroes = require('superheroes');
let supervillains = require('supervillains');
//console.log(superheroes.random());

supervillains.all.forEach(supervillain => {
    console.log(supervillain);
});

console.log(supervillains.random());

console.log(`${superheroes.random()} fights ${supervillains.random()}`);


/*superheroes.all.forEach(hero => {
    console.log(hero);
});*/

//console.log(superheroes.all);

/* TASK1
1. Get the names of all supervillains
2. Get a random supervillain name
3.* Make a random superhero fight a random supervillain 
in the console.log()

*/
