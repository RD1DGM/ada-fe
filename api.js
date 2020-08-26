const sqlite3 = require('sqlite3').verbose();
var express = require('express')

var app = express()
app.use(express.json());

let db = new sqlite3.Database('./database.db');

/**
 * Search for answers
 */
app.post('nodes/search', function (req, res) {
    let query = req.body.query
    if(! query)
        return res.status(400).send("Bad query")

    let queryTerms = query.toLowerCase().split(" ")

    db.all(`select
                a.id, a.title, b.content
            from
                answers a
            join blocks b
                on a.id=b.answer_id`, {}, (err, rows_raw) => {

               let rows = rows_raw.map((r) => {
                   return {"id": r.id, "title": r.title, content: JSON.parse(r.content)}
               })

               let matched_rows = rows.filter(answer => {

                   // create a big string that includes all content text
                   let extract_text = (block) => {
                       if (Array.isArray(block)) {
                           return block.map(extract_text)
                       }
                       var text = ""
                       for (let [key, value] of Object.entries(block)) {
                           if(Array.isArray(value)){
                               text += value.map(extract_text)
                           }
                           else if(key != "type") {
                               text += " " +value
                           }
                       }
                       return text
                   }

                   // mash it all together and normalize it
                   let fulltext = (answer.title + " " + extract_text(answer.content).join(" ")).toLowerCase()

                   // see if all the terms show up
                   for(term of queryTerms) {
                       if(! fulltext.includes(term))
                           return false
                   }
                   return true
               })

               res.status(200).send(matched_rows)
           });

})

/**
 * Returns all of our variable data
 */
app.get("/variables", (req, res) => {
  db.all(`select * from variables`, {}, (err, variables_raw) => {
    res.status(200).send(variables_raw)
  });
})

app.get("/nodes", (req, res) => {
  db.all(`select
      a.id, a.title, b.content
    from
      answers a
    join blocks b
      on a.id=b.answer_id`, {}, (err, rows_raw) => {
    res.status(200).send(rows_raw)
  });
})


// TODO
/**
 * Returns data that shows the connections between nodes
 */
app.get("/nodes/connections", (req, res) => {
  res.status(200)
})

var server = app.listen(5000, function() {
    console.log('Express server listening on port ' + server.address().port);
});