(() => {
    // Contenido Detallado para Principiantes en PHP
    const pages = {
    };

    // Elementos DOM en caché
    const contentDiv = document.getElementById('content');
    const loadingSpinner = document.getElementById('loading-spinner');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const suggestionBox = document.getElementById('suggestion-box');
    const themeToggle = document.getElementById('theme-toggle');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    /**
     * Muestra el spinner de carga.
     */
    const showLoading = () => {
        loadingSpinner.style.display = 'block';
    };

    /**
     * Oculta el spinner de carga.
     */
    const hideLoading = () => {
        loadingSpinner.style.display = 'none';
    };

    /**
     * Carga el contenido de la página especificada.
     * @param {string} page - El identificador de la página.
     */
    const loadContent = (page) => {
    };

    /**
     * Busca el contenido basado en la consulta y muestra los resultados.
     * @param {string} query - La consulta de búsqueda.
     */
    const searchContent = (query) => {
    };

    /**
     * Escapa HTML para prevenir ataques XSS.
     * @param {string} unsafe - La cadena insegura.
     * @returns {string} - La cadena escapada.
     */
    const escapeHtml = (unsafe) => {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };

    /**
     * Escapa caracteres especiales en una cadena para su uso en una expresión regular.
     * @param {string} string - La cadena de entrada.
     * @returns {string} - La cadena escapada.
     */
    const escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    /**
     * Maneja las sugerencias de búsqueda basadas en la consulta actual.
     * @param {string} query - La consulta de entrada actual.
     */
    const handleSearchSuggestions = (query) => {
        if (!query) {
            closeSuggestionBox();
            return;
        }

        const suggestions = Object.values(pages).filter(page => 
            page.title.toLowerCase().includes(query.toLowerCase())
        );

        if (suggestions.length > 0) {
            suggestionBox.innerHTML = suggestions.map(page => `<li data-page="${getPageKey(page.title)}">${escapeHtml(page.title)}</li>`).join('');
            suggestionBox.classList.add('active');
        } else {
            closeSuggestionBox();
        }
    };

    /**
     * Recupera la clave de la página basada en el título de la página.
     * @param {string} title - El título de la página.
     * @returns {string|null} - La clave de la página correspondiente o null si no se encuentra.
     */
    const getPageKey = (title) => {
        return Object.keys(pages).find(key => pages[key].title === title) || null;
    };

    /**
     * Alterna el tema de modo oscuro.
     */
    const toggleDarkMode = () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');

        // Cambiar icono basado en el modo
        const themeToggleIcon = themeToggle.querySelector('i');
        if (themeToggleIcon) {
            themeToggleIcon.classList.toggle('fa-moon', !isDarkMode);
            themeToggleIcon.classList.toggle('fa-sun', isDarkMode);
        }

        // Persistir la preferencia del usuario
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    };

    /**
     * Inicializa el tema basado en la preferencia del usuario almacenada en localStorage.
     */
    const initializeTheme = () => {
        const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
        if (darkModeEnabled) {
            document.body.classList.add('dark-mode');
            const themeToggleIcon = themeToggle.querySelector('i');
            if (themeToggleIcon) {
                themeToggleIcon.classList.remove('fa-moon');
                themeToggleIcon.classList.add('fa-sun');
            }
        }
    };

    /**
     * Cierra el cuadro de sugerencias.
     */
    const closeSuggestionBox = () => {
        suggestionBox.innerHTML = '';
        suggestionBox.classList.remove('active');
    };

    /**
     * Maneja los clics en los enlaces de navegación utilizando la delegación de eventos.
     * @param {Event} event - El evento de clic.
     */
    const handleNavLinkClick = (event) => {
        const target = event.target.closest('a');
        if (target && target.dataset.target) {
            event.preventDefault();
            const page = target.dataset.target;
            loadContent(page);
            closeSuggestionBox();
            searchInput.value = '';
            // Cerrar nav-links en móvil después de la selección
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    };

    /**
     * Maneja los clics en los elementos de sugerencia utilizando la delegación de eventos.
     * @param {Event} event - El evento de clic.
     */
    const handleSuggestionClick = (event) => {
        const target = event.target.closest('li');
        if (target && target.dataset.page) {
            const selectedPage = target.dataset.page;
            if (selectedPage && pages[selectedPage]) {
                loadContent(selectedPage);
                closeSuggestionBox();
                searchInput.value = '';
            }
        }
    };

    /**
     * Debounce una función por el retraso especificado.
     * @param {Function} func - La función a debounce.
     * @param {number} delay - El retraso de debounce en milisegundos.
     * @returns {Function} - La función debounce.
     */
    const debounce = (func, delay) => {
        let debounceTimer;
        return function(...args) {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(this, args), delay);
        };
    };

    /**
     * Inicializa todos los event listeners.
     */
    const initializeEventListeners = () => {
        // Clics en enlaces de navegación
        navLinks.addEventListener('click', handleNavLinkClick);

        // Clic en el botón de búsqueda
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                searchContent(query);
            }
        });

        // Tecla Enter en el campo de búsqueda
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchButton.click();
            }
        });

        // Evento de entrada para sugerencias de búsqueda con debounce
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.trim().toLowerCase();
            handleSearchSuggestions(query);
        }, 300));

        // Clic en el cuadro de sugerencias (Delegación de eventos)
        suggestionBox.addEventListener('click', handleSuggestionClick);

        // Clic en el botón de alternar tema
        themeToggle.addEventListener('click', toggleDarkMode);

        // Clic fuera para cerrar el cuadro de sugerencias
        document.addEventListener('click', (e) => {
            if (!document.querySelector('.search-bar').contains(e.target)) {
                closeSuggestionBox();
            }
        });

        // Clics en botones de dropdown
        const dropdownButtons = document.querySelectorAll('.dropdown-btn');
        const dropdownContainers = document.querySelectorAll('.dropdown-container');
    
        dropdownButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevenir que el evento se propague al documento
                // Alternar clase activa
                button.classList.toggle('active');
    
                // Alternar la visualización del contenedor de dropdown
                const dropdown = button.nextElementSibling;
                if (dropdown.style.display === "block") {
                    dropdown.style.display = "none";
                } else {
                    dropdown.style.display = "block";
                }
            });
        });
    
        // Cerrar dropdowns al hacer clic fuera
        document.addEventListener('click', (e) => {
            dropdownButtons.forEach(button => {
                const dropdown = button.nextElementSibling;
                if (dropdown.style.display === "block" && !button.contains(e.target) && !dropdown.contains(e.target)) {
                    dropdown.style.display = "none";
                    button.classList.remove('active');
                }
            });
        });
    };
        // Alternar todos los dropdowns
        const toggleDropdownsButton = document.getElementById('toggle-dropdowns');
        if (toggleDropdownsButton) {
            toggleDropdownsButton.addEventListener('click', () => {
                const allDropdowns = document.querySelectorAll('.dropdown-container');
                const allButtons = document.querySelectorAll('.dropdown-btn');

                const allOpen = Array.from(allDropdowns).every(dropdown => dropdown.style.display === "block");

                allDropdowns.forEach(dropdown => {
                    dropdown.style.display = allOpen ? "none" : "block";
                });

                allButtons.forEach(button => {
                    if (allOpen) {
                        button.classList.remove('active');
                    } else {
                        button.classList.add('active');
                    }
                });
            });
        

        // Alternar menú de hamburguesa
        if (hamburger) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }
    };

    /**
     * Inicializa la aplicación.
     */
    const initializeApp = () => {
        // Inicializar tema basado en la preferencia del usuario
        initializeTheme();

        // Configurar event listeners
        initializeEventListeners();

        // Cargar contenido predeterminado después de asegurar que el tema esté aplicado
        loadContent('home');
    };

    // Inicializar la aplicación cuando el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', initializeApp);

    /**
     * Agrega desplazamiento suave para enlaces de navegación.
     */
    const addSmoothScrolling = () => {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    /**
     * Implementa efectos de hover para botones, enlaces y otros elementos interactivos.
     */
    const addHoverEffects = () => {
        const interactiveElements = document.querySelectorAll('button, a, .dropdown-btn');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseover', () => {
                element.classList.add('hover');
            });
            element.addEventListener('mouseout', () => {
                element.classList.remove('hover');
            });
        });
    };

    /**
     * Mejora la barra de búsqueda con sugerencias de autocompletado.
     */
    const enhanceSearchBar = () => {
        const searchInput = document.getElementById('search-input');
        const suggestionBox = document.getElementById('suggestion-box');

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim().toLowerCase();
            if (query.length > 0) {
                const suggestions = Object.keys(pages).filter(page => page.toLowerCase().includes(query));
                suggestionBox.innerHTML = suggestions.map(suggestion => `<li>${suggestion}</li>`).join('');
                suggestionBox.style.display = 'block';
            } else {
                suggestionBox.style.display = 'none';
            }
        });

        suggestionBox.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                searchInput.value = event.target.textContent;
                suggestionBox.style.display = 'none';
                searchContent(searchInput.value);
            }
        });

        document.addEventListener('click', (event) => {
            if (!suggestionBox.contains(event.target) && event.target !== searchInput) {
                suggestionBox.style.display = 'none';
            }
        });
    };

    /**
     * Agrega funcionalidad al botón de volver arriba.
     */
    const addBackToTopButton = () => {
        const backToTopButton = document.getElementById('back-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    /**
     * Implementa la funcionalidad de la barra de navegación fija.
     */
    const implementStickyNavbar = () => {
        const navbar = document.querySelector('.navbar');
        const sticky = navbar.offsetTop;

        window.addEventListener('scroll', () => {
            if (window.scrollY >= sticky) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
    };

    // Llamar a las funciones adicionales
    addSmoothScrolling();
    addHoverEffects();
    enhanceSearchBar();
    addBackToTopButton();
    implementStickyNavbar();
})();
