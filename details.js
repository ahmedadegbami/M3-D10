const searchParamID = new URLSearchParams(window.location.search).get('movieID')
console.log(searchParamID)

let url = 'https://striveschool-api.herokuapp.com/api/movies/'
let option = {
  method: 'PUT',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NTAyNjczNjEsImV4cCI6MTY1MTQ3Njk2MX0.FJ2JZlnK_5miBe8lqcImSx28oOiZXwEkJe2KAbVb974',
  },
}
window.onload = async () => {
  let response = await fetch(url + searchParamID, option)
  let movie = await response.json()
  console.log(movie)

  let row = document.querySelector('.row')
  row.className = 'd-block'
  let h1 = document.createElement('h1')
  h1.innerText = `${movie.name}`

  let col = document.createElement('div')
  col.className = `col-12 col-md-4 mb-5 image-fluid;`
  col.style.margin = 'auto'
  col.innerHTML = `<img
            src=${movie.imageUrl}
            class="card-img-top"
            alt="..."
            height = "500px"
            width = "150px"
            style="object-fit: contain;"
          />
          <p class="text-center">${movie.description}</p>
           <a href="./backoffice.html?productID=${movie._id}" class="btn btn-dark float-right">EDIT</a>`
  row.appendChild(h1)
  row.appendChild(col)
}
