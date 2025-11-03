const imgContainer = document.querySelector('#image-container');
const urlApi = 'https://picsum.photos/v2/list';


const getPicture = () => {
    fetch(urlApi).then(data => data.json()).then(items => {
        // console.log(items);
        items.forEach (function (photoObject) {
            const newContainer = document.createElement('div');
            newContainer.classList.add('image-container-item');
            const newImage = document.createElement('img');
            newImage.src = photoObject.download_url;
            newContainer.appendChild(newImage);
            const newAuthor = document.createElement('p');
            newAuthor.textContent = photoObject.author;
            newContainer.appendChild(newAuthor);
            imgContainer.appendChild(newContainer);
        });
    });
};

getPicture();