function sumWithClosure(firstNum) {

        const a = Number(firstNum || 0)
        
        function innerSum(secondNum) {

            const b = Number(secondNum || 0)

            return a + b;

        }

        return innerSum

}

console.log(sumWithClosure(10)(0))
    