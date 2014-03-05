/// <reference path="..\..\AMS360.Web\js\jquery\jquery-1.7.1.js"/>
/// <reference path="..\..\AMS360.Web\js\extjs\adapter\ext\ext-base-debug.js"/>
/// <reference path="..\..\AMS360.Web\js\extjs\adapter\jquery\ext-jquery-adapter-debug.js"/>
/// <reference path="..\..\AMS360.Web\js\extjs\ext-all.js"/>
/// <reference path="..\..\AMS360.Web\js\ams360\AMS360.core.js" />

/// <reference path="/JavaScript/Jasmine/jasmine.js"/>
/// <reference path="/JavaScript/Jasmine/jasmine-jquery.js"/>
/// <reference path="/JavaScript/Jasmine/jasmine-html.js"/>
/// <reference path="/JavaScript/Jasmine/load-fixture.js"/>
/// <reference path="/JavaScript/Jasmine/mock-ajax.js"/>

// using / slash above as these references are inside this project

// using \ slash above as these references are to files outside of this project
// so we are using filesystem references

beforeEach(function () {
    clearAjaxRequests();

    try {
        spyOn(Ajax, "getTransport").andCallFake(function () {
            return new FakeXMLHttpRequest();
        });

        spyOn(jQuery.ajaxSettings, 'xhr').andCallFake(function () {
            var newXhr = new FakeXMLHttpRequest();
            ajaxRequests.push(newXhr);
            return newXhr;
        });
    } catch (error) { }

    this.addMatchers({
        toBeVisible: function () {
            var node = this.actual;
            this.message = function() {
                return ["expected node to be visible", "expected node not to be visible"];
            };
            return node.is(":visible");
        },
        toHaveClass: function (expectedClass) {
            var node = this.actual;
            this.message = function () {
                return [
                    "expected node to have class '" + expectedClass + "' but was \n" + node.inspect(),
                    "expected node not to have class '" + expectedClass + "' but was \n" + node.inspect()
                ];
            };
            return node.hasClass(expectedClass);
        }
    });

    $('body').append("<div id='jasmine_content'></div>");
});

afterEach(function () {
    $('#jasmine_content').remove();
    clearAjaxRequests();

});
