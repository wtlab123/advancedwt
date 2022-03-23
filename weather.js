async function weather(){
    let cityname = document.getElementById("test");
    let url="https://api.openweathermap.org/data/2.5/weather?q="+cityname.value+"&appid=76fc9e074b53c2c681bc346fc41ba451&units=metric";
    const resp =await fetch(url);
    let data=await resp.json();
    console.log(data);
    let {main : {temp,temp_min,temp_max}}=data;
    console.log("temp : "+temp); 
    console.log("temp_min : "+temp_min);
    console.log("temp_max : "+temp_max);

    
}