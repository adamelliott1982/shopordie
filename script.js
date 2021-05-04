//CREATE CHARACTER OBJECT
let character;
character = {
    hp: 10,
    zombieAware: false,
    haveWeapon: false,
}

//AUDIO
let static = document.getElementById('static');
let doorOpen = document.getElementById('door-open');
let doorClose = document.getElementById('door-close');
let birds = document.getElementById('birds');
let knock = document.getElementById('knock');
let zombieBreath = document.getElementById('zombie-breath');
let zombieGroan = document.getElementById('zombie-groan');
let fryingPan = document.getElementById('frying-pan');
let steps1 = document.getElementById('steps-1');
let steps2 = document.getElementById('steps-2');
let cat = document.getElementById('cat');
let injury = document.getElementById('injury');
let metalDoor = document.getElementById('metal-door');
let upgrade = document.getElementById('upgrade');
let splat = document.getElementById('splat');
let victory = document.getElementById('victory');

//VARIABLE ASSIGNMENTS
let hpContainer = document.getElementById('hp-container');
let hpCount = document.getElementById('hp-count')
let titleContainer = document.getElementById('title-container');
let titleFade = document.getElementById('title-fade');
let play = document.getElementById('play');
let characterCreation = document.getElementById('character-creation')
let greetingText = document.getElementById('greeting-text');
let gameOver = document.getElementById('gameover-container')
let gameOverButtons = document.getElementById('gameover-buttons')
let tryAgain = document.getElementById('try-again')
let sayonara = document.getElementById('sayonara')
let charNameField = document.getElementById('character-name-field')
let acceptNameButton = document.getElementById('accept-name-button')

let buttonContainer1 = document.getElementById('button-container-1');
let buttonContainer2 = document.getElementById('button-container-2');
let buttonContainer3 = document.getElementById('button-container-3');
let buttonContainer4 = document.getElementById('button-container-4');
let buttonContainer5 = document.getElementById('button-container-5');
let buttonContainer6 = document.getElementById('button-container-6');
let buttonContainer7 = document.getElementById('button-container-7');
let buttonContainer8 = document.getElementById('button-container-8');
let buttonContainer9 = document.getElementById('button-container-9');

let zombie1 = document.getElementById('zombie-1');
let zombie2 = document.getElementById('zombie-2');
let zombie3 = document.getElementById('zombie-3');

//CITY
let cityLevel = document.getElementById('city-level');
let checkNews = document.getElementById('check-news');
let headDownstairs = document.getElementById('head-downstairs');
//STREET
let streetLevel = document.getElementById('street-level');
let streetText = document.getElementById('street-text');
let headInside = document.getElementById('head-inside');
let headGroceryStore = document.getElementById('head-grocery-store');
//WALKING
let walkingLevel = document.getElementById('walking-level');
let walkingH1 = document.getElementById('walking-h1');
let walkingText = document.getElementById('walking-text');
let headAlley = document.getElementById('head-alley');
let headGroceryStore2 = document.getElementById('head-grocery-store-2');
//ALLEY
let alleyLevel = document.getElementById('alley-level');
let alleyH1 = document.getElementById('alley-h1');
let alleyText = document.getElementById('alley-text');
let runAlley = document.getElementById('run');
let fight1 = document.getElementById('fight1');
let searchAlley = document.getElementById('search-alley')
let attackContainer = document.getElementById('attack-container');
let attackH1 = document.getElementById('attack-h1');
let attackText = document.getElementById('attack-text');
let damageContainer = document.getElementById('damage-container');
let damageH1 = document.getElementById('damage-h1');
let damageText = document.getElementById('damage-text');
//GROCERY OUTSIDE
let groceryOutside = document.getElementById('grocery-outside-level');
let headHome = document.getElementById('head-home');
let enterStore = document.getElementById('enter-store');
//GROCERY ENTRANCE
let groceryEntrance = document.getElementById('grocery-entrance-level');
//PHARMACY
let pharmacy = document.getElementById('pharmacy-level')
let pharmacyH1 = document.getElementById('pharmacy-h1')
let pharmacyText = document.getElementById('pharmacy-text')
let explorePharmacy1 = document.getElementById('explore-pharmacy-1');
let explorePharmacy3 = document.getElementById('explore-pharmacy-3');
//COOKING
let cooking = document.getElementById('cooking-level')
let exploreCooking1 = document.getElementById('explore-cooking-1');
let exploreCooking2 = document.getElementById('explore-cooking-2');
let leaveStore1 = document.getElementById('leave-store-1');
let leaveStore2 = document.getElementById('leave-store-2');
let leaveStore3 = document.getElementById('leave-store-3');
let fight2 = document.getElementById('fight2');
let findWeapon = document.getElementById('find-weapon');
let findWeaponText = document.getElementById('find-weapon-text');
let findMedicine = document.getElementById('find-medicine');
let findMedicineText = document.getElementById('find-medicine-text');
//END LEVEL
let endLevel = document.getElementById('end-level')
let complete = document.getElementById('complete')
let score = document.getElementById('score');

//function for title case found on stackoverflow
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
/////////////////////////////////////////////////////////////combat methods
function attackGiven(){
    attackContainer.style.display = 'flex';
    attackContainer.style.animation = 'fade-out 2s ease 2s forwards';
    function enemyGone(){
        if (alleyLevel.style.display == 'flex'){
           zombie1.style.display = 'none' ;
        }
        if (pharmacy.style.display == 'flex'){
            zombie2.style.display = 'none' ;
            zombie3.style.display = 'none' ;
            findMedicine.style.display = 'block';
        }
    }
    enemyGone()
}
function damageTaken(){
    damageContainer.style.display = 'flex'
    damageContainer.style.opacity = 1
    damageContainer.style.animation = 'fade-out 2s ease 2s forwards'
    character.hp -= 1;
    hpCount.innerText = character.hp
    injury.play()
}

////////////////////////////////////////////////////////////////combat events
fight1.addEventListener('click', function(){
    if (character.haveWeapon == true){
        attackGiven()
        fight1.style.display = 'none';
        runAlley.style.display = 'none';
        searchAlley.style.display = 'block';
        alleyH1.innerText = "Tango Down!"
        alleyText.innerText = "Thank goodness you found this frying pan..."
        fryingPan.play()
        zombieGroan.pause()
    } else {
        damageTaken()
        console.log(character.hp);
        if (character.hp == 1){
            alert("You are critically low on health!  You should find a weapon to take on these zombies!")
        }
        if (character.hp <= 0) {
            splat.play()
            console.log('You are dead');
            alleyLevel.style.display = 'none'
            gameOver.style.opacity = 0
            gameOver.style.display = 'flex'
            gameOver.style.animation = 'fade-in 2s ease 2s forwards'
            gameOverButtons.style.animation = 'fade-in 1s ease 2s forwards'
        }
    }
})
fight2.addEventListener('click', function(){
    if (character.haveWeapon == true){
        attackGiven()
        fight2.style.display = 'none';
        pharmacyH1.innerText = "Tango Down!"
        pharmacyText.innerText = "Thank goodness you found this frying pan..."
        fryingPan.play()
        zombieBreath.pause()
    } else {
        damageTaken()
        console.log(character.hp);
        if (character.hp == 1){
            alert("You are critically low on health!  You should find a weapon to take on these zombies!")
        }
        if (character.hp <= 0) {
            splat.play()
            console.log('You are dead');
            pharmacy.style.display = 'none'
            gameOver.style.opacity = 0
            gameOver.style.display = 'flex'
            gameOver.style.animation = 'fade-in 2s ease 2s forwards'
            gameOverButtons.style.animation = 'fade-in 2s ease 2s forwards'
        }
    }
})

//////////////////////////////////////////////////////////////set up opening scene
acceptNameButton.addEventListener('click', function(){
    charName = charNameField.value
    characterCreation.style.display = 'none';
    cityLevel.style.display = 'flex';
    cityLevel.style.animation = 'fade-in 2s ease forwards'
    greetingText.innerText = `Good morning ${capitalizeFirstLetter(charNameField.value)}, you've awoken to the sound of the birds singing, the sun shining...and a disturbing feeling deep within the pit of your stomach...`;
    birds.play()
})

//title-screen
play.addEventListener('click', function(){
    hpCount.innerText = character.hp
    titleContainer.style.display = 'none';
    characterCreation.style.display = 'flex'
    characterCreation.style.animation = 'fade-in 2s ease forwards';
    hpContainer.style.display = 'flex'
    hpContainer.style.animation = 'fade-in 2s ease forwards';
    buttonContainer1.style.animation = 'fade-in 1s ease 1s forwards'
    zombieGroan.play()
})

////////////////////////////////////////////////////////////////////////levels
//city-level
checkNews.addEventListener('click', function(){
    greetingText.innerText = "The news doesn't seem to be on...actually...none of these stations seem to be working..."
    static.play()
})
headDownstairs.addEventListener('click', function(){
    cityLevel.style.display = 'none'
    streetLevel.style.display = 'flex'
    streetLevel.style.animation = 'fade-in 2s ease forwards'
    buttonContainer2.style.animation = 'fade-in 1s ease 1s forwards'
    doorOpen.play()
    static.pause()
})
//street-level
headInside.addEventListener('click', function(){
    streetText.innerText = "Hmm...the front door seems to have closed behind you.  Funny, you don't recall them locking your building during the daytime..."
    knock.play()
})
headGroceryStore.addEventListener('click', function(){
    streetLevel.style.display = 'none'
    walkingLevel.style.display = 'flex'
    walkingLevel.style.animation = 'fade-in 2s ease forwards'
    buttonContainer3.style.animation = 'fade-in 1s ease 1s forwards'
    steps1.play()
    knock.pause()
})
// walking-level
headAlley.addEventListener('click', function(){
    walkingLevel.style.display = 'none'
    alleyLevel.style.display = 'flex'
    alleyLevel.style.animation = 'fade-in 2s ease forwards'
    buttonContainer4.style.animation = 'fade-in 1s ease 1s forwards'
    character.zombieAware = true 
    zombieGroan.play()
    steps1.pause()
})
headGroceryStore2.addEventListener('click', function(){
    walkingLevel.style.display = 'none'
    groceryOutside.style.display = 'flex'
    groceryOutside.style.animation = 'fade-in 2s ease forwards'
    buttonContainer5.style.animation = 'fade-in 1s ease 1s forwards'
    steps1.play()
})
//alley-level
runAlley.addEventListener('click', function(){
    alleyLevel.style.display = 'none'
    walkingLevel.style.display = 'flex'
    walkingLevel.style.animation = 'fade-in 2s ease forwards'
    if (character.zombieAware == true){
        walkingH1.innerText = 'What the...?'
        walkingText.innerText = "You've never seen anything like that!  It was alive...and yet it wasn't...what will you do now?"
        headAlley.innerText = 'Head back down the alley...'
    }
})
headHome.addEventListener('click', function(){
    groceryOutside.style.display = 'none'
    walkingLevel.style.display = 'flex'
    walkingLevel.style.animation = 'fade-in 2s ease forwards'
    buttonContainer3.style.animation = 'fade-in 1s ease 1s forwards'
    steps1.play()
})
enterStore.addEventListener('click', function(){
    groceryOutside.style.display = 'none';
    groceryEntrance.style.display = 'flex'
    groceryEntrance.style.animation = 'fade-in 2s ease forwards'
    buttonContainer6.style.animation = 'fade-in 1s ease 1s forwards';
    birds.pause()
    metalDoor.play()
})

//grocery entrance events
explorePharmacy1.addEventListener('click', function(){
    groceryEntrance.style.display = 'none';
    pharmacy.style.display = 'flex'
    pharmacy.style.animation = 'fade-in 2s ease forwards'
    if (character.zombieAware == true){
        pharmacyText.innerText = "More of them!  There's no way you can take them on...not without a weapon...better check the rest of the store..."
    } else {
        pharmacyText.innerText = "What are these things?  You can choose to attack, or sneak away..."
    }
    buttonContainer7.style.animation = 'fade-in 1s ease 2s forwards';
    zombieBreath.play()
})
leaveStore1.addEventListener('click', function(){
    groceryEntrance.style.display = 'none';
    groceryOutside.style.display = 'flex'
    groceryOutside.style.animation = 'fade-in 2s ease forwards'
    birds.play()
})
exploreCooking1.addEventListener('click', function(){
    groceryEntrance.style.display = 'none';
    cooking.style.display = 'flex'
    cooking.style.animation = 'fade-in 2s ease forwards'
    buttonContainer8.style.animation = 'fade-in 1s ease 1s forwards';
})

//Pharmacy Events
exploreCooking2.addEventListener('click', function(){
    pharmacy.style.display = 'none';
    cooking.style.display = 'flex'
    cooking.style.animation = 'fade-in 2s ease forwards'
    character.haveWeapon = true;
    buttonContainer8.style.animation = 'fade-in 1s ease 1s forwards';
    zombieBreath.pause()
})
leaveStore2.addEventListener('click', function(){
    pharmacy.style.display = 'none';
    groceryOutside.style.display = 'flex'
    groceryOutside.style.animation = 'fade-in 2s ease forwards'
    birds.play()
    zombieBreath.pause()
})

findMedicine.addEventListener('click', function(){
    findMedicineText.innerText = "(You've found medicine that will increase your health! +5 HP)";
    character.hp += 5;
    hpCount.innerText = character.hp;
    upgrade.play();
})

//Cooking aisle events
explorePharmacy3.addEventListener('click', function(){
    cooking.style.display = 'none';
    pharmacy.style.display = 'flex'
    pharmacy.style.animation = 'fade-in 2s ease forwards'
    zombieBreath.play()
    if (character.zombieAware == true){
        pharmacyText.innerText = "More of them!  There's no way you can take them on...not without a weapon...better check the rest of the store..."
    } else {
        pharmacyText.innerText = "What are these things?  You can choose to attack, or sneak away..."
    }
    buttonContainer7.style.animation = 'fade-in 1s ease 1s forwards';
})
leaveStore3.addEventListener('click', function(){
    cooking.style.display = 'none';
    groceryOutside.style.display = 'flex';
    groceryOutside.style.animation = 'fade-in 2s ease forwards';
    birds.play()
})
findWeapon.addEventListener('click', function(){
    findWeaponText.innerText = "(You've found a weapon! Now let's go bash some zombies!)"
    character.haveWeapon = true
    findWeapon.style.display = 'none'
    upgrade.play()
})
searchAlley.addEventListener('click', function(){
    birds.pause()
    cat.play()
    setTimeout(function(){
        victory.play()
    }, 1500)
    if (character.hp > 10){
        score.innerHTML = `Wow, you're better off than when you started with ${character.hp} hit points! Congratulations!`
    } else if (character.hp <= 10 && character.hp >= 5){
        score.innerHTML = `Great job, you finished the scenario with ${character.hp} hit points!`
    } else if (character.hp < 5 && character.hp > 1){
        score.innerHTML = `Not bad, you finished the scenario with ${character.hp} hit points!`
    } else {
        score.innerHTML = `You barely made it with only ${character.hp} hit point left!`
    }
    alleyLevel.style.display = 'none';
    endLevel.style.display = 'flex';
    endLevel.style.animation = 'fade-in 2s ease forwards';
    buttonContainer9.style.animation = 'fade-in 1s ease 1s forwards';
    complete.innerText = 'Thanks for playing!';
})

//game over events
tryAgain.addEventListener('click', function(){
    gameOver.style.display = 'none';
    cityLevel.style.display = 'flex';
    character.hp = 10;
    hpCount.innerText = character.hp
    walkingH1.innerText = 'Why is it so quiet??'
    walkingText.innerText = "You see not a soul on the street on your way to the store, but you notice a distinct low pitched moan coming from an alleyway ahead of you on the right.  I wonder what it could be..."
})
sayonara.addEventListener('click', function(){
    gameOver.style.display = 'none'
    hpContainer.style.display = 'none'
    titleContainer.style.display = 'flex'
    character.hp = 10;
    hpCount.innerText = character.hp
})
