const express = require('express') // appelle le express déjà installé
const app = express()  // recupère ttes  les fonctionnalités de express

const courses = [
    { id: 1, name: 'Tomate' },
    { id: 2, name: 'Riz' },
    { id: 3, name: 'Porc' },
]

app.get('/', (req, res) => {  //  recherche/demande(req) et affiche/répond(res) 'Hello world'
    res.send(' Hello World')     
})

app.get('/Maella', (req, res) => {
    res.send('Yo')
})

/*app.get('/api/courses/' ,(req, res) => {
    res.send([1,2,3])
})

app.get('/api/courses/:id' ,(req, res) => {
    res.send(req.params.id)  // affiche l'id correspondant à la liste précédente
})*/

app.get('/api/courses/' ,(req, res) => {
    res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("Id n'est pas présent dans le panier")
    res.send(course)
})

app.post('/api/courses', (req, res) => {
    const course ={
        id: courses.length + 1,
        name: req.body.name
    };
    course.push(course)
    res.send(course)
})


app.listen(3000, () => console.log('Listen on port 3000'))

//Http Code Status
//1xx : Information ((101, 102))
//2xx : Signifie que action ou requette a été un success (200 ... 206) 
//3xx : Redirection (300 ... 307)
//4xx : Erreur Client ((Erreur dans une requette effectuée)) (400 ... 417)
//5xx : Erreur Serveur (500 .. . 505)