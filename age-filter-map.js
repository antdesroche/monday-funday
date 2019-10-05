let ages = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
let oldEnoughToGamble = ages.filter ((age) => {
    return age >= 18
}
)
let info = oldEnoughToGamble.map ( (age) => {
    let result = {
        age: age,
        display: age + 'is old enough to buy lottery'
    }
    result.age = age
    result.display = 'is old enough to buy lottery'
    return result
})

console.log(info)