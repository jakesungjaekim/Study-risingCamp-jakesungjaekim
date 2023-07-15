console.log(c);
console.log('h1' , h); // 1
 if(true){
    let a = 'a';
    const b = 'b'; // constant
    var c = 'c';
    // var d = 'd'; // hoisting
    console.log('h2' ,h); // 2 


    // let a = 'a1';
    // const b = 'b1';
    var c = 'c1'; // 재선언 o

    console.log(c);
    if(true) {
        a = 'aa';
        // b = 'bb'; // const 재할당 x
        c = 'cc';
        
        
        var h = 'h';


        console.log("aa bb cc");
    
        var d = 'd';
        const e = 'e'; // 
        let f = 'f'

        console.log('d e f');

  

    }

    console.log('block out')
    console.log(d);
    // console.log(e);
    // console.log(f);
    console.log('h3' ,h); // 2 

 }

 console.log('h4' ,h); // 2 
