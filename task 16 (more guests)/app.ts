let guests = [
    "Abdullah Shafique",
    "Fakher Zaman",
    "Baber Azam",
    "Muhammad Rizwan",
];
for (let inform of guests) {
    console.log(`News!.. Dear ${inform} We Found A Big Dinner Table! `);
}
let newGuest_Beginning = "Saim Ayub";
let newGuest_Middle = "Imad Wasim";
let newGuest_End = "Muhammad Nawaz";
guests.unshift(newGuest_Beginning);
let indexMiddle = guests.length / 2;
guests.splice(indexMiddle, 0, newGuest_Middle);
guests.push(newGuest_End);
console.log(guests);
console.log("\n\tNew Set of Invitations");
guests.forEach((anyPeople) => {
    console.log(`${anyPeople} Please Join our Dinner Party`);
});