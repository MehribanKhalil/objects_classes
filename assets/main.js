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

// class sinif {

//   constructor(num){
//     this.num=num
//   }

//   bolenleriniYoxla(num){
//     let arr=[]
//     for (let i = 0; i <=num; i++) (num % i === 0) ? arr.push(i) : null ;
//     console.log(arr);
//   }

// }

// let newSinif = new sinif(12)
// newSinif.bolenleriniYoxla(12)

// -----------------------------------------------------------------------

// class admin {

//   constructor(name, surname){
//     this.name=name
//     this.surname=surname
//   }

//   login(ad, soyad){
//     (ad === this.name && soyad === this.surname ) ? alert('giris olundu')
//     : alert('username and password sehvdir')
//   }

// }

// let istifadeciAdi=prompt('adinizi girin')
// let istifadeciSoyAdi=prompt('soyadinizi girin')

// let newSinif = new admin( 'mehi' , 'xelilova')
// newSinif.login(istifadeciAdi,istifadeciSoyAdi)

// -----------------------------------------------------------------------

// class Human {

//   constructor(name , work,){
//     this.name = name
//     this.work = work
//   }

//   ad(){
//     console.log(this.name )
//   }

// }

// class Student extends  Human{

//   constructor(name , work , yas){
//     super(name , work)
//     this.yas=yas
//   }
//   yas(){
//     console.log(this.yas);
//   }

// }

// const student = new Student('mehi' , 19);

// console.log(student);

// -----------------------------------------------------------

arr = [
  {
    id: 2,
    description: "Sweet and savory sauces relishes spreads and seasonings",
    name: "Condiments",
  },
  {
    id: 1,
    description: "Soft drinks coffees teas beers and ales",
    name: "Beverages",
  },
  {
    id: 3,
    description: "Desserts candies and sweet breads",
    name: "Confections",
  },
  {
    id: 4,
    description: "Cheeses",
    name: "Dairy Products",
  },
  {
    id: 5,
    description: "Breads crackers pasta and cereal",
    name: "Grains/Cereals",
  },
  {
    id: 6,
    description: "Prepared meats",
    name: "Meat/Poultry",
  },
  {
    id: 7,
    description: "Dried fruit and bean curd",
    name: "Produce",
  },
  {
    id: 8,
    description: "Seaweed and fish",
    name: "Seafood",
  },
];


// ----------------------------------------------------------------

// console.table(arr);



// let sortedArr = arr.sort((a, b) => {
//   return b.id - a.id;
// });

//  arr.sort((a, b) => (a.name > b.name) ? 1  : ( (b.name > a.name) ? -1 :0)  );

// console.table(arr);


// ----------------------------------------------------------------


let keyword = '  foOd'

let sortedArr= arr.filter((item)=> item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase().trim()))

console.table(sortedArr);
