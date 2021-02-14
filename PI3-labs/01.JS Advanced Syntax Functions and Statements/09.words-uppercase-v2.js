// 
function main(text) {

    text = text.split(/[!?,\s]+/g).filter(a => a !== '').map(a => a.toUpperCase());
    console.log(text.join(', '));

}
main('Hi, how are you?');