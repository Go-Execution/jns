document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.getElementById('main-nav');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // Simple Form Submission Mock for "Request a Quote"
    const quoteForm = document.getElementById('quote-form');
    const quoteMessage = document.getElementById('quote-message');

    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const phone = document.getElementById('q-phone').value;
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            
            if (!phoneRegex.test(phone)) {
                showMessage(quoteMessage, 'Enter a valid phone number', 'error');
                return;
            }

            // Mock submission
            const submitBtn = quoteForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                showMessage(quoteMessage, 'Your quote request has been sent successfully. We will contact you soon.', 'success');
                quoteForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }

    // Simple Form Submission Mock for "Driver Application"
    const driverForm = document.getElementById('driver-form');
    const driverMessage = document.getElementById('driver-message');

    if (driverForm) {
        driverForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const phone = document.getElementById('d-phone').value;
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            
            if (!phoneRegex.test(phone)) {
                showMessage(driverMessage, 'Enter a valid phone number', 'error');
                return;
            }

            // Mock submission
            const submitBtn = driverForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                showMessage(driverMessage, 'Your application has been submitted successfully. We will review it shortly.', 'success');
                driverForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }

    function showMessage(element, text, type) {
        element.textContent = text;
        element.className = 'form-message ' + type;
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            element.style.display = 'none';
            // reset class to remove display:none override if needed
            element.className = 'form-message'; 
        }, 5000);
    }
});
