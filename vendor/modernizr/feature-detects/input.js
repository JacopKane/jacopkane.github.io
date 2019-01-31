/*!
{
  "name": "Input attributes",
  "property": "input",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "notes": [{
    "name": "WHATWG spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary"
  }],
  "knownBugs": ["Some blackberry devices report false positive for input.multiple"]
}
!*/
define(["Modernizr","createElement","inputElem"],function(t,e,i){var n="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),l={};t.input=function(t){for(var n=0,a=t.length;n<a;n++)l[t[n]]=!!(t[n]in i);return l.list&&(l.list=!(!e("datalist")||!window.HTMLDataListElement)),l}(n)});