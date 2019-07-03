const mongoose = require('mongoose');
const config = require('../config');


mongoose.connect(config.DATABASE_URI);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.log(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});
