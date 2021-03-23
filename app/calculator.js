class Calculator{
    constructor(firstNum, secNum, operator){
        this.firstNum = firstNum;
        this.secNum = secNum;
        this.operator = operator;
    }

    performCalculation(){
        switch(this.operator){
            case '+': return this.firstNum+this.secNum;
        }
    }
}