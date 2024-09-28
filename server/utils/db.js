import mysql from 'mysql'

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user_management'
})

con.connect = (function (err) {
    if (err) {
        console.log("Connection Failed")
    } else {
        console.log('Connection Success')
    }
})