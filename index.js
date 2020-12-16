var xlsx = require('xlsx')

// var exp = require('./exp')
const fetch = require('node-fetch')

// const ObjectsToCsv = require('objects-to-csv')

// const csvtojson = require('csvtojson')

// const csvfilepath = 'test.csv'

async function getData() {
  let data = await fetch(
    'https://api.github.com/search/repositories?q=tetris+language:javascript&sort=stars&order=desc'
  )

  let json = await data.json()

  createElement(json)
}

// var wwe = []

function createElement(info) {
  var wwe = []
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
  wwe.push(p)

  const wb = xlsx.utils.book_new()
  const ws = xlsx.utils.aoa_to_sheet(wwe)
  xlsx.utils.book_append_sheet(wb, ws)
  xlsx.writeFile(wb, 'link2.xlsx')
  // console.log(p)
}
// passingvalue(p)

// function passingvalue(king) {
//   var results = p.map(l => [l])
//   console.log(results)
// }
// wwe.push(p)

// const wb = xlsx.utils.book_new()
// const ws = xlsx.utils.aoa_to_sheet(p)
// xlsx.utls.book_append_sheet(wb, ws)
// xlsx.writeFile(wb, 'link.xlsx')
// console.log(p)

// passingvalue(p)

// function passingvalue(pr) {}
getData()

//code in middle of passingvalue
// ;(async () => {
//   const csv = new ObjectsToCsv(pr)

//   // Save to file:
//   await csv.toDisk('./test.csv')

//   // Return the CSV file as string:
//   console.log(await csv.toString())
// })()
//end

// console.log(i)

//   console.log('data:', json)
//   createElement(json)

// function createElement(rip) {
//   //   console.log(rip.total_count)

//   const data = rip

//   data.map(p => {
//     p.full_name
//   })

//   let tempArray = []

//   let tempObj = {}

//   data.map((each, index) => {
//     tempObj.full_name = each.full_name
//     tempObj.userName = each.user_name
//     tempObj.homepage_url = each.homepage_url
//     tempArray.push(tempObj)
//   })
//   console.log(data)
// }

// let lopping = json.map(l => {
//   l.items[0]
// })

// app.get('/', function(req, res) {
//   res.send('main route working')
// })

// app.get('/api', function(req, res){
//     res.send(lo)
// })

// app.listen(3000, () => {
//   console.log('port running on 3000')
// }
