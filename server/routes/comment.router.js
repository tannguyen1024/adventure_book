const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* Displays Only Comments of One Snippet */
router.get('/:id', (req, res) => {
    id = req.params.id;
    const query = `SELECT * FROM comment JOIN snippet_comment ON comment.id=snippet_comment.comment_id JOIN snippet ON snippet.id=snippet_comment.snippet_id WHERE snippet.id=$1;`
    pool.query(query, [id]).then((result) => {
        console.log(result.rows)
        res.send(result.rows);
    }).catch((error) => {
        console.log(error)
        alert('Error with GET Route')
    })
});

/* Displays All Comments */
router.get('/all/', (req, res) => {
    id = req.params.id;
    const query = `SELECT * FROM "comment;"`
    pool.query(query, [id]).then((result) => {
        console.log('Here are your results:', result.rows)
        res.send(result.rows);
    }).catch((error) => {
        console.log(error)
    })
});

module.exports = router;
