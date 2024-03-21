var user_names = ["Admin", "Maha", "Fiza", "Rida"];
for (var _i = 0, user_names_1 = user_names; _i < user_names_1.length; _i++) {
    var user = user_names_1[_i];
    if (user === "Admin") {
        console.log("Hello ".concat(user, ", would you like to see a status report?"));
        break;
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
}
