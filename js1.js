// // var,let,const

// // var name="Aravind";
// // var age=22;
// // console.log(name," is ",age," years old ");

// // var a=10;
// // var b="10";
// // var c=20;

// // console.log("addition", a + c);
// // console.log("sub", a-b);
// // console.log("mul", a*b);
// // console.log("div", a/b);
// // console.log("modlus", a%b);

// // console.log("equal", a == b);
// // console.log("Dequal", a === b);
// // console.log("Nequal", a != b);
// // console.log("DNequal", a !== b);

// // console.log("inc", ++a , ++b);
// // console.log("dec", --a , --b);
// // console.log("post", a-- , b++);

// // console.log("or", 10>5 || 10>8);
// // console.log("and", 10>5 && 10>8);
// // console.log("not", !a , !b);



// // var a=18;
// // var b=23;
// // var c=29;
// // if(a>=b && a>=c){
// //     console.log(a)
// // }
// // else if(b>=a && b>=c){
// //     console.log(b)
// // }
// // else{
    
// //         console.log(c)
    
// // }

// // var day=3;
// // var dayname;
// // switch(day){
// //     case 1:
// //         dayname="Mon";
// //         break;
// //         case 2:
// //             dayname="tue";
// //             break;
// //             case 3:
// //                 dayname="wed";
// //                 break;
// //                 case 4:
// //                     dayname="thu";
// //                     break;
// //                     case 5:
// //                         dayname="fri";
// //                         break;
// //                         case 6:
// //                             dayname="sat";
// //                             break;
// //                             case 7:
// //                                 dayname="sun";
// //                                 break;
// //                                 default:
// //                                     dayname="ARAVIND_REDDY";
// //                                     break;
// // }
// // console.log(dayname);

// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<1){
//     console.log("value_of_i",i)
// }


// function add(){
//     console.log(" output for add function",2+3);
// }
// add();

// function addTwo(a,b){
//     console.log("output for add wth variables",a+b)
// }
// addTwo(3,2)

// function double_1(num){
//     const value = num * 2;
//     return value;
// }

// const value2 = double_1(30);
// console.log(value2)

// const a=function (){
//     return 5+2;
// }
// console.log(a());

// const forev = function () => {
//     console.log("aravind")
// }
// console.log(forev());
    

// let name = "Aravind";
// // lenght of a string 
// let len = name.length;
// console.log(len)
// //concatinating two strings
// let Sname = "Medhini";
// let Cname= name +"'s Surname is " + Sname ;
// console.log(Cname);


// const revlt = Cname.split("");
// console.log(revlt);
// const revelt2= revlt.reverse();
// console.log(revelt2);
// const revelt3=revelt2.join("")
// console.log(revelt3);


// let nam="Full Stack Web Develepment"
// // let revname = nam.split(" ").reverse().join(" ")
// // console.log(revname);

// let nam2= nam.replace("Web","Aplication")
// console.log(nam2);
// let n="              hello         "
// let m=n.trim();
// console.log(m);
// let N=123514;
// let count=0;
// 	 for(i=0;N>=1;i++){
// 	  let A=N%10;
// 	   if(A == 5){
// 	     count++;
// 	   }
// 	   N=N/10;
// 	 }
// 	 console.log(count);

// let num = [1,2,3,4,4,5,3,2,1];
// console.log(num);

// let numbers = new Set(num);
// console.log("",numbers);

// let new1=[...numbers]
// console.log(new1);

// let new2= new Set("arvind")
// console.log(new2);
// let new3=[...new2]
// // console.log(new3);

// let employee = {
//     rollNo : 1,
//     name : "aravind",
//     salary : 25000,
//     roll: "TR",
//     displayEmpDet : function (){
//         console.log(this.name + " is earning " + this.salary + " at " + this.roll + " position");
//     }
// }
// employee.displayEmpDet();

// let anobj = new Object();

// anobj.city="hyder";
// // anobj["State"]="tel";

// let arr=[1,2,3,4,];
// let arr2=["a","e","i","o","u"];
//  let newArr= arr.concat(arr2);
//  console.log(newArr);








// let user ={
//     id : 1001,
//     name : "aravind",
//     city : "assam"
// }
// let user2 ={
//     id : 1002,
//     name : "ara",
//     city : "kammam"
// }
// function display(company,salary){
//     console.log("inside function",this);
//     console.log(this.id+"name is"+this.name+"and from"+this.city , company," ",salary);
// }

// display.call(user,"tcs","developer");
// display.apply(user,["cts","team lead"]);

// const newfn = display.bind(user);
// newfn("cts","team lead")


function Person(color, height,shirt){
    this.color = color,
    this.height = height,
    this.shirt = shirt;
}

let Person2 = new Person("green", "6","formal")
let Person3 = new Person("black", "5","tshirt")

Person3.weight="50";

console.log(Person2);
console.log(Person3);

Person.prototype.hand = "right";

console.log(Person2);


