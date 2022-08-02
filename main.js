const container = document.querySelector(".container")

let resultsDiv = document.querySelector('#results')

// fetch songs from iTunes
let searchUrl = ' https://itunes.apple.com/search?term=Andrew+Bird'

fetch(searchUrl, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
// response is whatever the fetch returns
.then(function (response) {
    return response.json()
})
// data is whatever the above code returns
.then(function (data) {
    let searchResults = data.results
    console.log(searchResults)
    showArtistName(searchResults)
})
// function for displaying song results
function showArtistName(songArray) {
    for (let song of songArray){
        let songReturnDiv = document.createElement('div')
        songReturnDiv.classList.add('songReturn')
        resultsDiv.append(songReturnDiv); 
        songReturnDiv.append(song.artistName);
    }
}
