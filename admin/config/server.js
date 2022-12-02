module.exports = ({ env }) => ({
  host: env('HOST', '45.91.8.204'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
