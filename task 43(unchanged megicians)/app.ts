function make_great(magicians: string[]): string[] {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const originalMagicians: string[] = ["David Copperfield", "Houdini", "Dynamo"];

const copyOfOriginalMagicians: string[] = originalMagicians.slice();

const greatMagicians = make_great(copyOfOriginalMagicians);

console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
