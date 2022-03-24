import API_KEY from "./env.js";

const apiKey = API_KEY;
const link = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

console.log();

const newsDiv = document.getElementById("divContainer");

async function newsApi() {
  const response = await fetch(link);
  const news = await response.json();
  return news;
}

let apiCall = newsApi();

apiCall.then((data) => {
  const articles = data.articles;
  articles.forEach((article) => {
    populateData(article);

    // console.log(article);
  });
  toggleDiv();
});

function populateData(article) {
  let str = `
            <div class="container" >
                <div class="heading"> ${article.title} </div>
                <div class="content hidden" class="">
                    <img src = "${article.urlToImage}">
                    <p>${article.description}...</p>
                     <a href = ${article.url} target = "_blank"> READ MORE </a>
                    </div>
                <hr/>
            </div>
            `;

  newsDiv.innerHTML += str;
}

function toggleDiv() {
  const containers = newsDiv.getElementsByClassName("container");

  for (let i = 0; i < containers.length; i++) {
    const eachContainer = containers[i];

    let heading = eachContainer.querySelector(".heading");
    let body = eachContainer.querySelector(".content");

    heading.addEventListener("click", (e) => {
      //   console.dir(body);
      body.classList.toggle("hidden");
    });
  }
}
