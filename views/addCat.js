module.exports = (breeds) => `
<form action="/add-cat" method="POST" class="cat-form" enctype="multipart/form-data">
    <h2>Add Cat</h2>
    <label for="name">Name</label>
    <input name="name" type="text" id="name">
    <label for="description">Description</label>
    <textarea name="description" id="description"></textarea>
    <label for="image">Image</label>
    <input name="upload" type="file" id="image">
    <label for="group">Breed</label>
    <select name="breed" id="group">
        ${breeds.map(x => `<option value="${x}">${x}</option>`).join("")}
    </select>
    <button type="submit">Add Cat</button>
</form>`