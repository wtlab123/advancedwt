async function movie(){
    const url = "";
    const resp = await fetch(url);
    var data=await resp.json();
    console.log(data);
    let{items}=data;
    items.foreach(ele=>{
        let{title,imDbRating}=ele;
        console.log("movie name is"+title+"\n Imdb rating value"+imDbRating);
    });
}