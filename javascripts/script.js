!function(n){n(document).ready(function(){n("pre").each(function(){for(var t=n(this).text().split("\n"),o=new Array(t.length+1),e=0;e<t.length;e++){var h=Math.floor(t[e].split("").length/140);if(""==t[e]&&e==t.length-1)o.splice(e,1);else{o[e]=e+1;for(var r=0;h>r;r++)o[e]+="\n"}}n(this).before("<pre class='lines'>"+o.join("\n")+"</pre>")});var t=[],o=function(){t.push({top:n(this).offset().top-15,text:n(this).text()})};n(".markdown-body h1").length>1?n(".markdown-body h1").each(o):n(".markdown-body h2").length>1?n(".markdown-body h2").each(o):n(".markdown-body h3").length>1&&n(".markdown-body h3").each(o)})}(jQuery);