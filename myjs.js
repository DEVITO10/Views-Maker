var link="",loop="",mute="",full="";
var myDivs=["videoView","faq"]
let curr_count=0;
let varInterval;
function linkMaker(link){
      var new_link="";
      if(link.includes("youtu.be")||link.includes("www.youtube.com"))
      {     
            new_link=link.split("/");
            new_link=new_link[new_link.length-1].split("=");
            new_link=new_link[new_link.length-1];
            return "https://www.youtube.com/embed/"+new_link+"?autoplay=1&controls=0&disablekb=1";
      }
}
function setURL(i){
      document.getElementById("videoPlayer").setAttribute("src",linkMaker(link)+mute);
      document.getElementById("c_count").innerHTML=(i+1);
      document.getElementById("t_count").innerHTML=loop;
      setTimeout(goToHome,60000);
}
function makeVideoView(){ 
      document.getElementById("videoView").style="display:block;";
      document.getElementById("videoView").scrollIntoView({behavior:"smooth"});
      setTimeout(logoChanger,500);
      link=document.getElementById("url-index").value;
      if(document.getElementById("muteVal").checked==false)
            mute="&mute=0";
      else
            mute="&mute=1";
      if(link==""){
            document.getElementById("videoPlayer").setAttribute("src","https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&disablekb=1");
            document.getElementById("c_count").innerHTML=1;
            document.getElementById("t_count").innerHTML=1;
            setTimeout(() => {document.getElementById("rickroll").style="transform: translate(0px, -100px);"},500);
            setTimeout(() => {document.getElementById("rickroll").style="transform: translate(0px, 100px);"},3000);
            setTimeout(goToHome,60000);
      }
      else{
            loop=document.getElementById("loop_counter").value;
            if(loop=="")
                  loop=1;
            curr_count=0;
            setURL(curr_count++);
            varInerval=setInterval(() => {
                  if(curr_count>=loop){
                        clearInterval(varInterval);
                        goToHome();
                  }
                  else{
                        setURL(curr_count++);
                  }
            },35000);
      }
}

function logoChanger(){
      if(document.getElementById("head-logo-short").style.getPropertyValue('display')=='none')
            document.getElementById("head-logo-short").style="display:block";
      else
            document.getElementById("head-logo-short").style="display:none";

      if(document.getElementById("head-logo-long").style.getPropertyValue('display')=='none')
            document.getElementById("head-logo-long").style="display:block";
      else
            document.getElementById("head-logo-long").style="display:none";

      if(document.getElementById("goHome").style.getPropertyValue('display')=='none')
            document.getElementById("goHome").style="display:block";
      else
            document.getElementById("goHome").style="display:none";
}

function showModal(modal){
      document.getElementById(modal).classList.add("active");
      document.getElementById("overlay").classList.add("active");
}
function closeModal(modal){
      document.getElementById(modal).classList.remove("active");
      document.getElementById("overlay").classList.remove("active");

}
function goToHome(){
      document.getElementById("mainView").scrollIntoView({behavior:"smooth"});
      link="";
      loop="";
      curr_count=0;
      setTimeout(() => {
            logoChanger()  
            for(div in myDivs){
                  if(document.getElementById(myDivs[div]).style.getPropertyValue("display")=="block"){
                        document.getElementById(myDivs[div]).style="display:none";
                  }
            }
            document.getElementById("videoPlayer").setAttribute("src","");
       }, 500);
            
}





