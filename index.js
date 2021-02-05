var song = new Audio();
song.src="music/love.ogg";

VanillaTilt.init(document.querySelector(".container-tilt"), {
    max: 25,
    speed: 400
});

document.getElementById("text-1").onclick = () => {
    let flipper = document.getElementById("flipper");
    let text1 = document.getElementById("text-1");
    let text2 = document.getElementById("text-2");
    let bd = document.getElementById("bd");

    flipper.classList.add("flipper");

    setTimeout(()=>{
        text1.classList.add("none");
        text2.classList.remove("none");

        bd.classList.remove("perple");
        bd.classList.add("sakura");
        song.play();
    }, 200);
}