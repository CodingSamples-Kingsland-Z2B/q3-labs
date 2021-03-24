function solve() {


    let regex = /(?<name>[A-Z][A-Za-z]* [A-Z][a-z]*) (?<phone>\+359([-\s])\d{1}\3\d{3}\3\d{3}) (?<email>[a-z0-9]+@[a-z]+\.[a-z]{2,3})/gm;

    let input = JSON.parse(document.getElementById("arr").value);
    let result = document.getElementById("result");
    console.log(input)

    input.forEach(user => {
        let currentUser = regex.exec(user)
            // let div = document.createElement('DIV');
        if (currentUser != null) {
            // You have a match for a user
            // div.innerHTML = `

            result.innerHTML += `<div><p> Name :${currentUser.groups.name} </p>
             <p> Phone: ${currentUser.groups.phone} </p>
             <p> Email ${currentUser.groups.email} </p>
             </div>
             `

            // result.appendChild(div);
        } else {
            // Not matching the regex
            // div.innerText = '\nInvalid data\n';
            result.innerHTML += '<div>\nInvalid data\n</div>';
            // result.appendChild(div);
        }

        // let dots = "\n- - -\n";
        // let dotDiv = document.createElement('DIV');
        // dotDiv.innerText = dots;
        // result.appendChild(dotDiv)

        result.innerHTML += `<div class="my-cass another-class" id="my-id"> <br> - - - <br></div>`;


    })
}