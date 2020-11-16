
document.querySelector('button').addEventListener("click",function(){
    fetch("https://api.icndb.com/jokes/random")
    .then( response => response.json())
    .then( (data) => {
        console.log(data);
        document.getElementById('api').innerText = data.value.joke;
    
    })
});

