document.addEventListener('DOMContentLoaded', function() {

    const navItem = document.querySelector('.nav-item');
    const body = document.body;

    navItem.addEventListener('mouseenter', function() {
        body.classList.add('dropdown-active');
    });

    navItem.addEventListener('mouseleave', function() {
        body.classList.remove('dropdown-active');
    });

    const productsLink = document.querySelector('.nav-link.products');
    const megaDropdown = document.querySelector('.mega-dropdown');
    // const body = document.body;
    
    // Function to close dropdown
    const closeDropdown = (e) => {
        if (!e.target.closest('.nav-item')) {
            megaDropdown.classList.remove('show');
            productsLink.classList.remove('active');
            body.classList.remove('dropdown-active');
        }
    };

    // Toggle dropdown on products link click
    productsLink.addEventListener('click', function(e) {
        e.preventDefault();
        const isOpen = megaDropdown.classList.contains('show');
        
        if (!isOpen) {
            megaDropdown.classList.add('show');
            productsLink.classList.add('active');
            body.classList.add('dropdown-active');
        } else {
            megaDropdown.classList.remove('show');
            productsLink.classList.remove('active');
            body.classList.remove('dropdown-active');
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-item')) {
            megaDropdown.classList.remove('show');
            productsLink.classList.remove('active');
            body.classList.remove('dropdown-active');
        }
    });

    // Prevent dropdown from closing when clicking inside it
    megaDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Close dropdown on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            megaDropdown.classList.remove('show');
            productsLink.classList.remove('active');
            body.classList.remove('dropdown-active');
        }
    });
});