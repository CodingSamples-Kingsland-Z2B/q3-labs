function main(item) {
    let category;
    item = item.toLowerCase();
    if (
        item === "banana" ||
        item === "apple" ||
        item === "cherry" ||
        item === "lemon" ||
        item === "grapes"
    ) {
        category = "fruits";
    } else if (
        item === "cucumber" ||
        item === "pepper" ||
        item === "carrot" ||
        item === "onion"
    ) {
        category = "vegetable";
    } else {
        category = "unkown";
    }

    console.log(category);
}

main("banana");
main("carrot");