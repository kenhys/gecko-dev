var Cc = Components.classes;
var Ci = Components.interfaces;

// eslint-disable-next-line mozilla/use-services
const runtime = Cc["@mozilla.org/xre/app-info;1"].getService(Ci.nsIXULRuntime);

function run_test() {
  do_check_eq(runtime.processType, Ci.nsIXULRuntime.PROCESS_TYPE_DEFAULT);
}
