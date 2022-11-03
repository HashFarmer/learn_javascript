function f1(){
    eval('var x = 5');
    console.log(x);
}

function f2(){
    eval('let x = 5');
    console.log(x);
}

function f3(){
    eval('const x = 5');
    console.log(x);
};

f1();
//f2();
f3();
