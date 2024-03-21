var guests = [
    "Abdullah Shafique",
    "Fakher Zaman",
    "Baber Azam",
    "Muhammad Rizwan",
];
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var inform = guests_1[_i];
    console.log("News!.. Dear ".concat(inform, " We Found A Big Dinner Table! "));
}
var newGuest_Beginning = "Saim Ayub";
var newGuest_Middle = "Imad Wasim";
var newGuest_End = "Muhammad Nawaz";
guests.unshift(newGuest_Beginning);
var indexMiddle = guests.length / 2;
guests.splice(indexMiddle, 0, newGuest_Middle);
guests.push(newGuest_End);
console.log(guests);
console.log("\n\tNew Set of Invitations");
guests.forEach(function (anyPeople) {
    console.log("".concat(anyPeople, " Please Join our Dinner Party"));
});
