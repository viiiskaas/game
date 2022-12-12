
let time = 60;
const StartTime = document.getElementById("startTime")

setInterval(updateTime, 1000)

function updateTime() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("startTime").innerHTML = `${minutes}: ${seconds} `
    console.log(minutes, seconds);

    time--;

}



document.addEventListener("keydown", function (event) {
    switch (event.code) {
        case 'KeyA':
            console.log("Step back");
            break;
        case 'KeyD':
            console.log("Step forward");
            break;
        case 'KeyS':
            console.log("Protection");
            break;
        case 'KeyW':
            console.log("Shock ");
            break;
    }

})



