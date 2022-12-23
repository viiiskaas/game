// let healthLength = 100;
// let time = 60;
// const StartTime = document.getElementById("startTime")

// setInterval(updateTime, 1000)

// function updateTime() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     document.getElementById("startTime").innerHTML = `${minutes}: ${seconds} `

//     time--;

// }


const health1 = document.getElementById("lifePerson1");
const health2 = document.getElementById("lifePerson2");
const Person1 = document.getElementById("firstPerson");
const Person2 = document.getElementById("secondPerson");
const creatPerson = document.getElementById("createPerson");
const modal = document.getElementById("mood");
const create = document.getElementById("create")
const select = document.getElementById("mySelect")
// const anPers = document.getElementByClass("punchAnimation");
// console.log((health1).value);


const showModal = () => {
    modal.style.display = "contents";
}

const newPerson = {};
const closeModal = (val) => {
    person1.health = val
    modal.style.display = "none";
}

function selectFunction() {
    var x = document.getElementById("mySelect").value;
    console.log(x);
}
// function myFunction1(val) {
//     person1.health = val;
//     console.log(person1)
// }
// function myFunction2(val) {
//     person1.strength = val;
//     console.log(person1)
// }

// function myFunction5(value) {
//     if (select.value = "Persone1") {
//         onsole.log(1);c
//     }
//     else if(select.value = "Persone1") {

//     }
//     else {
//         console.log("Aaaaaa");
//     }
// }



const person1 = {
    health: 100,
    mainHealth: 100,
    strength: 8,
    armor: 4,
    power: 5

}
const person2 = {
    health: 120,
    mainHealth: 120,
    strength: 6,
    armor: 3,
    power: 4

}



const backLife = (healthPerson, defender) => {
    let bS = defender.health * 100 / defender.mainHealth;
    if (bS > 0) {
        return healthPerson.style.backgroundSize = `${defender.health * 100 / defender.mainHealth}%`;
    }
    else {
        return healthPerson.style.backgroundSize = "0px";
    }


}


const shock = (healthPerson, atacker, defender) => {
    defender.health = defender.health - atacker.strength;
    return backLife(healthPerson, defender)
}


const protection = (healthPerson, atacker, defender) => {
    defender.health = defender.health - (atacker.strength - defender.armor);
    return backLife(healthPerson, defender);
}

const superShock = (healthPerson, atacker, defender) => {
    defender.health = defender.health - (atacker.strength + atacker.power)
    return backLife(healthPerson, defender)
}





const moveLeft = (Person, position) => {
    return Person.style.marginLeft = position;

}

const moveRight = (Person, position) => {
    return Person.style.marginLeft = position;

}

const protectionRight = (Person, position) => {
    return Person.style.marginLeft = position;
}

const protectionLeft = (Person, position) => {
    return Person.style.marginLeft = position;
}


function animation(person) {
    return person.classList.add("punchAnimation")
}
function secondAnimation(person) {
    return person.classList.add("punchAnimation2")
}





// S - атака,A - person1 /////// K - атака,J - person2

const uniqKeys = new Set()
function checkKey() {

    CheckWiner();
    switch (true) {


        case (uniqKeys.has('KeyS') && uniqKeys.has('KeyJ')):
            setTimeout(() => protectionLeft(Person2, '70%'), 1000, protectionRight(Person2, "80%"))
            console.log(protection(health2, person1, person2));
            console.log("Step forward");

            break;

        case uniqKeys.has('KeyS'):
            setTimeout(() => moveLeft(Person1, '0%'), 1000, moveRight(Person1, "60%"))

            console.log(shock(health2, person1, person2));

            break;

        case (uniqKeys.has('KeyQ') && uniqKeys.has('KeyW') && uniqKeys.has('KeyE')):

            setTimeout(() => moveLeft(Person1, '0%'), 1000, animation(Person1))

            console.log(superShock(health2, person1, person2));
            console.log("Step forward");
            break;


        case (uniqKeys.has('KeyK') && uniqKeys.has('KeyA')):
            setTimeout(() => protectionLeft(Person1, '0%'), 1000, protectionRight(Person1, "-10%"))
            console.log(protection(health1, person2, person1));
            console.log("Step forward");
            break;

        case uniqKeys.has('KeyK'):
            setTimeout(() => moveLeft(Person2, '70%'), 1000, moveRight(Person2, "10%"))
            console.log(shock(health1, person2, person1));
            break;

        case (uniqKeys.has('KeyU') && uniqKeys.has('KeyI') && uniqKeys.has('KeyO')):
            secondAnimation(Person2)

            console.log(superShock(health1, person2, person1));
            console.log("Step forward");
            break;

    }
}
document.addEventListener('keydown', (e) => {
    uniqKeys.add(e.code)
    console.log(e.code)
    checkKey()
    CheckWiner()
})
document.addEventListener('keyup', (e) => {
    uniqKeys.delete(e.code)
    checkKey()
})


const CheckWiner = () => {
    if (person1.health <= 0) {
        alert("!!!Win Akuma!!!")
    }
    else if (person2.health <= 0) {
        alert("!!!Ryu Hosh!!!")
    }

}








