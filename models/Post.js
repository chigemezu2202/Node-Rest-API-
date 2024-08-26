const db = require('../config/db');

class Post {
    constructor(title, body) {
        this.title = title;
        this.body = body
    }

     save() {
        let d = new Data();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO post(
        title,
        body,
        ) VALUES (
         '${this.title}',
         '${this.body}',
         '${createdAtDate}'
        )
        `;

        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM post;";
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM post WHERE id=${id};`;
        return db.execute(sql)
    }
}

module.exports = Post;

