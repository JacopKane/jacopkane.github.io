/*!
{
  "name": "script[defer]",
  "property": "scriptdefer",
  "caniuse": "script-defer",
  "tags": ["script"],
  "builderAliases": ["script_defer"],
  "authors": ["Theodoor van Donge"],
  "warnings": ["Browser implementation of the `defer` attribute vary: http://stackoverflow.com/questions/3952009/defer-attribute-chrome#answer-3982619"],
  "knownBugs": ["False positive in Opera 12"]
}
!*/
define(["Modernizr","createElement"],function(e,r){e.addTest("scriptdefer","defer"in r("script"))});