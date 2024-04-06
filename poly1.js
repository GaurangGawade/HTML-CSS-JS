class A{
    disp(x,y){
        console.log(x+y);
    }
}

class B extends A{
    disp(x,y,z){
        super.disp(5,5);
        console.log(x+y+z);
    }
}

let res = new B();
res.disp(2,5,6);