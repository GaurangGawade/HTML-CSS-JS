//By Literal
var emp={
    fname:"John",
    lname:"smith"
};

console.log(emp.fname+" "+emp.lname);

//Function Constructor
function show(){
    rollno=123,
    name="Ajay";
    console.log(rollno+" "+name);
}

var x=new show();

//By Object class instance

var product= new Object();
product.id=101;
product.name="speaker"
product.price=2500;

console.log(product.id+" "+product.name+" "+product.price);

function customer(id,name,address){
    this.id=id;
    this.name=name;
    this.address=address;
}

c = new customer(101,"Ajay","Mahim");
console.log(c);

class Company{
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
}
var c1=new Company("Infosys","Banglore");
console.log(c1.name+" "+c1.address);

class Calculation{
    constructor(i,j){
        this.i=i;
        this.j=j;
    }
    add(){
        console.log(this.i+this.j);
    }
    sub(){
        console.log(this.i-this.j);
    }
    mul(){
        console.log(this.i*this.j);
    }
    div(){
        console.log(this.i/this.j);
    }

}

var cal = new Calculation(9,8);

cal.add();
cal.sub();
cal.mul();
cal.div();
