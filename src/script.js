const productsLink = document.querySelector('.products-trigger');
        const dropdown = document.querySelector('.products-dropdown');
        
        productsLink.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            productsLink.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.products-trigger') && !e.target.closest('.products-dropdown')) {
                dropdown.style.display = 'none';
                productsLink.classList.remove('active');
            }
});