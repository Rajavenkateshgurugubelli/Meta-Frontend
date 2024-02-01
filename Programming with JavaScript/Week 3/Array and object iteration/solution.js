// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (d of dairy) {
        console.log(d);
    }

}
logDairy();
// Task 2
const animal = {
    canJump: true
}
const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {

    for ( b of Object.keys(bird)) {
        console.log(`${b}: ${bird[b]}`);
    }
}
// Task 3
birdCan();
function animalCan() {
    for (a in bird) {
        console.log(`${a}: ${bird[a]}`);
    }
}
animalCan();