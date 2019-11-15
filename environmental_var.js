require('dotenv').config()

//this can be tested using MY_MEM=Arrays node environmental_var.js
//this will result in the console logging out 'I remember Arrays'

console.log('I remember ' + process.env.MY_MEM)

//I won't specify MY_FAV intentionally so i can see the default being used
const my_favorite = process.env.MY_FAV || 'filter function'
console.log('I really like the ' + my_favorite)

//this can be called so that the default is used and also with a specific DB_HOST
//MY_MEM=Arrays node environmental_var.js
//MY_MEM=Arrays DB_HOST=prodawshost node environmental_var.js
const db_host = process.env.DB_HOST || 'localhost'
console.log('Using database host: ' + db_host)