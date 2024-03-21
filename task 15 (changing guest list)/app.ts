const GuestList = [
    "Abdullah Shafique",
    "Imam Ul Haq",
    "Baber Azam",
    "Muhammad Rizwan",
];
let PeopleCanNotMakeIt = "Imam Ul Haq";
console.log(`For Some Reason ${PeopleCanNotMakeIt} Can Not Attend The Dinner.`);
console.log(`And Replacing The Name Fakher Zaman For Imam Ul Haq\n`);
const New_Guest = "Fakher Zaman";
let IndexOf = GuestList.indexOf(PeopleCanNotMakeIt);
if (IndexOf !== -1) {
    GuestList[IndexOf] = New_Guest;
}
GuestList.forEach((guest) => {
    console.log(`${guest} You Are Invite To The Party`);
});
