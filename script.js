//  MOBILE MENU 
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
    };
}


//  SERVICE SCROLL ANIMATION 
const cards = document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.classList.add('show');
        }
    });
});


// SERMON FILTER 
const filterBtns = document.querySelectorAll('.filter-btn');
const sermonCards = document.querySelectorAll('.sermon-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            sermonCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === "all" || filter === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}


//  VIDEO MODAL
const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.querySelector('.close-btn');

if (modal && modalVideo) {
    document.querySelectorAll('.video-wrapper iframe').forEach(video => {
        video.addEventListener('click', () => {
            modal.classList.add('active');
            modalVideo.src = video.src;
        });
    });

    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.classList.remove('active');
            modalVideo.src = "";
        };
    }
}


//  SEARCH 
const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('keyup', () => {
        const value = searchInput.value.toLowerCase();

        document.querySelectorAll('.sermon-card').forEach(card => {
            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(value) ? "block" : "none";
        });
    });
}


//  DATE FILTER 
const dateFilter = document.getElementById('dateFilter');

if (dateFilter) {
    dateFilter.addEventListener('change', () => {
        const selectedDate = dateFilter.value;

        document.querySelectorAll('.sermon-card').forEach(card => {
            const cardDate = card.getAttribute('data-date');

            if (!selectedDate || cardDate === selectedDate) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}


// LOAD MORE 
const loadMoreBtn = document.getElementById('loadMoreBtn');

if (loadMoreBtn) {
    let visible = 2;

    sermonCards.forEach((card, index) => {
        if (index >= visible) card.style.display = "none";
    });

    loadMoreBtn.addEventListener('click', () => {
        visible += 2;

        sermonCards.forEach((card, index) => {
            if (index < visible) card.style.display = "block";
        });

        if (visible >= sermonCards.length) {
            loadMoreBtn.style.display = "none";
        }
    });
}


// CONTACT FORM 
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Message sent successfully 🙌");
        contactForm.reset();
    });
}