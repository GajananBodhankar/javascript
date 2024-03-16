let Animal = {
  walks() {
    if (!this.isSleeping) {
      console.log("Animal is walking");
    } else {
      console.log("Sleeping");
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let Rabbit = {};
Rabbit.__proto__ = Animal;

Rabbit.sleep();

Rabbit.walks();
Animal.walks();
