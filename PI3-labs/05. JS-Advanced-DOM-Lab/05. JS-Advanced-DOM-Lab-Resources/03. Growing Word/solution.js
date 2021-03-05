function growingWord() {

    const word = document.querySelector('#exercise p');
    const font = word.style.fontSize;
    const color = word.style.color;
    console.log(font, color)
        // if the word doesn't have the color or font
    if (!font && !color) {
        // word.style.cssText = 'font-size:2px; color:blue';
        word.style.color = "blue";
        word.style.fontSize = "2px";
        return;
    }

    // If the word already has a color and font
    // remove 'px' from the font to muliply it by 2 
    let size = font.slice(0, font.length - 2);
    size *= 2;
    word.style.fontSize = size + 'px';

    if (color === 'blue') {
        word.style.color = 'green';
    } else if (color === 'green') {
        word.style.color = 'red';
    } else if (color === 'red') {
        word.style.color = 'blue';
    }

}