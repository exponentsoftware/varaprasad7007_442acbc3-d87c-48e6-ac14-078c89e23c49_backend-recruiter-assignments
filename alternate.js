// creating csv file

const ObjectsToCsv = require('objects-to-csv')

const express = require('express')

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
      language: i.language,
      watchers: i.watchers,
      description: i.description,
      name: i.name,
      full_name: i.full_name,
    }
  })
  //   console.log(p)
  convertcsv(p)
}
function convertcsv(p) {
  console.log(p)
      const csv = new ObjectsToCsv(pr)
    // Save to file:
    await csv.toDisk('./test.csv')
    // Return the CSV file as string:
    console.log(await csv.toString())
  
}



getData()
