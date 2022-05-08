window.onload = () => {
    console.log('Loaded!')
    const btnCalculate = document.getElementById('btnCalculate')
    btnCalculate.onclick = click

    function getInputValue(id) {
        const item = document.getElementById(id)
        return item.value
    }

    function click() {
        const operationType = getInputValue('operationType')
        const value01 = getInputValue('value01')
        const value02 = getInputValue('value02')
        const result = Mathematic[operationType](value01, value02)
        console.log('Result: ', result)
        document.getElementById('result').innerText = `The result of ${operationType}: ${value01} by ${value02} is ${result}`
    }
}