
    document.querySelectorAll('.footer-section a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

    const subscribeBtn = document.querySelector('.subscribe-box button');
    const subscribeInput = document.querySelector('.subscribe-box input');

    subscribeBtn.addEventListener('click', () => {
        if (subscribeInput.value.includes('@')) {
            subscribeBtn.textContent = '❤';
            subscribeBtn.style.background = '#27ae60';
            subscribeInput.value = 'Success!';
            subscribeInput.disabled = true;
        } else {
            subscribeInput.style.border = '1px solid red';
            setTimeout(() => subscribeInput.style.border = 'none', 1000);
        }
    });