// const http = require('http');

const express = require('express');
const app = express();
app.use(express.json());

let Notes = [
    {
        "id": 1,
        "content": "Note 1",
        "date": "2020-01-01",
        "important": true
    },
    {
        "id": 2,
        "content": "Note 2",
        "date": "2021-01-01",
        "important": false
    },
    {
        "id": 3,
        "content": "Note 3",
        "date": "2022-01-01",
        "important": true
    }
]
app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>");
});
app.get('/api/notes', (req, res) => {
    res.json(Notes);
});

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application.json' });
//   res.end(JSON.stringify(Notes));
// })
const PORT= 3001;
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}/`);
})
app.get('/api/notes/:id', (req, res) => {	
    const id = Number(req.params.id);
    const note = Notes.find(note => note.id === id)
    if (note) {
        res.json(note);
    }else{
        res.status(404).json({ error: 'Note not found' });
}
});
app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    Notes = Notes.filter(note => note.id !== id);
    res.status(204).end();
});
app.post('/api/notes', (req, res) => {
   const note = req.body;


    
   
    const ids = Notes.map(note => note.id);
   const maxId = Math.max(...ids);

   const newNote = {
         id: maxId + 1,
         content: note.content,
         important: typeof note.important === 'boolean' ? note.important : false,
         date: new Date()
   
    }
    Notes = Notes.concat(newNote);
    res.json(newNote);
});
if (!Notes.content) {
    return res.status(400).json({ error: 'Note content missing' });

}

































//para correr el servidor en el navegador tengo que poner en la consola npm run dev// 
