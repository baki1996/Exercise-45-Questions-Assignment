let SeeingPlaces = [
    "Masjid e Nabwi",
    "Suchheri",
    "Balakot River",
    "Lughmani Hill",
];
console.log("\n_______________Original Array_______________\t");
console.log(SeeingPlaces);
console.log("\t\n Array in alphabetical order without modifying the actual list.");
console.log([...SeeingPlaces].sort());
console.log("\nShowing Array is still in its original order");
console.log(SeeingPlaces);
console.log("\nReverse The Order Of Array ");
console.log([...SeeingPlaces].sort().reverse());
console.log("\nOrignal Array Order");
console.log(SeeingPlaces);
console.log("\nArray Store In Alphabetical Order");
SeeingPlaces.sort();
console.log(SeeingPlaces);
console.log("\nchange your array so it’s stored in reverse alphabetical order");
SeeingPlaces.sort().reverse();
console.log(SeeingPlaces);