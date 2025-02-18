function showDish(selectedImg, name, price) {
    document.getElementById('dish-info').innerHTML = `${name} - ${price}`;
    
    let images = document.querySelectorAll('.gallery img');
    images.forEach(img => img.classList.remove('selected'));
    selectedImg.classList.add('selected');
}
