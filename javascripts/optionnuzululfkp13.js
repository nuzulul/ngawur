var elegan = '<div class="templatemo_box">	 			<a href="http://goo.gl/uyiYiR"><h2><span></span>Elegan Theme - Template Alternatif Untuk Blog Unair (Simple, Elegan, Clean)</h2></a> 				 				<div class="body"> 					 					<div class="news_box">diposting oleh <a href="profil.html">nuzulul-fkp13</a> pada 15 November 2015<br>di <a href="kategori_isi-36459-08 Blog Modification.html">08 Blog Modification</a> - <a href="artikel_detail-148311-08 Blog Modification-Elegan Theme  Template Alternatif Untuk Blog Unair (Simple, Elegan, Clean).html">0</a> komentar<br><br>Persembahan untuk para blogger unair, template alternatif yang dapat dipakai untuk mempercantik blog unair. Templete ini diberi nama Elegan Theme dengan harapan supaya sesuai dengan namanya templete yang simple dan elegan. Template ini dilengkapi dengan fitur fitur menarik yang dapat di kustomisasi  ... 						 					  <div class="cleaner"></div> 					</div> 				 				 				<div class="more float_r"><a href="http://goo.gl/uyiYiR">More</a></div> 					<div class="cleaner"></div> 		  		</div><div class="box_bottom"><span></span></div> 	</div>';
document.getElementsByClassName('side_menu')[0].outerHTML = '<ul class="side_menu"><li><a href="kategori_isi-58356-Artikel.html">Artikel</a></li><li><a href="kategori_isi-58359-Berita.html">Berita</a></li><li><a href="kategori_isi-58358-Catatan.html">Catatan</a></li><li><a href="kategori_isi-58360-Download.html">Download</a></li><li><a href="kategori_isi-58361-Galeri.html">Galeri</a></li><li><a href="kategori_isi-52060-Ngawur.html">Ngawur</a></li><li><a href="kategori_isi-58352-Quotes.html">Quotes </a></li><li><a href="kategori_isi-58357-Tutorial.html">Tutorial</a></li></ul>';
document.getElementById('templatemo_content').innerHTML = elegan+document.getElementById('templatemo_content').innerHTML;

function fbpop()
{
document.getElementById("fbpop").innerHTML = '<div id="fbpopdisplay" style="display:none"><div class="popup-wrapper" id="popup"><div class="popup-container"><div style="height:0px;position:fixed;top:50px;color:#fff;"><h3>Welcome ! Please Suport Me :)</h3></div> <iframe src="http://nuzulul.github.io/ngawur/pagenuzulhook.html" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:340px; height:290px;" allowTransparency="true"></iframe> <a class="popup-close" href="#popup">X</a> </div> </div></div>';
}

addLoadEvent(fbpop);
function fbpopdisplay(){document.getElementById('fbpopdisplay').style.display='block';}
function fbpoptime() {setTimeout(function () { fbpopdisplay(); }, 8000);}
addLoadEvent(fbpoptime);
