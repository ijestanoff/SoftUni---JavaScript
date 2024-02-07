function getArticleGenerator(articles) {
    const contentRef = document.getElementById("content");
    return function () {
        if (articles.length) {
            let text = articles.shift();
            let article = document.createElement("article");
            article.textContent = text;
            contentRef.appendChild(article);
        }
    }
}
