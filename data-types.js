var num = 0
var object = {name: 'jamal'}
var array = []
var string = 'string'
var boolean = 2 || false
var today = new Date()
const me = [{Name: 'Antonio Desroche', Age: '32'},
 {Occupation: 'Entrepreneur', Education: 'Student', Hobbies: 'BJJ, Fitness, Health, Coding'}]
 console.log(me)
console.log( 'This is my Bio', me )
function Bio(me) {
    return me.filter((Name) => {
    return Name.Age > 0 
   })
  }
  const { Age, Name, Education, Hobbies, Occupation } = me
  console.log(Bio)