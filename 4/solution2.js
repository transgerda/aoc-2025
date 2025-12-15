const fs = require('fs');
const stream = fs.createReadStream('./input.txt');

stream.on('data', function (chunk) {
    const rows = chunk.toString().split('\n');
    let input = new Map();
    for (const row of rows)
        input.set(input.size, row.split(''));

    let answer = 0;

    function getValidIndexes(x, y) {
        return [
            [x-1, y-1],
            [x, y-1],
            [x+1, y-1],
            [x-1, y],
            [x+1, y],
            [x-1, y+1],
            [x, y+1],
            [x+1, y+1],
        ];
    }

    let stop = false;
    while (stop == false) {
        stop = true;
        let removedRolls = [];

        input.forEach((row, x) => {
            row.forEach((item, y) => {
                if (input.get(x)[y] != '@')
                    return;

                const indexes = getValidIndexes(x, y);
                let rolls = 0;

                indexes.forEach(index => {
                    const [row, col] = index;

                    try {
                        if (input.get(row)[col] == '@')
                            rolls++;
                    } catch {}
                })

                if (rolls < 4) {
                    answer++;
                    removedRolls.push([x,y]);
                    stop = false;
                }
            })
        });

        removedRolls.forEach(index => {
            const [row, col] = index;

            input.get(row)[col] = '.';
        });
    }

    console.log('Answer:', answer);
});
