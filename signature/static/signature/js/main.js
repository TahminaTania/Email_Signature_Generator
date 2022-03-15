






// const Copy=document.getElementById('copy-btn')  
// //  const text = document.getElementById('uno') {% endcomment %}

// Copy.addEventListener('click', async (event)=> {
//     const text = document.getElementById('content-copy').textContent;
//     await navigator.clipboard.writeText(content);
//     const copied= await navigator.clipboard.readText();
//     console.log(copied);
// })

  

function Copy(){
  // navigator.clipboard.writeText(template);
   var activeTabId = 'template'; 
   var range = document.createRange();
    range.selectNode(document.getElementById(activeTabId));
    window.getSelection().removeAllRanges(); /* clear current selection*/
    window.getSelection().addRange(range); /* to select text*/
    document.execCommand("copy");
    activeTabId.select();
    window.getSelection().removeAllRanges();
    alert("Copied the text: " + activeTabId.value);
 } 
 

    


 



