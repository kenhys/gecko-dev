// |reftest| skip error:SyntaxError -- class-fields-private,class-fields-public is not supported
// This file was procedurally generated from the following sources:
// - src/class-fields/init-err-contains-super.case
// - src/class-fields/initializer-error/cls-expr-fields-private-ternary.template
/*---
description: Syntax error if `super()` used in class field (private field, ternary expression)
esid: sec-class-definitions-static-semantics-early-errors
features: [class, class-fields-public, class-fields-private]
flags: [generated]
negative:
  phase: early
  type: SyntaxError
info: |
    Static Semantics: Early Errors

      FieldDefinition:
        PropertyNameInitializeropt

      - It is a Syntax Error if Initializer is present and Initializer Contains SuperCall is true.

---*/


throw "Test262: This statement should not be evaluated.";

var C = class {
  #x = true ? {} : super();
}
