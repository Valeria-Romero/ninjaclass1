
class Ninja{
    constructor( name, health, speed, strength){
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;

        this.showStats = function(){
            console.log("Name: " + this.name + ", Strength: " + strength +", Speed: " + speed + ", Health: " + this.health);
        }
    }

    sayName(){
        console.log("My name is " + this.name);
    }


    drinkSake(){
        this.health = this.health + 10;
    }
}



var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
ninja1.drinkSake();
ninja1.showStats();
