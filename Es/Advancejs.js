

// 1)EventPropogation ===== Event Bubbling, Event Capturing or (trickling)

// 2)Exception Handling
// 3)Higher Order Function & CallBack Function
// 4)Hoisting 
// 5)Lexical Scoping & Closure

    //We call the child function to be lexically bound by that of the parent function.
    //a closure gives you access to an outer function's scope from an inner function.


// 7)javascript is synchronus or asynchronus?
// 8)Event Loop
// 9)Function Currying
        // What is function currying?
        
        // Function currying is a method which is used to handle the multiple parameters passed to the function at once.

        // example

        // function fun1(a){
            
        //     return function(b){
        //         // console.log(b)

        //         return function(c){
        //             console.log(a,b,c)
        //         }
        //     }
                
            
        // }

        // fun1(10)(20)(30);





        // function printNumber(a){

        //     return function(b){

                
        //         return function(c){
                    
                    
        //             return function(d){
                        
        //                 return function(e){
                            
        //                     console.log(a,b,c,d,e)
        //                 }
        //             }
        //        }
        //     }

        // }



        // printNumber(2)(3)(4)(5)(6);






        
        // function printName(){



        //     var name = "abc";
        //     var address = "pune";
            
            
        //     var address2 = "pune2"
        //     console.log(address2)
        //     function printNameAndAddress(){
        //         console.log(name,address);
        //     }

        //     printNameAndAddress();
        // }


        // printName()
        














// function fun1(lastname){

//     let name = "felix";

//     // console.log(name);

//     function fun2(){
//         console.log(name);
//         console.log(lastname);
//     }

//     fun2()

// }

// fun1("IT's");



// function fun2(){
//     setTimeout(() => {
//         console.log("Hello this is fun2 line");
//     },2000)
// }



// function fun1(){

//     console.log("hello this is first line of function1");
//     fun2();
//     console.log("Hello this is third line of function1");
// }

// fun1();






// function fun1(a){

//     // console.log(a)

//     return function(b){
//         // console.log(b)

//         return function(c){
//             console.log(a,b,c)
//         }
//     }
// }


// fun1(10)(20)(30);


// fun1(10)
// fun1(20)
// fun1(30)





// 1) Prototypes


// function Person(name,age,address){

//     this.pname = name;
//     this.page = age;
//     this.paddress = address;

// }


// Person.prototype.psal=60000;

// const abc = new Person('Felix', 20, 'Pune');

// console.log(P.paddress)

// Person.prototype.pdetail = function(){
//     console.log(`the name of person is ${abc.pname} the address of person is ${abc.paddress} & sal of person is ${abc.psal}`);
// }

// console.log(abc.psal);

// console.log(abc.pdetail());






// function myInfo(name,age){

//     this.pname = name;
//     this.page = age;

// }



// const m = new myInfo("person1", 60);


// console.log(m.pname + m.page);


// myInfo.prototype.psal="70k";

// console.log(m.psal)




// 2) Promises


    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((res) => res.json())
    // .then((data) => {

    //     data.map((cval) => {
    //         console.log(cval.name);
    //     })

    // }).catch((err) => {
    //     console.log(`data is not collected because of ${err} `)
    // })




// 3) Async Await

    // const getData = async () => {


    //     const res = await fetch('https://jsonplaceholder.typicode.com/users');

    //     const data = await res.json();

    //     data.map((cval) => {
    //         console.log(cval.adrees);
    //     })
    // }


    

    // getData();



    // const getData = async () => {


    //     try{

    //         const res = await fetch('https://jsonplaceholder.typicode.com/users');
    
    //         const data = await res.json();
    
    //         data.map((cval) => {
    //             console.log(cval.name);
    //         })

    //     }catch(err){
    //         console.log(`error is : ${err}`)
    //     }


    // }


    // getData();


    // for(let i = 0; i < 6; i++){console.log(i)}i = 100;

    






// oops in js


// 1) Object
// 2) class


// class Emp{
    
//     constructor(name, city){

//         this.ename = name;
//         this.ecity = city;
//     }
    
    
// }


// const newEmp = new Emp('Felix', "Pune");


// console.log(newEmp.ecity)




// 3)Encapsulation

    // class Emp{
    //     constructor(name, city){

    //         this.ename = name;
    //         this.ecity = city;
    //     }

    //     printDetail(){
            
    //         return console.log(`Name is ${this.ename} city is ${this.ecity}`);
    //     }

    //     printCity(){

    //         return console.log(`City is ${this.ecity}`)
    //     }

       


    // }


    // const newEmp = new Emp("Felix", "Pune");

    // console.log(newEmp.printCity());


// 4)Abstraction



// function Emp(name, city){

//     this.ename = name;
//     this.ecity = city



//     // access globally
//     this.showName =  function(){
//         console.log(`the name of employee is ${this.ename}`);
//     }


//     // not access globally

//     const showCity = function(){
//         console.log(`the city is ${this.ecity}`);
//     }

    


// }


// const newEmp = new Emp("Felix", "Pune");

// console.log(newEmp.showCity())



// 5)Inheritance



// class Comp{

//     constructor(name){

//         this.cname = name;
//     }

//     showCname(){
//         console.log(` The name of company is ${this.cname}`);
//     }
// }




// class Emp extends Comp{
    
//     showEmpname(ename){
//         console.log(`emp name is ${ename}`)
//     }
    
// }

// const cmp = new Comp("Felix");

// const E = new Emp();


// console.log(E.showEmpname("emp1"));

// console.log(E.showCname());



// var name = "abc";
// var address = "efg";
// function printfullname(){

//     console.log(name)

//     var city = "pune";

//     var city2 = "pune2";
//     console.log(city2)
//     function printAddress(){
//         console.log(address);
//         console.log(city)
//     }

//     printAddress();


// }

// printfullname()



// function print(){

//     console.log("first statement");

//     setTimeout(()=>{

//         console.log("Second Statement");
//     },2000)
//     console.log("Third statement");


// }

// print()



