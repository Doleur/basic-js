const CustomError = require("../extensions/custom-error");

module.exports = function countCats(mtr) {
    let cats = 0;
    for (let i = 0; i < mtr.length; i++) {
        for (let j = 0; j < mtr[i].length; j++) {
            if (mtr[i][j] === '^^')
                cats = cats + 1;
        }
    }
    return cats;
};