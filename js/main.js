var anim = document.querySelector("#anim");
var move = document.querySelector("#move");
var jumprep = document.querySelector("#jumprep");
var jump = document.querySelector("#jump");
var shaking = document.querySelector("#shake");
var moving = document.querySelector("#moving");
var fall = document.querySelector("#fall");
var movetoleft = document.querySelector("#movel");
var speak = document.querySelector("#speak");
var fade = document.querySelector("#fade");
var mirror = document.querySelector("#mirror");
var movetoright = document.querySelector("#mover");


function startAnimation() {
    anim.classList.add('jump');
}
jump.addEventListener('click', startAnimation);

function moveleftright() {
    anim.classList.add('moveleftright');
}
move.addEventListener('click', moveleftright);


function jumping() {
    anim.classList.add('jumping');
}
jumprep.addEventListener('click', jumping);



function shake() {
    anim.classList.add('shake');
}
shaking.addEventListener('click', shake);



function movescreen() {
    anim.classList.add('moving');
}
moving.addEventListener('click', movescreen);



function falling() {
    anim.classList.add('falling');
}
fall.addEventListener('click', falling);


function moveleft() {
    anim.classList.add('moveleft');
}
movetoleft.addEventListener('click', moveleft);


function speaking() {
    anim.classList.add('speaking');
}

speak.addEventListener('click', speaking);


function fading() {
    anim.classList.add('fading');
}
fade.addEventListener('click', fading);

function moveright() {
    anim.classList.add('moveright');
}
movetoright.addEventListener('click', moveright);
