/*!
{
  "name": "Base 64 encoding/decoding",
  "property": ["atob-btoa"],
  "caniuse" : "atob-btoa",
  "tags": ["atob", "base64", "WindowBase64", "btoa"],
  "authors": ["Christian Ulbrich"],
  "notes": [{
    "name": "WindowBase64",
    "href": "http://www.w3.org/TR/html5/webappapis.html#windowbase64"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/atob"
  }],
  "polyfills": ["base64js"]
}
!*/
define(["Modernizr"],function(n){n.addTest("atob-btoa","atob"in window&&"btoa"in window)});