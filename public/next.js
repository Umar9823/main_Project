document.addEventListener('DOMContentLoaded', () => {
    // Get references to the title, content, and image elements
    const articleTitle = document.getElementById('article-title');
    const articleContent = document.getElementById('article-content');
    const articleImage = document.getElementById('article-image');

    // Function to extract and display article content and image
    function loadArticle() {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('post_id');
        const content = decodeURIComponent(urlParams.get('content'));
        const imageSrc = decodeURIComponent(urlParams.get('image'));

        articleTitle.textContent = `Article ${articleId}`;
        articleContent.innerHTML = `<p>${content}</p>`;
        articleImage.src = imageSrc;
    }

    loadArticle();
});


