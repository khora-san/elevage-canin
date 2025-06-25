document.addEventListener('DOMContentLoaded', () => {
    // Burger menu
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    burger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
    //



    // Lightbox avec carrousel gauche droite
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');
    const prevBtn = document.querySelector('.lightbox .prev');
    const nextBtn = document.querySelector('.lightbox .next');
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    let currentIndex = 0;

    function showImage(index) {
        const image = galleryImages[index];
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        currentIndex = index;
        lightbox.style.display = 'flex';
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            showImage(index);
        });
    });

    function showNext() {
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        showImage(nextIndex);
    }

    function showPrev() {
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(prevIndex);
    }

    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    });

    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') {
                lightbox.style.display = 'none';
                lightboxImg.src = '';
            } else if (e.key === 'ArrowRight') {
                showNext();
            } else if (e.key === 'ArrowLeft') {
                showPrev();
            }
        }
    });

    // Fermeture du bandeau d'information
    const alertBanner = document.getElementById('alertBanner');
    const closeBannerBtn = document.querySelector('.close-banner');

    if (closeBannerBtn) {
        closeBannerBtn.addEventListener('click', () => {
            alertBanner.style.display = 'none';
        });
    }

    // Formulaire de contact - message de confirmation
    const form = document.querySelector('.contact form');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche le rechargement
            formMessage.textContent = 'Merci pour votre message ! Nous vous répondrons rapidement.';
            form.reset();
        });
    }


});


