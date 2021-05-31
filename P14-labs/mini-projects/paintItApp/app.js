const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const penColor = document.querySelector('#penColor')
const penColorTrigger = document.querySelector('#penColorTrigger');
const penWidth = document.querySelector('#penWidth');
const bgColor = document.querySelector('#bgColor')
const bgColorTrigger = document.querySelector('#bgColorTrigger')
const saveBtn = document.querySelector('#save');
const clearBtn = document.querySelector('#clear');
const eraser = document.querySelector('#eraser')


canvas.width = screen.width - 35;
canvas.height = screen.height - 350
    // Defaults
ctx.strokeStyle = '#000000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;


let pen = {
    y: 0,
    x: 0,
    down: false
}

canvas.addEventListener('mousedown', penDown);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mouseout', noDraw);
canvas.addEventListener('mousemove', draw);
clearBtn.addEventListener('click', clear);
saveBtn.addEventListener('click', saveFile);

// 
penColorTrigger.addEventListener('click', () => {
    penColor.click();
    ctx.strokeStyle = penColor.value;

})

penColor.addEventListener('input', () => {
    penColorTrigger.style.color = penColor.value;
    ctx.strokeStyle = penColor.value;

})

bgColorTrigger.addEventListener('click', () => {
    bgColor.click();
})

bgColor.addEventListener('input', () => {
    bgColorTrigger.style.color = bgColor.value;
    ctx.fillStyle = bgColor.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
})

eraser.addEventListener('click', () => {

    ctx.strokeStyle = bgColor.value
})

function penDown(e) {
    pen.down = true;
    [pen.x, pen.y] = [e.offsetX, e.offsetY]
}


function noDraw() {
    pen.down = false;
}

function draw(e) {
    if (!pen.down) return;
    canvas.style.cursor = 'crosshair';
    ctx.lineWidth = penWidth.value;
    ctx.beginPath();
    ctx.moveTo(pen.x, pen.y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [pen.x, pen.y] = [e.offsetX, e.offsetY]
}

function clear() {
    ctx.fillStyle = bgColor.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function saveFile() {
    let a = document.createElement('a');
    a.setAttribute('download', 'image.png');
    a.setAttribute('href', canvas.toDataURL('image/png'))
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}