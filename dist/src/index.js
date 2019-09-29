"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _Meme = require("./Meme");

var _Meme2 = _interopRequireDefault(_Meme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var api = new _Meme2.default();

app.get("/", function (req, res) {
    res.send("There's nothing to see here");
});

app.get("/raw/image/random", async function (req, res) {
    try {
        var meme = await api.randomImage();
        res.redirect(meme.src);
    } catch (error) {
        console.log(error);
    }
});

app.get("/raw/meme/random", async function (req, res) {
    try {
        res.redirect('http://knowyourmeme.com/random');
    } catch (error) {
        console.log(error);
    }
});

app.get("/image/random", async function (req, res) {
    try {
        var meme = await api.randomImage();
        res.send(meme);
    } catch (error) {
        console.log(error);
    }
});

app.get("/image/:meme", async function (req, res) {
    try {
        var meme = await api.image("/search?q=" + req.params.meme);
        res.send(meme);
    } catch (error) {
        console.log(error);
    }
});

app.get("/meme/random", async function (req, res) {
    try {
        var meme = await api.randomMeme();
        res.send(meme);
    } catch (error) {
        console.log(error);
    }
});

app.get("/meme/:meme", async function (req, res) {
    try {
        var meme = await api.meme("/search?q=" + req.params.meme);
        res.send(meme);
    } catch (error) {
        console.log(error);
    }
});

var port = void 0;

if (_typeof(process.argv[2]) != undefined) {
    port = process.argv[2];
} else {
    port = 8000;
}

app.listen(port, function () {
    console.log("Listening at port " + port);
});