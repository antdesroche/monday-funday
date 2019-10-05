

try {
    //this is the code that will be handled if an error occurs
    var x = y
} catch (errordetail){
    //this block will run when the block of 'try' hits an error
    //per slide 8, we have properties of the errorDetail object
    //message, name, and stack
    //console.log(errordetail.message)
    //console.log(errordetail.name)
    console.log(errordetail.stack)
}