
document.getElementsByClassName('side_menu')[0].outerHTML = '<ul class="side_menu"><li><a href="kategori_isi-58356-Artikel.html">Artikel</a></li><li><a href="kategori_isi-58359-Berita.html">Berita</a></li><li><a href="kategori_isi-58358-Catatan.html">Catatan</a></li><li><a href="kategori_isi-58360-Download.html">Download</a></li><li><a href="kategori_isi-58361-Galeri.html">Galeri</a></li><li><a href="kategori_isi-52060-Ngawur.html">Ngawur</a></li><li><a href="kategori_isi-58352-Quotes.html">Quotes </a></li><li><a href="kategori_isi-58357-Tutorial.html">Tutorial</a></li></ul>';

document.getElementsByClassName('side_menu')[1].outerHTML = '<ul class="side_menu"><li><a href="artikel_detail-149250-Download-Portable Webcam untuk Membuka Webcam dengan Cepat.html">Portable Webcam untuk Membuka Webcam dengan Cepat</a></li><li><a href="artikel_detail-149249-Download-Portable Folder Locker untuk mengunci Folder.html">Portable Folder Locker untuk mengunci Folder</a></li><li><a href="artikel_detail-149230-Tutorial-Elegan Theme  Theme Gratis untuk blog Unair.html">Elegan Theme - Theme Gratis untuk blog Unair</a></li><li><a href="artikel_detail-149229-Tutorial-Cara Memasang AirDisqus (Disqus untuk Blog Unair).html">Cara Memasang AirDisqus (Disqus untuk Blog Unair)</a></li><li><a href="artikel_detail-149228-Tutorial-Cara Memasang Widget Blogger Unair.html">Cara Memasang Widget Blogger Unair</a></li>					</ul>';



function content() {

  var url = window.location.href;
  if (url == 'http://nuzulul-fkp13.web.unair.ac.id/' || url == 'http://nuzulul-fkp13.web.unair.ac.id/index.html' || url == 'http://nuzulul-fkp13.web.unair.ac.id' || url == 'nuzulul-fkp13.web.unair.ac.id')
  {
  document.getElementById('templatemo_content').innerHTML = document.getElementById('nuzulul_content').innerHTML;
  }
}

function contenttime() {setTimeout(function () { content(); }, 100);}
addLoadEvent(contenttime);

function sidebar() {
  document.getElementById('templatemo_right_sidebar').innerHTML = document.getElementById('nuzulul_right_sidebar').innerHTML; 
}

function sidebartime() {setTimeout(function () { sidebar(); }, 100);}
addLoadEvent(sidebartime);

function fbpop()
{
document.getElementById("fbpop").innerHTML = '<div id="fbpopdisplay" style="display:none"><div class="popup-wrapper" id="popup"><div class="popup-container"><div style="height:0px;position:fixed;top:50px;color:#fff;"><h3>Welcome ! Please Suport Us :)</h3></div> <iframe src="http://nuzulul.github.io/ngawur/pagenuzulhook.html" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:340px; height:290px;" allowTransparency="true"></iframe> <a class="popup-close" href="#popup">X</a> </div> </div></div>';
}

addLoadEvent(fbpop);
function fbpopdisplay(){document.getElementById('fbpopdisplay').style.display='block';}
function fbpoptime() {setTimeout(function () { fbpopdisplay(); }, 8000);}
addLoadEvent(fbpoptime);





