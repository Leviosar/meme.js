import AxioxInstance from "./Helpers/AxiosInstance"
import $ from "cheerio"

export default class Meme {
    constructor(){
        this.connection = AxioxInstance
        this.base_url = "http://knowyourmeme.com/"
    }

    async image(searchString) {
        try {
            const meme_request = await this.connection.get(this.base_url + searchString)
            const image = $("tbody.entry-grid-body > tr:first-child > td:first-child > a.photo > img", meme_request.data)
            console.log(image)
            
            const response = {
                src: image[0].attribs['data-src'],
                title: image[0].attribs.title 
            }
            
            return response
            
        } catch (error) {
            console.log(error)
        }
    }

    async randomImage() {
        try {
            const meme_request = await this.connection.get(this.base_url + "random")
            const image = $("article.entry > header > a.photo > img", meme_request.data)
            
            const response = {
                src: image[0].attribs['data-src'],
                title: image[0].attribs.title 
            }
            
            return response
            
        } catch (error) {
            console.log(error)
        }
    }

    async meme(searchString) {
        try {
            const initial_request = await this.connection.get(this.base_url + searchString)
            const link = $("tbody.entry-grid-body > tr:first-child > td:first-child > a.photo", initial_request.data)
            const meme_request = await this.connection.get("" + link[0].attribs.href)
            const about = $("h2#about + p", meme_request.data).text()
            const origin = $("h2#origin + p", meme_request.data).text()
            const image = $("article.entry > header > a.photo > img",  meme_request.data)[0].attribs['data-src']
            const title = $("section.info > h1 > a", meme_request.data).text()
    
            return {
                title: title,
                about: about,
                origin: origin,
                image: image
            }
        } catch (error) {
            console.log(error)
        }
    }

    async randomMeme() {
        try {
            const meme_request = await this.connection.get(this.base_url + "random")
            const about = $("h2#about + p", meme_request.data).text()
            const origin = $("h2#origin + p", meme_request.data).text()
            const image = $("article.entry > header > a.photo > img",  meme_request.data)[0].attribs['data-src']
            const title = $("section.info > h1 > a", meme_request.data).text()
    
            return {
                title: title,
                about: about,
                origin: origin,
                image: image
            }
        } catch (error) {
            console.log(error)
        }
    }
}