const apiUrl = "https://64510cbaa322196911594987.mockapi.io/api/v1/articles";

// Function to fetch data from the API and display it on the webpage
function displayArticles() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const articleList = document.getElementById("article-list");
      articleList.innerHTML = "";

      data.forEach((article) => {
        const card = document.createElement("div");
        card.classList.add("col-md-6");
        card.innerHTML = `
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${article.image}" class="img-fluid rounded-start" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text fw-light">${article["preview-text"]}</p>
                            <a href="article-detail.html?id=${article.id}" class="btn btn-sm btn-outline-success">Baca Selengkapnya</a>
                        </div>
                    </div>
                </div>
          </div>
          `;
        articleList.appendChild(card);
      });
    });
}

// Function to fetch data for the selected article and display it on the webpage
function displayArticle() {
  // Get the article ID from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id");

  // Fetch the article data from the API
  fetch(`${apiUrl}/${articleId}`)
    .then((response) => response.json())
    .then((article) => {
      // console.log(article);
      const articleDetail = document.getElementById("article-detail");
      articleDetail.innerHTML = "";

      const content = document.createElement("div");
      content.innerHTML = `
        <br><br>
        <h2>${article.title}</h2>
        <img src="${article.image}" class="card-img-top rounded">
        <br><br>
        <p>${article.content}</p>
      `;
      articleDetail.appendChild(content);
    });
}
