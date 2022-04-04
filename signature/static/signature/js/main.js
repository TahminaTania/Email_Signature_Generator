

function Code(){
  console.log("code box")
  var mod_btn=document.querySelector('.modal_btn');
  var mod_cd=document.querySelector('.modal_cd');
  var mod_cls=document.querySelector('.close');
  
  //var show = document.getElementsByClassName('templateCode');
  var show =document.getElementById('template1').innerHTML;
  console.log(show)
  document.getElementById('templateCode').innerText=show;

  mod_btn.addEventListener('click',function(){
    mod_cd.classList.add('cd-active');
  })
 
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
    
  }else if (i==8){
    var templateID = 'template8';
    
  }else if (i==9){
    var templateID = 'template9'; 
    
  }else if (i==10){
    var templateID = 'template10'; 
    
  }else if (i==11){
    var templateID = 'template11';
    
  }else if (i==12){
    var templateID = 'template12';
    
  }else if (i==13){
    var templateID = 'template13';
    
  }else if (i==14){
    var templateID = 'template14'; 
  }else if (i==15){
    var templateID = 'template15'; 
  }else if (i==16){
    var templateID = 'template16'; 
  }else if (i==17){
    var templateID = 'template17'; 
  }else if (i==18){
    var templateID = 'template18'; 
  }else if (i==19){
    var templateID = 'template19'; 
  }else if (i==20){
    var templateID = 'template20'; 
  }else if (i==21){
    var templateID = 'template21'; 
  }else if (i==22){
    var templateID = 'template22'; 
  }else if (i==23){
    var templateID = 'template23'; 
  }else if (i==24){
    var templateID = 'template24'; 
  }else if (i==25){
    var templateID = 'template25'; 
  }else if (i==26){
    var templateID = 'template26'; 
  }else if (i==27){
    var templateID = 'template27'; 
  }else if (i==28){
    var templateID = 'template28'; 
  }else if (i==29){
    var templateID = 'template29'; 
  }else if (i==30){
    var templateID = 'template30'; 
  }else if (i==31){
    var templateID = 'template31'; 
  }else if (i==32){
    var templateID = 'template32'; 
  }else if (i==33){
    var templateID = 'template33'; 
  }else if (i==34){
    var templateID = 'template34'; 
  }else if (i==35){
    var templateID = 'template35'; 
  }else if (i==36){
    var templateID = 'template36'; 
  }else if (i==37){
    var templateID = 'template37'; 
  }else if (i==38){
    var templateID = 'template38'; 
  }else if (i==39){
    var templateID = 'template39'; 
  }else if (i==40){
    var templateID = 'template40'; 
  }else if (i==41){
    var templateID = 'template41'; 
  }else if (i==42){
    var templateID = 'template42'; 
  }else if (i==43){
    var templateID = 'template43'; 
  }else if (i==44){
    var templateID = 'template44'; 
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
 

    


 



 

 