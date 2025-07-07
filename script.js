document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "Are you sure?",
        "Really sure??",
        "Are you positive?",
        "Sayang please.. ;(",
        "Just think about it!",
        "If you say no, JAP will be really sad...",
        "I will be very sad...",
        "I will be very very very sad...",
        "Ok fine, I will stop asking...",
        "Just kidding, say yes please! ❤️"
    ];

    let messageIndex = 0;

    document.querySelector('.no-button').addEventListener("click", function () {
        const noButton = document.querySelector('.no-button');
        const yesButton = document.querySelector('.yes-button');
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    });

    document.querySelector('.yes-button').addEventListener("click", function () {
        window.location.href = "/HowDeepIsYourLove/yes_page.html";
    });
});