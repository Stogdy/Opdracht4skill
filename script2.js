document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');

    const imagePaths = [
        'images/champloo_gif1.gif',
        'images/champloo_gif2.gif',
        'images/champloo_gif3.gif',
        'images/champloo_gif4.gif'
    ];

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        return imagePaths[randomIndex];
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(err => {
                    console.warn('Autoplay failed', err);
                });
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.5
    });

    function loadMoreContent() {
        for (let i = 0; i < 5; i++) {
            const newArticle = document.createElement('article');
            newArticle.classList.add('artikel');

            
            if (i === 2) {
                const video = document.createElement('video');
                video.src = 'videos/AT-cm_602566817.mp4'; 
                video.classList.add('autoplay-video');
                video.muted = true; 
                video.playsInline = true;
                video.loop = true;
                video.style.width = '100%';

                
                const volumeSlider = document.createElement('input');
                volumeSlider.type = 'range';
                volumeSlider.min = 0;
                volumeSlider.max = 1;
                volumeSlider.step = 0.01;
                volumeSlider.value = 0.5;
                volumeSlider.style.width = '100%';
                volumeSlider.style.marginTop = '5px';

                volumeSlider.addEventListener('input', () => {
                    video.volume = volumeSlider.value;
                });

                newArticle.appendChild(video);
                newArticle.appendChild(volumeSlider);
                content.appendChild(newArticle);

                videoObserver.observe(video);
            } else {
                const img = document.createElement('img');
                img.src = getRandomImage();
                img.alt = 'Extra image';
                newArticle.appendChild(img);
                content.appendChild(newArticle);
            }

            observer.observe(newArticle);
        }
    }

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
            loadMoreContent();
        }
    });

    
    const artikels = document.querySelectorAll('.artikel');
    artikels.forEach(artikel => observer.observe(artikel));

    
    loadMoreContent();
});
