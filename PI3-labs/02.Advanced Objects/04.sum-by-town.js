function main(arr) {

    // Towns object
    let towns = {}

    // Loop through the input array
    for (let i = 0; i < arr.length; i += 2) {
        // if new town not in my object  
        if (!towns.hasOwnProperty([arr[i]])) {
            // if (towns[arr[i]] == undefined) {
            towns[arr[i]] = Number(arr[i + 1]);
        } else {
            // already exist in the towns object 
            towns[arr[i]] += Number(arr[i + 1]);
        }
    }

    console.log(JSON.stringify(towns));

}

main(['Sydney',
    '20',
    'Melbourne',
    '3',
    'Sydney',
    '5',
    'Melbourne',
    '4'
])