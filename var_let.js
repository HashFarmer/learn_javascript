// program to print the text
// variable a cannot be used here


function greet() {
    let a = 'hello';

    console.log(b);//undefined
    console.log(c);//undefined

    // variable b cannot be used here
    if(a == 'hello'){
        // variable b can be used here
        console.log(a);
        let a = 'halo';
        var b = 'world';// var 与 let 的区别，体现在#2处
        //let b = 'world';
        console.log(a + ' ' + b);
    }

    var c = 'C'

    // variable b cannot be used here if use let
    // variable b can be used here if use var
    // #2
    console.log(a + ' ' + b); // if let b ,error
}
// variable a cannot be used here

greet();