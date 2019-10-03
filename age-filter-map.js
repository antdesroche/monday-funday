let ages = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
let oldEnoughToGamble = ages.filter ((age) => {
    return age >= 18
}
)
let info = oldEnoughToGamble.map ( (age) => {
    let result = {}
    result.age = age
    result.display = 'Old enough to buy lottery tickets'
    return result
})

console.log(info)