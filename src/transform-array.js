const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let a = [...arr];
    for (let i = 0; i < a.length; i++) {
        switch (a[i]) {
            case '--discard-next':
                delete a[i];
                if (i < a.length - 1) delete a[i + 1];
                i = i + 1;
                break;
            case '--discard-prev':
                delete a[i];
                if (i > 0) delete a[i - 1];
                break;
            case '--double-next':
                delete a[i]
                if (i < a.length - 1) a[i] = a[i + 1];
                break;
            case '--double-prev':
                delete a[i]
                if (i > 0) a[i] = a[i - 1];
                break;
            default:
                continue;
        }
    }
    a = a.filter(elem => elem !== undefined);
    return a;
};