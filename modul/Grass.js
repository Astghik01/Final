var LivingCreature = require("./LivingCreature.js");
module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
    }
    //     this.x = x;
    //     this.y = y;
    //     this.index = index;
    //     this.multiply = 0;
    //     this.directions = [
    //         [this.x - 1, this.y - 1],
    //         [this.x, this.y - 1],
    //         [this.x + 1, this.y - 1],
    //         [this.x - 1, this.y],
    //         [this.x + 1, this.y],
    //         [this.x - 1, this.y + 1],
    //         [this.x, this.y + 1],
    //         [this.x + 1, this.y + 1]
    //     ];

    // }
    // chooseCell(num) {
    //     var found = [];
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //             if (matrix[y][x] == num) {
    //                 found.push(this.directions[i]);
    //             }
    //         }
    //     }
    //     return found;
    // }




    mul() {
        this.multiply++;
        // var newCell = Random(this.chooseCell(0));

        // if (newCell && this.multiply >= 8) {
        //     var newX = newCell[0];
        //     var newY = newCell[1];

        //     matrix[newY][newX] = new Grass(newX, newY, 1);
        //     this.multiply = 0;


        //serveri Random function em ogtagorcum
        var newCell = Random(this.chooseCell(0));
        //  console.log(newCell, this.multiply > 6);
        if (this.multiply >= 6 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            GrassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}