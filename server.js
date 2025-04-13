import express, { response } from 'express'
import { marked } from 'marked'
import { readdir, readFile } from 'node:fs/promises'
import { Liquid } from 'liquidjs';
import path from 'node:path';

// Express app setup
const app = express()

// Statische bestanden
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 
app.set('views', './views')




// Lees alle bestanden uit content dir bij start. Files is een array met alle bestandsnamen
// Object waarin weken gekoppeld worden aan sprints
const sprintMap = {
  'Week-1': 'Sprint 1',
  'Week-2': 'Sprint 1',
  'Week-3': 'Sprint 1',
  'Week-4': 'Sprint 1',

  'Week-5': 'Sprint 2',
  'Week-6': 'Sprint 2',
  'Week-7': 'Sprint 2',
  'Week-8': 'Sprint 2',

  'Week-9': 'Sprint 3',
  'Week-10': 'Sprint 3',
  'Week-11': 'Sprint 3',
  'Week-12': 'Sprint 3',

  'Week-13': 'Sprint 4',
  'Week-14': 'Sprint 4',
  'Week-15': 'Sprint 4',
  'Week-16': 'Sprint 4',

  'Week-17': 'Sprint 5',
  'Week-18': 'Sprint 5',
  'Week-19': 'Sprint 5',
  'Week-20': 'Sprint 5',

  'Week-21': 'Sprint 6',
  'Week-22': 'Sprint 6',
  'Week-23': 'Sprint 6',
  'Week-24': 'Sprint 6',
  'Week-25': 'Sprint 11'
};
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