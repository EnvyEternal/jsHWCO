class autor{
    static valueName = 0;
    static valueWorks = 0;
    constructor(name){
        this.name = name;
        this.work = [];
        autor.valueName++;
        this.amountWorks = 0;
    }
    addWork(work){
        this.work.push(work);
        autor.valueWorks++;
        this.amountWorks++
    }

    static getValue(){
        return `Number of Authors: ${this.valueName}; Number of Works: ${this.valueWorks}`
    }
    getInfo(){
        console.log(`${this.name}`)
    }
   getValueWork(x){
       console.log(x.amountWorks)
   }
   infoAll() {
    console.log(`Hello my name is ${this.name}, its my work ${this.work}`);
    
    }
}
const autor1 = new autor("Tom");
const autor2 = new autor("Elsa");
autor1.addWork("Titanic");
autor1.addWork("Lion");
autor2.addWork("Titanic")

console.log(autor1)
console.log(autor.getValue())
autor1.infoAll()