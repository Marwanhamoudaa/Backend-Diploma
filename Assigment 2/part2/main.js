const fs = require("node:fs")
const path = require("node:path")
const http = require("node:http")
let port = 3000
function listen(port) {
    httpServer.listen(port, () => {
        console.log("server is running on port " + port);

    })
}
function addUser(email, name, age) {
    const filePath = path.resolve("./users.json");

    const users = JSON.parse(
        fs.readFileSync(filePath, "utf8")
    );

    let exists = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            exists = true;
            break;
        }
    }

    if (exists) {
        return false;
    }

    let id = 1;

    if (users.length > 0) {
        id = users[users.length - 1].id + 1;
    }

    users.push({
        id,
        email,
        name,
        age
    });

    fs.writeFileSync(
        filePath,
        JSON.stringify(users)
    );
    return true;
}
function updateUser(id, updatedData) {
    const filePath = path.resolve("./users.json");
    const users = JSON.parse(
        fs.readFileSync(filePath, "utf8")
    );
    let found = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            if (updatedData.name) {
                users[i].name = updatedData.name;
            }
            if (updatedData.age) {
                users[i].age = updatedData.age;
            }
            if (updatedData.email) {
                users[i].email = updatedData.email;
            }
            found = true;
            break;
        }
    }

    if (!found) {
        return false;
    }

    fs.writeFileSync(
        filePath,
        JSON.stringify(users)
    );

    return true;
}

function deleteUser(id) {
    const filePath = path.resolve("./users.json");

    const users = JSON.parse(
        fs.readFileSync(filePath, "utf8")
    );
    let found = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            users.splice(i, 1);
            found = true;
            break;
        }
    }

    if (!found) {
        return false;
    }

    fs.writeFileSync(
        filePath,
        JSON.stringify(users)
    );

    return true;
}
function getAllUsers() {
    const filePath = path.resolve("./users.json");
    const users = JSON.parse(
        fs.readFileSync(filePath, "utf8")
    );

    return users;
}
function getUserById(id) {
    const filePath = path.resolve("./users.json");

    const users = JSON.parse(
        fs.readFileSync(filePath, "utf8")
    );

    for (let i = 0; i < users.length; i++) {

        if (users[i].id == id) {
            return users[i];
        }
    }

    return null;
}
const httpServer = http.createServer((req, res) => {
    const { url, method } = req;
    if (url === "/user" && method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const { email, name, age } = JSON.parse(body);

            const added = addUser(email, name, age);

            res.setHeader("Content-Type", "application/json");

            if (added) {
                res.statusCode = 201;
                res.end(JSON.stringify({
                    message: "User added successfully."
                }));
            } else {
                res.statusCode = 409;
                res.end(JSON.stringify({
                    message: "Email already exists."
                }));
            }
        });

        return;
    } else if (url.startsWith("/user/") && method === "PATCH") {

        const parts = url.split("/");
        const id = parts[2];

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const updatedData = JSON.parse(body);

            const updated = updateUser(
                id,
                updatedData
            );

            res.setHeader(
                "Content-Type",
                "application/json"
            );

            if (updated) {

                res.statusCode = 200;

                res.end(JSON.stringify({
                    message:
                        "User updated successfully."
                }));

            } else {

                res.statusCode = 404;

                res.end(JSON.stringify({
                    message:
                        "User ID not found."
                }));

            }
        });

        return;
    } else if (url.startsWith("/user/") && method === "DELETE") {

        const parts = url.split("/");
        const id = parts[2];

        const deleted = deleteUser(id);

        res.setHeader(
            "Content-Type",
            "application/json"
        );

        if (deleted) {

            res.statusCode = 200;

            res.end(JSON.stringify({
                message:
                    "User deleted successfully."
            }));

        } else {

            res.statusCode = 404;

            res.end(JSON.stringify({
                message:
                    "User ID not found."
            }));

        }

        return;
    } else if (url === "/user" && method === "GET") {

        const users = getAllUsers();

        res.setHeader(
            "Content-Type",
            "application/json"
        );

        res.statusCode = 200;

        res.end(
            JSON.stringify(users)
        );

        return;
    } else if (url.startsWith("/user/") && method === "GET") {
        const parts = url.split("/");
        const id = parts[2];
        const user = getUserById(id);
        res.setHeader(
            "Content-Type",
            "application/json"
        );
        if (user) {
            res.statusCode = 200;
            res.end(
                JSON.stringify(user)
            );
        } else {

            res.statusCode = 404;
            res.end(JSON.stringify({
                message: "User not found."
            }));

        }

        return;
    }
    res.statusCode = 404;
    res.end(JSON.stringify({
        message: "route not found"
    }));
});


listen(port)
httpServer.on("error", (error) => console.log(error));
