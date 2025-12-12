const fs = require('fs');
const stream = fs.createReadStream('./input.txt');

stream.on('data', function (chunk) {
    const input = chunk.toString().split('\n');
    let sum = 0n;

    function getHighestNumber(str) {
        const stack = [];
        let toRemove = str.length - 12;
    
        for (const digit of str) {
            while (toRemove > 0 && stack.length && stack[stack.length - 1] < digit) {
                stack.pop();
                toRemove--;
            }
            stack.push(digit);
        }
    
        return stack.slice(0, 12).join('');
    }

    input.forEach(item => {
        sum += BigInt(getHighestNumber(item));
    })

    console.log('Answer:', sum);
});

