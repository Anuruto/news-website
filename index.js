console.log("Hello, World!");

let apiKey = "16a449a5e7db4b66835eaca25891512c";
let link =  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`



let newsDiv = document.getElementById("newsAccordion");

// Ajax GET request
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    let html = "";
    articles.forEach((article, index) => {
      let news = ` 
       <div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                        aria-expanded="false" aria-controls="collapse${index}">
                       <u> <b>Breaking news ${index + 1}:</b> </u> ${
        article.title
      }
                    </button>
                </h2>
            </div>
            
            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body">
                    ${article.description} <a href="${
        article.url
      }" class="btn btn-primary" target="_blank"> Read More Here </a>
                </div>
            </div>
        </div>`;
      html += news;
    });
    newsDiv.innerHTML = html;
  } else {
    console.log("Err aa gaya F");
  }
};
xhr.send();
