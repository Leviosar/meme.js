# Meme.js

Deployable API for searching really nice memes on the web.

## What in the name of all gods is this?

Need a funny API to make coding examples? Want to create a telegram bot that sends memes (already did it)? A meme API will serve your needs. But hey, as the holy bible of internet memes [knowyourmeme](https://knowyourmeme.com) doesn't provide a public API to their data, what should we do? If you said write a web scraper to fetch those data you're absolutelly right and that's Meme.js!

To make it completely ready for you to deploy your own instance, i'm not using any sort of database or config files on this project, just clone it, run /dist/src/index.js with node and you're good to go.

Of course if you want to disponibilize for the general public you'll need a VPS or some sort of hosting with a really cool domain name like i don't know... http://thememeapi.online

## Live version

Like i've said, my purpose with Meme.js was to serve a fun and simple meme API and the domain name was cheap so here it is

## Routes

### http://thememeapi.online/image/random

- Description: returns a random meme JSON
- Method: GET
- Format:

```json
    {
        "src": "image source (string)",
        "title": "meme name / image title (string)"
    }
```

### http://thememeapi.online/image/:search

>NOTE: for searches containing more than one word, use '+' to separate them in the url

- Description: returns the image of the first result on relevance filter from given string
- Method: GET
- Format:

```json
    {
        "src": "image source (string)",
        "title": "meme name / image title (string)"
    }
```

### http://thememeapi.online/meme/random

- Description: returns the definitions of a random meme
- Method: GET
- Format:

```json
    {
        "title":"Meme name",
        "about":"First paragraph from the about section",
        "origin":"First paragraph from the origin section",
        "image":"Meme image"
    }
```

### http://thememeapi.online/meme/:search

>NOTE: for searches containing more than one word, use '+' to separate them in the url

- Description: returns the definitions of a meme from given string
- Method: GET
- Format:

```json
    {
        "title":"Meme name",
        "about":"First paragraph from the about section",
        "origin":"First paragraph from the origin section",
        "image":"Meme image"
    }
```

## Build

To build the project you'll need npm (assuming you're on the project root)

```bash
    npm install
    npm run build
    cd ./dist/src
    node index.js 8000
```
If you want to run the server in another port just pass it as the first argument.