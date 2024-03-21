let show_magicians0 = (magician: string[]): void => {
    magician_names.forEach((value) => {
      console.log(value);
    });
  };
  
  let magician_names: string[] = [
    "Osama",
    "Saira Tanda Magician",
    "Umer Aftab",
    "Samina Magician",
  ];
  show_magicians0(magician_names);