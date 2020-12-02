document.getElementById("button").addEventListener("click", displayData);

function displayData() {

    const RESULT = document.getElementById("result");
    const AUTHOR = document.getElementById("author");
    const URL = "https://api.quotable.io/random";

    fetch(URL)
        .then(function (resp) {
            // Transform the returned json string data into a real json object.
            return resp.json()
        })
        .then(function (data) {
            // return the data to be used
            RESULT.innerHTML = ".";
            AUTHOR.innerHTML = " ";
            setTimeout(function(){
                RESULT.innerHTML = "..";
            }, 300);
            setTimeout(function(){
                RESULT.innerHTML = "...";
            }, 600);
            setTimeout(function(){
                RESULT.innerHTML = "...loading";
            }, 900);
            setTimeout(function(){
                RESULT.innerHTML = JSON.stringify(data.content);
            }, 1500)
            setTimeout(function(){
                AUTHOR.innerHTML = data.author;
            }, 1800)
        });
}
