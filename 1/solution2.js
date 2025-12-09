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
        const startValue = currentValue;

        if (item.startsWith('R'))
            currentValue += getNumbers(item);
        if (item.startsWith('L')) 
            currentValue -= getNumbers(item);
        
        let zeroCompensated = false;
        while (currentValue < 0) {
            currentValue += 100;

            if (startValue == 0 && !zeroCompensated)
                zeroCompensated = true;
            else
                zeros++;
        }
        
        while (currentValue >= 100) {
            currentValue -= 100;

            if (currentValue == 0 && !zeroCompensated)
                zeroCompensated = true;
            else
                zeros++;
        }

        if (currentValue == 0)
            zeros++;
    });

    console.log('Answer:', zeros);
});
