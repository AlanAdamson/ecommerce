
var connectionString = createConnection({
    host     : 'localhost',
    user     : 'postgres',
    password : 'easyforme',
    database : 'sandbox'
});

connectionString.connect(function(err) {
    if (err) throw err;
});
