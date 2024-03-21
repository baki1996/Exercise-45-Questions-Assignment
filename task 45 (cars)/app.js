var about_car = function (manufactured, model) {
    var extra_qualities = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extra_qualities[_i - 2] = arguments[_i];
    }
    return {
        manufactured: manufactured,
        model: model,
        extra_qualities: extra_qualities,
    };
};
console.log(about_car("Honda", "Civic 2012", "Red Color", "Auto Driving Mod"));
console.log(about_car("Harley Devidson", "Alpha 2018", "Multi-Colors", "120+ Speed.."));
