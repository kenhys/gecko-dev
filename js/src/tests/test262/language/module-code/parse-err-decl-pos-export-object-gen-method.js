// |reftest| error:SyntaxError module
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Expression cannot contain an `export` declaration
esid: sec-modules
negative:
  phase: early
  type: SyntaxError
flags: [module]
features: [generators]
---*/

throw "Test262: This statement should not be evaluated.";

({ *m() { export default null; } });
