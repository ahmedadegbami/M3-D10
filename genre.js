const genre = new URLSearchParams(window.location.search).get('genre')
console.log(genre)

let url = 'https://striveschool-api.herokuapp.com/api/movies/'

window.onload = async () => {
  const response = await fetch(url + genre, {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ',
    },
  })
  const movies = await response.json()
  console.log(movies)
  const main = document.querySelector('main')
  main.innerHTML = ''
  main.classList.add('container-fluid')
  console.log(main)
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
