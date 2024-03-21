function make_great1(magicians: string[]): string[] {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}

function show_magicians1(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicians: string[] = ["David Copperfield", "Houdini", "Dynamo"];
const greatMagicians1 = make_great1 (magicians);