var path = window.location.pathname.split('/')
var file_name = path[path.length - 1].replace(".html", "")

var files = {
    "get": {
        "js": "./get.js"
    },
    "write": {
        "js": "./write.js"
    },
    "navbar": {
        "json": "../json/navbar.json",
        "js": "./template/navbar.json"
    },
    "loading": {
        "html": "loading.html"
    }
}

var content = {}

var module = {};

(async () => {
    try {

        Object.assign(module, await import(`${files.get.js}`));
        Object.assign(module, await import(`${files.write.js}`));

        content.loading.html = await module.get(files.loading.html)
        module.write(content.loading.html)

        content.navbar.json = JSON.parse(await module.get(files.navbar.json))
        Object.assign(module, await import(`${files.navbar.js}`));

        content.navbar.html = module.navbar(content.navbar.json)



    } catch (error) {
        console.error("Erreur lors du chargement du module JS", error);
    }
})();