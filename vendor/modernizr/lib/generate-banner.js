define(["lodash","package","lib/build-query"],function(n,e,o){var a="modernizr.com";return"undefined"!=typeof location&&"host"in location&&(a=location.host),function(t,r){r=r||{};var i=o(r);if(t&&"compact"!==t){if("full"===t)return"/*!\n * "+e.name+" v"+e.version+"\n * Build http://"+a+"/download"+i+"\n *\n * Copyright (c)\n *  "+n.pluck(e.contributors,"name").join("\n *  ")+"\n\n * "+e.license+" License\n */\n\n/*\n * Modernizr tests which native CSS3 and HTML5 features are available in the\n * current UA and makes the results available to you in two ways: as properties on\n * a global `Modernizr` object, and as classes on the `<html>` element. This\n * information allows you to progressively enhance your pages with a granular level\n * of control over the experience.\n*/\n";throw'banners() must be passed "compact" or "full" as an argument.'}return"/*! "+e.name+" "+e.version+" (Custom Build) | "+e.license+" *\n * http://"+a+"/download/"+i+" !*/\n"}});