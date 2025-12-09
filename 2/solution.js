const fs = require('fs');
const stream = fs.createReadStream('./input.txt');

stream.on('data', function (chunk) {
    const input = chunk.toString().split(',');
    const invalidIds = [];

    function hasRepeats (str) {
        const regex = /^(.+)\1$/;
        return str.match(regex) ? true : false;
    }

    console.log(hasRepeats('12323'));
    return;

    input.forEach(item => {
        const ids = item.split('-');

        ids.forEach(id => {
            if (hasRepeats(id))
                invalidIds.push(parseInt(id));
            else 
                console.log(id);
        })
    })

    let sum = 0;
    invalidIds.forEach(y => sum += y);

    console.log(sum);
});
