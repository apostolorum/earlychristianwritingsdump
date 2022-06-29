// Include Netscape sheet if necessary -- will overwrite ie one.  -all and -ie included anyway
//document.write('<link REL=stylesheet HREF="fathers-all.css" TYPE="text/css">');

// Platform-specific stuff
var blnIsNS = (navigator.appName == "Netscape" && parseInt(navigator.appVersion) >=4); 
if (blnIsNS) {
   document.write('<link rel="stylesheet" type="text/css" href="fathers-ns.css">'); 
//} else  {
//   document.write('<link rel="stylesheet" type="text/css" href="fathers-ie.css">'); 
}
