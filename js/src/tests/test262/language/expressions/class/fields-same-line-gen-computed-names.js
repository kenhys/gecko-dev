// |reftest| skip -- class-fields-public is not supported
// This file was procedurally generated from the following sources:
// - src/class-fields/computed-names.case
// - src/class-fields/productions/cls-expr-same-line-generator.template
/*---
description: Computed property names (field definitions followed by a generator method in the same line)
esid: prod-FieldDefinition
features: [computed-property-names, class, class-fields-public, generators]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement:
      ...
      FieldDefinition ;

    FieldDefinition:
      ClassElementName Initializer_opt

    ClassElementName:
      PropertyName

---*/
var x = "b";



var C = class {
  static ["a"] = 39; [x] = 42; [10] = "meep"; ["not initialized"]; *m() { return 42; }

}

var c = new C();

assert.sameValue(c.m().next().value, 42);
assert.sameValue(c.m, C.prototype.m);
assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);

verifyProperty(C.prototype, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "a"), false);
assert.sameValue(Object.hasOwnProperty.call(c, "a"), false);

verifyProperty(C, "a", {
  value: 39,
  enumerable: true,
  writable: true,
  configurable: true
});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "b"), false);
assert.sameValue(Object.hasOwnProperty.call(C, "b"), false);

verifyProperty(c, "b", {
  value: 42,
  enumerable: true,
  writable: true,
  configurable: true
});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "x"), false);
assert.sameValue(Object.hasOwnProperty.call(C, "x"), false);
assert.sameValue(Object.hasOwnProperty.call(c, "x"), false);

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "10"), false);
assert.sameValue(Object.hasOwnProperty.call(C, "10"), false);

verifyProperty(c, "10", {
  value: "meep",
  enumerable: true,
  writable: true,
  configurable: true
});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "not initialized"), false);
assert.sameValue(Object.hasOwnProperty.call(C, "not initialized"), false);

verifyProperty(c, "not initialized", {
  value: undefined,
  enumerable: true,
  writable: true,
  configurable: true
});

reportCompare(0, 0);
