const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get("/bacheca", (req, res) => {
    res.json(
        [
            {
              titolo: "I Benefici dell'Allenamento a Circuito",
              contenuto: "Scopri come l'allenamento a circuito può migliorare la tua forza e resistenza.",
              immagine: "circuit_training.jpg",
              tags: ["allenamento", "fitness", "salute"]
            },
            {
              titolo: "Ricetta di Smoothie Proteico",
              contenuto: "Una ricetta semplice e veloce per un delizioso smoothie proteico post-allenamento.",
              immagine: "smoothie_proteico.jpg",
              tags: ["ricetta", "nutrizione", "proteine"]
            },
            {
              titolo: "Guida all'HTML per Principianti",
              contenuto: "Impara le basi di HTML per creare il tuo primo sito web.",
              immagine: "html_guide.jpg",
              tags: ["programmazione", "HTML", "web development"]
            },
            {
              titolo: "I Migliori Esercizi per i Bicipiti",
              contenuto: "Una selezione dei migliori esercizi per sviluppare bicipiti forti e definiti.",
              immagine: "bicipiti_esercizi.jpg",
              tags: ["allenamento", "bicipiti", "muscoli"]
            },
            {
              titolo: "5 Consigli per Dormire Meglio",
              contenuto: "Suggerimenti pratici per migliorare la qualità del sonno e sentirsi più energici.",
              immagine: "dormire_meglio.jpg",
              tags: ["salute", "benessere", "sonno"]
            }
          ]
    )
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})