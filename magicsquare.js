var magicsquares = [
    [
        [ '.', '.', '.' ],
        [ '.', '10', '.' ],
        [ '12', '2', '16' ]
    ],
    [
        [ '10', '.', '14' ],
        [ '.', '11', '.' ],
        [ '.', '.', '12' ]
    ],
    [
        [ '.', '3', '.' ],
        [ '.', '12', '.' ],
        [ '10', '21', '.' ]
    ],
]



main(process.argv);


function main(args) {
    for (let magicsquare of magicsquares) {
        solve(magicsquare);
    }
}


function solve(magicsquare) {
    let target = getTarget(magicsquare);
    while (!solved) {
        addOne(magicsquare, target)
    }
}


function addOne(magicsquare, target) {
}


function getTarget(magicsquare) {

    // rows
    for (let row = 0; row < 3; row++) {
        if (magicsquare[row][0] !== '.' && magicsquare[row][1] !== '.' && magicsquare[row][2] !== '.') {
            return parseInt(magicsquare[row][0]) + parseInt(magicsquare[row][1]) + parseInt(magicsquare[row][2]);
        }
    }

    // columns
    for (let column = 0; column < 3; column++) {
        if (magicsquare[0][column] !== '.' && magicsquare[1][column] !== '.' && magicsquare[2][column] !== '.') {
            return parseInt(magicsquare[0][column]) + parseInt(magicsquare[1][column]) + parseInt(magicsquare[2][column]);
        }
    }

    // diag 1
    if (magicsquare[0][0] !== '.' && magicsquare[1][1] !== '.' && magicsquare[2][2] !== '.') {
        return parseInt(magicsquare[0][0]) + parseInt(magicsquare[1][1]) + parseInt(magicsquare[2][2]);
    }

    // diag 2
    if (magicsquare[0][2] !== '.' && magicsquare[1][1] !== '.' && magicsquare[2][0] !== '.') {
        return parseInt(magicsquare[0][2]) + parseInt(magicsquare[1][1]) + parseInt(magicsquare[2][0]);
    }
}
