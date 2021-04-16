function solve() {

    const { init, add, subtract } = (function() {
        let obj = {
            init(selector1, selector2, resultSelector) {
                this.selector1 = selector1;
                this.selector2 = selector2;
                this.resultSelector = resultSelector;
            },
            add() {
                this.resultSelector.value = Number(this.selector1.value) + Number(this.selector2.value);
            },
            subtract() {
                this.resultSelector.value = Number(this.selector1.value) - Number(this.selector2.value);
            }
        }
        return obj
    })()

    init(document.getElementById('num1'), document.getElementById('num2'), document.getElementById('result'));
    document.getElementById('sumButton').addEventListener('click', function() { add() })
    document.getElementById('subtractButton').addEventListener('click', function() { subtract() })
}