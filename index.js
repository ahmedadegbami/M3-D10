const headers = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ',
}

let option = {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NTAyNjczNjEsImV4cCI6MTY1MTQ3Njk2MX0.FJ2JZlnK_5miBe8lqcImSx28oOiZXwEkJe2KAbVb974',
  },
}

let url = 'https://striveschool-api.herokuapp.com/api/movies/'

let loadMovies = async (genre) => {
  let response = await fetch(url + genre, option)
  let movies = await response.json()
  console.log(movies)
  let row = document.getElementById(genre)
  console.log(row)
  row.innerHTML = ''
  console.log(row)
  movies.forEach((movie) => {
    let col = document.createElement('div')
    col.className = 'col-12 col-sm-6 col-md-2'
    col.innerHTML = `
    <a href="./details.html?movieID=${movie._id}"><div class="card">
          <img
            src=${movie.imageUrl}
            class="card-img-top"
            alt="..."
            height = "150px"
            width = "150px"
          />
        </div></a>`
    row.appendChild(col)
  })
}

window.onload = () => {
  loadMovies('horror')
  loadMovies('romantic')
  loadMovies('action')
  loadMovies('action')
}

const dropDown = document.querySelector('.genre-dropdown')

dropDown.addEventListener('click', async (e) => {
  if (e.target.classList.contains('dropdown-item')) {
    const genre = e.target.innerText.toLowerCase()
    console.log(genre)
    const movieUrl =
      'https://striveschool-api.herokuapp.com/api/movies/' + genre
    const response = await fetch(movieUrl, {
      method: 'GET',
      headers,
    })
    const movies = await response.json()
    console.log(movies)
    const main = document.querySelector('main')
    main.innerHTML = ''
    main.classList.add('container-fluid')
    let row = document.createElement('div')
    row.classList.add('row')
    movies.forEach((movie) => {
      let col = document.createElement('div')
      col.className = 'col-12 col-sm-6 col-md-2'
      col.innerHTML = `
    <a href="./details.html?movieID=${movie._id}"><div class="card">
          <img
            src=${movie.imageUrl}
            class="card-img-top"
            alt="..."
            height = "150px"
            width = "150px"
          />
        </div></a>`
      row.appendChild(col)
    })
    main.appendChild(row)
  }
})
