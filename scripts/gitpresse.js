// ==ClosureCompiler==
// @output_file_name gitpresse.min.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==


/*
* Extendify JavaScript Framework
* https://github.com/jameswestgate/ExtendJS
* 
* Copyright (c) James Westgate 2012
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/

/*
todo:
  [ ] add type(object, string) back to extendify
  [ ] remove deffereds, code events 
*/

(function(e){function m(b){null!=b&&h[b].open>h[b].closed&&(f.push(">"),h[b].closed++)}function i(b,d){var a="undefined"===typeof b||null===b?"":Object.prototype.toString.call(b).toLowerCase().replace("[object ","").replace("]","");if("array"===a)for(var c=0,a=b.length;c<a;c++)i(b[c],d);else if("function"===a)i(b(),d);else if("object"===a)for(c in b)b.hasOwnProperty(c)&&(a=b[c],h[c]?(m(d),f.push("<"+c),h[c].open++,i(a,c),m(c),f.push("</"+c+">"),result=!0):"text"===c?i(a,d):(f.push(" "+c+'="'),i(a,
null),f.push('"')));else m(d),f.push(b)}e.extend=function(b){return function(d){"function"===typeof d&&d.apply(b)}};e.namespace=function(b,d){var a=window;if("string"===typeof b)for(var c=b.split("."),l=0,f=c.length;l<f;l++)a=a[c[l]]=a[c[l]]||{extend:null},null===a.extend&&(a.extend=e.extend(a));else a=b;a.extend(d);return a};e.define=function(b,d){function a(){for(var a=0,d=c.length;a<d;a++)this.base=b,c[a].apply(this,arguments)}var c=[];1===arguments.length&&(d=b,b=null);b&&(a.prototype=new b);
a.prototype.extend=e.extend(a.prototype);a.extend=function(a){"function"===typeof a&&c.push(a)};a.extend(d);return a};e.load=function(){if(arguments.length)for(var b,d=0,a=0,c=0,f=arguments.length;c<f;c++){var e=arguments[c];if("function"===typeof e){b=e;d=c;a===d&&b(scriptFolder,scriptExt);break}if(loaded[e])a++;else{var g=document.createElement("script");g.type="text/javascript";g.onload=g.onreadystatechange=function(){if(g.readyState&&"complete"!==g.readyState&&"loaded"!==g.readyState)return!1;
g.onload=g.onreadystatechange=null;a++;b&&a===d&&b()};g.async=!0;g.src=e;document.head.appendChild(g)}}};for(var h={},f,n="abipq,bbbrdddldtemh1h2h3h4h5h6hrliolrprttdthtrul,bdocoldeldfndivimginskbdmapnavpresubsupvar,abbrareabasebodycitecodeformheadhtmllinkmarkmenumetarubysampspantime,asideaudioembedinputlabelmeterparamsmalltabletbodytfoottheadtitlevideo,buttoncanvasdialogfigurefooterheaderiframelegendobjectoptionoutputscriptselectsourcestrong,addressarticlecaptioncommanddetailssection,colgroupdatagriddatalistfieldsetnoscriptoptgroupprogresstextarea,,blockquote,eventsource".split(","),
j=1,p=n.length;j<=p;j++)for(var o=n[j-1],k=0,q=o.length;k<q;k+=j)h[o.substring(k,k+j)]={open:0,closed:0};e.compose=function(b){f=[];i(b,null);return f.join("")}})(window);


/*
* Girpresse' 0.9 Alpha
* 
* Copyright (c) James Westgate 2013
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/

//Check for jQuery
if (type(window.jQuery, 'undefined')) { 
  console.log('Gitpresse\' requires jQuery 1.9.0 or newer');
  return;
}
  
//Extend the window namespace with the default Extendify methods 
extendify(window);

namespace('gitpresse.editing', function() {
 
  this.switchbranch = function(branch, reload) {
    
  };
});


//Modify the dom with the editing tools
$(document).ready(function() {
  
  $(window).load(function() {

    //Inject the stylesheet into the head
    
    //Define the toolbar
    var toolbar = {div: {'class': 'gitpresse-toolbar'}};
    
    //Add the toolbar (hidden)
    
    //Measure the toolbar, add margin for the toolbar and prepend to the body
    
    //Boot the current branch (gh-pages)
    gitpresse.editing.switchBranch('gh-pages', false);
  
  });
});
  
