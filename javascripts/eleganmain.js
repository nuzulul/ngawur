function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

var FadeDurationMS=1000;
function SetOpacity(object,opacityPct)
{object.style.filter='alpha(opacity='+opacityPct+')';object.style.MozOpacity=opacityPct/100;object.style.opacity=opacityPct/100;object.style.width='920px';}

function ChangeOpacity(id,msDuration,msStart,fromO,toO)
{var element=document.getElementById(id);var msNow=(new Date()).getTime();var opacity=fromO+(toO-fromO)*(msNow-msStart)/msDuration;if(opacity>=100)
{SetOpacity(element,100);element.timer=undefined;}
else if(opacity<=0)
{SetOpacity(element,0);element.timer=undefined;}
else
{SetOpacity(element,opacity);element.timer=window.setTimeout("ChangeOpacity('"+id+"',"+msDuration+","+msStart+","+fromO+","+toO+")",10);}}

function FadeInImage(foregroundID,newImage,backgroundID)
{var foreground=document.getElementById(foregroundID);if(foreground.timer)window.clearTimeout(foreground.timer);if(backgroundID)
{var background=document.getElementById(backgroundID);if(background)
{if(background.src)
{foreground.src=background.src;SetOpacity(foreground,100);}
background.src=newImage;background.style.backgroundImage='url('+newImage+')';background.style.backgroundRepeat='repeat';background.style.backgroundPosition='center center';var startMS=(new Date()).getTime();foreground.timer=window.setTimeout("ChangeOpacity('"+foregroundID+"',"+FadeDurationMS+","+startMS+",100,0)",10);}}else{foreground.src=newImage;}}
var slideCache=new Array();

function RunSlideShow(pictureID,backgroundID,imageFiles,displaySecs)
{var imageSeparator=imageFiles.indexOf(";");var nextImage=imageFiles.substring(0,imageSeparator);FadeInImage(pictureID,nextImage,backgroundID);var futureImages=imageFiles.substring(imageSeparator+1,imageFiles.length)
+';'+nextImage;setTimeout("RunSlideShow('"+pictureID+"','"+backgroundID+"','"+futureImages+"',"+displaySecs+")",displaySecs*1000);imageSeparator=futureImages.indexOf(";");nextImage=futureImages.substring(0,imageSeparator);if(slideCache[nextImage]==null)
{slideCache[nextImage]=new Image;slideCache[nextImage].src=nextImage;}}

function loadScript()
{
var footer = '<div id="nuzulhook_footer"><center>'+footertext+'</br>Powered by Universitas Airlangga</center></div>';
var medsos = '<div style="width:250px;height:0px;left:700px;top:-225px;position:relative;"> <a href="'+facebooklink+'" target="_blank"><img src="http://web.unair.ac.id/admin/file/f_13693_logo-fb.jpg" width="50px"></a> <a href="'+twitterlink+'" target="_blank"><img src="http://web.unair.ac.id/admin/file/f_13693_logo-twitter.jpg" width="50px"></a> <a href="'+youtubelink+'" target="_blank"><img src="http://web.unair.ac.id/admin/file/f_13693_youtube_logo.png" width="50px"></a> <a href="'+instagramlink+'" target="_blank"><img src="http://web.unair.ac.id/admin/file/f_13693_instagram-icon.jpg" width="50px"></a> </div>';
var menu = '<div id="menupopup1"> 	<ul class="parent"> 		<li><a href="index.html">Home</a></li> 		<li><a href="profil.html">Profil</a></li> 		<li><a href="http://web.unair.ac.id/login.html">Login</a></li>		 	</ul> </div>';
var slider = '<div id="GambarBackground" style="background-image: url(http://web.unair.ac.id/admin/file/f_13693_rektorat-unair-nuzulul-zulkarnain-haq.jpg);overflow:hidden;background:#93BDF5;width:910px;height:150px;left:auto;right:auto;"><center><a href="index.html"><img id="GambarDasar" style="opacity: 0;" src="http://web.unair.ac.id/admin/file/f_13693_rektorat-unair-nuzulul-zulkarnain-haq.jpg" width="910px"></a></center></div>';
var header = '<div id="nuzulhook_header">'+menu+'<div id="nuzulhook_site_title">'+document.getElementById('templatemo_header').innerHTML+'</div>'+slider+medsos+'</div>';
var content = document.getElementById('templatemo_content_wrapper').outerHTML; 
document.getElementById('templatmeo_wrapper').outerHTML= '<div id="nuzulhook_body_wrapper">'+header+content+footer+'</div>';
document.getElementById('templatemo_footer_wrapper').outerHTML='<div id="nuzulhook_footer_wrapper"></div>';
document.getElementById('site_title').innerHTML = "<h1>"+title+"<\/h1><h2>"+tagline+"<\/h2>";
RunSlideShow("GambarDasar","GambarBackground",slideurl,5);
}

addLoadEvent(loadScript);
