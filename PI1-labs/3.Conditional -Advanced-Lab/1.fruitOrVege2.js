function main(item) {
    let category;
    item = item.toLowerCase();
    switch (item) {
        case "banana":
        case "apple":
        case "cherry":
        case "lemon":
        case "grapes":
            category = "fruits";
            break;
        case "cucumber":
        case "pepper":
        case "carrot":
        case "onion":
            category = "vegetable";
            break;
        default:
            category = "unkown";
            break;
    }
    console.log(category);
}
main("banana");
main("carrot");