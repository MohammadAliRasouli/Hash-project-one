window.addEventListener("hashchange" , (e)=>{ router() })
function router(){switch(location.hash){
     case "" : render( {Title: "HOME" , color:"red" , href:"#home" })
     break;
     case"#home" : render({Title:"HOME" , color:"red" , href:"#home"})
     break;
     case "#search" : render({Title:"SEARCH" , color:"green" , href:"#search"})
     break;
     case "#likes" : render({Title:"LIKES" , color:"yellow" , href: "#likes"})
     break;
     case "#profile" : render({Title:"PROFILE" , color:"pink" , href: "#profile"})

}}

function render(data){document.querySelector("h1").innerText = data.Title ;
 document.querySelector("main").style.backgroundColor = data.color ;
 document.querySelector("title").style.innerText = data.Title  ;
document.querySelectorAll("a").forEach((e)=>{if(e.href.includes(data.href))
     {e.style.color = "black"  
}else{e.style.color = "blue"}    })
}

