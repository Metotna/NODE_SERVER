'use strict';
const hostname = '';
const port = 1840;
var mysqlConfig = {
  connectionLimit: 50,
  //   host: '192.168.1.248',
  //   user: 'root',
  //   password: 'root20180122',
  //   database: 'jiancai',

  // host: '192.168.1.200',
  // user: 'root',
  // password: 'root123456ROOT&',
  // database: 'bingo',
  // 
  // host: 'rm-wz90k0c907765yk00zo.mysql.rds.aliyuncs.com',
  // user: 'root',
  // password: 'Nemoyr69',
  // database: 'async',
  // host: 'localhost',
  host:'123.207.82.36',
  user: 'root',
  password: 'Nemoyr_69',
  // password: 'Nemoyr69@',
  database: 'film',

  typeCast: true, // 是否把结果值转换为原生的 javascript 类型
  multipleStatements: true, //是否允许执行多条sql语句
  waitForConnections: true
};

module.exports ={
  HOSTNAME: hostname,
  PORT: port,
  MYSQLCONFIG: mysqlConfig
}