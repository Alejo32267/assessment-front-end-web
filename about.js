function handleSubmit(evt) {
    evt.preventDefault();
    
    alert('The form sent successfully');
}

function giveCompliment() {
    alert('What a beautiful cat!');
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

let image = document.createElement('img');
image.src = 'file:///Users/alejowork/Documents/devmountain/assessment-front-end-web/cat.avif';
document.body.appendChild(image);