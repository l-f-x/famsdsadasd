// Открытие модального окна при нажатии на кнопку
const order_btns = Array.from(document.getElementsByClassName('order'));
order_btns.forEach(el => {
    el.addEventListener('click', function() {
        document.getElementById('modal').style.display = 'block';
    });
});

// Закрытие модального окна при нажатии на крестик
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Закрытие модального окна при нажатии вне окна
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};
