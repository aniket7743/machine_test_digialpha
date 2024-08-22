import app from './src/app.js';  // Importing app.js from src directory

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});