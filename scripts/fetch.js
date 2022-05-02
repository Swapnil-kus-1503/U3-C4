async function getData(url,query){
    try{
        let res=await fetch(url);
    let data=await res.json();

    return data.articles();
    }
    catch(err){
        console.log(err);
    }
}


function append(data,result){
    data.forEach(function(ele){
        let div=document.createElement('div');

        let img=document.createElement('img');
        img.src=ele.urlToImage;
        
        let p=document.createElement('p');
        p.innerText=ele.title;
        
        let url=document.createElement('p');
        p.innertext=ele.url;
    
        div.append(img,p,url);
    
        result.append(div);
    })
}


export {getData,append};