module.exports = (cats) => `
<form action="/search">
    <input type="text">
    <button type="button">Search</button>
</form>
<main>
    <section class="cats">
        <ul>
            ${Object.entries(cats).map(([id, x])=> `<li>
            <img src="/images/${x.imgURL}" alt="Black Cat">
            <h3>${x.name}</h3>
            <p><span>Breed: </span>${x.breed}</p>
            <p><span>Description: </span>${x.description}</p>
            <ul class="buttons">
                <li class="btn edit"><a href="/edit/${id}">Change Info</a></li>
                <li class="btn delete"><a href="/details/${id}">New Home</a></li>
            </ul>
        </li>`)}
        </ul>
    </section>
</main>`