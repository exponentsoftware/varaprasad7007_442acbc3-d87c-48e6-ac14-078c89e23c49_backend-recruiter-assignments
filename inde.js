var xlsx = require('xlsx')

const fetch = require('node-fetch')

async function getData() {
  let data = await fetch(
    'https://api.github.com/search/repositories?q=tetris+language:javascript&sort=stars&order=desc'
  )

  let json = await data.json()

  createElement(json)
}

function createElement(info) {
  var p = info.items.map(i => {
    return {
      homepage: i.homepage,
      size: i.size,
      // language: i.language,
      // watchers: i.watchers,
      // description: i.description,
      // name: i.name,
      // full_name: i.full_name,
    }
  })
}

getData()
