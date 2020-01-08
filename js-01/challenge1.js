var s = 4;
const theOnceFunc = s => {
    console.log(`Hello after ${s} seconds`);
};
setTimeout(theOnceFunc, 4 * 1000, 4);
setTimeout(theOnceFunc, 8 * 1000, 8);