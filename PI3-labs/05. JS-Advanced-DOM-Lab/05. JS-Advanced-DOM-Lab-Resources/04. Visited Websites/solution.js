function solve() {

    let visitedArr = []; //[1,2,4,4,7,6]
    let aTags = document.getElementsByTagName('a');
    let pTags = document.getElementsByTagName('p');

    Array.from(pTags).forEach(p => {
        let num = p.innerText.split(' ')[1];
        visitedArr.push(Number(num));
    })

    // ['kingsland', 'google', 'youtube', 'wiki','gmail', 'stack']
    Array.from(aTags).forEach((link, index) => {
        link.addEventListener('click', () => {
            // inc the number of visit and manipulate the p 
            let para = link.nextElementSibling;
            para.innerText = `visited ${++visitedArr[index]} times`;
        });
    });

}