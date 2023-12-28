document.addEventListener('DOMContentLoaded', function() {
    // Load Home content by default
    loadContent('home.html');

    // Attach event listeners to navigation links
    document.getElementById('home').addEventListener('click', () => loadContent('home.html'));
    document.getElementById('about').addEventListener('click', () => loadContent('about.html'));
});

function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => document.getElementById('content').innerHTML = html)
        .catch(err => console.error('Failed to load page: ', err));
}


function loadHome() {
    document.getElementById('content').innerHTML = '<h1>Welcome to My Website</h1><p>This is the home page.</p>';
}
