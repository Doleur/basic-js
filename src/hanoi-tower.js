const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    const minTurn = 2 ** disksNumber - 1;
    const t = Math.floor(minTurn / turnsSpeed * 3600);
    return { turns: minTurn, seconds: t };
};