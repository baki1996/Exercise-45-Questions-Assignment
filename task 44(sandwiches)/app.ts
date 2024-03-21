let sandwich = (...items: string[]): void => {
    if (items.length === 0) {
      console.log("\nYou ordered an grilled chicken  sandwich. Please specify some items.");
    } else {
      console.log("\nYou ordered a sandwich with the following items:");
      for (let item of items) {
        console.log(`- ${item}`);
      }
    }
  };
  sandwich("Egg Sandwich", "Grilled Chicken ", "Seafood Sandwich")
  sandwich("Grilled Cheese", "Nutella Sandwich")
  sandwich()