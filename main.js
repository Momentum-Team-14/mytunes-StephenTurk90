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
    console.log(searchResults);
    showResults(searchResults);
})
// functions for displaying song results
function showResults(songArray) {
    for (let song of songArray){
        let songReturnDiv = document.createElement('div')
        songReturnDiv.classList.add('songReturn')
        
        let albumCoverImg = document.createElement('img');
        albumCoverImg.classList.add('albumCoverImg')
        albumCoverImg.src = song.artworkUrl100
        // album cover attempt

        let songTitleDiv = document.createElement('div');
        songTitleDiv.classList.add('songTitle')
        songTitleDiv.append(song.trackName);
        // song title return
        
        let artistReturnDiv = document.createElement('div');
        artistReturnDiv.classList.add('artistReturn')
        artistReturnDiv.append(song.artistName);
        // artist return

        resultsDiv.appendChild(songReturnDiv)
        songReturnDiv.appendChild(albumCoverImg)
        songReturnDiv.appendChild(songTitleDiv)
        songReturnDiv.appendChild(artistReturnDiv)
    }
}
