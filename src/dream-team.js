const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
    if (Array.isArray(arr)) {
        let str = '';
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
                if (Array.isArray(arr[i])) continue;
                str = str + arr[i].replace(/\s/g, '').match(/\b^[A-Za-z]/);
            }
        }
        return str.toUpperCase().split('').sort().join('');
    } else return false;
};