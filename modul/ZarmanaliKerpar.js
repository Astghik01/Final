var LivingCreature = require("./LivingCreature.js");
module.exports = class ZarmanaliKerpar extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;
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

        //     matrix[newY][newX] = new ZarmanaliKerpar(newX, newY, 5);
        //     this.multiply = 0;
        // }

        var newCell = Random(this.chooseCell(0));
        if (this.energy >= 6 && newCell) {
            // the same as >
            // var newX = newCell[0];
            // var newY = newCell[1];
            // matrix[newY][newX] = this.index;
            var newZarmanaliKerpar = new ZarmanaliKerpar(newCell[0], newCell[1], this.index);
            ZarmanaliKerparArr.push(newZarmanaliKerpar);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 0;
        }
    }
    xotstexcel() {

        var dexin = Random(this.chooseCell(2));

        if (dexin) {
            var verjapesDatark = Random(this.chooseCell(0));
            if (verjapesDatark) {
                var x = verjapesDatark[0];
                var y = verjapesDatark[1];

                matrix[y][x] = new Grass(x, y, 1);
                this.energy++;
                if (this.energy >= 10) {
                    this.mul();
                }
            }
        }
        else {
            this.move();
        }
    }
    die() {
        // matrix[this.y][this.x] = 0;

        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in ZarmanaliKerparArr) {
                if (this.x == ZarmanaliKerparArr[i].x && this.y == ZarmanaliKerparArr[i].y) {
                    ZarmanaliKerparArr.splice(i, 1);
                }
            }
        }
    }
}