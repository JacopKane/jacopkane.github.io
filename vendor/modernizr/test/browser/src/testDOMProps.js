describe("testDOMProps",function(){var e,t,n,r=document.createElement("div");before(function(e){(n=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}}))(["cleanup"],function(n){t=n,e()})}),beforeEach(function(t){n(["testDOMProps"],function(n){e=n,t()})}),it("returns known values",function(){expect(e(["clientHeight"],r)).to.equal(r.clientHeight)}),it("returns false for unknown values",function(){expect(e(["fart"],r)).to.equal(!1)}),it("bind a value to to the object",function(){r.answer=function(){return 42},expect(e(["answer"],r)()).to.equal(r.answer())}),it("bind a value to the element, if it is provided",function(){r.answer=function(){return 42},expect(e(["answer"],{},r)).to.equal(!1)}),it("return the property name as a string if elem is false",function(){r.answer=function(){return 42},expect(e(["answer"],{answer:42},!1)).to.equal("answer")}),after(function(){t()})});