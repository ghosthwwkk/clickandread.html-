const books = {
    novels: [
        { name: 'booknovel1', title: 'Novel Book 1', author: 'Autor A' },
        { name: 'booknovel2', title: 'Novel Book 2', author: 'Autor B' },
        { name: 'booknovel3', title: 'Novel Book 3', author: 'Autor C' },
        { name: 'booknovel4', title: 'Novel Book 4', author: 'Autor D' },
        { name: 'booknovel5', title: 'Novel Book 5', author: 'Autor E' }
    ],
    essays: [
        { name: 'bookessay1', title: 'Essay Book 1', author: 'Autor F' },
        { name: 'bookessay2', title: 'Essay Book 2', author: 'Autor G' },
        { name: 'bookessay3', title: 'Essay Book 3', author: 'Autor H' },
        { name: 'bookessay4', title: 'Essay Book 4', author: 'Autor I' },
        { name: 'bookessay5', title: 'Essay Book 5', author: 'Autor J' }
    ],
    monthly_reading: [
        { name: 'bookmonth1', title: 'Monthly Book 1', author: 'Autor K' },
        { name: 'bookmonth2', title: 'Monthly Book 2', author: 'Autor L' },
        { name: 'bookmonth3', title: 'Monthly Book 3', author: 'Autor M' },
        { name: 'bookmonth4', title: 'Monthly Book 4', author: 'Autor N' },
        { name: 'bookmonth5', title: 'Monthly Book 5', author: 'Autor O' },
        { name: 'bookmonth6', title: 'Monthly Book 6', author: 'Autor P' },
        { name: 'bookmonth7', title: 'Monthly Book 7', author: 'Autor Q' },
        { name: 'bookmonth8', title: 'Monthly Book 8', author: 'Autor R' },
        { name: 'bookmonth9', title: 'Monthly Book 9', author: 'Autor S' },
        { name: 'bookmonth10', title: 'Monthly Book 10', author: 'Autor T' },
        { name: 'bookmonth11', title: 'Monthly Book 11', author: 'Autor U' },
        { name: 'bookmonth12', title: 'Monthly Book 12', author: 'Autor V' }
    ],
    paes: [
        { name: 'bookpaes', title: 'PAES Book', author: 'Autor W' }
    ]
};

function searchBooks() {
    const query = document.getElementById('searchQuery').value.toLowerCase(); // Obtener el valor de búsqueda
    let results = [];

    // Recorremos todas las secciones (novels, essays, monthly_reading, paes)
    for (const section in books) {
        const sectionBooks = books[section]; // Los libros de la sección actual

        sectionBooks.forEach(book => {
            // Comprobamos si el título o el autor contiene la consulta de búsqueda
            if (book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)) {
                results.push(book); // Si hay coincidencia, lo agregamos a los resultados
            }
        });
    }

    // Mostrar los resultados en la interfaz
    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Limpiar los resultados previos

    if (results.length > 0) {
        // Si hay resultados, los mostramos
        results.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Archivo:</strong> ${book.name}</p>
            `;
            resultsContainer.appendChild(bookElement);
        });
    } else {
        // Si no hay resultados, mostramos un mensaje
        resultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
    }
}
