//Immediately Invoked Function Expression (IIFE)


(function chai(){
    //named IIFE
    console.log('DB connected');
})();



( (name)=>{//IIFE/  unnamed IIFE
    console.log(`DB connected two ${name} `);

})('pradip');

    // chai();