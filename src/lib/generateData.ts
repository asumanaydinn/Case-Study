import { faker } from "@faker-js/faker";

export const generateData = () => {
  const data = [];

  for (let i = 0; i < 100; i++) {
    // Generates 100 data entries, change as needed
    data.push({
      user_image: faker.image.avatar(), // Generates random avatar URL
      userDetails: {
        email: faker.internet.email(), // Generates random email
        username: faker.internet.userName(), // Generates random username
      },
      customerName: faker.person.fullName(), // Generates random full name
      registerDate: faker.date.past().toISOString().split("T")[0], // Generates random past date in YYYY-MM-DD format
      segment: "New", // Randomly selects a segment
    });
  }

  return data;
};
