const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = { repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|' }) {
    let opt = { repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|', ...options }
    let result = '';
    if (opt.repeatTimes === undefined) opt.repeatTimes = 1;
    if (opt.additionRepeatTimes === undefined) opt.additionRepeatTimes = 1;
    if (opt.addition === '') opt.additionRepeatTimes = 0;
    for (let i = 0; i < opt.repeatTimes; i++) {
        result += str;
        for (let j = 0; j < opt.additionRepeatTimes; j++) {
            result += opt.addition;
            if (j !== opt.additionRepeatTimes - 1) result += `${opt.additionSeparator}`;
        }
        if (i !== opt.repeatTimes - 1) result += `${opt.separator}`;
    }
    return result;
};