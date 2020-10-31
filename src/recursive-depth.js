const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr.length === 0) return 1;
        let depth = arr.map(elem => Array.isArray(elem) ? 1 + this.calculateDepth(elem) : 1);
        return Math.max(...depth);
    }
};