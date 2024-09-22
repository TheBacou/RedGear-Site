export async function get(file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            var content = await response.text();
            return content
        } else {
            console.error('Erreur lors du chargement du fichier:', response.status);
        }
    } catch (error) {
        console.error('Erreur de réseau ou autre:', error);
    }
}
