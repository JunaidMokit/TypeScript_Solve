{

    //Problem 1
    function formatString(input: string, toUpper: boolean=true): string {
        if(toUpper===true){
            return input.toUpperCase()
        }
        else{
            return input.toLowerCase();
        }
    }

    const result1=formatString('Hello',false)
    console.log(result1)

    // Problem 2

    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {

       return items.filter(item=>item.rating>4)

    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
      ];
      
      console.log( filterByRating(books));

    //   Problem 3

    function concatenateArrays<T>(...arrays: T[][]): T[]{
        return arrays.flat()

    }
  const result3= concatenateArrays([1, 2], [3, 4], [5]); 
  console.log(result3)

// problem 4

class Vehicle{
    private make:string;
    private year:number;
    constructor(make:string,year:number){
        this.make=make;
        this.year=year;
    }
    getInfo(){
        console.log(`"Make: ${this.make}, Year :${this.year}"`);
    }
}

class Car extends Vehicle{
    private model:string;

    constructor(make:string,year:number,model:string){
        super(make,year)
        this.model=model;
    }
    getModel(){
        console.log(`"Model: ${this.model}"`)
    }

}

const result4=new Car("Toyota",2020,"Corolla");
result4.getInfo();
result4.getModel();

// Problem 5

function processValue(value: string | number): number{
    if(typeof value==="string"){
        return value.length;
    }
    else{
        return value*2;
    }
}

const result5=processValue(10);
console.log(result5)

//problem 6

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{

    let mexProduct=products[0];
    for(const product of products){
        if(product.price>mexProduct.price){
            mexProduct=product;
        }
    }
    return mexProduct;

  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  const result6= getMostExpensiveProduct(products); 
  console.log(result6)

  //Problem 7

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day===Day.Saturday || day===Day.Sunday){
        return "Weekend"
    }else{
        return "Weekday"
    }
  }

  const result7=getDayType(Day.Saturday);
  console.log(result7)

//Problem 8

async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(n<0){
                reject(new Error("Negative number not allowed"))
            }
            else{
                resolve(n*n)
            }
        },1000)
    })

}
squareAsync(4).then(console.log);        
squareAsync(-3).catch(console.error); 








 

}