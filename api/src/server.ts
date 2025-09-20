import 'dotenv/config';
import app from '~/app.js';

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    // await sequelize.authenticate();
    console.log('✅ Database connected');

    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Unable to connect to DB:', err);
    process.exit(1);
  }
}

start();
