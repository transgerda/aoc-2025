const fs = require('fs');
const stream = fs.createReadStream('./input.txt');

stream.on('data', function (chunk) {
    const input = chunk.toString().split(',');
    let sum = 0;

    input.forEach(item => {
        const [ start, end ] = item.split('-');

        for (i = parseInt(start); i <= parseInt(end); i++)
            if (i.toString().match(/^(\d+)\1+$/))
                sum += i;
    })

    console.log('Answer:', sum);
});
