const fs = require('fs');
const stream = fs.createReadStream('./input.txt');

stream.on('data', function (chunk) {
    const input = chunk.toString().split('\n');
    let sum = 0;

    input.forEach(item => {
        const joltages = item.split('');
        let first = 0;
        let second = 0;

        joltages.forEach((joltage, index) => {
            joltage = parseInt(joltage);

            if (joltage > first && second <= first && index != joltages.length-1) {
                first = joltage;
                second = 0;
            } else if (joltage > second && first > second) {
                second = joltage
            } else if (joltage > second && index == joltages.length-1) {
                second = joltage;
            }
        })

        sum += parseInt(first.toString() + second.toString());
    })

    console.log('Answer:', sum);
});

