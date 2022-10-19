
export default class NumberUtils {
    constructor() {}

    static previous = 0;

    static generateUniqueNumber() {
        let time = new Date().getTime();
        if (time <= NumberUtils.previous) {
            time = NumberUtils.previous + 1;
            NumberUtils.previous = time;
        } else {
            NumberUtils.previous = time;
        }
        
        return time;
    }
}

// const set = new Set();

// for(let k = 0; k < 1000; k++) {
//     const result = NumberUtils.generateUniqueNumber();
//     set.add(result);
//     console.log(result);  
//   }

//   console.log(set.size)