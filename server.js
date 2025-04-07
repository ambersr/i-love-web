// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

import { marked } from 'marked'

// Zodat we bestanden en mappen in kunnen lezen
import { readdir, readFile } from 'node:fs/promises'

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

const files = await readdir('content')

console.log(files)

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))




app.get('/', async function(request, response) {
    response.render('index.liquid', {files: files})
})

app.get('/:slug', async function(request, response) {
  
  console.log(request.params.slug)

  const fileContents = await readFile('content/' + request.params.slug + '.md', { encoding: 'utf8' })

  const markedUp = marked.parse(fileContents)

   response.render('artikel.liquid', {
    content: markedUp
  })
})


app.get('/learning-journal', async function(request, response) {
    response.render('journal.liquid', {files: files})
})




// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})