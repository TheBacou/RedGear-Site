var path = window.location.pathname.split('/')
var file_name = path[path.length - 1]

async function loadHTML(file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const htmlContent = await response.text();
            
            document.open();
            document.write(htmlContent);
            document.close();

        } else {
            console.error('Erreur lors du chargement du fichier:', response.status);
        }
    } catch (error) {
        console.error('Erreur de réseau ou autre:', error);
    }
}

loadHTML('loading.html');