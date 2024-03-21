function describe_city (name: string, text: string = "Pakistan"){
    console.log(`${name} is in ${text}`);
}
describe_city("Karachi")
describe_city("Mumbai",  "india");
describe_city("Washington", "USA");