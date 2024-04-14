const animals = [{
        species: 'lion',
        name: 'king'
    },
    {
        species: 'Whale',
        name: 'Queen'
    }
];

function printAnimals() {
    this.print = function () {
        console.log(this.species, this.name)
    }
}

var i = new printAnimals();

animals.forEach(ele => {
    i.print.call(ele)
})