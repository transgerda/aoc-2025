const fs = require('fs');
const stream = fs.createReadStream('./input.txt');

stream.on('data', function (chunk) {
    let [ranges, ids] = chunk.toString().split('\n\n');
    let answer = 0;

    ranges = ranges.split('\n');
    ids = ids.split('\n');

    for (const id of ids) {
        for (const range of ranges) {
            const [start, end] = range.split('-');

            if (id >= parseInt(start) && id <= parseInt(end)) {
                answer++;
            }
        }
    }

    console.log('Answer:', answer);
});
