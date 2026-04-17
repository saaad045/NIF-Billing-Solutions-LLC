   AOS.init({ once: false, mirror: true, duration: 900, easing: 'ease-out-cubic' });
    document.getElementById("appointmentForm")?.addEventListener("submit", function(e) { e.preventDefault(); alert("Thank you! Our billing experts will reach out within 24 hours."); this.reset(); });
    window.addEventListener('load', function() { AOS.refresh(); });

   
        // subtle parallax or depth effect (optional) - adds luxury feel on mouse move on help card
        const helpCard = document.querySelector('.help-card');
        if (helpCard && window.innerWidth > 992) {
            document.querySelector('.appointment-section').addEventListener('mousemove', (e) => {
                const rect = helpCard.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateY = ((mouseX - centerX) / centerX) * 3;
                const rotateX = ((centerY - mouseY) / centerY) * 2;
                helpCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });
            document.querySelector('.appointment-section').addEventListener('mouseleave', () => {
                helpCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        }
