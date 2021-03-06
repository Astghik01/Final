var express = require('express');
var app = express();
var server = require('http').Server(app);
var server = require('http').Server(app);
var io = require('socket.io')(server);
// var fs = require('fs');

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, function () {
    console.log("port is running");
})

// Aystex kapum enq classery
 Grass = require("./modul/Grass.js");
 gishatich = require("./modul/gishatich.js");
 GrassEater = require("./modul/GrassEater.js");
 Sun = require("./modul/Sun.js");
 ZarmanaliKerpar = require("./modul/ZarmanaliKerpar.js");


// haytararum enq zangvacnery
GrassArr = [];
GrassEaterArr = [];
gishatichArr = [];
SunArr = [];
ZarmanaliKerparArr = [];

// Matrix enq haytararum

var w = 40;
var h = 40;

function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = Math.floor(Math.random() * 100);
            if (r < 20) r = 0;
            else if (r < 40) r = 1;
            else if (r < 42) r = 2;
            else if (r < 75) r = 3;
            else if (r < 85) r = 4;
            else if (r < 100) r = 5;
            matrix[y][x] = r;
        }
    }
    return matrix;
}



// st. enq zan.-ic patahakan  andam tvox function
Random = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


//stexcum en zangvacic patahakan andam tvox function
// Random = function (arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }


// kanchum enq getMatrix functiony ev talis enq Matrix popoxakanin
matrix = genMatrix(w, h);

// Aystex pttvum en matrix-i mijov e stexcum en objectnery
// matrix = genMatrix(w, h);
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var xot = new Grass(x, y, 1);
            GrassArr.push(xot);
        }
     else   if (matrix[y][x] == 2) {
            var xotaker = new GrassEater(x, y, 2);
            GrassEaterArr.push(xotaker);
        }
       else if (matrix[y][x] == 3) {
            var predator = new gishatich(x, y, 3);
            gishatichArr.push(predator);
        }
       else if (matrix[y][x] == 4) {
            var arev = new Sun(x, y, 4);
            SunArr.push(arev);
        }
        else if (matrix[y][x] == 5) {
            var newkerpar = new ZarmanaliKerpar(x, y, 5);
            ZarmanaliKerparArr.push(newkerpar);
        }
    }
}

// stexcum enq function vor kkanchi objectneri methodnery ev kuxarki matrixi masin datan script.js

function drawserver() {

    for (var i in GrassArr) {
        GrassArr[i].mul();
    }

    for (var i in GrassEaterArr) {
        GrassEaterArr[i].move();
        GrassEaterArr[i].mul();
        GrassEaterArr[i].eat();
        GrassEaterArr[i].die();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].move();
        gishatichArr[i].mul();
        gishatichArr[i].eat();
        gishatichArr[i].die();
    }

    for (var i in SunArr) {
        SunArr[i].move();
        SunArr[i].mul();
        SunArr[i].eat();
        SunArr[i].die();
    }

    for (var i in ZarmanaliKerparArr) {
        ZarmanaliKerparArr[i].move();
        ZarmanaliKerparArr[i].mul();
        ZarmanaliKerparArr[i].die();
    }
    // matrixy uxarkum enq clientin
    io.sockets.emit("matrix", matrix);
}





setInterval(drawserver, 200);
// Random = function (arr) {
//     return arr[Math.floor(Math.random() * arr.length)]
// }


// for (var y = 0; y < matrix.length; y++) {
//     for (var x = 0; x < matrix[y].length; x++) {
//         if (matrix[y][x] == 1) {
//             matrix[y][x].mul();
//         }
//         if (matrix[y][x] == 2) {
//             matrix[y][x].eat();
//         }
//         if (matrix[y][x] == 3) {
//             matrix[y][x].eat();
//         }
//         if (matrix[y][x] == 4) {
//             matrix[y][x].eat();
//         }
//         if (matrix[y][x] == 5) {
//             matrix[y][x].xotstexcel();
//         }
//     }
// }