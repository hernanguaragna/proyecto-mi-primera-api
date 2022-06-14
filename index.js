const http = require('http');

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

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application.json' });
  res.end(JSON.stringify(Notes));
})
const PORT= 3001;
app.listen(PORT)
console.log(`Server running at http://localhost:${PORT}/`);
//para correr el servidor en el navegador tengo que poner en la consola npm run dev// 