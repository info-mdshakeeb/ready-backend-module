const app = require('./app');
const { port } = require('./utils/config.Env');

process.on('uncaughtException', (err) => {
  // eslint-disable-next-line no-console
  console.log('uncaughtException is detected ...');
  process.exit(1);
});

let server;

const connectServer = () => {
  try {
    if (!port) {
      console.log('server port is not found');
      return;
    }
    server = app.listen(port, () =>
      console.log(` 🔗 Server is running on port ${port}`),
    );
  } catch (error) {
    console.log(error);
  }
};

process.on('unhandledRejection', (err) => {
  console.log('main err=>', err);

  console.log('unhandledRejection happened :( we are closing our server');
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

connectServer();
