module.exports = {
  env: {
    mocha: true
  },
  globals: {
    a11ySuite: "readonly",
    assert: "readonly",
    fixture: "readonly",
    test: "readonly",
    sinon: "readonly",
    chai: "readonly",
    WCT: "readonly"
  },
  rules: {
    "max-lines-per-function": "off"
  }
};