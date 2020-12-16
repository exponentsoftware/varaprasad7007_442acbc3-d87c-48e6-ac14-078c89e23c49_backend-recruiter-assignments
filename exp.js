const fetch = require('node-fetch')

let exp = async () => {
  let data = await fetch(
    'https://api.github.com/search/repositories?q=tetris+language:javascript&sort=stars&order=desc'
  )

  let json = await data.json()
  console.log(json)
  // createElement(json)
}

module.exports = exp
