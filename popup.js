document.getElementById("sendRequest").addEventListener("click", async()=>{
    const randomText = ["This is awesome.","Disgusting.. Very bad!","Just loved it!"][Math.floor(Math.random()*2)];

    try{
        const response = await fetch("http://localhost:5000/predict",{
            metod:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({comments:[randomText]})
        });

        const result = await response.json();
        console.log("API Response: ",result);
        document.getElementById("response").innerText = JSON.stringify(result);
    
    }catch(error){
        console.error("Error: ",error)
    }
});