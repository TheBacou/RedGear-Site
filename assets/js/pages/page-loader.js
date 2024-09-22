var path = window.location.pathname.split('/')
var file_name = path[path.length - 1]

var pages = {
    "loading": {
        "js": "./loading.js", // path to the js file
        "html": "loading.html" // path to the html file
    }
}

var module = {};

(async () => {
    try {

        Object.assign(module, await import(`./${pages.loading.js}`)); // adding every fonction of "pages.loading.js" in module with other fonction fetched

        module.loading(pages.loading.html) // send loading page to user

    } catch (error) {
        console.error("Erreur lors du chargement du module JS", error);
    }
})();



// loadHTML(pages.loading.html); send the loading page to user
