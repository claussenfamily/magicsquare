var magicsquares = [
    [
        [ null, null, null ],
        [ null, 10, null ],
        [ 12, 2, 16 ]
    ],
    [
        [ 10, null, 14 ],
        [ null, 11, null ],
        [ null, null, 12 ]
    ],
    [
        [ null, 3, null ],
        [ null, 12, null ],
        [ 10, 21, null ]
    ],
];


main(process.argv);


function main(args) {
    for (let ms of magicsquares) {
        let target = getTarget(ms);

        console.log();
        console.log('New puzzle');
        console.log('target: ' + target)
        print(ms);
        while (solveCell(ms, target)) {
            print(ms);
        }
        print(ms);
    }
}


function solveCell(ms, target) {

    for (let r = 0; r < 3; r++) {
        if (!ms[r][0] && ms[r][1] && ms[r][2]) {
            ms[r][0] = target - (ms[r][1] + ms[r][2]);
            return true;
        }
        if (ms[r][0] && !ms[r][1] && ms[r][2]) {
            ms[r][1] = target - (ms[r][0] + ms[r][2]);
            return true;
        }
        if (ms[r][0] && ms[r][1] && !ms[r][2]) {
            ms[r][2] = target - (ms[r][0] + ms[r][1]);
            return true;
        }
    }


    for (let c = 0; c < 3; c++) {
        if (!ms[0][c] && ms[1][c] && ms[2][c]) {
            ms[0][c] = target - (ms[1][c] + ms[2][c]);
            return true;
        }
        if (ms[0][c] && !ms[1][c] && ms[2][c]) {
            ms[1][c] = target - (ms[0][c] + ms[2][c]);
            return true;
        }
        if (ms[0][c] && ms[1][c] && !ms[2][c]) {
            ms[2][c] = target - (ms[0][c] + ms[1][c]);
            return true;
        }
    }


    if (!ms[0][0] && ms[1][1] && ms[2][2]) {
        ms[0][0] = target - (ms[1][1] + ms[2][2]);
        return true;
    }

    if (ms[0][0] && !ms[1][1] && ms[2][2]) {
        ms[1][1] = target - (ms[0][0] + ms[2][2]);
        return true;
    }

    if (ms[0][0] && ms[1][1] && !ms[2][2]) {
        ms[2][2] = target - (ms[0][0] + ms[1][1]);
        return true;
    }



    if (!ms[0][2] && ms[1][1] && ms[2][0]) {
        ms[0][2] = target - (ms[1][1] + ms[2][0]);
        return true;
    }

    if (ms[0][2] && !ms[1][1] && ms[2][0]) {
        ms[1][1] = target - (ms[0][2] + ms[2][0]);
        return true;
    }

    if (ms[0][2] && ms[1][1] && !ms[2][0]) {
        ms[2][0] = target - (ms[0][2] + ms[1][1]);
        return true;
    }

    return false;
}


function getTarget(ms) {

    for (let r = 0; r < 3; r++) {
        if (ms[r][0] && ms[r][1] && ms[r][2]) {
            return ms[r][0] + ms[r][1] + ms[r][2];
        }
    }

    for (let c = 0; c < 3; c++) {
        if (ms[0][c] && ms[1][c] && ms[2][c]) {
            return ms[0][c] + ms[1][c] + ms[2][c];
        }
    }

    if (ms[0][0] && ms[1][1] && ms[2][2]) {
        return ms[0][0] + ms[1][1] + ms[2][2];
    }

    if (ms[0][2] && ms[1][1] && ms[2][0]) {
        return ms[0][2] + ms[1][1] + ms[2][0];
    }
}


function print(ms) {
    console.log();
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (!ms[r][c]) {
                process.stdout.write('   ');
            } else {
                process.stdout.write(new String(ms[r][c]).padStart(2, ' ') + ' ');
            }
        }
        console.log();
    }
    console.log();
}
