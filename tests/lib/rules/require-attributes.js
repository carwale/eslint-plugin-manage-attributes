/**
 * @fileoverview require certain attributes on components
 * @author Meet Shah
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/require-attributes"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
var options = [{
    "data-id": {
        "components": ["a", "button"],
        "reason": "So that it can be used in automated tests"
    }
}];
var parserOptions = {
    ecmaFeatures: {
        jsx: true,
    },
}
var ruleTester = new RuleTester();
ruleTester.run("require-attributes", rule, {

    valid: [
        {
            code: '<a data-id="my-id"></a>',
            options,
            parserOptions
        },
        {
            code: '<button data-id="my-id"></button>',
            options,
            parserOptions
        },
    ],

    invalid: [
        {
            code: '<a></a>',
            options,
            parserOptions,
            errors: [
                '<a> components must have a valid "data-id" attribute. So that it can be used in automated tests'
            ]
        },
        {
            code: '<button></button>',
            options,
            parserOptions,
            errors: [
                '<button> components must have a valid "data-id" attribute. So that it can be used in automated tests'
            ]
        }
    ]
});
