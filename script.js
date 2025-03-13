async function loadArticles() {
    try {
        const response = await fetch("articles.json"); // Load articles from JSON
        const articles = await response.json();
        const container = document.getElementById("article-container");

        // Clear previous content
        container.innerHTML = "";

        // Loop through articles and add to page
        articles.forEach(article => {
            let articleElement = document.createElement("div");
            articleElement.classList.add("article");

            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p><strong>Category:</strong> ${article.category}</p>
                <p>${article.content}</p>
                <h3>Table of Contents:</h3>
                <ul>
                    ${article.subtopics.map(sub => `<li>${sub}</li>`).join("")}
                </ul>
                <hr>
            `;

            container.appendChild(articleElement);
        });
    } catch (error) {
        console.error("Error loading articles:", error);
    }
}

window.onload = loadArticles;
