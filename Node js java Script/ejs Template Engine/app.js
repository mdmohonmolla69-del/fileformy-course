const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');

// https://getbootstrap.com/docs/5.3/components/navbar/
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName = 'Adidas'
    let searchText = 'Search Now'
    let arr = [1, 2, 3]
    res.render("index", { siteName: siteName, searchText: searchText, arr })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = 'Adidas'
    let blogContent = 'Search Now'
    res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})