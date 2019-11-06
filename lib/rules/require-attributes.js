/**
 * @fileoverview require certain attributes on components
 * @author Meet Shah
 */
"use strict";
const { getProp, getPropValue, elementType } = require('jsx-ast-utils');
const shouldCheckComponent = require('../shouldCheckComponent');
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require certain attributes on components",
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
            {
                type: 'object',
                properties: {},
                additionalProperties: true
            },
            {
                type: 'string'
            }
        ]
    },

    create: function (context) {
        return {
            JSXOpeningElement: (node) => {
                const nodeType = elementType(node);
                const options = context.options[0] || {};
                const messageBuilder = ((n, a, r = "") => `<${n}> components must have a valid "${a}" attribute. ${r}`);

                Object.keys(options).forEach((attribute) => {
                    if (shouldCheckComponent(options[attribute].components, nodeType)) {
                        const prop = getProp(node.attributes, attribute);
                        const propValue = getPropValue(prop);

                        // If prop doesnt exist or has no value, then report error
                        if (!prop || !propValue) {
                            context.report({
                                node,
                                message: messageBuilder(nodeType, attribute, options[attribute].reason)
                            });
                        }
                    }
                });
            }
        };
    }
};
