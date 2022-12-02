## Основные моменты по работе со strapi

### 1. Описание функций (index.ts)

- getCollection(type, params) - Получение коллекции по type указанием параметров
- getSingle(type, params) - Получение single type с указанием параметров
- getSingleBySlug(type, slug, populate) - Получение элемента коллекции по slug c указанием populate
- getAllPath(type) - Получение всех url коллекции по type для getStaticPaths

### 2. Описание утилок (utils.ts)

- getSingleFile(image) - получение объекта изображения/видео в удобном формате
- getAttributes(data) - получение вложенного ключа attributes объекта
- getHtml(data) - перевод markdown в html

### 3. Описание сериалайзеров (rebuild{Type}.js)

Для форматирования приходящих данных используются обертки из файлов serializers.ts и rebuild{Type}.js (Все примеры можно найти там) 

### FAQ

#### Что за параметр populate?

Данный параметр служит для получения вложенных данных. Например, для картинок или relation полей. По умолчанию, если параметр не указан, strapi отдает только информацию первого уровня, не учитывая вложенность. Таким образом мы указываем в нем только те вложенные поля, которые нужно получить.

Раздел в доке по этому параметру - https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html#relation-media-fields

Пример можно найти в pages/blog/[slug].js

#### Где храняться кредсы для strapi?

Пример кредсов храниться в .env.sample. В проекте они размещаются в .env.production и .env.development

#### Документация по rest есть?

Каэш есть. Вот линк - https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html

#### Документация по GraphQL есть?

И это подвезли. Вот линк - https://docs.strapi.io/developer-docs/latest/plugins/graphql.html
