# 데이터 베이스 사용하기
- 서버프로그램 운영시 발생되는 데이터는 반드시 저장되어야 다음에 사용할 수 있다.
- 기본 모듈로는 제공되지 않고 외부 모듈을 사용해야 하는데 npmjs.com 에서 검색하면 모듈을 찾을 수 있다.
- 여기에서는 mysql 데이터베이스를 이용하도록 한다.

## 예제를 위한 준비
~~~SQL
create database TestDB
default character set utf8
collate utf8_general_ci;

use TestDB;

create table TestTable(int_data int not null,
str_data varchar(100) not null
);
~~~

## 데이터 베이스 접속하기
- 데이터 베이스 접속을 위해 접속 정보를 가지고 있는 객체를 만들어 준다.
~~~js
var conn_info = {
    host : "접속주소",
    port : "포트번호",
    user : "아이디",
    password : "비밀번호",
    database : "데이터베이스 이름"
};
~~~
- 데이터 베이스에 접속한다.
~~~js
var conn = mysql.createConnection(conn_info);

conn.connection(function(error){
    if(error){
        console.log("접속 오류");
    }else{
        console.log("접속 성공");
    }
});
~~~