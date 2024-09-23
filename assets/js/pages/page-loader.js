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
        "json": "./assets/json/navbar.json",
        "js": "./template/navbar.js"
    },
    "loading": {
        "html": "loading.html"
    },
    "template": {
        "html": "template.html"
    }
}

var content = {
    "loading": {},
    "template": {},
    "navbar": {}
}

var module = {};

(async () => {
    try {

        Object.assign(module, await import(`${files.get.js}`));
        Object.assign(module, await import(`${files.write.js}`));


        content.loading.html = await module.get(`${files.loading.html}`)
        module.write(content.loading.html)


        content.navbar.json = JSON.parse(await module.get(`${files.navbar.json}`))
        Object.assign(module, await import(`${files.navbar.js}`));


        content.navbar.html = await module.navbar(content.navbar.json)
        content.template.html = await module.get(`${files.template.html}`)
        module.write(content.template.html)

        document.getElementsByName('navbar-box').innerHTML = content.navbar.html


    } catch (error) {
        console.error("Erreur lors du chargement du module JS", error);
    }
})();
