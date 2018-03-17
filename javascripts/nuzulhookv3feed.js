//jam//
date = new Date; year = date.getFullYear(); month = date.getMonth(); months = new Array('Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'); d = date.getDate(); day = date.getDay(); days = new Array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'); h = date.getHours(); if(h<10) { h = "0"+h; } m = date.getMinutes(); if(m<10) { m = "0"+m; } s = date.getSeconds(); if(s<10) { s = "0"+s; } result = ''+days[day]+' '+d+' '+months[month]+' '+year; document.getElementById("waktuhome").innerHTML = result;
////feed///
var url = window.location.href;
if (url == 'http://nuzulul-fkp09.web.unair.ac.id/' || url == 'file:///C:/Users/Public/blog/nuzulhook%20v3/NUZULUL%20ZULKARNAIN%20HAQ%20Home.htm' || url == 'http://nuzulul-fkp09.web.unair.ac.id/#popup' || url == 'file:///C:/Users/Public/blog/nuzulhook%20v3/NUZULUL%20ZULKARNAIN%20HAQ%20Home.htm#popup' ){
    google.load("feeds", "1");

    function initialize2() {
    
      var feed = new google.feeds.Feed("http://feeds.feedburner.com/hook-blog-modification");
      feed.load(function(result) {
        if (!result.error || result.error) {
          var container = document.createElement("div");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var div2 = document.createElement("li");
            div2.innerHTML = '<a href="'+entry.link+'">'+entry.title+'</a>';
            container.appendChild(div2);
          }
          document.getElementById("feed").innerHTML = document.getElementById("feed").innerHTML+'<div class="templatemo_box  adddata1">	 <a href="http://nuzulul-fkp09.web.unair.ac.id/"><h2><span></span>Semua Kategori</h2></a> <div class="body"><div class="news_box"> <ul class="beranda_menu">'+document.getElementsByClassName('side_menu')[0].innerHTML+'</ul> <div class="cleaner"></div></div></div></div>';
        }
      });
      
      var feed = new google.feeds.Feed("http://feeds.feedburner.com/hook-blog-modification");
      feed.load(function(result) {
        if (!result.error) {
          var container = document.createElement("div");
          for (var i = 0; i < 2; i++) {
            var entry = result.feed.entries[i];
            var div2 = document.createElement("li");
            div2.innerHTML = '<a href="'+entry.link+'">'+entry.title+'</a>';
            container.appendChild(div2);
          }
          document.getElementById("feed").innerHTML = document.getElementById("feed").innerHTML+'<div class="templatemo_box  adddata1">	 <a href="http://nuzulul-fkp09.web.unair.ac.id/kategori_isi-36459-08%20Blog%20Modification.html"><h2><span></span>Tutorial Modifikasi Blog Unair</h2></a> <div class="body"><div class="news_box"> <ul class="side_menu">'+container.innerHTML+'</ul> <div class="cleaner"></div></div></div></div>';
        }
      });
      
      var feed = new google.feeds.Feed("http://feeds.feedburner.com/hook-latestpost");
      feed.load(function(result) {
        if (!result.error) {
          var container = document.createElement("div");
          for (var i = 0; i < 5; i++) {
            var entry = result.feed.entries[i];
            var div2 = document.createElement("li");
            div2.innerHTML = '<a href="'+entry.link+'">'+entry.title+'</a>';
            container.appendChild(div2);
          }
          document.getElementById("nuzulhook_sidebar_bottom").innerHTML = document.getElementById("nuzulhook_sidebar_bottom").innerHTML+'<div class="nuzulhook_box  adddata1">	 <a href="http://nuzulul-fkp09.web.unair.ac.id/index.html?hal=1"><h2><span></span>Artikel Terbaru</h2></a> <div class="body"><div class="news_box"> <ul class="side_menu">'+container.innerHTML+'</ul> <div class="cleaner"></div></div></div></div>';
        }
      });
      
      var feed = new google.feeds.Feed("http://feeds.feedburner.com/hook-my-project");
      feed.load(function(result) {
        if (!result.error) {
          var container = document.createElement("div");
          for (var i = 0; i < 2; i++) {
            var entry = result.feed.entries[i];
            var div2 = document.createElement("li");
            div2.innerHTML = '<a href="'+entry.link+'">'+entry.title+'</a>';
            container.appendChild(div2);
          }
          document.getElementById("feed").innerHTML = document.getElementById("feed").innerHTML+'<div class="templatemo_box  adddata1">	 <a href="http://nuzulul-fkp09.web.unair.ac.id/kategori_isi-46409-09%20My%20Project.html"><h2><span></span>My Project</h2></a> <div class="body"><div class="news_box"> <ul class="side_menu">'+container.innerHTML+'</ul> <div class="cleaner"></div></div></div></div>';
        }
      });
      
      var feed = new google.feeds.Feed("http://feeds.feedburner.com/hook-my-laptop");
      feed.load(function(result) {
        if (!result.error) {
          var container = document.createElement("div");
          for (var i = 0; i < 2; i++) {
            var entry = result.feed.entries[i];
            var div2 = document.createElement("li");
            div2.innerHTML = '<a href="'+entry.link+'">'+entry.title+'</a>';
            container.appendChild(div2);
          }
          document.getElementById("feed").innerHTML = document.getElementById("feed").innerHTML+'<div class="templatemo_box  adddata1">	 <a href="http://nuzulul-fkp09.web.unair.ac.id/kategori_isi-34116-02%20My%20Laptop.html"><h2><span></span>Artikel Bermanfaat</h2></a> <div class="body"><div class="news_box"> <ul class="side_menu">'+container.innerHTML+'</ul> <div class="cleaner"></div></div></div></div>';
        }
      });
      
      var feed = new google.feeds.Feed("http://feeds.feedburner.com/hook-disqus");
      feed.load(function(result) {
        if (!result.error) {
          var container = document.createElement("div");
          for (var i = 0; i < 10; i++) {
            var entry = result.feed.entries[i];
            var div2 = document.createElement("li");
            div2.innerHTML = '<a href="'+entry.link+'">'+entry.content+'</a>';
            container.appendChild(div2);
          }
          document.getElementById("nuzulhook_sidebar_bottom").innerHTML = document.getElementById("nuzulhook_sidebar_bottom").innerHTML+'<div class="nuzulhook_box  adddata1">	 <a href="http://nuzulul.disqus.com/latest.rss"><h2><span></span>Komentar Terbaru</h2></a> <div class="body"><div class="news_box"> <ul class="side_menu">'+container.innerHTML+'</ul> <div class="cleaner"></div></div></div></div>';
        }
      });

    }
    
    function initializetimer(){setTimeout(function () { initialize2(); }, 1);}
    addLoadEvent(initializetimer);
    //google.setOnLoadCallback(initialize);
}

else if (url.indexOf("artikel_detail") !=-1) 
{
    google.load("feeds", "1");

    function initialize() {
      
      var feed = new google.feeds.Feed("http://feeds.feedburner.com/hook-disqus");
      feed.load(function(result) {
        if (!result.error) {
          var container = document.createElement("div");
          for (var i = 0; i < 10; i++) {
            var entry = result.feed.entries[i];
            var div2 = document.createElement("li");
            div2.innerHTML = '<a href="'+entry.link+'">'+entry.content+'</a>';
            container.appendChild(div2);
          }
          document.getElementById("nuzulhook_sidebar_bottom").innerHTML = document.getElementById("nuzulhook_sidebar_bottom").innerHTML+'<div class="nuzulhook_box  adddata1">	 <a href="http://nuzulul.disqus.com/latest.rss"><h2><span></span>Komentar Terbaru</h2></a> <div class="body"><div class="news_box"> <ul class="side_menu">'+container.innerHTML+'</ul> <div class="cleaner"></div></div></div></div>';
        }
      });
      
      var feed = new google.feeds.Feed("http://feeds.feedburner.com/hook-latestpost");
      feed.load(function(result) {
        if (!result.error) {
          var container = document.createElement("div");
          for (var i = 0; i < 5; i++) {
            var entry = result.feed.entries[i];
            var div2 = document.createElement("li");
            div2.innerHTML = '<a href="'+entry.link+'">'+entry.title+'</a>';
            container.appendChild(div2);
          }
          document.getElementById("nuzulhook_sidebar_bottom").innerHTML = document.getElementById("nuzulhook_sidebar_bottom").innerHTML+'<div class="nuzulhook_box  adddata1">	 <a href="http://nuzulul-fkp09.web.unair.ac.id/index.html?hal=1"><h2><span></span>Artikel Terbaru</h2></a> <div class="body"><div class="news_box"> <ul class="side_menu">'+container.innerHTML+'</ul> <div class="cleaner"></div></div></div></div>';
        }
      });
      
      }
    function initializetimer(){setTimeout(function () { initialize(); }, 1);}
    addLoadEvent(initializetimer);
      //google.setOnLoadCallback(initialize);
      
}
