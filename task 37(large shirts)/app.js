function make_shirt1(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I Love Typescript"; }
    console.log("Size of the shirt is ".concat(size, " and the message printed on the shirt is ").concat(text, "."));
}
;
make_shirt1();
make_shirt1("Small", "I love Pakistan");
make_shirt1("Medium");
