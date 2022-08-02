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
// function for displaying song results
function showResults(songArray) {
    for (let song of songArray){
        // let albumCoverImg = document.createElement('img');
        let songTitleDiv = document.createElement('div');
        let artistReturnDiv = document.createElement('div');
        
        songTitleDiv.classList.add('songTitle')
        resultsDiv.append(songTitleDiv);
        songTitleDiv.append(song.trackName);
        
        artistReturnDiv.classList.add('artistReturn')
        resultsDiv.append(artistReturnDiv); 
        artistReturnDiv.append(song.artistName);

        // albumCoverImg.classList.add(img);
        // resultsDiv.append(albumCoverDiv); 
        // albumCoverDiv.append(song.artworkURL100);
        
    }
}
