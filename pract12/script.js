function showMessage(message) {
    console.log(message);
}
showMessage("Скрипт загружен!");

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const isHidden = window.getComputedStyle(element).display === "none";
        element.style.display = isHidden ? "block" : "none";
    }
}

function handleUTMParameter() {
    const params = new URLSearchParams(window.location.search);
    const utmTerm = params.get('utm_term');
    const header = document.querySelector('h1');
    if (header) {
        header.textContent = utmTerm || header.textContent;
    }
}

function logCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ru-RU', { hour12: false });
    console.log(`Текущее время: ${timeString}`);
}
logCurrentTime();
document.addEventListener("DOMContentLoaded", () => {
    changeBackgroundColor("lightblue");
    toggleVisibility(".content");
    handleUTMParameter();
});
