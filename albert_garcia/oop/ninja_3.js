class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strenth = 3;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
        return this;
    }
    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strenth);
        return this;
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strenth = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
    }
}
const superSensei = new Sensei("Master Splinter");
console.log(Sensei);
superSensei.sayName();
superSensei.speakWisdom();
superSensei.showStats();