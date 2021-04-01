function min(array) {
    let output = array[0]
    for (const item of array) {
        if (output > item) // item이 더 작다면
            output = item
    }
    return output
}

function max(array) {
    let output = array[0]
    for (const item of array) {
        if (output < item) // item이 더 크다면
            output = item
    }
    return output
}

const testArray = [52, 273, 32, 103, 275, 24, 57]
console.log(`${testArray}중에서`)
console.log(`최소값 = ${min(testArray)}`)
console.log(`최대값 = ${max(testArray)}`)