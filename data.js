
var ved = document.createElement('div');
var lidEOMvekoell = 'NveuifjRRR399'
ved.id = lidEOMvekoell;
document.body.appendChild(ved);
document.getElementById(lidEOMvekoell).innerHTML="Total time: <b id ='ct'>0</b> <br> Total YIM: <b id='yc'>0</b><br>Read: <b style='cursor:pointer:color:green'onclick='vln()'>on</b>";
document.getElementById(lidEOMvekoell).style.position = "absolute";
document.getElementById(lidEOMvekoell).style.left = "8px";
document.getElementById(lidEOMvekoell).style.top = "55px";
document.getElementById(lidEOMvekoell).style.color = "black";
document.getElementById(lidEOMvekoell).style.padding = "5px";
document.getElementById(lidEOMvekoell).style.backgroundColor= "white";

var yc = 0;

function Trendinge(){
	for (let i = 100 ; i <= 700; i+=7){
		var e = document.elementFromPoint(70 , i).innerHTML;	
		console.log(i);
		if (e == 'Trending news') {
			teet = true;
			cleick(70,i+100);
			setTimeout(function(){
				girmriri();
			},3000);
			break;
		}
	}
}
setTimeout(function(){ 
	Trendinge();
	}, 4000);

var MYerandom = Math.floor(Math.random() * 30000) + 10000;
window.setInterval("girmriri()", 230000+MYerandom);
window.setInterval("eivmeim()", 10000);
var vlnble = 0;

function vln (){
	vlnble = 1;
}

function eivmeim() {
	if (vlnble == 1) {
	ERcdvvdvd();
	}
}
function girmriri(){
	if (ttP <= 20) {
		ndfmrkrlvki();
	} else {
		if (vlnble == 0) {
		vlnble = 1;
		cleick(document.body.offsetWidth-196,30);
		}
	}
}

function ERcdvvdvd() {
	var RIOVrndoek = Math.floor(Math.random() * 5) + 0;
	cleick(document.body.offsetWidth-40+RIOVrndoek , 92+RIOVrndoek );

	var edme = Math.floor(Math.random() * 5000)+1;
	setTimeout(function(){ 
	var rkcjnv = Math.floor(Math.random() * 4)+1;
	var nne = '';
	var data = 0;
	if (rkcjnv  == 2) {
		nne = 'Bullish';data = 666;
	}
	if (rkcjnv  == 1) {
		nne = 'Neutral';data = 777;
	}
	if (rkcjnv  == 4) {
		nne = 'Bearish';data = 888;
	}
	if (rkcjnv  == 3) {
		nne = 'Unrelated';data = 1050;
	}
	var teet = false;
	for (let i = 350 ; i <= 700; i+=7){
		var e = document.elementFromPoint(data , i).innerHTML;	
		if (e == nne) {
			teet = true;
			console.log(e);
			setTimeout(function(){
				checkP();
			cleick(data,i);
			},1500);
			break;
		}
	}
	if (teet == false) {
		girmriri();
	}
	console.log(teet);
	}, 12000+edme);
}


function ndfmrkrlvki() {
	var RIOVrndoek = Math.floor(Math.random() * 5) + 0;
	for (let i = 1000 ; i >= 800; i-=7){
		var e = document.elementFromPoint(i , 152).innerHTML;	
		console.log(i);
		if (e == '') {
			cleick(i , 152);
			break;
		}
	}

	var edme = Math.floor(Math.random() * 4000)+1;
	setTimeout(function(){ 
	var rkcjnv = Math.floor(Math.random() * 4)+1;
	var nne = '';
	var data = 0;
	if (rkcjnv  == 2) {
		nne = 'Bullish';data = 290;
	}
	if (rkcjnv  == 1) {
		nne = 'Neutral';data = 410;
	}
	if (rkcjnv  == 4) {
		nne = 'Bearish';data = 536;
	}
	if (rkcjnv  == 3) {
		nne = 'Unrelated';data = 661;
	}
	for (let ie = 200; ie <= 850;ie+=7){
		var ee = document.elementFromPoint(data , ie).innerText;	
		if (ee == nne) {
			
			checkP();
			cleick(data, ie);
			break;
		}
	}
	}, 5000+edme);
}

var ohie = Math.floor(Math.random() * 4)+3;
function checkP (){
	if (ttP >= 30+ohie){	
		Balanceee();
	}
	ttP+=1;
	document.getElementById('ct').innerText= ttP;
}
function Balanceee(){
		cleick(500,33);
		var elee = document.elementFromPoint(390, 227).innerText;
			var Po = document.elementFromPoint(480, 33).innerText;
		setTimeout(() => {
			elee = document.elementFromPoint(390, 227).innerText;
			Po = document.elementFromPoint(480, 33).innerText;
		}, 3000);
			setTimeout(function(){ 
				window.open("http://127.0.0.1:801/lnwork/?po="+Po+"&value="+elee+"&id="+eid,"_self");
				}, 20000);


				//C
			setTimeout(() => {
				checkSV();
			}, 5000);
}
function cleick(x, y)
{
    var ev = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true,
        'screenX': x,
        'screenY': y
    });

    var el = document.elementFromPoint(x, y);

    el.dispatchEvent(ev);
}
var MYerandom = Math.floor(Math.random() * 1);

//// af 

window.setInterval("gR()", 5000);
gR();
function gR () {
	for (let ie = 50; ie <= 850;ie+=7){
		var ee = document.elementFromPoint(50 , ie).innerText;	
		
		if (ee.toLowerCase() == 'yes i am') {
			console.log('YIM');
			yc+=1;
			setTimeout(() => {
			cleick(50, ie);
			}, 1000);
			break;
		}
	}
	for (let ie = 50; ie <= 850;ie+=7){
		var ee = document.elementFromPoint(document.body.offsetWidth-60 , ie).innerText;	
		
		if (ee.toLowerCase() == 'yes i am') {
			console.log('YIM');
			yc+=1;
			setTimeout(() => {
				cleick(document.body.offsetWidth-60, ie);
			}, 1000);
			break;
		}
	}
	
	document.getElementById('yc').innerText= yc;
}

//// server
var arr;
function getData(a){
	arr =a;
}

function checkSV() {
	fetch('http://127.0.0.1:801/lnwork/get.php?id='+eid)
	.then(response => response.json())
	.then(data => getData(data));
	CClaim();
}
function CClaim () {
			if (arr[0]['claim'] == 1) {
				cleick(500,33);
				setTimeout(() => {
					fetch('http://127.0.0.1:801/lnwork/set.php?claim=0&id='+eid)
				.then(response => response.json())
					cleick(450,270);
				}, 3500);
			}
}









document.addEventListener('keydown', function(e) {
    if (e.key === 'r')
      Balanceee();
    if (e.key === 't')
      vlnble = 1;
  })