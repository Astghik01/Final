var LivingCreature = require("./LivingCreature.js");

module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
    }

    move() {
        // var newCord = Random(this.chooseCell(0));
        // if (this.acted == false) {
        //     if (newCord) {
        //         var newX = newCord[0];
        //         var newY = newCord[1];

        //         matrix[newY][newX] = matrix[this.y][this.x];
        //         matrix[this.y][this.x] = 0;

        //         this.x = newX;
        //         this.y = newY;
        //         this.acted = true;
        //         this.energy--;
        //         if (this.energy <= 0) {
        //             this.die();
        //         }
        //     }
        // }

        var fullCells = this.chooseCell(0);
        //serveri Random function em ogtagorcum
        var newCell = Random(fullCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
            this.x = newX;
            this.y = newY;
            this.energy--;
        }

    }
    mul() {
        // this.multiply++;
        // var newCord = Random(this.chooseCell(0));

        // if (newCord && this.multiply >= 8) {
        //     var newX = newCord[0];
        //     var newY = newCord[1];

        //     matrix[newY][newX] = new GrassEater(newX, newY, 2);
        //     this.multiply = 0;
        // }

        var newCell = Random(this.chooseCell(0));
        if (this.energy >= 6 && newCell) {
            // the same as >
            // var newX = newCell[0];
            // var newY = newCell[1];
            // matrix[newY][newX] = this.index;
            var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            GrassEaterArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 0;
        }

    }
    eat() {
        // var newCord = Random(this.chooseCell(1));
        // if (this.acted == false) {
        //     if (newCord) {
        //         var newX = newCord[0];
        //         var newY = newCord[1];

        //         matrix[newY][newX] = matrix[this.y][this.x];
        //         matrix[this.y][this.x] = 0;

        //         this.x = newX;
        //         this.y = newY;

        //         this.energy++;
        //         this.acted = true;
        //         if (this.energy >= 12) {
        //             this.mul();
        //         }
        //     }
        //     else {
        //         this.move();
        //     }

        // }

        //serveri Random function em ogtagorcum
        var grass = Random(this.chooseCell(1));

        if (grass) {
            var newX = grass[0];
            var newY = grass[1];
            matrix[newY][newX] = this.index;

            matrix[this.y][this.x] = 0;
            for (var i in GrassArr) {
                if (newX == GrassArr[i].x && newY == GrassArr[i].y) {
                    GrassArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy += 2;
        }

    }
    die() {
        // matrix[this.y][this.x] = 0;
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in GrassEaterArr) {
                if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                }
            }
        }
    }
}