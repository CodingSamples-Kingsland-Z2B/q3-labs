function main(matrix) {
    // initial dashboard
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
    ];

    // Inital player
    let player = 'X';
    let hasWon = false;

    for (let line of matrix) {
        let [row, col] = line.split(' ');
        // check if the location is exists or not in my dashbpard
        if (dashboard[row][col] === false) {
            dashboard[row][col] = player;
            // check if user wins or not
            if (ifWins(dashboard, player)) {
                hasWon = true;
                break;
            }
            // Switch players
            player = player === 'X' ? 'O' : 'X';
        }
        // check if is no more loactions left
        else if (dashboard.every((row) => row.every((el) => el !== false))) {
            break;
            // if the location is not avaliable
        } else {
            console.log('This space is already taken. Please choose another!');
        }
    }

    if (hasWon) {
        console.log(`Player ${player} wins!`);
    } else {
        console.log('The game has ended! Nobody wins :( ');
    }

    printDashboard(dashboard);
}

function ifWins(dashboard, player) {
    return (
        checkMainDiagonal(dashboard, player) ||
        checkSecDiagonal(dashboard, player) ||
        checkRows(dashboard, player) ||
        checkCols(dashboard, player)
    );
}


function checkMainDiagonal(dashboard, player) {
    let mainArr = [];
    let mainIndex = 0;
    dashboard.forEach(row => {
        mainArr.push(row[mainIndex]);
        mainIndex++;
    })
    return mainArr.every(el => el === player)
}

function checkSecDiagonal(dashboard, player) {
    let secArr = [];
    let secIndex = dashboard[0].length - 1;
    dashboard.forEach(row => {
        secArr.push(row[secIndex]);
        secIndex--;
    })
    return secArr.every(el => el === player)
}

function checkRows(dashboard, player) {
    let result = false;
    dashboard.forEach(row => {
        result = result || row.every(el => el == player)
    });
    return result;
}

function checkCols(dashboard, player) {
    let [row] = dashboard;
    // reverse cols =>rows and rows=> cols
    dashboard = row.map((value, col) => dashboard.map(row => row[col]));
    checkRows(dashboard, player)
}

function printDashboard(dashboard) {
    dashboard.forEach(row => console.log(row.join('\t')))
}


main(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
])