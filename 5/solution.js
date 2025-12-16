const fs = require('fs');
const stream = fs.createReadStream('./input.txt');

stream.on('data', function (chunk) {
    let [ranges, ids] = chunk.toString().split('\n\n');
    let answer = 0;

    ranges = ranges.split('\n');
    ids = ids.split('\n');

    for (const id of ids) {
        let found = false;
        for (const range of ranges) {
            const [start, end] = range.split('-');
            if (found) continue;

            if (id >= parseInt(start) && id <= parseInt(end)) {
                answer++;
                found = true;
            }
        }
    }

    console.log('Answer:', answer);
});
