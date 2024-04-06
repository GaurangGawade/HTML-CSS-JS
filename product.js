function fetchlocaljsonfile(){
    fetch("./product.json").then((res)=>{
        if(!res.ok){
            throw new Error('Https Error!!${res.status}');
        }
        return res.json();
    })
    .then((data)=>
    console.log(data)).catch((error)=>console.log("unable to load file!"));
}
fetchlocaljsonfile();