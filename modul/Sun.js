var LivingCreature = require("./LivingCreature.js");
module.exports = class Sun extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 11;
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

        //     matrix[newY][newX] = new Sun(newX, newY, 4);
        //     this.multiply = 0;
        // }

        var newCell = Random(this.chooseCell(0));
        if (this.energy >= 6 && newCell) {
            // the same as >
            // var newX = newCell[0];
            // var newY = newCell[1];
            // matrix[newY][newX] = this.index;
            var newSun = new Sun(newCell[0], newCell[1], this.index);
            SunArr.push(newSun);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 0;
        }

    }
    eat() {
        // if (this.acted == false) {

        //     var newCord = Random(this.chooseCell(3));

        //     if (newCord) {
        //         var newX = newCord[0];
        //         var newY = newCord[1];

        //         matrix[newY][newX] = matrix[this.y][this.x];
        //         matrix[this.y][this.x] = 0;

        //         this.x = newX;
        //         this.y = newY;

        //         this.energy++;
        //         this.acted = true;
        //         if (this.energy >= 10) {
        //             this.mul();
        //         }
        //     }
        //     else {
        //         var newCord1 = Random(this.chooseCell(1));

        //         if (newCord1) {
        //             var newX = newCord1[0];
        //             var newY = newCord1[1];

        //             matrix[newY][newX] = matrix[this.y][this.x];
        //             matrix[this.y][this.x] = 0;

        //             this.x = newX;
        //             this.y = newY;

        //             this.energy++;
        //             this.acted = true;
        //             if (this.energy >= 10) {
        //                 this.mul();
        //             }
        //         }
        //         else {
        //             this.move();
        //         }
        //     }
        // }

        var grass = Random(this.chooseCell(3));
        if (grass) {
            var newX = grass[0];
            var newY = grass[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            for (var i in SunArr) {
                if (newX == SunArr[i].x && newY == SunArr[i].y) {
                    SunArr.splice(i, 1);
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
            for (var i in SunArr) {
                if (this.x == SunArr[i].x && this.y == SunArr[i].y) {
                    SunArr.splice(i, 1);
                }
            }
        }
    }
}