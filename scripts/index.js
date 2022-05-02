// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML=navbar();

// const url="https://masai-mock-api.herokuapp.com/news?q=${query}";

// import {getData,append} from "./fetch.js"
let search = (e)=>{
    if(e.key==="Enter"){
        getData();
        // let query=document.getElementById('search_input').value ;
        // getData(url,query).then(function(data){
        //     console.log(data.articles);
        // });
        // let result=document.getElementById('results')
        // append(data.articles,result);
    }
}
document.getElementById("search_input").addEventListener('keydown',search);

let getData = async () => {
    let query=document.getElementById('search_input').value ;

    try{
        let res = await fetch(`
    https://masai-mock-api.herokuapp.com/news?q=${query}`
    );
    let data=await res.json();
    console.log(data.articles);
    append(data.articles);
    }
    catch(err){
        console.log(err);
    }
}
// getData();

let append=(data)=>{
let result=document.getElementById('results');
result.innerHTML=null;

data.forEach(function(ele){
    let div=document.createElement('div');

    let img=document.createElement('img');
    img.setAttribute("id","image1");
    img.src=ele.urlToImage;
    
    let p=document.createElement('p');
    p.innerText=ele.title;
    
    let url=document.createElement('p');
    p.innertext=ele.url;

    div.append(img,p,url);
    result.append(div);  
})
}