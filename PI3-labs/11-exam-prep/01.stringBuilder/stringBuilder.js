class StringBuilder {

    constructor(string = "") {
        if (typeof(string) == "string") {
            this.stringArray = string.split("");
        } else {
            throw ("TypeError:'Argument must be string'")
        }
    }

    //Append method 
    append(string) {
        if (typeof(string) == "string") {
            // Convert the string to array of characters
            let tempArray = string.split("");
            // Update my storage stringArray
            this.stringArray = this.stringArray.concat(tempArray)
                // this.stringArray = [...this.stringArray, ...tempArray] 
        } else {
            throw ("TypeError:'Argument must be string'")
        }
    }

    //Prepend method 
    prepend(string) {
        if (typeof(string) == "string") {
            // Convert the string to array of characters
            let tempArray = string.split("");
            // Update my storage stringArray
            this.stringArray = tempArray.concat(this.stringArray);
            // this.stringArray = [...tempArray, ...this.stringArray] 
        } else {
            throw ("TypeError:'Argument must be string'")
        }
    }

    // InsertAt (string, index)
    insertAt(string, index) {
        if (typeof(string) == "string") {
            // Creating array of characters
            let tempArray = string.split("");
            this.stringArray.splice(index, 0, ...tempArray);
        } else {
            throw ("TypeError:'Argument must be string'")
        }
    }

    remove(startIndex, length) {
        this.stringArray.splice(startIndex, length);
    }

    allToUpper() {

        // First method
        this.stringArray = this.stringArray.join("").toUpperCase().split("");

        // second method 
        // this.stringArray = this.stringArray.map(ch => ch.toUpperCase());
    }

    allToLower() {
        this.stringArray = this.stringArray.join("").toLowerCase().split("");

        // second method 
        // this.stringArray = this.stringArray.map(ch => ch.toLowerCase());
    }

    toUpper(index) {
        this.stringArray[index] = this.stringArray[index].toUpperCase();
    }

    toLower(index) {
        this.stringArray[index] = this.stringArray[index].toLowerCase();
    }

    toString() {
        return this.stringArray.join("");
    }

}