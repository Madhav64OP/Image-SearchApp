const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector("#search-result");
const showMoreBtn = document.querySelector("#show-more-btn");
const searchBtn = document.querySelector("#search-btn");


const key="66B9P2TPfkE2QqOkjK2kmIZz42sbEtPT9hb8oLW8rW4";

let keyword ="";
let page=1;
let isclicked=false;


async function searchimages(){
    keyword = searchBox.value;
    const URL =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;
    const res = await fetch(URL);
    const data = await res.json();

    if(isclicked){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src=result.urls.small;
        const imgLink = document.createElement("a");
        imgLink.href=result.links.html;
        imgLink.target ="_blank";

        imgLink.appendChild(image);
        searchResult.appendChild(imgLink);
    })
    showMoreBtn.style.display="block";
}

searchForm.addEventListener("submit",(e) => {
    isclicked=true;
    e.preventDefault();
    page = 1;
    searchimages();
    
})

showMoreBtn.addEventListener("click",() =>{
    isclicked=false;
    page++;
    searchimages();
})

searchBtn.addEventListener("click",(e) =>{
    isclicked=true;
    e.preventDefault();
    page = 1;
    searchimages();
})

