const new_Array17 = [
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
    let remove_Guest = new_Array17.pop();
    console.log(`Sorry!! ${remove_Guest} I Can't Invite To Dinner`);
}
for (let allow_Dinner of new_Array17) {
    console.log(`Dear ${allow_Dinner} You Are Still Invite To Dinner.`);
}
new_Array17.pop();
new_Array17.pop();
console.log(`Guest List After Dinner`, new_Array17);