// Función para mostrar/ocultar el menú lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        mainContent.classList.remove('sidebar-open');
    } else {
        sidebar.classList.add('open');
        mainContent.classList.add('sidebar-open');
    }
}

// Función para mostrar/ocultar el buscador
function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    if (searchBar.style.display === 'block') {
        searchBar.style.display = 'none';
    } else {
        searchBar.style.display = 'block';
    }
}

// Función para mostrar la pestaña seleccionada
function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
}

// Función para filtrar los enlaces en el menú lateral
function searchLinks() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const links = document.querySelectorAll('#menu-links li');

    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (text.includes(input)) {
            link.style.display = '';
        } else {
            link.style.display = 'none';
        }
    });
}
