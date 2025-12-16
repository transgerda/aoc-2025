const fs = require('fs');
const stream = fs.createReadStream('./input.txt');

stream.on('data', function (chunk) {
    let [ranges] = chunk.toString().split('\n\n');
    let answer = 0;

    ranges = ranges.split('\n').sort();
    let laststart, lastend;
    let newranges = [];

    for (const range of ranges) {
        let found = false;
        let [start, end] = range.split('-');
        start = parseInt(start);
        end = parseInt(end);

        for (let newrange of newranges) {
            let [newstart, newend] = newrange;
            newstart = parseInt(newstart);
            newend = parseInt(newend);

            if (start == 10)
                console.log(start >= newstart, start <= newend);
            if (start >= newstart && start <= newend) {
                newrange[0] = start < newstart ? start : newstart;
                newrange[1] = end > newend ? end : newend;
                found = true;
            } else if (end >= newstart && end <= newend) {
                newrange[0] = start < newstart ? start : newstart;
                newrange[1] = end > newend ? end : newend;
                found = true;
            }
        }

        if (!found)
            newranges.push([start, end]);
    }

    for (const x of newranges) 
        answer += x[1] - x[0] + 1;

    console.log('Answer:', answer);
});
