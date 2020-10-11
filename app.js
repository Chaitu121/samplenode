// const path = require('path');
// const ejs = require('ejs');
// 

const mysql = require('mysql');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
 app.use(bodyParser.json());
//const Router=  express.Router();


 //const Router=express.Router;const mysql = require('mysql');
var  connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'demo1'
});

connection.connect(function(error){
    if(error) console.log(error   );
    else console.log('Database Connected!');
}); 

// Serv
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});
app.get('/getss',(req,res)=>{
    connection.query('SELECT * FROM registration', (err, rows, fields) => {
        if (!err){  
            console.log(rows[0].village);
            res.send(rows)
            // rows.forEach(result => {
            //     console.log(result);
            //     alert(1)
            //});
           }
      
        else{  
            console.log(err);
        }
      
        })
    
})