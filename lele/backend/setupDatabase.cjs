const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');


async function setupDatabase() {


    const db = await open({


        filename: './database.db',
        driver: sqlite3.Database
    });

    await db.exec('CREATE TABLE IF NOT EXISTS submissions (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, message TEXT)');


    await db.close();


}

setupDatabase().catch(console.error);
