class autor{
    static value = 0;
    constructor(name, work){
        this.name = name;
        this.work = work;
        autor.value++
    }
    static getValue(){
        return this.value;
    }
}
const autor1 = new autor("Tom", "Titanic");
const autor2 = new autor("Tom", "Eliphan");
const autor3 = new autor("Elsa", "Lion");


console.log(autor.getValue())
