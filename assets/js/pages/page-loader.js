var path = window.location.pathname.split('/')
var file_name = path[path.length - 1]

var files = {
    "get": {
        "js": "./get.js"
    },
    "write": {
        "js": "./write.js"
    },
    "loading": {
        "html": "loading.html"
    },
    "template": {
        "js": "./template.js",
        "html": "template.html"
    }
}

var module = {};

(async () => {
    try {

        Object.assign(module, await import(`${files.get.js}`));
        Object.assign(module, await import(`${files.write.js}`));

        files.loading.content = await module.get(files.loading.html)
        module.write(files.loading.content)

    } catch (error) {
        console.error("Erreur lors du chargement du module JS", error);
    }
})();





/*

(async () => {
    try {

        Object.assign(module, await import(`./${pages.loading.js}`)); // adding every fonction of "pages.loading.js" in module with other fonction fetched

        module.loading(pages.loading.html) // send loading page to user

        Object.assign(module, await import(`./${pages.loading.js}`));

    } catch (error) {
        console.error("Erreur lors du chargement du module JS", error);
    }
})();*/
