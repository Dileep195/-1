const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = "AXULYXezEk0vqPDRV";
const EMAILJS_SERVICE_ID = "service_thg65ls";
const EMAILJS_TEMPLATE_ID = "template_54cjxf";

emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
});

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

async function handleYesClick() {
    const yesButton = document.querySelector('.yes-button');

    // Prevent multiple emails if the button is clicked more than once.
    yesButton.disabled = true;
    yesButton.textContent = "Sending... ❤️";

    const now = new Date();
    const time = now.toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata'
    });

    try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            name: "Anwesha",
            time: time,
            message: "YES! ❤️ She said yes to being your Prom partner on October 3rd! 🎉"
        });

        window.location.href = "yes_page.html";
    } catch (error) {
        console.error("EmailJS error:", error);
        yesButton.disabled = false;
        yesButton.textContent = "Yes";
        alert("I could not send the notification yet. Please tap Yes again ❤️");
    }
}
