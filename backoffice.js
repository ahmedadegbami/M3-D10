let url = 'https://striveschool-api.herokuapp.com/api/movies/'
let method = 'POST'

let postMovies = async (event) => {
  event.preventDefault()
  let myObject = {
    name: document.getElementById('name').value,
    description: document.getElementById('decription').value,
    category: document.getElementById('category').value,
    imageUrl: document.getElementById('imageUrl').value,
  }
  let option = {
    method,
    body: JSON.stringify(myObject),
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ',
    },
  }
  let response = await fetch(url, option)
  let movies = await response.json()
  console.log(movies)
}
