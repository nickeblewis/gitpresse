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

window.extend=function(f){function n(a){return null===a?"null":"undefined"===typeof a?"undefined":Object.prototype.toString.call(a).toLowerCase().replace("[object ","").replace("]","")}function p(a){null!=a&&h[a].open>h[a].closed&&(e.push(">"),h[a].closed++)}function j(a,d){var b=n(a);if("array"===b)a.forEach(function(a){j(a,d)});else if("function"===b)j(a(),d);else if("object"===b)for(var c in a)a.hasOwnProperty(c)&&(b=a[c],h[c]?(p(d),e.push("<"+c),h[c].open++,j(b,c),p(c),e.push("</"+c+">"),result=
!0):"text"===c?j(b,d):(e.push(" "+c+'="'),j(b,null),e.push('"')));else p(d),e.push(a)}delete window.extend;f=f||window;f.type=function(a,d){return n(a)===d};f.extendify=function(a){return function(d){if(arguments.length){var b=n(d);if("function"===b)d.apply(a);else if("object"===b)for(var c in b)a[c]=b[c]}}};f.namespace=function(a,d){var b=window;if("string"===typeof a)for(var c=a.split("."),m=0,e=c.length;m<e;m++)b=b[c[m]]=b[c[m]]||{},b.extend||(b.extend=f.extendify(b));else b=a;b.extend(d);return b};
f.define=function(a,d){function b(){for(var b=0,d=c.length;b<d;b++)this.base=a,c[b].apply(this,arguments)}var c=[];1===arguments.length&&(d=a,a=null);a&&(b.prototype=new a);b.prototype.extend=f.extendify(b.prototype);b.extend=function(a){"function"===typeof a&&c.push(a)};b.extend(d);return b};f.load=function(){if(arguments.length)for(var a,d=0,b=0,c=0,f=arguments.length;c<f;c++){var e=arguments[c];if("function"===typeof e){a=e;d=c;b===d&&a(scriptFolder,scriptExt);break}if(loaded[e])b++;else{var g=
document.createElement("script");g.type="text/javascript";g.onload=g.onreadystatechange=function(){if(g.readyState&&"complete"!==g.readyState&&"loaded"!==g.readyState)return!1;g.onload=g.onreadystatechange=null;b++;a&&b===d&&a()};g.async=!0;g.src=e;document.head.appendChild(g)}}};for(var h={},e,q="abipq bbbrdddldtemh1h2h3h4h5h6hrliolrprttdthtrul bdocoldeldfndivimginskbdmapnavpresubsupvar abbrareabasebodycitecodeformheadhtmllinkmarkmenumetarubysampspantime asideaudioembedinputlabelmeterparamsmalltabletbodytfoottheadtitlevideo buttoncanvasdialogfigurefooterheaderiframelegendobjectoptionoutputscriptselectsourcestrong addressarticlecaptioncommanddetailssection colgroupdatagriddatalistfieldsetnoscriptoptgroupprogresstextarea  blockquote eventsource".split(" "),
k=1,s=q.length;k<=s;k++)for(var r=q[k-1],l=0,t=r.length;l<t;l+=k)h[r.substring(l,l+k)]={open:0,closed:0};f.compose=function(a){e=[];j(a,null);return e.join("")}};


/*
* Gitpresse 0.9 Alpha
* 
* Copyright (c) James Westgate 2013
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/

(function() {
	
	//Extend the window namespace with the default Extendify methods 
	extend(window);
	
	//Check for jQuery
	if (type(window.$, 'undefined')) { 
		console.log('Gitpresse requires jQuery 1.9.0 or newer');
		return;
	}

	//Public functions
	namespace('gitpresse.editing', function() {
	 	
	 	var page =  window.location.pathname.substring(1);

		this.start = function($toolbar) {
			if ($toolbar.hasClass('editing')) return;
			$toolbar.addClass('editing');

			//Make element editable and draw chrome etc
			$('[id][data-editable]').each(function() {
				
				//See if there is anything saved in localStorage
				if (typeof localStorage[page+this.id] !== 'undefined')  {
					this._markup = $(this).html();

					$(this).html(localStorage[page+this.id]);
				}

				//Make editable
				$(this).attr('contenteditable', 'true');
			});
		};

		this.stop = function($toolbar) {
			if (!$toolbar.hasClass('editing')) return;
			$toolbar.removeClass('editing');

			$('[id][data-editable]').each(function() {

				//Save value to localStorage and restore original markup
				localStorage[page+this.id] = $(this).html();
				$(this).html(this._markup);

				//Make non editable again
				$(this).removeAttr('contenteditable');
			});
		}
	});
	
	
	//Startup - modify the dom with the editing tools
	$(document).ready(function() {
		
		$(window).load(function() {
	
			//Add the toolbar to the body
			var $body = $('body');
			$body.prepend(compose({div: { 'class': 'gitp-toolbar gitp-hidden', a: {href:'#', class:'gitp-init'}}}));
			
			var $toolbar = $('.gitp-toolbar');
			$('.gitp-toolbar').removeClass('gitp-hidden');
		
			//Bind toolbar events
			$toolbar.find('.gitp-init').on('click', function(e) {
				
				gitpresse.editing.start($toolbar);

				e.preventDefault();
			})

			//Toolbar button events
			$toolbar.prepend(compose([
				{a: {href:'#', 'class': 'gitp-cmd', id: 'gitp-merge', i:{'class':'icon-cloud-upload'},text: 'merge'}}, 
				{a: {href:'#', 'class': 'gitp-cmd', id: 'gitp-reset', i:{'class':'icon-refresh'}, text: 'reset'}}, 
				{a: {href:'#', 'class': 'gitp-cmd', id: 'gitp-exit', i:{'class':'icon-circle-arrow-left'}, text: 'exit'}}
			]));

			$toolbar.find('.gitp-cmd').click(function(e) {
				var $self = $(this);

				//Merge
				if (this.id === 'gitp-merge') {

				}

				//Reset
				if (this.id === 'gitp-reset') {
					
				}

				//Exit
				if (this.id === 'gitp-exit') {
					gitpresse.editing.stop($toolbar);
				}

			})
		});
	});
})();  
