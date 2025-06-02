document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');

    function loadMoreContent() {
        for (let i = 0; i < 5; i++) {
            const newDiv = document.createElement('div');
            newDiv.textContent = 'New content block';
            newDiv.classList.add('item');
            content.appendChild(newDiv);
            
        }
    }

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
            loadMoreContent();
        }
    });

    
    loadMoreContent();
});
