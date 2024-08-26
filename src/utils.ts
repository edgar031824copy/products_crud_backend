import db from './config/db';

const clearDB = async () => {
  try {
    await db.sync({ force: true });
    console.log('DB cleared');
    process.exit(0);
  } catch (error) {
    console.log('error');
    process.exit(1);
  }
};

if (process.argv[2] === '--clear') {
  clearDB();
}
