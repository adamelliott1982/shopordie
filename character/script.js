charName = prompt("What is your character's name?");
console.log(charName);

let character = {
    name: charName,
    hp: 10,
    zombieAware: false,
    haveWeapon: false,
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(`Welcome ${capitalizeFirstLetter(charName)}, it's a beautiful day!`);