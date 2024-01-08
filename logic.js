let serachFld = document.getElementById("search-fld");
let serachBox = document.getElementById("search-box");
let serachBtn = document.getElementById("search-btn");
let serachShowMore = document.getElementById("show-more");
let resultImage = document.getElementById("result-img");
let credit = document.getElementById("credit");
const access = "8vm1BZ0TOUzjAUqITfyzahuNH-wc_ohjj9ROMIXP8sI";
let keyword = "";
let page = 1;

async function fetchImage(){
    keyword = serachBox.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access}&per_page=12`
    let response = await fetch(url);
    let data = await response.json();
    let results = data.results;
    
    console.log(results);
    results.map((result)=>{
        let image = document.createElement("img");
        image.src = result.urls.small;
        let imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank"
        imageLink.appendChild(image);
        resultImage.appendChild(imageLink);
    })
    serachShowMore.style.visibility="visible";
    credit.innerHTML=`***All the Images is from <a href="https://unsplash.com/" target="_main">unsplash.com</a> ***`
    if(resultImage.innerHTML == ""){
        credit.innerHTML=`<h3>Sorry, We are unable to fetch your image.</h3>`
        serachShowMore.style.visibility="hidden";
    }
}


serachBtn.addEventListener("click",function(e){
    e.preventDefault();
    resultImage.innerHTML="";
    credit.innerHTML=""
    serachShowMore.style.visibility="hidden";
    page = 1;
    fetchImage();
})

serachShowMore.addEventListener("click",()=>{
    page++;
    fetchImage();
})
