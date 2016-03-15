var test = require("tap").test;
var testBundle = require("./sample/bundle");

test("glob-loader", function (t) {
  t.similar(testBundle, {
    "a": "A",
    "b": "B"
  });
  t.end()
});
