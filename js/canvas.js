setupCanvas();
window.addEventListener("resize", setupCanvas);

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
const pointer = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
}

window.addEventListener("click", e => {
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("mousemove", e => {
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", e => {
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
    pointer.x = eX;
    pointer.y = eY;
}
const p = {x: 0, y: 0}; // coordinate to draw

update(0);

function update(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // copy cursor position
    p.x = poiner.x;
    p.y = poiner.y;
    // draw a dot
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
    ctx.fill();

    window.requestAnimationFrame(update);
}
