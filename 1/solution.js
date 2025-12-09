const fs = require('fs');
const stream = fs.createReadStream('./input.txt');

stream.on('data', function (chunk) {
    const input = chunk.toString().split('\n');
    let zeros = 0;
    let currentValue = 50;

    function getNumbers(str) {
        return parseInt(str.match(/\d+/)[0]);
    }

    input.forEach(item => {
        if (item.startsWith('R'))
            currentValue += getNumbers(item);
        if (item.startsWith('L')) 
            currentValue -= getNumbers(item);
        
        while (currentValue < 0)
            currentValue += 100;
        
        while (currentValue >= 100)
            currentValue -= 100;

        if (currentValue == 0)
            zeros++;
    });

    console.log('Answer:', zeros);
});

