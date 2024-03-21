var new_Array17 = [
    "Saim Ayub",
    "Abdullah Shafique",
    "Imad Wasim",
    "Fakher Zaman",
    "Baber Azam",
    "Muhammad Rizwan",
    "Muhammad Nawaz",
];
console.log("\n\tI Can Invite Only Two people");
while (new_Array17.length > 2) {
    var remove_Guest = new_Array17.pop();
    console.log("Sorry!! ".concat(remove_Guest, " I Can't Invite To Dinner"));
}
for (var _i = 0, new_Array17_1 = new_Array17; _i < new_Array17_1.length; _i++) {
    var allow_Dinner = new_Array17_1[_i];
    console.log("Dear ".concat(allow_Dinner, " You Are Still Invite To Dinner."));
}
new_Array17.pop();
new_Array17.pop();
console.log("Guest List After Dinner", new_Array17);
