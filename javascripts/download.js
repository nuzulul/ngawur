var item = {
folderlocker:"http://folderlocker.com",
smsgateway:"smsgateway.com"
};



var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

var did = $_GET['download'];
if (did !== undefined) 
{
  
  if (did !== "0")
  {
  $.jStorage.set("nuzulhookdownloadid", did);
  window.location = "https://www.facebook.com/nuzulhook/app_137541772984354";
  //window.location = "file:///D:/KOMPUTER/JAVA%20SCRIPT%20HTML%20CSS/download.html?download=0";
  }
  else
  {
  var getid = $.jStorage.get("nuzulhookdownloadid");
  if (item[getid] !== undefined){window.location = item[getid]}else{alert("Maaf file tidak ditemukan")};
  
  }
}
