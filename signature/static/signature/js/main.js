

function Code(C){
  console.log("code box")
  var mod_btn=document.getElementsByClassName('modal_btn');
  for(var i = 0; i < mod_btn.length; i++){
    mod_btn[i].value = mod_btn;
     }
     console.log(mod_btn)
  // var mod_btn=document.querySelector('.modal_btn');
  var mod_cd=document.querySelector('.modal_cd');
  var mod_cls=document.querySelector('.close');
  
  //var show = document.getElementsByClassName('templateCode');
  if(C==1){
    var show =document.getElementById('template1').innerHTML;
  }else if(C==2){
    var show =document.getElementById('template2').innerHTML;
  }else if(C==3){
    var show =document.getElementById('template3').innerHTML;
  }else if(C==4){
    var show =document.getElementById('template4').innerHTML;
  }else if(C==5){
    var show =document.getElementById('template5').innerHTML;
  }else if(C==6){
    var show =document.getElementById('template6').innerHTML;
  }else if(C==7){
    var show =document.getElementById('template7').innerHTML;
  }else if(C==8){
    var show =document.getElementById('template8').innerHTML;
  }else if(C==9){
    var show =document.getElementById('template9').innerHTML;
  }else if(C==10){
    var show =document.getElementById('template10').innerHTML;
  }else if(C==11){
    var show =document.getElementById('template11').innerHTML;
  }else if(C==12){
    var show =document.getElementById('template12').innerHTML;
  }else if(C==13){
    var show =document.getElementById('template13').innerHTML;
  }else if(C==14){
    var show =document.getElementById('template14').innerHTML;
  }else if(C==15){
    var show =document.getElementById('template15').innerHTML;
  }else if(C==16){
    var show =document.getElementById('template16').innerHTML;
  }else if(C==17){
    var show =document.getElementById('template17').innerHTML;
  }else if(C==18){
    var show =document.getElementById('template18').innerHTML;
  }else if(C==19){
    var show =document.getElementById('template19').innerHTML;
  }else if(C==20){
    var show =document.getElementById('template20').innerHTML;
  }else if(C==21){
    var show =document.getElementById('template21').innerHTML;
  }else if(C==22){
    var show =document.getElementById('template22').innerHTML;
  }else if(C==23){
    var show =document.getElementById('template23').innerHTML;
  }else if(C==24){
    var show =document.getElementById('template24').innerHTML;
  }else if(C==25){
    var show =document.getElementById('template25').innerHTML;
  }else if(C==26){
    var show =document.getElementById('template26').innerHTML;
  }else if(C==27){
    var show =document.getElementById('template27').innerHTML;
  }else if(C==28){
    var show =document.getElementById('template28').innerHTML;
  }else if(C==29){
    var show =document.getElementById('template29').innerHTML;
  }else if(C==30){
    var show =document.getElementById('template30').innerHTML;
  }else if(C==31){
    var show =document.getElementById('template31').innerHTML;
  }else if(C==32){
    var show =document.getElementById('template32').innerHTML;
  }else if(C==33){
    var show =document.getElementById('template33').innerHTML;
  }else if(C==34){
    var show =document.getElementById('template34').innerHTML;
  }else if(C==35){
    var show =document.getElementById('template35').innerHTML;
  }else if(C==36){
    var show =document.getElementById('template36').innerHTML;
  }else if(C==37){
    var show =document.getElementById('template37').innerHTML;
  }else if(C==38){
    var show =document.getElementById('template38').innerHTML;
  }else if(C==39){
    var show =document.getElementById('template39').innerHTML;
  }else if(C==40){
    var show =document.getElementById('template40').innerHTML;
  }else if(C==41){
    var show =document.getElementById('template41').innerHTML;
  }else if(C==42){
    var show =document.getElementById('template42').innerHTML;
  }else if(C==43){
    var show =document.getElementById('template43').innerHTML;
  }else if(C==44){
    var show =document.getElementById('template44').innerHTML;
  }
  
  console.log(show)
  document.getElementById('templateCode').innerText=show;


  for (var e = 0 ; e < mod_btn.length; e++) {
    mod_btn[e].addEventListener('click' ,function() {
      mod_cd.classList.add('cd-active');  
    } ) ; 
 }
  // mod_btn.addEventListener('click',function(){
  //   mod_cd.classList.add('cd-active');
  // })
 
  mod_cls.addEventListener('click',function(){
    mod_cd.classList.remove('cd-active');
  })

 
 
  // mod_cd.classList.remove('cd-active');
  
}



function color(c) {
  console.log("hello")
  
  if (c==1){
    var elements = document.getElementsByClassName('borderC');
     // get all elements
      for(var i = 0; i < elements.length; i++){
     elements[i].style.borderColor = "#00b894";
      }
    var mid = document.getElementsByClassName('mid-line');
      for(var mi = 0; mi < mid.length; mi++){
        mid[mi].style.color = "#00b894";
         }
    var mid = document.getElementsByClassName('info-color');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "#00b894";
      }
    }
  
  if (c==2){
    var elements = document.getElementsByClassName('borderC'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.borderColor = "#0984e3";
      }
    var mid = document.getElementsByClassName('mid-line');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "#0984e3";
        }
    var mid = document.getElementsByClassName('info-color');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "#0984e3";
        }      
    }

  if (c==3){
    var elements = document.getElementsByClassName('borderC'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.borderColor = "#6c5ce7";
      }
    var mid = document.getElementsByClassName('mid-line');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "#6c5ce7";
        } 
    var mid = document.getElementsByClassName('info-color');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "#6c5ce7";
        }   
    }

  if (c==4){
    var elements = document.getElementsByClassName('borderC'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.borderColor = "#fd79a8";
      }
    var mid = document.getElementsByClassName('mid-line');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "#fd79a8";
        }  
    var mid = document.getElementsByClassName('info-color');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "#fd79a8";
        } 
    }
  if (c==5){
    var elements = document.getElementsByClassName('borderC'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.borderColor = "#d63031";
      }
    var mid = document.getElementsByClassName('mid-line');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "#d63031";
        }
    var mid = document.getElementsByClassName('info-color');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "#d63031";
        }  
         
    }  
  if (c==6){
    var elements = document.getElementsByClassName('borderC'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.borderColor = "black";
      }
    var mid = document.getElementsByClassName('mid-line');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "black";
        }
    var mid = document.getElementsByClassName('info-color');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "black";
        }    
    }  

  if (c==7){
    var elements = document.getElementsByClassName('borderC'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.borderColor = "#b2bec3";
      }
    var mid = document.getElementsByClassName('mid-line');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "#b2bec3";
        }
    var mid = document.getElementsByClassName('info-color');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "#b2bec3";
    }
    }  

  if (c==8){
    var elements = document.getElementsByClassName('borderC'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.borderColor = "#81ecec";
      }
    var mid = document.getElementsByClassName('mid-line');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "#81ecec";
        }
    var mid = document.getElementsByClassName('info-color');
    for(var mi = 0; mi < mid.length; mi++){
      mid[mi].style.color = "#81ecec";
        }
    }
  
  }

    // document.getElementById("details").style.borderColor = "aquamarine";
    // document.getElementById("border-down").style.borderColor = "aquamarine";
    // document.getElementById("social5-b").style.borderColor = "aquamarine";
    // document.getElementById("border6").style.borderColor = "aquamarine";
    // document.getElementById("temp9").style.borderColor = "aquamarine";
    // document.getElementById("temp10").style.borderColor = "aquamarine";
    // document.getElementById("intro13").style.borderColor = "aquamarine";
    // document.getElementById("border15").style.borderColor = "aquamarine";
    // document.getElementById("into15").style.borderColor = "aquamarine";
    // document.getElementById("bod16").style.borderColor = "aquamarine";
    // document.getElementById("boder21").style.borderColor = "aquamarine";
    // document.getElementById("border22").style.borderColor = "aquamarine";
    // document.getElementById("upper-part").style.borderColor = "aquamarine";
    // document.getElementById("designation25").style.borderColor = "aquamarine";
    // document.getElementById("r-border").style.borderColor = "aquamarine";
    // document.getElementById("top-border").style.borderColor = "aquamarine";// used 3 tym
    // document.getElementById("border34").style.borderColor = "aquamarine";
    // document.getElementById("border36").style.borderColor = "aquamarine";
    // document.getElementById("border37").style.borderColor = "aquamarine";
    // document.getElementById("designation41").style.borderColor = "aquamarine";
   
  
function colorT(t) {
  console.log("theme")
  
  if (t==1){
    var elements = document.getElementsByClassName('att_color');
     // get all elements
      for(var i = 0; i < elements.length; i++){
     elements[i].style.color = "#00b894";
      }
    }
  
  if (t==2){
    var elements = document.getElementsByClassName('att_color'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.color = "#0984e3";
      }
    }

  if (t==3){
    var elements = document.getElementsByClassName('att_color'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.color = "#6c5ce7";
      }
    }

  if (t==4){
    var elements = document.getElementsByClassName('att_color'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.color = "#fd79a8";
      } 
    }
  if (t==5){
    var elements = document.getElementsByClassName('att_color'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.color = "#d63031";
      } 
    }  
  if (t==6){
    var elements = document.getElementsByClassName('att_color'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.color = "black";
      }
    }  

  if (t==7){
    var elements = document.getElementsByClassName('att_color'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.color = "#b2bec3";
      }
    }  

  if (t==8){
    var elements = document.getElementsByClassName('att_color'); // get all elements
      for(var i = 0; i < elements.length; i++){
      elements[i].style.color = "##81ecec";
      }
    }
  
  }


  function colorF(f) {
    console.log("font")
    
    if (f==1){
      var elements = document.getElementsByClassName('font');
       // get all elements
        for(var i = 0; i < elements.length; i++){
       elements[i].style.color = "#00b894";
        }
      }
    
    if (f==2){
      var elements = document.getElementsByClassName('font'); // get all elements
        for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "#0984e3";
        }
      }
  
    if (f==3){
      var elements = document.getElementsByClassName('font'); // get all elements
        for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "#6c5ce7";
        }
      }
  
    if (f==4){
      var elements = document.getElementsByClassName('font'); // get all elements
        for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "#fd79a8";
        } 
      }
    if (f==5){
      var elements = document.getElementsByClassName('font'); // get all elements
        for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "#d63031";
        } 
      }  
    if (f==6){
      var elements = document.getElementsByClassName('font'); // get all elements
        for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "black";
        }
      }  
  
    if (f==7){
      var elements = document.getElementsByClassName('font'); // get all elements
        for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "#b2bec3";
        }
      }  
  
    if (f==8){
      var elements = document.getElementsByClassName('font'); // get all elements
        for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "#81ecec";
        }
      }
    
    }












function updatephoto(event){
  // var img= document.getElementById("photoI").value.replace('C:\\fakepath\\',''); 
  // console.log(img)
 var url=URL.createObjectURL(event.target.files[0]);
   var imgs = document.querySelectorAll("[id='photo-big']");
   var imgr = document.querySelectorAll("[id='image-r']");
   var imgb = document.querySelectorAll("[id='big-image']");
   var pht = document.querySelectorAll("[id='photo']");
   var phl = document.querySelectorAll("[id='photo-l']");

   
   for(var e = 0; e < imgs.length; e++){
    console.log(imgs)
    imgs[e].src =url;
  }
   for(var r = 0; r < imgr.length; r++){
    imgr[r].src =url;
  }
  for(var eb = 0; eb < imgb.length; eb++){
    imgb[eb].src =url;
  }
  for(var phL = 0; phL < phl.length; phL++){
    phl[phL].src =url;
  }
  for(var ph = 0; ph < pht.length; ph++){
    pht[ph].src =url;
  }

  
  
  //document.getElementById("photo-big").src =url;
 }

function updatelogo(event){

  //document.getElementById("logoI").src =URL.createObjectURL(event.target.files[0]);
  var Lurl=URL.createObjectURL(event.target.files[0]);
  console.log(Lurl)
  var log = document.querySelectorAll("[id='logo']");
  for(var lg = 0; lg < log.length; lg++){
    log[lg].src =Lurl;
  }
}

function updatesign(event){

  //document.getElementById("logoI").src =URL.createObjectURL(event.target.files[0]);

  var sin=URL.createObjectURL(event.target.files[0]);
  console.log("sign got image :",sin)
  var sign = document.querySelectorAll("[id='sign']");
  for(var sg = 0; sg < sin.length; sg++){
    sign[sg].src=sin;
  }
}




function updatename(){
  var name= document.getElementById("nameI").value;
  
 
  var elms = document.querySelectorAll("[id='name']"); 
  for(var i = 0; i < elms.length; i++)
  elms[i].innerHTML=name;
var elm = document.querySelectorAll("[id='name10']");
for(var s = 0; s < elm.length; s++) {
elm[s].innerHTML=name;
}
var elm = document.querySelectorAll("[id='name14']"); 
for(var s = 0; s < elm.length; s++) {
elm[s].innerHTML=name;
}
var elm = document.querySelectorAll("[id='name26']");
for(var s = 0; s < elm.length; s++) {
  elm[s].innerHTML=name;
  }

  
  document.getElementById("name-5").innerHTML= name;
  document.getElementById("name4").innerHTML= name;
  document.getElementById("name6").innerHTML= name;
  document.getElementById("name19").innerHTML= name;
  document.getElementById("name20").innerHTML= name;
  document.getElementById("name24").innerHTML= name;
  document.getElementById("name34").innerHTML= name;
  document.getElementById("name35").innerHTML= name;
  document.getElementById("name36").innerHTML= name;
  document.getElementById("name37").innerHTML= name;
  document.getElementById("name38").innerHTML= name; 
  
   //document.getElementsByClassName('name').innerHTML= name;
   
}

function updatedesignation(){
  var des= document.getElementById("desI").value;

  var desig = document.querySelectorAll("[id='designation']"); 
  for(var j = 0; j < desig.length; j++)
    desig[j].innerHTML=des;

  var desig = document.querySelectorAll("[id='designation3']"); 
  for(var j = 0; j < desig.length; j++) {
    desig[j].innerHTML=des;
  }
  var desig = document.querySelectorAll("[id='designation4']"); 
  for(var j = 0; j < desig.length; j++) {
    desig[j].innerHTML=des;
  }
  var desig = document.querySelectorAll("[id='designation8']");
  for(var j = 0; j < desig.length; j++) {
    desig[j].innerHTML=des;
  }  
  var desig = document.querySelectorAll("[id='desination10']");
  for(var j = 0; j < desig.length; j++) {
    desig[j].innerHTML=des;
  } 
  var desig = document.querySelectorAll("[id='designation26']");
  for(var j = 0; j < desig.length; j++) {
    desig[j].innerHTML=des;
  }
  var desig = document.querySelectorAll("[id='designation35']");
  for(var j = 0; j < desig.length; j++) {
    desig[j].innerHTML=des;
  }
  console.log(designation)

  document.getElementById("job").innerHTML= des;
  document.getElementById("designation4").innerHTML= des;
  document.getElementById("designation5").innerHTML= des;
  document.getElementById("designation6").innerHTML= des;
  document.getElementById("designation10").innerHTML= des;
  document.getElementById("designation13").innerHTML= des;
  document.getElementById("designation14").innerHTML= des;
  document.getElementById("designation19").innerHTML= des;
  document.getElementById("designation20").innerHTML= des;
  document.getElementById("designation25").innerHTML= des;
  document.getElementById("designation34").innerHTML= des;
  //document.getElementById("designation35").innerHTML= des;
  //document.getElementById("designation36").innerHTML= des;
  document.getElementById("designation41").innerHTML= des;

  // document.querySelector('#name span').innerText=des;
  //console.log(des);
 
}
function updatemail(){
  var email= document.getElementById("emailI").value;
  var mail = document.querySelectorAll("[id='email']"); 
  for(var l = 0; l < mail.length; l++) 
  mail[l].innerHTML=email;
  mail[l].href=email;
 
  document.getElementById("email13").href= email;
}
function updatecompany(){
  var Company= document.getElementById("CompI").value;
  var comp = document.querySelectorAll("[id='Company']"); 
  for(var m = 0; m < comp.length; m++) 
  comp[m].innerHTML=Company;

  document.getElementById("Company3").innerHTML= Company;
  document.getElementById("Company35").innerHTML= Company;

  //document.getElementById("Company35").innerHTML= Company;
}

function updateaddress(){
  var add= document.getElementById("addressI").value;
  var addr = document.querySelectorAll("[id='address']"); 
  for(var n = 0; n < addr.length; n++) 
  addr[n].innerHTML=add;
  var addre = document.querySelectorAll("[id='address26']"); 
  for(var adr = 0; adr < addre.length; adr++) 
  addre[adr].innerHTML=add;
document.getElementById("address12").innerHTML= add;
document.getElementById("address26").innerHTML= add;
document.getElementById("address13").innerHTML= add;
document.getElementById("address41").innerHTML= add;




}
function updatewebsite(){
  var web= document.getElementById("websiteI").value;
  var site = document.querySelectorAll("[id='website']"); 
  for(var o = 0; o < site.length; o++) 
  site[o].innerHTML=web;
  site[o].href=web;

  document.getElementById("website13").innerText=web;
  console.log(web)
}
function updatephone(){
  var phone= document.getElementById("phoneI").value;
  var phn = document.querySelectorAll("[id='phone']"); 
  for(var p = 0; p < phn.length; p++) 
  phn[p].innerHTML=phone;
  console.log(phone)

  document.getElementById("phone13").innerHTML= phone;
  document.getElementById("phone12").innerHTML= phone;
  document.getElementById("phone23").innerHTML= phone;
  document.getElementById("phone12").innerHTML= phone;

}
function updatemobile(){
  var mobile= document.getElementById("mobileI").value;
  var mbl = document.querySelectorAll("[id='mobile']"); 
  for(var q = 0; q < mbl.length; q++) 
  mbl[q].innerHTML= mobile;
  document.getElementById("mobile12").innerHTML= mobile;
  document.getElementById("mobile12").innerHTML= mobile;
  document.getElementById("mobile12").innerHTML= mobile;
}
function updateGoogle(){
  var gog= document.getElementById("GogleI").value;
  var go = document.querySelectorAll("[id='gl']"); 
  for(var g = 0; g < go.length; g++) {
  go[g].href= gog; }
  console.log(gog)
  //document.getElementById("fb").href= fb;

}
function updateFacebook(){
  var fb= document.getElementById("FacebookI").value;
  var fab = document.querySelectorAll("[id='fb']"); 
  for(var f = 0; f < fab.length; f++) {
  fab[f].href= fb; }
  console.log(fb)
  //document.getElementById("fb").href= fb;

}
function updateLinkedin(){
  var linkedin= document.getElementById("LinkedinI").value;
  var lin = document.querySelectorAll("[id='le']"); 
  for(var li = 0; li < lin.length; li++) {
  lin[li].href= linkedin; }

  console.log(li)
  document.getElementById("le").href= li;

}
function updateTwiter(){
  var tt= document.getElementById("TwiterI").value;
  var twiter = document.querySelectorAll("[id='tw']"); 
  for(var tw = 0; tw < twiter.length; tw++) {
  twiter[tw].href= tt; }
  console.log(tt)
  document.getElementById("tw").href= tt;

}
function updateGithub(){
  var github= document.getElementById("GithubI").value;
  var git = document.querySelectorAll("[id='gh']"); 
  for(var gi = 0; gi < git.length; gi++) {
  git[gi].href= github; }
 
  console.log(git)
  document.getElementById("gh").href= gh;

}
function updateYoutube(){
  var youtube= document.getElementById("YoutubeI").value;
  var you = document.querySelectorAll("[id='yt']"); 
  for(var yt = 0; yt < you.length; yt++) {
  you[yt].href= youtube; }
  
  console.log(yt)
  document.getElementById("yt").href=you;

}





function Copy(i){
  var C_btn=document.getElementsByClassName("button_cp");
  for(var cp = 0; cp < C_btn.length; cp++){
    C_btn[cp].innerHTML= "Copy";}

  if (i==1){
    var templateID = 'template1';
    document.getElementById("button_copy").innerHTML="Copied"; 
  }else if (i==2){
    var templateID = 'template2'; 
    document.getElementById("button_copy2").innerHTML="Copied";
  }else if (i==3){
    var templateID = 'template3'; 
    document.getElementById("button_copy3").innerHTML="Copied";
  }else if (i==4){
    var templateID = 'template4';
    document.getElementById("button_copy4").innerHTML="Copied"; 
    
  }else if (i==5){
    var templateID = 'template5';
    document.getElementById("button_copy5").innerHTML="Copied"; 
    
  }else if (i==6){
    var templateID = 'template6';
    document.getElementById("button_copy6").innerHTML="Copied";
     
  }else if (i==7){
    var templateID = 'template7'; 
    document.getElementById("button_copy7").innerHTML="Copied";
    
  }else if (i==8){
    var templateID = 'template8';
    document.getElementById("button_copy8").innerHTML="Copied";
    
  }else if (i==9){
    var templateID = 'template9';
    document.getElementById("button_copy9").innerHTML="Copied"; 
    
  }else if (i==10){
    var templateID = 'template10';
    document.getElementById("button_copy10").innerHTML="Copied"; 
    
  }else if (i==11){
    var templateID = 'template11';
    document.getElementById("button_copy11").innerHTML="Copied";
    
  }else if (i==12){
    var templateID = 'template12';
    document.getElementById("button_copy12").innerHTML="Copied";
    
  }else if (i==13){
    var templateID = 'template13';
    document.getElementById("button_copy13").innerHTML="Copied";
    
  }else if (i==14){
    var templateID = 'template14';
    document.getElementById("button_copy14").innerHTML="Copied"; 
  }else if (i==15){
    var templateID = 'template15';
    document.getElementById("button_copy15").innerHTML="Copied"; 
  }else if (i==16){
    var templateID = 'template16';
    document.getElementById("button_copy16").innerHTML="Copied"; 
  }else if (i==17){
    var templateID = 'template17';
    document.getElementById("button_copy17").innerHTML="Copied"; 
  }else if (i==18){
    var templateID = 'template18';
    document.getElementById("button_copy18").innerHTML="Copied"; 
  }else if (i==19){
    var templateID = 'template19';
    document.getElementById("button_copy19").innerHTML="Copied"; 
  }else if (i==20){
    var templateID = 'template20';
    document.getElementById("button_copy20").innerHTML="Copied"; 
  }else if (i==21){
    var templateID = 'template21';
    document.getElementById("button_copy21").innerHTML="Copied"; 
  }else if (i==22){
    var templateID = 'template22';
    document.getElementById("button_copy22").innerHTML="Copied"; 
  }else if (i==23){
    var templateID = 'template23';
    document.getElementById("button_copy23").innerHTML="Copied"; 
  }else if (i==24){
    var templateID = 'template24';
    document.getElementById("button_copy24").innerHTML="Copied"; 
  }else if (i==25){
    var templateID = 'template25';
    document.getElementById("button_copy25").innerHTML="Copied"; 
  }else if (i==26){
    var templateID = 'template26';
    document.getElementById("button_copy26").innerHTML="Copied"; 
  }else if (i==27){
    var templateID = 'template27';
    document.getElementById("button_copy27").innerHTML="Copied"; 
  }else if (i==28){
    var templateID = 'template28';
    document.getElementById("button_copy28").innerHTML="Copied";  
  }else if (i==29){
    var templateID = 'template29'; 
    document.getElementById("button_copy29").innerHTML="Copied"; 
  }else if (i==30){
    var templateID = 'template30';
    document.getElementById("button_copy30").innerHTML="Copied";  
  }else if (i==31){
    var templateID = 'template31';
    document.getElementById("button_copy31").innerHTML="Copied";  
  }else if (i==32){
    var templateID = 'template32';
    document.getElementById("button_copy32").innerHTML="Copied";  
  }else if (i==33){
    var templateID = 'template33';
    document.getElementById("button_copy33").innerHTML="Copied";  
  }else if (i==34){
    var templateID = 'template34';
    document.getElementById("button_copy34").innerHTML="Copied";  
  }else if (i==35){
    var templateID = 'template35';
    document.getElementById("button_copy35").innerHTML="Copied";  
  }else if (i==36){
    var templateID = 'template36';
    document.getElementById("button_copy36").innerHTML="Copied";  
  }else if (i==37){
    var templateID = 'template37';
    document.getElementById("button_copy37").innerHTML="Copied";  
  }else if (i==38){
    var templateID = 'template38';
    document.getElementById("button_copy38").innerHTML="Copied";  
  }else if (i==39){
    var templateID = 'template39';
    document.getElementById("button_copy39").innerHTML="Copied";  
  }else if (i==40){
    var templateID = 'template40';
    document.getElementById("button_copy40").innerHTML="Copied";  
  }else if (i==41){
    var templateID = 'template41';
    document.getElementById("button_copy41").innerHTML="Copied";  
  }else if (i==42){
    var templateID = 'template42';
    document.getElementById("button_copy42").innerHTML="Copied";  
  }else if (i==43){
    var templateID = 'template43';
    document.getElementById("button_copy43").innerHTML="Copied";  
  }else if (i==44){
    var templateID = 'template44';
    document.getElementById("button_copy44").innerHTML="Copied";  
  }



   var range = document.createRange();
   range.selectNode(document.getElementById(templateID));
   window.getSelection().removeAllRanges(); /* clear current selection*/
   window.getSelection().addRange(range); /* to select text*/
   document.execCommand("copy")
  //  document.getElementById("button_copy").innerHTML="Copied";
   templateID.select();
   

    // var btn=document.getElementById("button_copy").innerHTML;
    // if(btn=="Copy"){
    //   document.getElementById("button_copy").innerHTML="Copied"; 
    //   templateID.select(); 
    //   //alert("copied")
    // }
    // else{
    // document.getElementById("button_copy").innerHTML="Copy";
    // }
    // window.getSelection().removeAllRanges();
    // window.getSelection().removeAllRanges(range);
    //alert("Copied the text: " + templateID.value);
 } 
 

    


 



 

 