/*!
{
  "name": "JSON",
  "property": "json",
  "caniuse": "json",
  "notes": [{
    "name": "MDN documentation",
    "href": "http://developer.mozilla.org/en/JSON"
  }],
  "polyfills": ["json2"]
}
!*/
define(["Modernizr"],function(n){n.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON)});