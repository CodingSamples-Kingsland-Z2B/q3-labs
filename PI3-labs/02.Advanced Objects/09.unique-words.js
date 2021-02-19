function main(inputArr) {
    let regex = /[A-Za-z]+/g;
    let output = [];
    inputArr.forEach(element => {
        let words = element.toLowerCase().match(regex);
        output = [...output, ...words];
        // output = output.concat(words)
    });

    output = [...new Set(output)];
    console.log(output.join(', '));
}

main(["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Pellentesque quis hendrerit dui.", "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.", "Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.", "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.", "Morbi in ipsum varius, pharetra diam vel, mattis arcu.", "Integer ac turpis commodo, varius nulla sed, elementum lectus.", "Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."])