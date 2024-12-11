import { $ } from '../Modules/Qs.js';

async function getPhotos(){
    const target = $('#photos');
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos';
    
    try{

        const response = await fetch(apiUrl);
        
        if(!response.ok){
            throw new Error('Errore nella richiesta')
        }

        const photos = await response.json();
        const photoSet = photos.slice(0,10);
        
        photoSet.forEach(photo => {

            const clone = getClone('template')
            
            clone.querySelector('img').src = photo.thumbnailUrl;
            clone.querySelector('.card-title').innerText = photo.title;
            
            if(target){
                target.appendChild(clone);
            }
        })

    }catch(error){
        console.log(error);        
    }

}

getPhotos();


function getClone(selector){
    const template = $(selector);
    return template.content.cloneNode(true);
}