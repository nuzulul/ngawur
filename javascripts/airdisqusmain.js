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

function loadscript()
{
document.getElementsByName('form3')[0].innerHTML = '<div id="disqus_thread"></div><br><a title="Pasang Disqus Comment di Blog Unair" target="_blank" href="http://goo.gl/wDwsV4">Powered by AirDisqus - Disqus Comment System for Blog Unair</a>';

    /* * * CONFIGURATION VARIABLES * * */
    //var disqus_shortname = 'blogunair';
    
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
}

function airdisqustime() {setTimeout(function () { loadscript(); }, 100);}
addLoadEvent(airdisqustime);
