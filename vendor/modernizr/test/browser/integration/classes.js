describe("classes",function(){var e=document.documentElement.className.split(" ");it("_version exists",function(){expect(Modernizr._version).to.not.be(void 0)}),it("_version did not add a class",function(){expect(document.documentElement).to.not.contain("_version")}),it("all classes are lower case",function(){expect(document.documentElement.className).to.not.match(/[A-Z]/)}),describe("everythings ship shape",function(){_.chain(e).filter().sort().forEach(function(e){var n=e.indexOf("no-")===-1;e=e.replace(/no-/,""),it(e+" is correctly "+n+" in the classes and object",function(){if(_.contains(e,"-"))e.replace("-","")in Modernizr?(e=e.replace("-",""),expect(Modernizr[e]).to.be(n)):(e=e.split("-"),expect(Modernizr[e[0]]).to.not.be(void 0),expect(!!Modernizr[e[0]][e[1]]).to.equal(n));else{var t=Modernizr[e],o=t instanceof Boolean?t.valueOf():!!t;expect(o).to.equal(n)}})}).value()})});