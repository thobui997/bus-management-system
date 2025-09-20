import 'dotenv/config';
import app from '~/app.js';
import logger from '~/config/logger.js';

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    // await sequelize.authenticate();
    logger.info('✅ Database connected');

    app.listen(PORT, () => {
      logger.info(`🚀 Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    logger.error('❌ Unable to connect to DB:', err);
    process.exit(1);
  }
}

start();
