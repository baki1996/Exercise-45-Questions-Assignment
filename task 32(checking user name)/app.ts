let current_users: string[] = ["Maha", "Kiran", "Fiza", "Rida"];
let new_users: string[] = ["Fiza", "Maha", "Sania", "Rida"];

function existing(name: string): boolean {
  return current_users.some(
    (value) => value.toLowerCase() === name.toLowerCase()
  );
}
for (let UserName of new_users) {
  if (existing(UserName)) {
    console.log(
      `Sorry, the username ${UserName} is already taken. Please choose a different one.`
    );
  } else {
    console.log(`The username '${UserName}' is available.`);
  }
}
