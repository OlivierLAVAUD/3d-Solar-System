// Point d'entrée de l'application
window.addEventListener('DOMContentLoaded', () => {
    try {
        new SolarSystem();
    } catch (error) {
        console.error('Erreur:', error);
        const loading = document.getElementById('loading');
        if (loading) {
            loading.innerHTML = '<p style="color: #ff6b6b;">Erreur de chargement. Veuillez rafraîchir la page.</p>';
        }
    }
});

// Gestion des erreurs globales
window.addEventListener('error', (e) => {
    console.error('Erreur globale:', e.error);
});