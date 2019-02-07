function getfile(file,callback){
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('Get',file,true);
	htp.onreadystatechange=function(){
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);
		}
	}
	htp.send(null);
}
getfile("dynamic.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	languages(data.languages);
	skills(data.skills);
	achievements(data.achievements);
	internships(data.internships);

})

var left=document.querySelector(".left");
function profile(p){
	var pimg=document.createElement("img");
	pimg.src=p.img;
	left.appendChild(pimg);
	var ph3=document.createElement("h3");
	ph3.textContent=p.name;
	left.appendChild(ph3);
	var proll=document.createElement("p");
	proll.textContent=p.roll;
	left.appendChild(proll);
	var pins=document.createElement("p");
	pins.textContent=p.institute;
	left.appendChild(pins);
	var pplace=document.createElement("p");
	pplace.textContent=p.place;
	left.appendChild(pplace);

}

var right=document.querySelector(".right");
function career(c){

	var hc=document.createElement("h1");
	hc.innerHTML="Resume";
	right.appendChild(hc);

	var cobj=document.createElement("h2");
	cobj.textContent=c.obj;
	right.appendChild(cobj);

	var chr=document.createElement("hr");
	right.appendChild(chr);

	var cinfo=document.createElement("p");
	cinfo.textContent=c.info;
	right.appendChild(cinfo);
}

var right=document.querySelector(".right");
function education(e){

	var he=document.createElement("h2");
	he.innerHTML="Education Details:";
	right.appendChild(he);

	var ehr=document.createElement("hr");
	right.appendChild(ehr);

	var etable=document.createElement("table");
	etable.border="1";
	var tr1="<tr><td>S.No</td><td>Degree</td><td>Institute</td><td>Year of Pass</td></tr>";
	var tr2="";
	for(var i=0;i<e.length;i++){
		tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].yop+"</td></tr>";
	}
	etable.innerHTML=tr1+tr2;
	right.appendChild(etable);

}

var right=document.querySelector(".right");
function languages(l){

	var hl=document.createElement("h2");
	hl.innerHTML="Languages Known:";
	right.appendChild(hl);

	var lhr=document.createElement("hr");
	right.appendChild(lhr);

	var lang=document.createElement("ul");
	var lan="";
	for(i=0;i<l.length;i++){
		lan=lan+"<li>"+l[i].lang+"</li>";
	}
	lang.innerHTML=lan;
	right.appendChild(lang);
}

var right=document.querySelector(".right");
function skills(s){

	var hs=document.createElement("h2");
	hs.innerHTML="Skills:";
	right.appendChild(hs);

	var shr=document.createElement("hr");
	right.appendChild(shr);

	var skk=document.createElement("ul");
	var sk1="";
	for(i=0;i<s.length;i++){
		sk1=sk1+"<li>"+s[i].sk+"</li>";
	}
	skk.innerHTML=sk1;
	right.appendChild(skk);
}

var right=document.querySelector(".right");
function achievements(a){

	var ha=document.createElement("h2");
	ha.innerHTML="Achievements:";
	right.appendChild(ha);

	var ahr=document.createElement("hr");
	right.appendChild(ahr);

	var ac=document.createElement("ul");
	var ac2="";
	for(i=0;i<a.length;i++){
		ac2=ac2+"<li>"+a[i].ac+"</li>";
	}
	ac.innerHTML=ac2;
	right.appendChild(ac);
}

var right=document.querySelector(".right");
function internships(i){

	var hi=document.createElement("h2");
	hi.innerHTML="Internships:";
	right.appendChild(hi);

	var ihr=document.createElement("hr");
	right.appendChild(ihr);

	var iin=document.createElement("p");
	iin.textContent=i.in;
	right.appendChild(iin);
}