let cursor = document.querySelector('.cursor');
let holes = [...document.querySelectorAll('.hole')];
let scoreEl = document.querySelector('.score span');
let score = 0 ;

let sound = new Audio("assets_smash.mp3");

function run(){
    let i = Math.floor(Math.random() * holes.length);
    let hole = holes[i];
    let timer = null;

    const img = document.createElement('img');
    img.classList.add('mole');
    img.src = '166042301527.png';

    img.addEventListener('click', () => {
        score += 10;
        sound.play();
        scoreEl.textContent = score;
        img.src = '1660462301545.png';
        clearTimeout(timer);
        setTimeout(() => {
            hole.removeChild(img);
            run()
        }, 500)
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1500)
}
run()

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})