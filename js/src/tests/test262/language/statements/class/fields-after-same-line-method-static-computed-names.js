// |reftest| skip -- class-fields-public is not supported
// This file was procedurally generated from the following sources:
// - src/class-fields/static-computed-names.case
// - src/class-fields/productions/cls-decl-after-same-line-method.template
/*---
description: Static Computed property names (field definitions after a method in the same line)
esid: prod-FieldDefinition
features: [computed-property-names, class, class-fields-public]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement:
      ...
      FieldDefinition ;
      static FieldDefinition ;

    FieldDefinition:
      ClassElementName Initializer_opt

    ClassElementName:
      PropertyName

---*/


class C {
  m() { return 42; } static ["a"] = 42; ["a"] = 39;

}

var c = new C();

assert.sameValue(c.m(), 42);
assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);
assert.sameValue(c.m, C.prototype.m);

verifyProperty(C.prototype, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "a"), false);

verifyProperty(C, "a", {
  value: 42,
  enumerable: true,
  writable: true,
  configurable: true
});

verifyProperty(c, "a", {
  value: 39,
  enumerable: true,
  writable: true,
  configurable: true
});

reportCompare(0, 0);
