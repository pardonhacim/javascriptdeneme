    const country={
        name :"Spain",
        population:40000,
        description: function(){
            return this.name+" "+this.population
        }
        
    }

    console.log(country.name);
    console.log(country["name"]);

    const job={
        role:"blockchain dev",
        salary:100000,
        applicationLink:"link",
        isRemote:false
    }

    class Job{

        constructor(role,salary,applicationLink,isRemote){
            this.role=role;
            this.salary=salary;
            this.applicationLink=applicationLink;
            this.isRemote=isRemote
        }

    }   
    

    const job3=new Job(
        "software engineer",
        200000,
        "link2",
        true,
    )

    const job2=new Job(
        "omer",
        0,
        "link2",
        true,
    )

    console.log(job3);
    console.log(job);
    console.log(job2);


    class Car{
        constructor(color,brand,year,price,range){
            this.color=color,
            this.brand=brand,
            this.year=year,
            this.price=price,
            this.range=range
        }   
        
        start(){
            return"car started";
        }
        stop(){
            return"car stopped";
        }
    }


const bmw = new Car("black","bmw",1977,5000000,150000);
console.log(bmw.start());

//getters setters

class Client{
    constructor(name,age,tc){
        this._name=name,
        this._age=age,
        this._tc=tc 
    }

    static clientCount=0;
    static increaseClientCount(){
        this.clientCount++;
    }

    get tc(){
        if (userType ==="Lawyer") {
            return this._tc
        }
        else{
            return "you are not allowed"
        }
    }
    set tc(newTc){
        if (userType==="Lawyer") {
            this._tc=newTc;
        }
        else{
            console.log("You are not allowed");
        }
    }
}

const person=new Client("Omer",46,11111111111);
console.log(person);

let userType="Lawyer";
console.log(person.tc);
person.tc=1902;

console.log(person);

