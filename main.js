let resultsDiv = document.querySelector('#results')
console.log('results div', resultsDiv)

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
    let songs = data.results
    console.log(songs)
    for (let song of songs){
        
    }
})
