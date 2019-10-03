var cars = [
    { make: 'Infiniti', model: 'G35', year: 2005 },
    { make: 'Toyota', model: 'Supra', year: 1998 },
    { make: 'Nissan', model: 'Altima', year:2005 }
]


let carYears = cars.filter( (car) => { 
    return car.year < 2005
}
)

console.log(carYears)