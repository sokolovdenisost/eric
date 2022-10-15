export default {
  API_URL: process.env.API_URL || 'http://localhost:1337/api',
  BASE_URL: process.env.BASE_URL || 'http://localhost:1337',
  IMAGE_URL: process.env.IMAGE_URL || 'http://localhost:1337',
  VIDEO_URL: process.env.VIDEO_URL || '',
  TOKEN:
    process.env.STRAPI_API_KEY ||
    '2704aaadde3153d552d2e29efd69529d15807936889ec494cc75782a8fde8a34cc83c0f4ac4b8da9b7189517a4dd5a40b4c8fdc273156eb1ff2fc5df59023314dc616c8c1cf497d475555478ef6ca2447e475fa155e31bf0fb488110032c961e3725b21b12d24d202af84c46d6a2dad678f39fa7e2e0c5756beb24c8ac8dd10d',
};
