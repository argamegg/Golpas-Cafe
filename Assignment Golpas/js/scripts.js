window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const body = document.body;

    window.addEventListener('load', function() {
    setTimeout(function() {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        body.classList.add('loaded');
    }, 1000); 
    });
});

function updateDateTime() {
    const now = new Date();
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    
    const formattedDate = now.toLocaleDateString('ru-RU', optionsDate);
    const formattedTime = now.toLocaleTimeString('ru-RU', optionsTime);
    
    document.getElementById('currentDateTime').innerText = `${formattedDate}, ${formattedTime}`;
}

setInterval(updateDateTime, 1000); // Обновляет дату и время каждую секунду
updateDateTime(); // Инициализация

document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeButton = document.getElementById('toggleTheme');

    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            toggleThemeButton.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-theme');
            toggleThemeButton.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    toggleThemeButton.addEventListener('click', function () {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        setTheme(currentTheme);
    });
  });


const supportChatBtn = document.getElementById('supportChatBtn');
const chatInterface = document.getElementById('chatInterface');
const closeChatBtn = document.getElementById('closeChatBtn');
const messageInput = document.getElementById('messageInput');
const sendMessageBtn = document.getElementById('sendMessageBtn');
const chatMessages = document.getElementById('chatMessages');

supportChatBtn.addEventListener('click', () => {
    chatInterface.classList.add('active');
});

closeChatBtn.addEventListener('click', () => {
    chatInterface.classList.remove('active');
});

sendMessageBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        addMessage('user', message);
        messageInput.value = '';
        // Simulate a response (replace with actual chat functionality)
        setTimeout(() => {
            addMessage('support', 'Thank you for your message. We will consider your problem!');
        }, 1000);
    }
}

function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.classList.contains('show');

            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.classList.remove('show');
            });
            document.querySelectorAll('.faq-question').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle the clicked answer
            if (!isOpen) {
                answer.classList.add('show');
                question.classList.add('active');
            }
        });
    });
});

document.getElementById("vacancyForm").addEventListener("submit", function(event) {
    const inputs = document.querySelectorAll("#vacancyForm input, #vacancyForm textarea");
    inputs.forEach(function(input) {
        if (!input.checkValidity()) {
        input.classList.add("is-invalid");
        event.preventDefault(); // Останавливаем отправку формы
        } else {
        input.classList.remove("is-invalid");
        }
    });
    });
