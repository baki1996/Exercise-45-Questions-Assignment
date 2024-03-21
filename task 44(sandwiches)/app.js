var sandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("\nYou ordered an grilled chicken  sandwich. Please specify some items.");
    }
    else {
        console.log("\nYou ordered a sandwich with the following items:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
    }
};
sandwich("Egg Sandwich", "Grilled Chicken ", "Seafood Sandwich");
sandwich("Grilled Cheese", "Nutella Sandwich");
sandwich();
