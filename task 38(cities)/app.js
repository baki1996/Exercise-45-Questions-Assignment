function describe_city(name, text) {
    if (text === void 0) { text = "Pakistan"; }
    console.log("".concat(name, " is in ").concat(text));
}
describe_city("Karachi");
describe_city("Mumbai", "india");
describe_city("Washington", "USA");
