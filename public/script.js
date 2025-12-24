document.addEventListener('DOMContentLoaded', () => {
    console.log("AWG Site Loaded");
    
    // Explore Button Logic (SPA Feel)
    const exploreBtn = document.querySelector('.cta-button');
    const exploreSection = document.getElementById('explore');
    const backBtn = document.getElementById('back-home');
    const mainContent = document.querySelector('main'); // Optional: hide main if needed, but overlay works

    if (exploreBtn && exploreSection) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            exploreSection.classList.remove('hidden-section');
            exploreSection.classList.add('active-explore');
            document.body.style.overflow = 'hidden'; // Lock background scrolling
        });
    }

    if (backBtn && exploreSection) {
        backBtn.addEventListener('click', () => {
            exploreSection.classList.remove('active-explore');
            exploreSection.classList.add('hidden-section');
            document.body.style.overflow = ''; // Restore background scrolling
        });
    }

    // Team Overlay Logic
    const teamBtn = document.getElementById('about-learn-more-btn');
    const teamSection = document.getElementById('team-overlay');
    const backTeamBtn = document.getElementById('back-team');

    if (teamBtn && teamSection) {
        teamBtn.addEventListener('click', (e) => {
            e.preventDefault();
            teamSection.classList.remove('hidden-section');
            teamSection.classList.add('active-explore');
            document.body.style.overflow = 'hidden';
        });
    }

    if (backTeamBtn && teamSection) {
        backTeamBtn.addEventListener('click', () => {
            teamSection.classList.remove('active-explore');
            teamSection.classList.add('hidden-section');
            document.body.style.overflow = '';
        });
    }

    // Scroll Indicator Logic for Team Overlay
    if (teamSection) {
        const scrollIndicator = teamSection.querySelector('.scroll-indicator');
        teamSection.addEventListener('scroll', () => {
            if (teamSection.scrollTop > 50) {
                scrollIndicator?.classList.add('fade-out');
            } else {
                scrollIndicator?.classList.remove('fade-out');
            }
        });
    }
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.glass-nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
             // Skip hidden explore section from scrollspy
            if (section.classList.contains('hidden-section')) return;

            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // logic: if scroll Y is greater than section top - 1/3 of view height
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.principle-text, .principle-visual, .material-card, h2');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden'); // Initially hide them
        observer.observe(el);
    });
});
