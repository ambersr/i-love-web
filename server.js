// Import
import express from 'express'
import { marked } from 'marked'
import { readdir, readFile } from 'node:fs/promises'
import { Liquid } from 'liquidjs'
import path from 'node:path'
import matter from 'gray-matter'

// Express
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Liquid
const engine = new Liquid()
app.engine('liquid', engine.express())

// Views
app.set('views', './views')
app.set('view engine', 'liquid')

// ------------------ Algemene variabelen en functies ---------------------

const files = await readdir('content')

// --------------------------- GET routes --------------------------------

// Home
app.get('/', async function(request, response) {
    response.render('index.liquid', {files: files})
})

// Digital garden
app.get('/digital-garden', async function(request, response) {
    response.render('digital-garden.liquid', {files: files})
})

// Daily journal
app.get('/daily-journal', async (req, res) => {

  const weeks = (await Promise.all(
    files
      .filter(file => file.endsWith('.md'))
      .map(async file => {
        const label = path.basename(file, '.md')
        const filePath = path.join('content', file)
        const fileContent = await readFile(filePath, 'utf8')
        const { data, content } = matter(fileContent)

        if (!data.sprint) return null

        return {
          slug: encodeURIComponent(label),
          label,
          sprint: data.sprint,
          title: data.title || label,
          content: marked(content)
        }
      })
  )).filter(Boolean)

  // Groepeer weken per sprint
  const sprints = {}
  
  weeks.forEach(week => {
    if (!sprints[week.sprint]) sprints[week.sprint] = []
    sprints[week.sprint].push(week)
  })

  // Genereer sprintnamen, zonder 'Onbekende sprint', gesorteerd
  const sprintNames = Object.keys(sprints)
    .filter(name => name.toLowerCase() !== 'onbekende sprint')
    .sort((a, b) => {
      const aNum = parseInt(a.match(/\d+/)?.[0] || 0, 10)
      const bNum = parseInt(b.match(/\d+/)?.[0] || 0, 10)
      return aNum - bNum
    })

  const selectedSprint = sprintNames.includes(req.query.sprint) ? req.query.sprint : sprintNames[0]
  const selectedWeeks = sprints[selectedSprint] || []

  res.render('daily-journal.liquid', {
    sprintNames,
    selectedSprint,
    weeks: selectedWeeks
  })
})

// 404 pagina als de route niet werkt
 app.use((req, res) => {
   res.status(404).render("404.liquid", { })
 })

// --------------------------- Poort --------------------------------

app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), () => {
  console.log(`App gestart op http://localhost:${app.get('port')}`)
})
