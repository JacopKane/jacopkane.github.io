/*!
{
  "name": "input formmethod",
  "property": "inputformmethod",
  "notes": [{
    "name": "WHATWG Spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#attr-fs-formmethod"
  }, {
    "name": "Wufoo demo",
    "href": "http://www.wufoo.com/html5/attributes/14-formmethod.html"
  }],
  "polyfills": [
    "webshims"
  ]
}
!*/
define(["Modernizr","createElement"],function(e,n){e.addTest("inputformmethod",!!("formMethod"in n("input")))});