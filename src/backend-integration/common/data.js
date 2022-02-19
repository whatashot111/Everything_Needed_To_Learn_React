const states = ["UP", "Bihar", "Karnataka", "Telangana", "Kerela", "Haryana"];
 
export const getStates = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(states);
    }, 3000);
  });
};
 
export const getCities = (state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (state) {
        case "UP":
          resolve(["Prayagraj", "Ayodhya", "Lucknow", "Moradabad", "Mathura"]);
          break;
        case "Bihar":
          resolve(["Patna", "Aara", "Buxar", "Bhagalpur", "Banka"]);
          break;
        case "Karnataka":
          resolve([
            "Bangalore",
            "Mangalore",
            "Udupi",
            "Shimoga",
            "Hubbali",
            "Dharwad",
          ]);
          break;
        case "Telangana":
          resolve([
            "Khammam",
            "Karimnagar",
            "Hyderabad",
            "Warangal",
            "Jangaon",
          ]);
          break;
        case "Kerela":
          resolve(["Munnar", "Thekkadi", "Wayanad", "Kochi", "Allepey"]);
          break;
        case "Haryana":
          resolve(["Jhajjar", "Gurugram", "Panipat", "Sonepat"]);
          break;
        default:
          resolve([]);
      }
    }, 2000);
  });
};
