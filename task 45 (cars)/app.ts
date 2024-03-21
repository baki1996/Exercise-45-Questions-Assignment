let about_car = (
    manufactured: string,
    model: string,
    ...extra_qualities: string[]
  ) => {
    return {
      manufactured,
      model,
      extra_qualities,
    };
  };
  console.log(about_car("Honda", "Civic 2012", "Red Color", "Auto Driving Mod"));
  console.log(
    about_car("Harley Devidson", "Alpha 2018", "Multi-Colors", "120+ Speed..")
  );