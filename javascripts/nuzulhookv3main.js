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
var livechat = '<div id="nuzulhook_box"><h2>Buku Tamu - Live Chat</h2><div id="livechat"><a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24186.html">Buku Tamu</a></div></div>';
var likebutton = '<div id="nuzulhook_box"><div id="likefbatas"><a href="http://facebook.com/nuzulhook/">facebook</a></div></div>'+livechat+'<div id="nuzulhook_box"><div  id="tweets">Tweets</div></div>';
var left_sidebar = '<div id="nuzulhook_sidebar"><div id="nuzulhook_sidebar_top"></div>' + likebutton + document.getElementById('templatemo_left_sidebar').innerHTML + ''+ document.getElementById('templatemo_right_sidebar').innerHTML + '<div id="nuzulhook_box"><div id="histats_count"></div></div> <div id="nuzulhook_sidebar_bottom"></div></div>';
var content = '<div id="nuzulhook_content">' + document.getElementById('templatemo_content').innerHTML + '<div id="nuzulhook_nav"></div></div>';
var right_sidebar = '<div id="templatemo_right_sidebar">' + document.getElementById('templatemo_right_sidebar').innerHTML + '</div>';

var content = left_sidebar + content ;
var menupopup1 = '<div id="menupopup1"> 	<ul class="parent"> 		<li><a href="http://nuzulul-fkp09.web.unair.ac.id">Home</a></li> 		<li><a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24176.html">About</a></li><li><a href="#">Topik</a><ul class="child">'+document.getElementsByClassName('side_menu')[0].innerHTML+'</ul></li><li><a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24186.html">Buku Tamu</a></li> 		                                           <li><a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24192.html">Download</a></li>                                  <li><a href="#">More</a>                 <ul class="child"><li><a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24185.html">Askep</a></li><li><a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24196.html">Album</a></li><li><a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24183.html">Sahabat</a></li>                             <li><a href="http://www.google.com/cse?cx=002432522631165541499%3Aokf_w9ptqto&ie=UTF-8&q=site%3Anuzulul-fkp09.web.unair.ac.id&sa=Telusuri&siteurl=nuzulul-fkp09.web.unair.ac.id%2F#gsc.tab=0&gsc.q=site%3Anuzulul-fkp09.web.unair.ac.id&gsc.page=1" target="_blank">Daftar Isi</a></li>                </ul>                </li>		 	</ul> </div>';
var medsos = '<div style="width:250px;height:50px;left:420px;top:-50px;position:relative;"> <a href="http://www.facebook.com/nuzulhook" target="_blank"><img src="http://web.unair.ac.id/admin/file/f_13693_logo-fb.jpg" width="50px"></a> <a href="http://www.twitter.com/nuzulhook" target="_blank"><img src="http://web.unair.ac.id/admin/file/f_13693_logo-twitter.jpg" width="50px"></a> <a href="http://www.youtube.com/user/nuzulhook" target="_blank"><img src="http://web.unair.ac.id/admin/file/f_13693_youtube_logo.png" width="50px"></a> <a href="https://instagram.com/nuzulhook" target="_blank"><img src="http://web.unair.ac.id/admin/file/f_13693_instagram-icon.jpg" width="50px"></a> </div>';
var d = new Date();
var n = d.getFullYear();
var foot = 'Copyright (c) 2011-'+n+' <a href="http://nuzulul-fkp09.web.unair.ac.id/">Nuzulul Zulkarnain Haq</a>. All rights reserved.</br>Seluruh artikel di nuzulul-fkp09.web.unair.ac.id dapat anda perbanyak, cetak, modifikasi dan distribusikan secara bebas asal tetap mencantumkan nama penulis dan URL lengkap artikel.</br>Powered by <a href="unair.ac.id" target="_blank">Universitas Airlangga</a>';
document.getElementById('templatmeo_wrapper').innerHTML= '<div id="nuzulhook_header"><div id="nuzulhook_header_top"><img id="nuzulhook_header_top_image" style="opacity: 0;" src="https://sites.google.com/site/nuzulz/download/headerkampuscunair.jpg" width="100px"><div id="nuzulhook_header_top_trans"></div><div id="nuzulhook_header_top_line"></div><div id="nuzulhook_header_top_search"></div></div><div id="nuzulhook_header_bottom"></div><div id="nuzulhook_header_poto"><img src="https://sites.google.com/site/nuzulz/download/profilnuzul.jpg" width="100%"><div id="nuzulhook_header_poto_border"></div></div><div id="nuzulhook_header_title"><h2>Nuzulul Zulkarnain Haq</h2><h3>A Hybrid Nurse & Blogger Universitas Airlangga</h3><div id="liketwitteratas"><a href="http://twitter.com/nuzulhook/">twitter</a></div></div><div id="nuzulhook_header_menu"> ' + menupopup1 + medsos + '</div> </div><div id="nuzulhook_content_wrapper">' + content + '</div><div id="nuzulhook_footer"> '+ foot +'</div>';
document.getElementById('templatemo_footer_wrapper').innerHTML='';
document.getElementById('liketwitteratas').innerHTML = "<div id=\"liketwitteratas\"><iframe src=\"http://nuzulul.github.com/ngawur/liketwitter.html\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden; width:150px; height:25px;\" allowTransparency=\"true\"><\/iframe><\/div>";
document.getElementById('likefbatas').innerHTML = "<div id=\"likefbatas\"><iframe src=\"http://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fnuzulhook&width=320&height=290&colorscheme=light&show_faces=true&header=true&stream=false&show_border=false&appId=172259479541279\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden; width:340px; height:290px;\" allowTransparency=\"true\"><\/iframe><\/div>";
document.getElementById('tweets').innerHTML = "<iframe src=\"http://nuzulul.github.com/ngawur/tweetszul.html\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden; width:340px; height:450px;\" allowTransparency=\"true\"><\/iframe><style>#tweets {height:250px;overflow:hidden;} #tweets:hover {height:100%;}</style>";
document.getElementById('livechat').innerHTML = "<iframe id='livechatiframe' src=\"http://nuzulul.github.com/ngawur/nuzulhooklivechat.html\" scrolling=\"yes\" frameborder=\"0\" style=\"border:none; overflow:scroll; width:340px; height:450px;\" allowTransparency=\"true\"><\/iframe><style>#livechat {height:290px;overflow:hidden;} #livechat:hover {height:100%;}</style>";
document.getElementById('nuzulhook_header_top_search').innerHTML = '<div id="search_form"><div id="gsearch"><form action="http://www.google.com/cse" id="cse-search-box" target="_blank"><div> <input type="hidden" name="cx" value="002432522631165541499:okf_w9ptqto" /> <input type="hidden" name="ie" value="UTF-8" /> <input type="text" name="q" size="30" /> <input type="submit" name="sa" value="Search" /></div></form> </div></div> ';
document.getElementById('nuzulhook_nav').innerHTML = "<div id=\"pages\"><div class=\"navigation\"><a class=\"page-numbers\" href=\"index.html?hal=1\">1<\/a><a class=\"page-numbers\" href=\"index.html?hal=2\">2<\/a><a class=\"page-numbers\" href=\"index.html?hal=3\">3<\/a><a class=\"page-numbers\" href=\"index.html?hal=4\">4<\/a><a class=\"page-numbers\" href=\"index.html?hal=5\">5<\/a><a class=\"page-numbers\" href=\"index.html?hal=6\">6<\/a><a class=\"page-numbers\" href=\"index.html?hal=7\">7<\/a><a class=\"page-numbers\" href=\"index.html?hal=8\">8<\/a><a class=\"page-numbers\" href=\"index.html?hal=9\">9<\/a><a class=\"page-numbers\" href=\"index.html?hal=10\">10<\/a><a class=\"page-numbers\" href=\"index.html?hal=11\">11<\/a><a class=\"page-numbers\" href=\"index.html?hal=12\">12<\/a><a class=\"page-numbers\" href=\"index.html?hal=13\">13<\/a><\/div><\/div>";
document.getElementById('histats_count').innerHTML = document.getElementById('nuzulhook_stats').innerHTML;

RunSlideShow("nuzulhook_header_top_image","nuzulhook_header_top","https://sites.google.com/site/nuzulz/download/headerkampuscunair.jpg;https://sites.google.com/site/nuzulz/download/profilnuzul.jpg;https://sites.google.com/site/nuzulz/download/pulau-sempu-malang.jpg",5);

var tag = document.createElement("script");
tag.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js";
document.getElementsByTagName("body")[0].appendChild(tag);

var tag = document.createElement("script");
tag.src = "http://nuzulul.github.com/ngawur/javascripts/jquery.lightbox-0.5.js";
document.getElementsByTagName("body")[0].appendChild(tag);

var tag = document.createElement("script");
tag.src = "http://connect.facebook.net/en_US/all.js";
document.getElementsByTagName("body")[0].appendChild(tag);

var tag = document.createElement("script");
tag.src = "http://nuzulul.github.com/ngawur/javascripts/fb_gallery.js";
document.getElementsByTagName("body")[0].appendChild(tag);

var tag = document.createElement("script");
tag.src = "http://nuzulul.github.com/ngawur/javascripts/galeri.js";
document.getElementsByTagName("body")[0].appendChild(tag);

var tag = document.createElement("script");
tag.src = "http://www.google.com/cse/brand?form=cse-search-box&lang=id";
document.getElementsByTagName("body")[0].appendChild(tag);

var url = window.location.href;
if (url.indexOf("artikel_detail") !=-1) {
var datautama = document.getElementById('nuzulhook_content');
var mytitle = datautama.getElementsByTagName("a")[0].innerHTML;
var mytitle = mytitle.replace("<h2>","");
var mytitle = mytitle.replace("</h2>","");
var mytitle = mytitle.replace("<span>","");
var mytitle = mytitle.replace("</span>","");
document.title = mytitle;
datautama.getElementsByTagName("a")[1].innerHTML = '<a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24176.html">Nuzulul Zulkarnain Haq</a>';
datautama.getElementsByTagName("a")[4].innerHTML = 'Copyright (c) '+n+' Nuzulul Zulkarnain Haq. All rights reserved.<div id="nuzulhook_share"></div><a href="#disqus_thread">Lihat</a>';
var datautama = datautama.getElementsByClassName('templatemo_box')[0].innerHTML;
document.getElementById('nuzulhook_content').innerHTML = '<div class="templatemo_box">' + datautama + '</div><div class="templatemo_box"><div class="body"><div id="disqus_thread"></div></div></div>';
} else if (url.indexOf("index.html?hal=") !=-1) {
var datautama = document.getElementById('nuzulhook_content');
datautama.getElementsByTagName("a")[1].innerHTML = '<a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24176.html">Nuzulul Zulkarnain Haq</a>';
datautama.getElementsByTagName("a")[4].innerHTML = 'Copyright (c) '+n+' Nuzulul Zulkarnain Haq. <a href="">Lihat</a>';
datautama.getElementsByTagName("a")[8].innerHTML = '<a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24176.html">Nuzulul Zulkarnain Haq</a>';
datautama.getElementsByTagName("a")[11].innerHTML = 'Copyright (c) '+n+' Nuzulul Zulkarnain Haq. <a href="">Lihat</a>';
datautama.getElementsByTagName("a")[15].innerHTML = '<a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24176.html">Nuzulul Zulkarnain Haq</a>';
datautama.getElementsByTagName("a")[18].innerHTML = 'Copyright (c) '+n+' Nuzulul Zulkarnain Haq. <a href="">Lihat</a>';
datautama.getElementsByTagName("a")[22].innerHTML = '<a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24176.html">Nuzulul Zulkarnain Haq</a>';
datautama.getElementsByTagName("a")[25].innerHTML = 'Copyright (c) '+n+' Nuzulul Zulkarnain Haq. <a href="">Lihat</a>';
datautama.getElementsByTagName("a")[29].innerHTML = '<a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24176.html">Nuzulul Zulkarnain Haq</a>';
datautama.getElementsByTagName("a")[32].innerHTML = 'Copyright (c) '+n+' Nuzulul Zulkarnain Haq. <a href="">Lihat</a>';
var datautama = datautama.innerHTML;
document.getElementById('nuzulhook_content').innerHTML = '<div id="nuzulhook_content">' + datautama + '</div>';
} else if (url.indexOf("kategori_isi") !=-1) {
var datautama = document.getElementById('nuzulhook_content').innerHTML;
document.getElementById('nuzulhook_content').innerHTML = '<div id="nuzulhook_content">' + datautama + '</div><style>#nuzulhook_content .templatemo_box {height: 32px; overflow: hidden;}#nuzulhook_content .templatemo_box:hover {height:100%}</style>';
} else if (url.indexOf("arsip_bulan") !=-1) {
var datautama = document.getElementById('nuzulhook_content').innerHTML;
document.getElementById('nuzulhook_content').innerHTML = '<div id="nuzulhook_content">' + datautama + '</div><style>#nuzulhook_content .templatemo_box {height: 32px; overflow: hidden;}#nuzulhook_content .templatemo_box:hover {height:100%}</style>';
} else {
var datautama = document.getElementById('nuzulhook_content');
datautama.getElementsByTagName("a")[1].innerHTML = '<a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24176.html">Nuzulul Zulkarnain Haq</a>';
datautama.getElementsByTagName("a")[4].innerHTML = 'Copyright (c) '+n+' Nuzulul Zulkarnain Haq. <a href="">Lihat</a>';
datautama.getElementsByTagName("a")[8].innerHTML = '<a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24176.html">Nuzulul Zulkarnain Haq</a>';
datautama.getElementsByTagName("a")[11].innerHTML = 'Copyright (c) '+n+' Nuzulul Zulkarnain Haq. <a href="">Lihat</a>';
datautama.getElementsByTagName("a")[15].innerHTML = '<a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24176.html">Nuzulul Zulkarnain Haq</a>';
datautama.getElementsByTagName("a")[18].innerHTML = 'Copyright (c) '+n+' Nuzulul Zulkarnain Haq. <a href="">Lihat</a>';
datautama.getElementsByTagName("a")[22].innerHTML = '<a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24176.html">Nuzulul Zulkarnain Haq</a>';
datautama.getElementsByTagName("a")[25].innerHTML = 'Copyright (c) '+n+' Nuzulul Zulkarnain Haq. <a href="">Lihat</a>';
datautama.getElementsByTagName("a")[29].innerHTML = '<a href="http://nuzulul-fkp09.web.unair.ac.id/artikel_detail-24176.html">Nuzulul Zulkarnain Haq</a>';
datautama.getElementsByTagName("a")[32].innerHTML = 'Copyright (c) '+n+' Nuzulul Zulkarnain Haq. <a href="">Lihat</a>';
datautama.getElementsByClassName('templatemo_box')[0].outerHTML = '<div class="templatemo_box hide">' + datautama.getElementsByClassName('templatemo_box')[0].innerHTML + '</div>';
datautama.getElementsByClassName('templatemo_box')[1].outerHTML = '<div class="templatemo_box hide">' + datautama.getElementsByClassName('templatemo_box')[1].innerHTML + '</div>';
datautama.getElementsByClassName('templatemo_box')[2].outerHTML = '<div class="templatemo_box hide">' + datautama.getElementsByClassName('templatemo_box')[2].innerHTML + '</div>';
datautama.getElementsByClassName('templatemo_box')[3].outerHTML = '<div class="templatemo_box hide">' + datautama.getElementsByClassName('templatemo_box')[3].innerHTML + '</div>';
datautama.getElementsByClassName('templatemo_box')[4].outerHTML = '<div class="templatemo_box hide">' + datautama.getElementsByClassName('templatemo_box')[4].innerHTML + '</div>';
var datautama = datautama.innerHTML;
document.getElementById('nuzulhook_content').innerHTML = '<div id="nuzulhook_content"><div id="nuzulhook_content_top"></div>' + datautama + '<div id="nuzulhook_content_bottom"></div></div><style>#nuzulhook_content .hide {height: 32px; overflow: hidden;}#nuzulhook_content .hide:hover {height:100%}object {width:100%;height:650px;}</style>';
document.getElementById("nuzulhook_content_top").innerHTML= document.getElementById("addhomedata").innerHTML;
}

var disqus_shortname = 'nuzulul';
var disqus_title = document.title;
var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);

var url = document.URL;
document.getElementById('nuzulhook_share').innerHTML = '<iframe src="//www.facebook.com/plugins/like.php?href='+url+'&width&layout=button&action=like&show_faces=false&share=true&height=35&appId=540320016076725" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:35px;" allowTransparency="true"></iframe>';

}
addLoadEvent(loadScript);
