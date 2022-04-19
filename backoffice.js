window.onload = () => {
  editorPost()
}

const headers = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ',
}

const paramID = new URLSearchParams(window.location.search).get('movieID')

console.log(paramID)
const method = paramID ? 'PUT' : 'POST'

const endpoint = paramID
  ? 'https://striveschool-api.herokuapp.com/api/movies/' + paramID
  : 'https://striveschool-api.herokuapp.com/api/movies/'

const editorPost = async () => {
  try {
    if (paramID) {
      const response = await fetch(endpoint, { method, headers })
      console.log(response)
      let movies = await response.json()
      console.log(movies)

      document.getElementById('name').value = movies.name
      document.getElementById('decription').value = movies.description
      document.getElementById('category').value = movies.category
      document.getElementById('imageUrl').value = movies.imageUrl

      let poster = document.getElementById('poster')
      poster.innerHTML = 'Make update to movie'
      let editor = document.getElementById('editor')
      editor.innerHTML = 'Update'
      editor.className = ' btn btn-success'
      const alert = document.getElementById('alerter')
      alert.innerHTML = 'Update movie'
    }
  } catch (error) {}
}

let url = 'https://striveschool-api.herokuapp.com/api/movies/'

let postMovies = async (event) => {
  event.preventDefault()

  try {
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
    let response = await fetch(endpoint, { method, headers })

    if (response.ok) {
      let movies = await response.json()
      const alert = document.getElementById('alerter')
      const form = document.querySelector('form')

      if (paramID) {
        console.log(movies)
        alert.innerHTML = 'Update movies'
        form.innerHTML = `<div id="alerter" class="alert alert-success" role="alert">
          You have successful made an update
        </div>
        <div class="d-flex flex-column"><img
      src="https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35042.jpg?size=626&ext=jpg&ga=GA1.2.1448366003.1641081600"
      alt="" class="d-flex m-auto justify-content-center" height="50%" width="50%"
    /> <a href="./index.html" class="btn btn-success m-auto">Back</a></div>`
      } else {
        alert.innerHTML = 'Fill to post product'
        form.innerHTML = `<div id="alerter" class="alert alert-success" role="alert">
          You have successful posted a product
        </div> <div class="d-flex flex-column">
       <img
      src="https://memesbams.com/wp-content/uploads/2017/12/Good-Luck-Quotes.jpg" 
      alt="" class="d-flex m-auto justify-content-center" height="30%" width="30%"/>
      <a href="./index.html" class="btn btn-success m-auto">Back</a></div>`
      }
    }
  } catch (error) {
    console.log(error)
  }
}

let deleteMovie = () => {
  fetch('https://striveschool-api.herokuapp.com/api/movies/' + paramID, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ',
    },
  })
    .then((res) => res.text())
    .then((res) => {
      console.log(res)
      window.location.assign('/')
    })
}
