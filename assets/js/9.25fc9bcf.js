(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{183:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[e("a",{attrs:{href:"https://greenkeeper.io/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badges.greenkeeper.io/node-ts/bus.svg",alt:"Greenkeeper badge"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://circleci.com/gh/node-ts/bus/tree/master",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://circleci.com/gh/node-ts/bus/tree/master.svg?style=svg",alt:"CircleCI"}}),e("OutboundLink")],1),e("a",{attrs:{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/License-MIT-green.svg",alt:"License: MIT"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("This package should be consumed wherever your application defines message contracts. Messages are small pieces of data that get passed around between services. They can define an instruction to perform an action, or report that something has just occurred.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("Commands should be named as an instruction, using plain english. The above commands are understandable in plain English that they will do some sort of action.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("Past-tense should be used when naming an event, since it indicates that an operation was performed on your application.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("Over time the number of messages in your library will build up to describe the business domain you're modeling. The messages can be easily defined and well documented so that new developers can understand what they do without any technical detail, which encourages a well-documented system in code.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"node-ts-bus-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-ts-bus-messages","aria-hidden":"true"}},[this._v("#")]),this._v(" @node-ts/bus-messages")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("@node-ts/bus-messages")]),this._v(" defines two types of messages:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command","aria-hidden":"true"}},[this._v("#")]),this._v(" Command")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Commands are a type of message that represents an instruction to do work. These can be technical instructions such as "),e("code",[t._v("BackupDatabase")]),t._v(", "),e("code",[t._v("ScaleOutLoadBalancer")]),t._v(", or modeled after your business domains like "),e("code",[t._v("ChargeCreditCard")]),t._v(", "),e("code",[t._v("PostMerchandise")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To implement a comamnd, simply extend "),s("code",[this._v("Command")]),this._v(" and add in the fields that are relevant to it:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Command "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@node-ts/bus-messages'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChargeCreditCard")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * A unique name that identifies the message. This should be done in namespace style syntax,\n   * ie: organisation/domain/command-name\n   */")]),t._v("\n  $name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-app/accounts/charge-credit-card'")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * The contract version of this message. This can be incremented if this message changes the\n   * number of properties etc to maintain backwards compatibility\n   */")]),t._v("\n  $version "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Create a charge on a credit card\n   * @param creditCardId the card to charge\n   * @param amount the amount, in USD, to charge the card for\n   */")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token parameter"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" creditCardId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" amount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To send a command, just use "),s("code",[this._v("bus.send()")]),this._v(", eg:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Bus "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@node-ts/bus-core'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chargeCreditCard")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("bus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Bus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  creditCardId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  amount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prepare the command")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" command "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChargeCreditCard")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("creditCardId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Send it. @node-ts/bus-core will route it to wherever the handler is")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("A commands are sent to a single service for processing, and generally result in the publication of one or more "),s("code",[this._v("Events")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event","aria-hidden":"true"}},[this._v("#")]),this._v(" Event")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v('An event is a message emitted by the system when "something" happens. Again this could be a technical task being completed such as '),e("code",[t._v("DatabaseBackedup")]),t._v(", "),e("code",[t._v("LoadBalancerScaledOut")]),t._v(" or as a result of changes in your business "),e("code",[t._v("CreditCardCharged")]),t._v(", "),e("code",[t._v("MerchandisePosted")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Events are class definitions that extend from "),s("code",[this._v("Event")]),this._v(", eg:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Event "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@node-ts/bus-messages'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CreditCardCharged")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Event")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * A unique name that identifies the message. This should be done in namespace style syntax,\n   * ie: organisation/domain/event-name\n   */")]),t._v("\n  $name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-app/accounts/credit-card-charged'")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * The contract version of this message. This can be incremented if this message changes the\n   * number of properties etc to maintain backwards compatibility\n   */")]),t._v("\n  $version "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * A credit card was successfully charged\n   * @param creditCardId the card that was charged\n   * @param amount the amount, in USD, the card was charged for\n   */")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token parameter"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" creditCardId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" amount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To publish an event, just use "),s("code",[this._v("bus.publish()")]),this._v(", eg:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Bus "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@node-ts/bus-core'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("creditCardChaged")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("bus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Bus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  creditCardId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  amount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prepare the event")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" event "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CreditCardCharged")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("creditCardId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Publish it. @node-ts/bus-core will route the event to all handlers subscribed to it")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Modelling your system using messages like the ones above is very powerful. There are no concerns around what handles them or how they're processed - they just represent an intent to change the system ("),s("code",[this._v("command")]),this._v(") or that a change in the system has occurred ("),s("code",[this._v("event")]),this._v(").")])}],!1,null,null,null);s.default=n.exports}}]);