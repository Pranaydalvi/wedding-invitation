// Show scroll
function scrollUp() {
    const scrollUp = document.getElementById('floating');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll');
    document.getElementById('floating-toggle').classList.remove("active");
}
window.addEventListener('scroll', scrollUp)

// Show & Hide Menu
const toggleButton = document.getElementById('floating-toggle')

const activeMenu = () => {
    toggleButton.classList.toggle('active')
}

toggleButton.addEventListener('click', activeMenu)

async function getSunriseSunset() {
    try {
        const response = await fetch('https://api.sunrise-sunset.org/json?lat=20.5937&lng=78.9629&formatted=0');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching sunrise and sunset data:', error);
        return null;
    }
}
function isDaytime(sunrise, sunset) {
    const now = new Date();
    return now >= new Date(sunrise) && now <= new Date(sunset);
}

function updateBodyClass() {
    getSunriseSunset().then(results => {
        if (results) {
            const { sunrise, sunset } = results;
            const isDay = isDaytime(sunrise, sunset);
            document.body.classList.toggle('dark-mode', isDay);
            document.body.classList.toggle('light-mode', !isDay);
        }
    });
}

updateBodyClass();

setInterval(updateBodyClass, 60 * 1000);

(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

var myaudio = document.getElementById("my_audio");
$(document).on('click', function () {
    myaudio.play();
    console.log('Shaadi me zaroor aana');
});

var countDownDate = new Date("may 01, 2024 18:49:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>" + 
    days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + 
    minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
}, 1000);
        // wishes
        document.addEventListener("DOMContentLoaded", function () {
            const form = document.querySelector('.newsletter__form');
            const loadingIndicator = document.querySelector('.loading');
            const successMessage = "Thank you for your wishes!";
            const errorMessage = "Error occurred. Please try again later.";
        
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                loadingIndicator.style.display = 'block';
        
                const formData = new FormData(form);
        
                fetch('https://formspree.io/f/xrgnoygj', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    loadingIndicator.style.display = 'none';
                    if (response.ok) {
                        alert(successMessage);
                        form.reset();  
                    } else {
                        throw new Error(errorMessage);
                    }
                })
                .catch(error => {
                    loadingIndicator.style.display = 'none';
                    console.error(error);
                    alert(errorMessage);
                });
            });
        });