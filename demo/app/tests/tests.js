var Testplugin = require("nativescript-testplugin").Testplugin;
var testplugin = new Testplugin();

describe("greet function", function() {
    it("exists", function() {
        expect(testplugin.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(testplugin.greet()).toEqual("Hello, NS");
    });
});