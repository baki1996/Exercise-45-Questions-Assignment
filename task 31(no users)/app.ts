let users: string[] = ["Admin", "Maha", "Fiza"];
users.splice(0);
if (users.length <= 0) {
  console.log("We need to find some users!");
}

for (let user of users) {
  if (user === "Admin") {
    console.log(`Hello ${user}, would you like to see a status report?`);
    break;
  } else {
    console.log(`Hello ${user}, thank you for logging in again.`);
  }
}
