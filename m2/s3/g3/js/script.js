document.addEventListener('DOMContentLoaded', function () {
    const bookList = document.getElementById('libri');
    const cart = document.getElementById('cart');
    const checkoutBtn = document.getElementById('esci');

    //dati dei libri 
    async function getBooks() {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/books');
            const books = await response.json();

            //8 libri sulla pagina
            for (let i = 0; i < 8 && i < books.length; i++) {
                const book = books[i];

                const card = document.createElement('div');
                card.classList.add('col-md-3', 'mb-4');

                card.innerHTML = `
                    <div class="card">
                        <img src="${book.img}" class="card-img-top" alt="${book.title}">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">$${book.price.toFixed(2)}</p>
                            <button class="btn btn-warning btn-sm" data-id="${book.asin}" data-title="${book.title}" data-price="${book.price}">Scarta</button>
                            <button class="btn btn-success btn-sm addToCart" data-id="${book.asin}" data-title="${book.title}" data-price="${book.price}">Aggiungi al carrello</button>
                        </div>
                    </div>
                `;

                bookList.appendChild(card);
            }
        } catch (error) {
            console.error('Errore', error);
        }
    }

    getBooks();


    bookList.addEventListener('click', function (e) {
        if (e.target.classList.contains('addToCart')) {
            const id = e.target.getAttribute('data-id');
            const title = e.target.getAttribute('data-title');
            const price = parseFloat(e.target.getAttribute('data-price'));

            const cartItem = document.createElement('li');
            cartItem.classList.add('list-group-item');
            cartItem.innerHTML = `${title} - $${price.toFixed(2)}`;
            cart.appendChild(cartItem);

           //storage
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push({ id, title, price });
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    });

 
    function loadCartItems() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('list-group-item');
            cartItem.innerHTML = `${item.title} - $${item.price.toFixed(2)}`;
            cart.appendChild(cartItem);
        });
    }

    loadCartItems();

    checkoutBtn.addEventListener('click', function () {
   
        alert('Grazie per il tuo ordine!');
        localStorage.removeItem('cartItems');
        cart.innerHTML = '';
    });
});
