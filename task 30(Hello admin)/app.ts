let user_names: string[] = ["Admin", "Maha", "Fiza", "Rida"];
for (let user of user_names) {
  if (user === "Admin") {
    console.log(`Hello ${user}, would you like to see a status report?`);
    break;
  } else {
    console.log(`Hello ${user}, thank you for logging in again.`);
  }
}