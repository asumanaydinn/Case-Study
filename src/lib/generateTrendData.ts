interface DataSchema {
  today: number;
  yesterday: number;
}

const generateTrendData = (): DataSchema[] => {
  const data: DataSchema[] = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      today: Math.floor(Math.random() * (1000 - 0 + 1)) + 0, // Generates a random number between 0 and 1000 for 'today'
      yesterday: Math.floor(Math.random() * (1000 - 0 + 1)) + 0, // Generates a random number between 0 and 1000 for 'yesterday'
    });
  }

  data.sort((a, b) => a.today - b.today);

  return data;
};

const fakeData = generateTrendData();
export default fakeData;
