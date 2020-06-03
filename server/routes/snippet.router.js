const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/start/:id', (req, res) => {
  id = req.params.id;
  const query = `SELECT story.id AS story_id, story_title, story_description, story_path, snippet.id as snippet_id, snip_title, snip_description, snip_ending, snip_path FROM story JOIN snippet ON story.id=snippet.story_id WHERE story.id=$1 ORDER BY snippet.id LIMIT 1;`
  pool.query(query, [id]).then((result)=>{
    // console.log(result.rows)
    res.send(result.rows);
  }).catch((error)=>{
    console.log(error)
    alert('Error with GET Route')
  })
});

router.get('/start/child/:id', (req, res) => {
  id = req.params.id;
  const query = `SELECT junction.id, parent, child, action FROM snippet JOIN junction ON snippet.id=junction.parent WHERE junction.parent=$1;`
  pool.query(query, [id]).then((result) => {
    // console.log('Here are your results:',result.rows)
    res.send(result.rows);
  }).catch((error) => {
    console.log(error)
  })
});

router.get('/:id', (req, res) => {
  id = req.params.id;
  const query = `SELECT * FROM snippet where snippet.id=$1;`
  pool.query(query, [id]).then((result) => {
    console.log(result.rows)
    res.send(result.rows);
  }).catch((error) => {
    console.log(error)
    alert('Error with GET Route')
  })
});

router.get('/child/:id', (req, res) => {
  id = req.params.id;
  const query = `SELECT junction.id, parent, child, action FROM snippet JOIN junction ON snippet.id=junction.parent WHERE junction.parent=$1;`
  pool.query(query, [id]).then((result) => {
    // console.log('Here are your results:', result.rows)
    res.send(result.rows);
  }).catch((error) => {
    console.log(error)
  })
});

router.post('/start/:id', (req, res) => {
  let storyId = req.params.id;
  let defaultTitle = 'Snippet Title';
  let defaultDescription = 'Adventurous Description';
  const query = `INSERT INTO "snippet" (story_id, snip_title, snip_description) VALUES ($1, $2, $3) RETURNING id;`;
  pool.query(query, [storyId, defaultTitle, defaultDescription])
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(error)
    })
})

router.post('/action/:id', rejectUnauthenticated, (req, res) => {
  let parent = req.body.id;
  let child = req.params.id;
  let action = req.body.action;
  const query = `INSERT INTO "junction" (parent, child, action) VALUES ($1, $2, $3);`;
  pool.query(query, [parent, child, action])
    .then((result) => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log(error)
    })
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const snippet = req.body;
  console.log ('Received:',snippet)
  const queryText = `UPDATE "snippet" SET snip_title=$1, snip_description=$2, snip_path=$3, snip_ending=$4 WHERE "snippet"."id" = $5;`;
  pool.query(queryText, [snippet.snip_title, snippet.snip_description, snippet.snip_path, snippet.snip_ending, id]).then((result) => {
    // console.log(result);
    res.sendStatus(200);
  }).catch((error) => {
    console.log('An error occurred in PUT', error);
  })
})

// yield axios.delete(`/api/snippet/action/${action.payload.id}`);
// yield axios.delete(`/api/snippet/delete/${action.payload.child}`);

router.delete('/action/:id', rejectUnauthenticated, (req, res) => {
  let id = req.params.id;
  const query = `DELETE FROM "junction" WHERE id=$1;`;
  pool.query(query, [id])
    .then((result) => {
      res.sendStatus(200)
    }).catch((error) => {
      console.log('ERROR in DELETE ROUTE', error)
    })
})

router.delete('/delete/:id', rejectUnauthenticated, (req, res) => {
  let id = req.params.id;
  const query = `DELETE FROM "snippet" WHERE id=$1;`;
  pool.query(query, [id])
    .then((result) => {
      res.sendStatus(200)
    }).catch((error) => {
      console.log('ERROR in DELETE ROUTE', error)
    })
})


module.exports = router;
