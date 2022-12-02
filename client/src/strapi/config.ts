export default {
  API_URL: process.env.API_URL || 'http://localhost:1337/api',
  BASE_URL: process.env.BASE_URL || 'http://localhost:1337',
  IMAGE_URL: process.env.IMAGE_URL || 'http://localhost:1337',
  VIDEO_URL: process.env.VIDEO_URL || '',
  TOKEN:
    process.env.STRAPI_API_KEY ||
    'c4b1ea2005a47b8e4ed6c4f58a20f6da1ee380ac357ba79d4c01be71817c6ce0740f5f5805e2aef76448508738749b2e23b75f3d45fd6366904ce0c8fcc5a92596ea1829aeb7c54d418152dbd962e5b596c9294264c13afe04b6753deb8277297cd5a555dd145e8827b29b5f2c0b9f1c27a0f2b98d7c1bc4db4dd95374dfc366'
};
