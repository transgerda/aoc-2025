const fs = require('fs');
const stream = fs.createReadStream('./input.txt');

stream.on('data', function (chunk) {
    //const input = chunk.toString().split('\n');
    //const input = ['987654321111111']
    let sum = 0;

    input.forEach(item => {
        const joltages = item.split('');
        let first = 0;
        let second = 0;

        joltages.forEach((joltage, index) => {
            joltage = parseInt(joltage);

            if (joltage > first && index != joltages.length-1) {
                first = joltage;
                second = 0;
            } else if (joltage > second && first > second) {
                second = joltage
            }
        })

        console.log(first,second);
        sum += parseInt(first.toString() + second.toString());
    })

    console.log(input.length);
    console.log('Answer:', sum);
});

