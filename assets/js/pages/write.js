export async function write(content) {
    try {
        document.open();
        document.write(content);
        document.close();
    } catch (error) {
        console.error('Erreur lors de l\'écriture du document', error);
    }
}
