var current_users = ["Maha", "Kiran", "Fiza", "Rida"];
var new_users = ["Fiza", "Maha", "Sania", "Rida"];
function existing(name) {
    return current_users.some(function (value) { return value.toLowerCase() === name.toLowerCase(); });
}
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var UserName = new_users_1[_i];
    if (existing(UserName)) {
        console.log("Sorry, the username ".concat(UserName, " is already taken. Please choose a different one."));
    }
    else {
        console.log("The username '".concat(UserName, "' is available."));
    }
}
