
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const storyRouter = require('./routes/story.router');
const snippetRouter = require('./routes/snippet.router');
const commentRouter = require('./routes/comment.router');
const path = require('path'); /* Used for Heroku Import */

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/story', storyRouter);
app.use('/api/snippet', snippetRouter);
app.use('/api/comment', commentRouter);

// Serve static files
app.use(express.static('build'));
// Adding for HEROKU - CATCH ALL -> Go here instead if above is not found.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
