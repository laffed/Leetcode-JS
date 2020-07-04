function fizzBuzz(number, map) {
    for (let i = 1; i <= number; ++i) {
        let str = '';
        for (const k in map) {
            const strToPrint = k;
            if (i % map[k] === 0) {
                str += strToPrint;
            }
        }

        if (str.length > 0) {
            console.log(str);
        } else {
            console.log(i);
        }
    }
}

const map = {
    fizz: 3,
    buzz: 5
};

fizzBuzz(100, map);
