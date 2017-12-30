module.exports = {
  sourceFiles: '../master/docs/api.apib',
  serverPort: 3001,
  autoOptions: true,
  method: [
    '*',
  ],
  header: [
    'Authorization',
  ],
  ignoreHeader: [
    'Authorization',
  ],
};
