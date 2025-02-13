# devwomen testing masterclass

## Setup project

**backend**

```bash
mv backend
npm install
```

**frontend**

```bash
mv frontend
npm install
```

## Run tests

**E2E**

```bash
mv frontend 
npx playwright test --ui
```

**Unit**

```bash
mv backend
npm test
```

**Integration**

Import the postman collection that you can find at `backend` folder named `DevWomen Testing masterclass.postman_collection.json`.

Use the following link to know how to import the collection. https://learning.postman.com/docs/designing-and-developing-your-api/importing-an-api/

Run the test as:

![Postman run tests](.github/assets/postman-run-tests.png)