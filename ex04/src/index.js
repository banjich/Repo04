function main() {
    var myDecimal;
    var myDecimalE;
    myDecimal = 3.5;
    myDecimalE = 'scientific (exponent)'
    return {
        myDecimal,
        myDecimalE
    };
}

console.log(main());
module.exports = main;
