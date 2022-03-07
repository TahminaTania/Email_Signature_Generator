
function openpage(evt, tabname) { 
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}
openpage(event, 'General')





// const Copy=document.getElementById('copy-btn')  
// //  const text = document.getElementById('uno') {% endcomment %}

// Copy.addEventListener('click', async (event)=> {
//     const text = document.getElementById('content-copy').textContent;
//     await navigator.clipboard.writeText(content);
//     const copied= await navigator.clipboard.readText();
//     console.log(copied);
// })


function copyText() {
      
    /* Copy text into clipboard */

}
 



