function attachGradientEvents() {

    // Dom variables 
    const box = document.getElementById('gradient');
    document.body.addEventListener('mousemove', findPercent);
}


function findPercent(e) {

    if (e.target.id == 'gradient') {
        // box width
        const width = e.target.offsetWidth;
        console.log(width);
        // current mouse in X axes reltive to the box 
        const x = e.offsetX;
        document.getElementById('result').textContent = Math.ceil((x / width) * 100) + '%';
    } else {
        document.getElementById('result').textContent = '';
    }

}