const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'datademo',
    charset:'utf8_general_ci'
    }
);

connection.connect((err)=>{
    if(err)throw err.stack;
    else console.log('connect success');
});

const sqlAll='call getAll()';
connection.query(sqlAll,(err,results,fields)=>{
    if(err)throw err;
    console.log(results,'all')
});

const sqlWhere='call fromAddress()';
connection.query(sqlWhere,(err,results,fields)=>{
    if(err)throw err;
    console.log(results,'where')
});



