```sh

npm init -y

npm i express body-parser cors jsonwebtoken bcrypt joi morgan mongoose

npm i -D typescript ts-node @types/node @types/express @types/body-parser @types/cors @types/jsonwebtoken @types/morgan @types/bcrypt 

npm i -g nodemon

```


```json
{
    "scripts": {
        "dev": "nodemon --exec ts-node src/index.ts",
        "build": "tsc",
        "start": "node build/index.js"
    }
}
```


```sh
# initialise TSCONFIG
npx tsc --init

# change thise
# "outDir": "./build",
```


# students
CREATE STUDENT
DELETE STUDENT
GET A STUDENT
GET ALL STUDENTS

# absence
MARK STUDENT AS ABSENT
GET ALL ABSENT STUDENTS
