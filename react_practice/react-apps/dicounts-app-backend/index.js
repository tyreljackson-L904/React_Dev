const express = require('express');
const app = express()
const PORT = 5001;
const cors = require('cors')

app.use(cors())

// if the app finds anything, return a response to page
app.get('/', (req, res) => {
  res.send('Welcome to your new app!')  
})

app.get('/person', (req, res) => {
  const data = [
    {
      id: "hmeadway0",
      first_name: "Henrie",
      last_name: "Meadway",
      avatar: "https://robohash.org/liberoetaliquam.png?size=50x50&set=set1",
    },
    {
      id: "kcraig1",
      first_name: "Karlyn",
      last_name: "Craig",
      avatar: "https://robohash.org/eligendidelenitivoluptas.png?size=50x50&set=set1",
    },
    {
      id: "klivoir2",
      first_name: "Kendrick",
      last_name: "Livoir",
      avatar: "https://robohash.org/rerumquiquos.png?size=50x50&set=set1",
    },
    {
      id: "wstrafford3",
      first_name: "Whit",
      last_name: "Strafford",
      avatar: "https://robohash.org/harumquodolores.png?size=50x50&set=set1",
    }
    ]
    res.json({
        data
    })
  })

// verify app is working on the desired PORT
app.listen(PORT, () => {
    console.log(`discounts app running on http://localhost:${PORT}`)
})