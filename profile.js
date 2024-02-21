function showFavorite(item) {
    switch (item) {
        case 'color':
            alert('My favorite color is blue.');
            break;
        case 'place':
            alert('My favorite place is the beach.');
            break;
        case 'ritual':
            alert('My favorite ritual is having a cup of coffee in the morning.');
            break;
        default:
            alert('No favorite selected.');
    }
}

document.getElementById('color').addEventListener('click', function() {
    showFavorite('color');
});

document.getElementById('place').addEventListener('click', function() {
    showFavorite('place');
});

document.getElementById('ritual').addEventListener('click', function() {
    showFavorite('ritual');
});


