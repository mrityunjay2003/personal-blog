require('dotenv').config();
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/admin');
const mainRoutes = require('./routes/main');

const app = express();
const PORT = process.env.PORT || 5000;


connectDB();

app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        ttl: 14 * 24 * 60 * 60,
    }),
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 14 * 24 * 60 * 60 * 1000,
    },
}));


// Route handlers
app.use('/', mainRoutes);
app.use('/admin', adminRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
