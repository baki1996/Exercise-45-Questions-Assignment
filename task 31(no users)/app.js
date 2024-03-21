var users = ["Admin", "Maha", "Fiza"];
users.splice(0);
if (users.length <= 0) {
    console.log("We need to find some users!");
}
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "Admin") {
        console.log("Hello ".concat(user, ", would you like to see a status report?"));
        break;
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
}
