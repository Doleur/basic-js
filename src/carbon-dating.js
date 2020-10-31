const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(a) {
    if (a === undefined) return false;
    if (typeof a === 'string') {
        if ((a.replace(/\d/g, '') === '') && (a.replace(/[^\d\s]/g, '') !== '')) {
            if (a > 0 && a < 15) {
                let k = Math.trunc(0.693 / HALF_LIFE_PERIOD * 1000000);
                let t = Math.round((Math.log(MODERN_ACTIVITY / a)) / k * 10000) * 100;
                return t;
            } else return false;
        } else return false;
    } else return false;
};