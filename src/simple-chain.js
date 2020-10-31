const CustomError = require("../extensions/custom-error");

const chainMaker = {
    result: '',
    getLength() {
        return this.result.match(/\(\s[A-Za-z0-9]+\s\)/g).length;
    },
    addLink(value) {
        if (this.result === '') {
            this.result += `( ${value} )`;
        } else this.result += `~~( ${value} )`;
        return this;
    },
    removeLink(position) {
        if (typeof position !== 'number' || position < 1 || position > this.result.match(/\(\s[A-Za-z0-9]+\s\)/g).length) {
            this.result = '';
            throw 'err';
        }
        let del = this.result.split('~~');
        del.splice(position - 1, 1);
        this.result = del.join('~~');
        return this;

    },
    reverseChain() {
        this.result = this.result.split('~~').reverse().join('~~');
        return this;
    },
    finishChain() {
        let finishResult = this.result;
        this.result = '';
        return finishResult;
    }
};

module.exports = chainMaker;