'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AxiosInstance = require('./Helpers/AxiosInstance');

var _AxiosInstance2 = _interopRequireDefault(_AxiosInstance);

var _slugify = require('slugify');

var _slugify2 = _interopRequireDefault(_slugify);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Meme = function () {
    function Meme() {
        _classCallCheck(this, Meme);

        this.connection = _AxiosInstance2.default;
        this.base_url = 'http://knowyourmeme.com/';
    }

    _createClass(Meme, [{
        key: 'image',
        value: async function image(searchString) {
            try {
                var meme_request = await this.connection.get(this.base_url + searchString);
                var image = (0, _cheerio2.default)('tbody.entry-grid-body > tr:first-child > td:first-child > a.photo > img', meme_request.data);
                console.log(image);

                var response = {
                    src: image[0].attribs.src,
                    title: image[0].attribs.title
                };

                return response;
            } catch (error) {
                console.log(error);
            }
        }
    }, {
        key: 'randomImage',
        value: async function randomImage() {
            try {
                var meme_request = await this.connection.get(this.base_url + 'random');
                var image = (0, _cheerio2.default)('article.entry > header > a.photo > img', meme_request.data);

                var response = {
                    src: image[0].attribs.src,
                    title: image[0].attribs.title
                };

                return response;
            } catch (error) {
                console.log(error);
            }
        }
    }, {
        key: 'meme',
        value: async function meme(searchString) {
            try {
                var initial_request = await this.connection.get(this.base_url + searchString);
                var link = (0, _cheerio2.default)('tbody.entry-grid-body > tr:first-child > td:first-child > a.photo', initial_request.data);
                var meme_request = await this.connection.get('' + link[0].attribs.href);
                var about = (0, _cheerio2.default)('h2#about + p', meme_request.data).text();
                var origin = (0, _cheerio2.default)('h2#origin + p', meme_request.data).text();
                var image = (0, _cheerio2.default)('article.entry > header > a.photo > img', meme_request.data)[0].attribs.src;
                var title = (0, _cheerio2.default)('section.info > h1 > a', meme_request.data).text();

                return {
                    title: title,
                    about: about,
                    origin: origin,
                    image: image
                };
            } catch (error) {
                console.log(error);
            }
        }
    }, {
        key: 'randomMeme',
        value: async function randomMeme() {
            try {
                var meme_request = await this.connection.get(this.base_url + 'random');
                var about = (0, _cheerio2.default)('h2#about + p', meme_request.data).text();
                var origin = (0, _cheerio2.default)('h2#origin + p', meme_request.data).text();
                var image = (0, _cheerio2.default)('article.entry > header > a.photo > img', meme_request.data)[0].attribs.src;
                var title = (0, _cheerio2.default)('section.info > h1 > a', meme_request.data).text();

                return {
                    title: title,
                    about: about,
                    origin: origin,
                    image: image
                };
            } catch (error) {
                console.log(error);
            }
        }
    }]);

    return Meme;
}();

exports.default = Meme;