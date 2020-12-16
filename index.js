// generating json to excel file
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
  var wwe = []
  var p = info.items.map(i => {
    return {
      homepage: i.homepage,
      size: i.size,
      language: i.language,
      watchers: i.watchers,
      description: i.description,
      name: i.name,
      full_name: i.full_name,
    }
  })
  wwe.push(p)

  const wb = xlsx.utils.book_new()
  const ws = xlsx.utils.aoa_to_sheet(wwe)
  xlsx.utils.book_append_sheet(wb, ws)
  xlsx.writeFile(wb, 'data.xlsx')
  // console.log(p)
}

getData()
