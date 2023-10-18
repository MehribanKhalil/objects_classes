
// class user {
  
//   constructor (name){
//     this.name = name;
//   }

//   sayHi(){
//     console.log(this.name);
//   }
// }

// // istifadesi

// let newuser = new user ('mehi salam','salam')
// newuser.sayHi()

// ---------------------------------------------------------

// class sinif {
 
//   constructor(name){
//     this.name=name
//   }

//   search(text){
//     if (this.name === text) {
//       console.log(true);
//     }
//   }

// }

// let newSinif = new sinif('mehi')
// newSinif.search('mehi')


// --------------------------------------------------------


// class sinif {
 
//   constructor(...data){
//     this.arr=[...data]
//   }

//   search(text){
//     if (this.arr.includes(text)) {
//       console.log(true);
//     } else{
//       console.log(false);
//     }
//     // return this.arr.includes(text)
//   }

// }

// let newSinif = new sinif('mehi' , 'salam')
// newSinif.search('salam')



// ------------------------------------------------------

class sinif {
 
  constructor(num){
    this.num=num
  }

  bolenleriniYoxla(){
    let arr=[]
    for (let i = 0; i <= this.num; i++) (this.num % i === 0) ? arr.push(i) : null ;
    console.log(arr);
  }
 
}

let newSinif = new sinif(12)
newSinif.bolenleriniYoxla()