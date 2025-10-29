//ho bisogno di creare un programma che stampi i numeri da 1 a 100 e utilizzo un ciclo for



/*for (let i=1 ; i<=100 ; i++) { 
    
    if (i % 3 == 0) { 
        console.log("FIZZ") ;    
    } else if (i % 5 == 0) {
        console.log("BUZZ") ;
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ") ;
    } else {
        console.log(i) ;
    }
    
}
*/    
 for (let i=1 ; i<=100 ; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz") ;
    } else if (i % 3 == 0) {
        console.log("Fizz") ;
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i) ;
    }
 }


// nelle istruzioni gli devo dire che se è un multiplo di 3 allora deve stampare fizz
// altrimenti se è un multiplo di 5 , allora deve stampare buzz
// altrimenti se è un multiplo sia di 5 che di 3 . allora deve stampare fizzbuzz