
const apiKey = "Fu29biLdVIWCA2gedYy10sLfhUWmqfcd3Dv10JHi";

const url =
`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(url)
.then(response => response.json())
.then(data => {

   if (data.media_type === "image") {
    document.getElementById("apod-image").src = data.url;
}
else {
    document.getElementById("apod-image").alt =
        "Today's APOD is a video.";
}

    document.getElementById("apod-title").textContent =
        data.title;

    document.getElementById("apod-description").textContent =
        data.explanation;

})
.catch(error => {

    console.log(error);

    document.getElementById("apod-title").textContent =
        "Unable to load APOD";

    document.getElementById("apod-description").textContent =
        "Please try again later.";

});