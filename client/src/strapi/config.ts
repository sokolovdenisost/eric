export default {
  API_URL: process.env.API_URL || 'http://localhost:1337/api',
  BASE_URL: process.env.BASE_URL || 'http://localhost:1337',
  IMAGE_URL: process.env.IMAGE_URL || 'http://localhost:1337',
  VIDEO_URL: process.env.VIDEO_URL || '',
  TOKEN: process.env.STRAPI_API_KEY || ''
};
