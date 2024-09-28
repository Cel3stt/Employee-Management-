import mysql from 'mysql'

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user_management'
})

con.connect ((err) => {
    if (err) {
        console.log("Connection Failed: ", err)
    } else {
        console.log('Connection Success')
    }
})

export default con;