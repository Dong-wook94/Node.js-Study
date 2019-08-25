/**
 * 
 */

var cluster = require("cluster");//각클러스터마다 처리할 작업이 다를경우엔 클러스터를 여러개 만들면 된다.

//Round Robin 방식으로 스케쥴링
cluster.schedulingPolicy = cluster.SCHED_RR;

if(cluster.isMaster == true){ //false인 경우에는 worker  
	cluster.fork();//하나의 worker 가 생김. fork시 코어에서 시분할 병렬처리 
	cluster.fork();
	cluster.fork();
	
	cluster.on('online',function(worker){
		for(var i=0;i<10;i++){
			console.log(worker.process.pid, "동작");
		}
	});
}