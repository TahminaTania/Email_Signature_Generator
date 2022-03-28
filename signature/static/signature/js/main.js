function updatename(){
  var name= document.getElementById("nameI").value;
  var elms = document.querySelectorAll("[id='name']"); 
  for(var i = 0; i < elms.length; i++) 
  elms[i].innerHTML=name;
  
  // document.getElementById("name").innerHTML= name;
  
}
function updatedesignation(){
  var des= document.getElementById("desI").value;
  document.getElementById("designation").innerHTML= des;
  // document.querySelector('#name span').innerText=des;
  console.log(des);
 
}
function updatemail(){
  var email= document.getElementById("emailI").value;
  document.getElementById("email").innerHTML= email;
}
function updatecompany(){
  var Company= document.getElementById("CompI").value;
  document.getElementById("Company").innerHTML= Company;
}

function updateaddress(){
  var add= document.getElementById("addressI").value;
  document.getElementById("address").innerHTML= add;
}
function updatewebsite(){
  var web= document.getElementById("websiteI").value;
  document.getElementById("website").innerText=web;
  console.log(web)
}
function updatephone(){
  var phone= document.getElementById("numberI").value;
  document.getElementById("phone").innerHTML= phone;
}
function updatemobile(){
  var mobile= document.getElementById("mobileI").value;
  document.getElementById("mobile").innerHTML= mobile;
}


function Copy(i){
  if (i==1){
    var templateID = 'template1'; 
  }else if (i==2){
    var templateID = 'template2'; 
  }else if (i==3){
    var templateID = 'template3'; 
  }else if (i==4){
    var templateID = 'template4'; 
  }else if (i==5){
    var templateID = 'template5'; 
  }else if (i==6){
    var templateID = 'template6'; 
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


  // navigator.clipboard.writeText(template);

  //  var templateID = 'template'; 
   var range = document.createRange();
    range.selectNode(document.getElementById(templateID));
    window.getSelection().removeAllRanges(); /* clear current selection*/
    window.getSelection().addRange(range); /* to select text*/
    document.execCommand("copy");
    templateID.select();
    window.getSelection().removeAllRanges();
    alert("Copied the text: " + templateID.value);
 } 
 

    


 



