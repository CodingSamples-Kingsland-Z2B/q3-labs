/* 
Write a function to calculate figure area, which: 
    ● Receives the type of the figure (string)
    ● Receives the size of the figure (number)
    ● Checks if the figure is square or circle
    ● Prints the calculated area formatted to the second decimal 
*/
function main(type,size){
    let area;
    if(type === "square"){
        area = size * size;
    }else if(type === "circle"){
        area = Math.PI * size * size;
    }

    if(area !=undefined)
        console.log(area.toFixed(2));
    else
        console.log("Bad Shape");
}
main("square",5);