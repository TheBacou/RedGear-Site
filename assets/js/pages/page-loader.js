var path = window.location.pathname.split('/')
var file_name = path[path.length - 1]

var pages = {
    "loading": {
        "js": "assets/js/pages/loading.js", // path to the js file
        "html": "loading.html" // path to the html file
    }
}

var functions = {}


(async () => {
    var e = fetch(pages.loading.js) 
    console.log(e)
})


// loadHTML(pages.loading.html); send the loading page to user
