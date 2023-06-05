const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
    companion: {
		name: "Velma",
		type: "Bat",
        companion: {
			name: "Tim",
			type: "Parasite",
            belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
		}  
	}
};
console.log(adventurer.belongings);
console.log(adventurer.belongings[0]);

for (let i=0; i < adventurer.belongings.length; i++) {
	console.log(adventurer.belongings[i]);
}
console.log(adventurer.companion)
console.log(adventurer.companion.companion);
console.log(adventurer.companion.companion.belongings[2]);

const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];
console.log(movies[0].title);

for (let i=0; i < movies.length; i++) {
	console.log(movies[i].title);
}
const foo = [{someProperty:'weee'}, 2, 3];
console.log(foo[0].someProperty);

const food = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
];

console.log(food[1][2]); 
const foof = [
    1,
    "hi",
    ()=>{
        console.log('fun');
    }
];
foof[2]();
const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
    const newEnemy = {
      name: nameIs,
      health: healthIs,
      power: powerIs,
      stamina: staminaIs
    }
    return newEnemy
  }
  
  const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
    const newPlayer = {
      name: nameIs,
      health: healthIs,
      power: powerIs,
      stamina: staminaIs
    }
    return newPlayer
  }

  class Character{
    constructor (name, age, eyes, hair) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
      }
    greet(otherChar){
        console.log("Hi " + otherChar + '!');
    }
    classyGreeting (otherClassyCharacter) {
        console.log('Greetings ' + otherClassyCharacter.name + '!')
    }
    smite (){
        console.log('I smite thee you vile person!')
    }
    setHair (hairColor) {
        this.hair = hairColor;
      }
  };
  const me = new Character("bob",21,3,"brown");
 console.log(me);

 class Hobbit extends Character {
    constructor (name, age, eyes, hair) {
      super(name, age, eyes, hair);
      this.skills = ["thievery", "speed", "willpower"];
    }
    steal () {
      console.log("Let's get away!");
    }
    greet (otherCharacter) {
      console.log(`Hello ${otherCharacter}.`);
    }
    smite () {
      super.smite();
      this.steal();
    }
  }
  const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
  frodo.smite();

  class Dwarves extends Character {
    constructor(name, age, eyes, hair, race){
        super(name,age,eyes,hair)
        this.race = race;
    }
    greet (otherCharacter){
        console.log(`Hello ${otherCharacter}.`)
    }
  }
 
  const dwarf = new Dwarves('Billy', 102, 1, "blonde", "Dwarf");
  console.log(dwarf);
  dwarf.greet("bill");

  class Tome {
    constructor (maker, spellType, serialNum) {
      this.maker = maker;
      this.spellType = spellType;
      this.serialNum = serialNum;
    }
    cast () {
      console.log('Casting a spell!');
    }
  }
  
  const fireTome = new Tome('Merlin', 'Fire', 1);
  console.log(fireTome);

  class Factory {
    constructor (maker) {
      this.maker = maker;
      this.tomes = [];
    }
    generateTome (spellType) {
      const newTome = new Tome(this.maker, spellType, this.tomes.length);
      this.tomes.push(newTome);
    }
    findTome (index) {
      return this.tomes[index];
    }
  }
  
  const merlin = new Factory('Merlin'); // Creates object named Merlin from Factory class

//   merlin.generateTome('Fire'); //Object Merlin calls the inherited generateTome() with 'Fire' as the spelltype.
//   // generateTome() creates a new object with class Tome and inputs "Merlin" as its maker, 'Firetype' as spelltype, 
//   // as well as a serialNum designated by the current length of the tomes array created in the constructor method. The method finishes by pushing a value into the above array.
//   merlin.generateTome('Water'); // ^ //
//   merlin.generateTome('Earth'); // ^ //
//   merlin.generateTome('Air'); // ^ //

  console.log(merlin); // Shows Factory object with constructor (maker) showing merlin, and the tomes array and its contents
  console.log(merlin.findTome(0)); //Reaches into the object and calls the method findTome(0) which will return the first value of the tomes array.