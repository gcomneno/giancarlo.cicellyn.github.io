// Funzione per caricare il contenuto dalla URL specificata in un elemento specifico
function loadContent(url, targetId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        });
}

// Carica la navigazione
loadContent('/navigation.html', 'navigation');

// Carica il footer
loadContent('/footer.html', 'footer');
