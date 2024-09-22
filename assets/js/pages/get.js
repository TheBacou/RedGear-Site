export async function get(file) {
    try {
        const response = await import(file);
        if (response.ok) {
            return await response.text();
        } else {
            console.error('Erreur lors du chargement du fichier:', response.status);
        }
    } catch (error) {
        console.error('Erreur de réseau ou autre:', error);
    }
}
