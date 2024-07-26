// Immediate Invoked Function Expressions ( IIFE)


// used to execute the program immediately as soon as it is defined 
// and to get out of global scope pollution 

(function chai() {
    console.log("DB Connected");
})();                            // here iife doen't know where to end the program hence creates an error to
//  get out of this problem we have to add ; in end


((name) => {
    console.log(`DB Connected Two ${name}`);
})("Arpan");





