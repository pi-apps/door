# door-admin
the backend of Door for Pi

## Technology stack

**`node.js` `midway.js` `egg.js` `mysql` `typescript`**


## Run

#### modify database config `src/config/config.local.ts`

Database mysql(`>=5.7`)，node version(`>=12.x`)

```ts
orm: {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'piiq',
    synchronize: true,
    logging: true,
    charset: 'utf8mb4',
  },
```

#### install and run

```bash
$ npm i
$ npm run dev
$ open http://localhost:8001/
```

## Deploy

```bash
$ npm start
$ npm stop
```
