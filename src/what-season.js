const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) return 'Unable to determine the time of year!';
    if (Object.prototype.toString.call(date) !== '[object Date]') throw 'err';

    if (date.getMonth() < 2 || date.getMonth() === 11) return 'winter';
    else
    if (date.getMonth() < 5) return 'spring';
    else
    if (date.getMonth() < 8) return 'summer';
    else return 'autumn';
};