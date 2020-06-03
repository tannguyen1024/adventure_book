const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

router.get('/', (req, res) => {
  const query = `SELECT story.id, story_title, story_description, story_path, username as author FROM story 
JOIN "user" on "user"."id"=story.user_id ORDER BY story.id DESC;`
  pool.query(query).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(error)
    alert('Error with GET Route')
  })
});

router.get('/:id', (req, res) => {
  const storyId = req.params.id;
  const query = `SELECT story.id, story_title, story_description, story_path, username as author FROM story JOIN author ON story.id=author.story_id
JOIN "user" on "user"."id"=author.user_id WHERE story.id=$1;`
  pool.query(query, storyId).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(error)
    alert('Error with GET Route')
  })
});

router.get('/edit/:id', (req, res) => {
  const storyId = req.params.id;
  const query = `SELECT * FROM "story" WHERE story.id=$1;`
  pool.query(query, [storyId]).then((result) => {
    // console.log('Result.rows from EDIT Story is:', result.rows[0])
    res.send(result.rows[0]);
  }).catch((error) => {
    console.log(error)
    alert('Error with GET Route')
  })
});

router.post('/', rejectUnauthenticated, (req, res) => {
  const query = `INSERT INTO "story" (user_id, story_title, story_description, story_path) VALUES ($1, $2, $3, $4) RETURNING id;`;
  pool.query(query, [req.body.user_id, req.body.story_title, req.body.story_description, req.body.story_path])
    .then((result) => {
      // console.log('Result.rows is currently:', result.rows)
      res.send(result.rows)
    }).catch((error) => {
      console.log(error)
    })
})

router.put('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  const story = req.body;
  // console.log(story)
  // console.log(id)
  const queryText = `UPDATE "story" SET story_title=$1, story_description=$2, story_path=$3 WHERE "story"."id" = $4`;
  pool.query(queryText, [story.story_title, story.story_description, story.story_path, id]).then((result) => {
    // console.log(result);
    res.sendStatus(200);
  }).catch((error) => {
    console.log('An error occurred in PUT', error);
  })
})

module.exports = router;
