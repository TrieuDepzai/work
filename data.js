
var ved = document.createElement('div');
var lidEOMvekoell = 'NveuifjRRR399';
ved.id = lidEOMvekoell;
document.body.appendChild(ved);
document.getElementById(lidEOMvekoell).innerHTML="<div style='font-size:16px'>os: <b id='osd'></b><br>Total time: <b id ='ct'>0</b> <br> Total YIM: <b id='yc'>0</b><br>Read: <b style='cursor:pointer;color:green'onclick='vln()'>on</b></div>";
document.getElementById(lidEOMvekoell).style.position = "absolute";
document.getElementById(lidEOMvekoell).style.left = "0px";
document.getElementById(lidEOMvekoell).style.top = "0px";
document.getElementById(lidEOMvekoell).style.color = "black";
document.getElementById(lidEOMvekoell).style.padding = "5px";
document.getElementById(lidEOMvekoell).style.backgroundColor= "white";

window.setInterval("EOos()", 60000);
var EOose = 0;
var EOosc= Math.floor(Math.random() * 3.5) + 1;
function EOos() {
	if (EOose >= 94+2*EOosc) {
		window.open("http://google.com/","_self");
	} else {
		EOose +=1;
		document.getElementById('osd') = EOose;
	}
}
var yc = 0;
var ARK = ['real','disable','point','question','reading','important'];
function Trendinge(){
	var tred = Math.floor(Math.random() * 8000) + 1500;
	for (let i = 100 ; i <= 700; i+=7){
		var e = document.elementFromPoint(70 , i).innerHTML;
		if (e == 'Trending news') {
			teet = true;
			cleick(70,i+100);
			setTimeout(function(){
				girmriri();
			},7000+tred);
			break;
		}
	}
}
setTimeout(function(){ 
	Trendinge();
	}, 6000);

var MYerandeom = Math.floor(Math.random() * 4)+1;
var MYerandeome = Math.floor(Math.random() * 7000)+1000;
window.setInterval("girmriri()", 155000+MYerandeom*28000+MYerandeome);
var vlnble = 0;

function vln (){
	ttP = 22;
	girmriri();
}
var pee = false;
function eivmeim() {
	if (vlnble == 1) {
	ERcdvvdvd();
	}
}
function girmriri(){
	if (ttP <= 30) {
		ndfmrkrlvki();
	} else {
		if (vlnble == 0) {
		vlnble = 1;	
		cleick(document.body.offsetWidth-196,30);
		window.setInterval("eivmeim()", 15000);
		}
	}
}
cData = '';
cO = true;
/// R
function ERcdvvdvd() {
	cData = '';
	if (cO == true) {
		cleick(200, 555);
		cO = false;
	} else if (cO == false) {
		cleick(400, 300);
		cO = true;
	} 
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
	mCh = true;
	for (let i = 200 ; i <= 850; i+=7){
		var e = document.elementFromPoint(data , i).innerText;	
		cData += e.toLowerCase();
		if (e == nne) {
			setTimeout(function(){
				if (e== nne) {
					for (let arel = 0; arel <= ARK.length; arel+=1){
						if (cData.indexOf(ARK[arel]) > -1) {
							console.log('HM');
							mCh = false;
						} 
					}
					if (mCh == true) {
						var trl = false;
						if (data == 1050 && document.elementFromPoint(888, i).innerText == 'Bearish') {
							trl = true;
						}
						if (data == 888 && document.elementFromPoint(1050, i).innerText == 'Unrelated') {
							trl = true;
						}
						if (data == 777 && document.elementFromPoint(666, i).innerText == 'Bullish') {
							trl = true;
						}
						if (data == 666 && document.elementFromPoint(777, i).innerText == 'Neutral') {
							trl = true;
						}
						if (trl == true) {
							cleick(data, i);
							checkP();
						}
					}
				}
			},3000);
			break;
		}
	}
	console.log(teet);
	}, 11000+edme);
}
/// P
function ndfmrkrlvki() {
	cData ='';
	var RIOVrndoek = Math.floor(Math.random() * 5) + 0;
	for (let i = 1000 ; i >= 800; i-=7){
		var e = document.elementFromPoint(i , 152).innerHTML;	
		if (e == '') {
			cleick(i , 152);
			break;
		}
	}

	var edme = Math.floor(Math.random() * 6000)+1000;
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
	var mCh = true;
	for (let ie = 200; ie <= 850;ie+=7){
		var ee = document.elementFromPoint(data , ie).innerText;
		cData += ee.toLowerCase();	
		if (ee == nne) {
			cData.toLowerCase();
			setTimeout(() => {
				if (ee == nne) {
					for (let arel = 0; arel <= ARK.length; arel+=1){
						if (cData.indexOf(ARK[arel]) > -1) {
							console.log('HM');
							mCh = false;
						} 
					}
					if (mCh == true) {
						cleick(data, ie);
						checkP();
					}
				}
			}, 2500);
			break;
		}
	}
	}, 6500+edme);
}

var ohie = Math.floor(Math.random() * 4)+6;
function checkP (){
	if (ttP >= 30+ohie){	
		Balanceee();
	}
	ttP+=1;
	document.getElementById('ct').innerText= ttP;
}
function Balanceee(){
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
		var ee = document.elementFromPoint(document.body.offsetWidth-110 , ie).innerText;	
		
		if (ee.toLowerCase() == 'yes i am') {
			console.log('YIM');
			yc+=1;
			setTimeout(() => {
				cleick(document.body.offsetWidth-110, ie);
			}, 1000);
			break;
		}
	}
	
	setTimeout(() => {
		document.getElementById('yc').innerText= yc;
	}, 1500);
}




