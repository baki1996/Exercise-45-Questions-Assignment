var GuestList = [
    "Abdullah Shafique",
    "Imam Ul Haq",
    "Baber Azam",
    "Muhammad Rizwan",
];
var PeopleCanNotMakeIt = "Imam Ul Haq";
console.log("For Some Reason ".concat(PeopleCanNotMakeIt, " Can Not Attend The Dinner."));
console.log("And Replacing The Name Fakher Zaman For Imam Ul Haq\n");
var New_Guest = "Fakher Zaman";
var IndexOf = GuestList.indexOf(PeopleCanNotMakeIt);
if (IndexOf !== -1) {
    GuestList[IndexOf] = New_Guest;
}
GuestList.forEach(function (guest) {
    console.log("".concat(guest, " You Are Invite To The Party"));
});
