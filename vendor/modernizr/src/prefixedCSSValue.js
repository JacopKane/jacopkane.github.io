define(["ModernizrProto","domPrefixes","createElement"],function(e,r,n){var i=function(e,i){var t=!1,f=n("div"),o=f.style;if(e in o){var a=r.length;for(o[e]=i,t=o[e];a--&&!t;)o[e]="-"+r[a]+"-"+i,t=o[e]}return""===t&&(t=!1),t};return e.prefixedCSSValue=i,i});