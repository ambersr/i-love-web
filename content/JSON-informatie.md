## Route aanmaken (nieuwe pagina)

Routes zijn stukjes achter de URL waar de website opdraait zoals /oefenen.

In `server.js`
```
app.get('/oefenen', async function (request, response) {
   response.render('oefenen.liquid', {person: personResponseJSON.data})
})
```

Maak een nieuwe pagina `oefenen.index` aan.

## Liquid filter

Alle liquid filter: https://liquidjs.com/filters/overview.html

```
<p>Het is vandaag {{ 'now' | date }}</p>
```

De datum kan je ook in ander format weergeven: https://liquidjs.com/filters/date.html

Handig voor het spieken van je data:

```
<details><summary>Data</summary><pre>{{ person | json:4 }}</pre></details>
```

## Custom data

String

```
"{ \"naam\": \"John\", \"leeftijd\": 30 }"
```

Object

```
{
  "naam": "John",
  "leeftijd": 30
}
```

Met JSON.parse() zet je een string om naar een object.

```
const personResponseJSON = await personResponse.json()

personResponseJSON.data.custom = JSON.parse(personResponseJSON.data.custom);

```

## Routes en query parameters

params betekent 'pak iets uit de url'.

Request.params

<img width="794" alt="image" src="https://github.com/user-attachments/assets/e67e53aa-58dd-4507-a7df-a291115c3da9" />

Verschil tussen `request.params` & `request.query`

<img width="787" alt="image" src="https://github.com/user-attachments/assets/875c236d-7a97-4f18-bcf8-856360ab5375" />

## Liquid dynamische titel

`{% comment %} {% capture webinar_title %}
Webinar - {{ webinars[0].title }}
{% endcapture %} {% endcomment %}
{% comment %} https://shopify.dev/docs/api/liquid/tags/capture {% endcomment %}`
