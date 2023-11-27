import connection from "../database/index.js";

class userRepositories {
    findAll() {
        const query = "SELECT * FROM users";
        return new Promise((resolve, reject) => {
            connection.query(query, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    findById(id) {
        const query = "SELECT * FROM users WHERE id = ?";
        return new Promise((resolve, reject) => {
            connection.query(query, id, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    create(user) {
        const query = "INSERT INTO users SET ?";
        return new Promise((resolve, reject) => {
            connection.query(query, [user], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    update(userData, id) {
        const query = "UPDATE users SET ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            connection.query(query, [userData, id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    deleteById(id) {
        const query = "DELETE FROM users WHERE id = ?";
        return new Promise((resolve, reject) => {
            connection.query(query, id, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

export default new userRepositories();
