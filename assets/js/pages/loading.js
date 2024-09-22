var path = window.location.pathname.split('/')
var file_name = path[path.length - 1]

var pages = {
    "loading": {
        "js": "assets/js/pages/loading.js", // path to the js file
        "html": "loading.html" // path to the html file
    }
}

var module = {}


(async () => {
    try {
        module.loading = await import(`./${pages.loading.js}`);
        console.log(module)
        console.log(module.loading)
    } catch (error) {
        console.error("Erreur lors du chargement du module JS", error);
    }
})();


// loadHTML(pages.loading.html); send the loading page to user
