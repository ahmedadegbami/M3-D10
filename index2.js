let url = 'https://striveschool-api.herokuapp.com/api/movies/'

window.onload = async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ',
      },
    })
    let movies = await response.json()
    console.log(movies)

    let ul = document.querySelector('.list-group')
    ul.innerHTML = ''
    movies.forEach((movie) => {
      console.log(movie)
      ul.innerHTML += `
    <a href="./genre.html?genre=${movie}"><li class= "list-group-item text-dark">${movie}</li></a>`
    })
  } catch (error) {
    console.log(error)
  }
}
