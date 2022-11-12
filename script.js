function fetchSimpsonsJSON() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
        .then(function (response) {
            return response.data[0];
        })
        .then(function (simpsons) {
            console.log('data decoded from JSON:', simpsons);

            // Build a block of HTML
            const SimpsonsHtml = `
          <p><strong>${simpsons.character}</strong></p>
          <img src="${simpsons.image}" />
          <p><q>${simpsons.quote}</q></p>
            `;
            document.querySelector('#simpsons').innerHTML = SimpsonsHtml;
        });
}

fetchSimpsonsJSON();