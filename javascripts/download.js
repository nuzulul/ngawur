var item = {
folderlocker:"http://folderlocker.com",
smsgateway:"smsgateway.com"
};

var JSON = JSON || {};

// implement JSON.stringify serialization
JSON.stringify = JSON.stringify || function (obj) {

	var t = typeof (obj);
	if (t != "object" || obj === null) {

		// simple data type
		if (t == "string") obj = '"'+obj+'"';
		return String(obj);

	}
	else {

		// recurse array or object
		var n, v, json = [], arr = (obj && obj.constructor == Array);

		for (n in obj) {
			v = obj[n]; t = typeof(v);

			if (t == "string") v = '"'+v+'"';
			else if (t == "object" && v !== null) v = JSON.stringify(v);

			json.push((arr ? "" : '"' + n + '":') + String(v));
		}

		return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
	}
};


// implement JSON.parse de-serialization
JSON.parse = JSON.parse || function (str) {
	if (str === "") str = '""';
	eval("var p=" + str + ";");
	return p;
};

/**
 * Implements cookie-less JavaScript session variables
 * v1.0
 *
 * By Craig Buckler, Optimalworks.net
 *
 * As featured on SitePoint.com
 * Please use as you wish at your own risk.
*
 * Usage:
 *
 * // store a session value/object
 * Session.set(name, object);
 *
 * // retreive a session value/object
 * Session.get(name);
 *
 * // clear all session data
 * Session.clear();
 *
 * // dump session data
 * Session.dump();
 */
 
 if (JSON && JSON.stringify && JSON.parse) var Session = Session || (function() {
 
	// window object
	var win = window.top || window;
	
	// session store
	var store = (win.name ? JSON.parse(win.name) : {});
	
	// save store on page unload
	function Save() {
		win.name = JSON.stringify(store);
	};
	
	// page unload event
	if (window.addEventListener) window.addEventListener("unload", Save, false);
	else if (window.attachEvent) window.attachEvent("onunload", Save);
	else window.onunload = Save;

	// public methods
	return {
	
		// set a session variable
		set: function(name, value) {
			store[name] = value;
		},
		
		// get a session value
		get: function(name) {
			return (store[name] ? store[name] : undefined);
		},
		
		// clear session
		clear: function() { store = {}; },
		
		// dump session data
		dump: function() { return JSON.stringify(store); }
 
	};
 
 })();

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
  Session.set("nuzulhookdownloadid", did);
  window.location = "https://www.facebook.com/nuzulhook/app_137541772984354";
  //window.location = "file:///D:/KOMPUTER/JAVA%20SCRIPT%20HTML%20CSS/download.html?download=0";
  }
  else
  {
  var getid = Session.get("nuzulhookdownloadid");
  if (item[getid] !== undefined){window.location = item[getid]}else{alert("Maaf file tidak ditemukan")};
  
  }
}
