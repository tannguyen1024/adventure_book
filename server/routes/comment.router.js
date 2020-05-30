const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* Displays Only Comments of One Snippet */
router.get('/:id', (req, res) => {
    id = req.params.id;
    const query = `SELECT * FROM comment JOIN "user" ON "user"."id"=comment.user_id WHERE snippet_id=$1 ORDER BY comment.id DESC;`
    pool.query(query, [id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error)
    })
});

/* Displays All Comments */
router.get('/', (req, res) => {
    const query = `SELECT * FROM "comment" 
JOIN "user" ON "user"."id"=comment.user_id 
JOIN "snippet" ON "snippet".id=comment.snippet_id
JOIN "story" ON story.id="story_id"
ORDER BY comment_date DESC;`
    pool.query(query).then((result) => {
        console.log('Here are your results:', result.rows)
        res.send(result.rows);
    }).catch((error) => {
        console.log(error)
    })
});

router.post('/', (req, res) => {
    const query = `INSERT INTO "comment" (user_id, comment, snippet_id) VALUES ($1, $2, $3);`;
    pool.query(query, [req.body.user, req.body.comment, req.body.snippet])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error)
        })
})

module.exports = router;
