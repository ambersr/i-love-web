###  Experiment 1: Ik wil alle studenten gesorteerd op name

Sort: `name`

`https://fdnd.directus.app/items/person/?sort=name&filter[squads][squad_id][cohort][_eq]=2425&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%201`

###  Experiment 2: Ik wil alle names van studenten die een name hebben die begint met de letter D

Operater: `[_starts_with]`

`https://fdnd.directus.app/items/person/?sort=name&filter[squads][squad_id][cohort][_eq]=2425&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%201&filter[name][_starts_with]=D`

###  Experiment 3: Ik wil alle names van studenten die een name hebben die begint met de letter D of K

Operater: `[_or]`

`https://fdnd.directus.app/items/person/?sort=name&filter[_or][0][name][_starts_with]=D&filter[_or][1][name][_starts_with]=K&filter[squads][squad_id][cohort][_eq]=2425&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%201`

### Experiment 4: Ik wil alle names en birthdates van studenten die een birthdate hebben ingevuld

Operater: `[_between]`

`https://fdnd.directus.app/items/person?fields=name,birthdate&filter[year(birthdate)][_eq]=2002&filter[squads][squad_id][cohort][_eq]=2425&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%201`

###  Experiment 5: Ik wil alle names en birthdates van studenten met een birthdate in 2002

`https://fdnd.directus.app/items/person?fields=fav_tag&aggregate[count]=fav_tag&groupBy=fav_tag`

