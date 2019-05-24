// var matrix = [];
// var n = 20;
// var m = 20;
// side = 20;

// function setup() {
//     for (var y = 0; y < n; y++) {
//         matrix[y] = [];
//         for (var x = 0; x < m; x++) {
//             matrix[y][x] = random([0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2]);
//         }
//     }
//     console.log(matrix);
//     createCanvas(matrix[0].length*side,matrix.length*side);
// }
// function draw() {
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[0].length; x++) {
//             if (matrix[y][x] == 1) {
//                 fill("green");
//                 rect(x * side, y * side, side, side)
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("grey");
//                 rect(x * side, y * side, side, side)
//             }
//             else if (matrix[y][x] == 2) {
//                 fill("yellow");
//                 rect(x * side, y * side, side, side)
//             }
//         }
//     }
// }



// var matrix = [
//     [0, 0, 1, 0, 4],
//     [1, 0, 2, 0, 0],
//     [0, 1, 0, 5, 0],
//     [0, 0, 1, 0, 0],
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 3]
// ];
var side = 10;
var socket = io();
// side = 10;
function setup() {
    createCanvas(20 * side, 20 * side);
    background('#acacac');

    //     for (var y = 0; y < matrix.length; y++) {
    //         for (var x = 0; x < matrix[y].length; x++) {
    //             if (matrix[y][x] == 1) {
    //                 matrix[y][x] = new Grass(x, y, 1);
    //             }
    //             if (matrix[y][x] == 2) {
    //                 matrix[y][x] = new GrassEater(x, y, 2);
    //             }
    //             if (matrix[y][x] == 3) {
    //                 matrix[y][x] = new gishatich(x, y, 3);
    //             }
    //             if (matrix[y][x] == 4) {
    //                 matrix[y][x] = new Sun(x, y, 4);
    //             }
    //             if (matrix[y][x] == 5) {
    //                 matrix[y][x] = new ZarmanaliKerpar(x, y, 5);
    //             }
    //         }
    //     }
    //     console.log(matrix);
}


// function draw() {
// }

function drawMatrix(matrix) {
    background('blue');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("grey");
                // rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                // rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                // rect(x * side, y * side, side, side);
                // matrix[y][x].acted = false;
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
                // rect(x * side, y * side, side, side);
                // matrix[y][x].acted = false;
            }
            else if (matrix[y][x] == 4) {
                fill("orange");
                // rect(x * side, y * side, side, side);
                // matrix[y][x].acted = false;
            }
            else if (matrix[y][x] == 5) {
                fill("pink");
                // rect(x * side, y * side, side, side);
                // matrix[y][x].acted = false;
            }
            rect(x * side, y * side, side, side);
        }
    }
}

socket.on("matrix", drawMatrix);

