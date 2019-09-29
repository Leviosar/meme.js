import Express from "express"
import MemeApi from './Meme'

const app = Express()
const api = new MemeApi()

app.get("/", (req, res) => {
    res.send("There's nothing to see here")
})

app.get("/raw/image/random", async (req, res) => {
    try {
        const meme = await api.randomImage()
        res.redirect(meme.src)
    } catch (error) {
        console.log(error)
    }
})

app.get("/raw/meme/random", async (req, res) => {
    try {
        res.redirect('http://knowyourmeme.com/random')
    } catch (error) {
        console.log(error)
    }
})

app.get("/image/random", async (req, res) => {
    try {
        const meme = await api.randomImage()
        res.send(meme)
    } catch (error) {
        console.log(error)
    }
})

app.get("/image/:meme", async (req, res) => {
    try {
        const meme = await api.image(`/search?q=${req.params.meme}`)
        res.send(meme)
    } catch (error) {
        console.log(error)
    }
})

app.get("/meme/random", async (req, res) => {
    try {
        const meme = await api.randomMeme()
        res.send(meme)
    } catch (error) {
        console.log(error)
    }
})

app.get("/meme/:meme", async (req, res) => {
    try {
        const meme = await api.meme(`/search?q=${req.params.meme}`)
        res.send(meme)
    } catch (error) {
        console.log(error)
    }
})

let port

if (typeof process.argv[2] != undefined) {
    port = process.argv[2]    
} else {
    port = 8000    
}

app.listen(port,
    ()=>{
        console.log("Listening at port " + port)
    }
)