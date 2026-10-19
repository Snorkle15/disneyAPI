async function getJoke(){
    try{
        //const url = "https://icanhazdadjoke.com/";
        const url = "https://api.disneyapi.dev/character?name=Goofy";
        const headers = new Headers();
        headers.append("Accept", "application/json")
        const response = await fetch(url, {headers:headers})
        const json = await response.json()
        console.log(json)
        const jokeHolder = document.getElementById("jokeHolder")
        //jokeHolder.textContent = json.joke
        // jokeHolder.textContent = json.data[0].imageUrl;
        const img = document.createElement("img");
        img.src = json.data[0].imageUrl;
        jokeHolder.append(img)
    }
    catch(error){
        console.log(error)
    }
}