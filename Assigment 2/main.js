const path = require("node:path")
const fs = require("node:fs");
const { EventEmitter } = require("node:events");
const { emit } = require("node:process");
const event = new EventEmitter()
// 1. Write a function that logs the current file path and directory. (0.5 Grade)
// • Output Example:{File:“/home/user/project/index.js”, Dir:“/home/user/project”}
{
    function pathLog() {
        console.log({ file: `${__filename}`, Dir: `${__dirname}` });
    }
    // pathLog()    
}

// 2. Write a function that takes a file path and returns its file name. (0.5 Grade)
// • Input Example: /user/files/report.pdf
// • Output Example:"report.pdf"
{
    function getFilename(pathname) {
        const { base } = path.parse(pathname)
        console.log(base);

    }

}

// 3. Write a function that builds a path from an object (0.5 Grade)
// • Input Example: { dir: "/folder", name: "app", ext: ".js"}
// • Output Example: “/folder/app.js”
{
    function buildPath(data) {
        return path.normalize(path.format(data))
    }
}

// 4. Write a function that returns the file extension from a given file path. (0.5 Grade)
// • Input Example: /docs/readme.md"
// • Output Example: “.md”
{
    function getFileExt(pathName) {
        const { ext } = path.parse(pathName)
        return ext
    }
}
// 5. Write a function that parses a given path and returns its name and ext. (0.5 Grade)
// • Input Example: /home/app/main.js
// • Output Example: { Name: “main”, Ext: “.js” }
{
    function pathParse(pathName) {
        const { name: Name, ext: Ext } = path.parse(pathName)
        return { Name, Ext }
    }
}
// 6. Write a function that checks whether a given path is absolute. (0.5 Grade)
// • Input Example: /home/user/file.txt
// • Output Example: true
function checkAbsolute(pathName) {
    return path.isAbsolute(pathName)
}
// 7. Write a function that joins multiple segments (0.5 Grade)
// • Input:"src","components", "App.js"
// • Output Example: src/components/App.js
function pathJoins(...files) {
    return path.join(...files)
}
// 8. Write a function that resolves a relative path to an absolute one. (0.5 Grade)
// • Input Example: ./index.js
// • Output Example: /home/user/project/src/index.js
function getAbsolute(relativePath) {
    return path.resolve(relativePath)
}

// 9. Write a function that joins two paths. (0.5 Grade)
// • Input Example: /folder1, folder2/file.txt
// • Output Example: /folder1/folder2/file.txt
function twoPathMerge(path1, path2) {
    return path.join(path1, path2)
}
// 10. Write a function that deletes a file asynchronously. (0.5 Grade)
// • Input Example: /path/to/file.txt
// • Output Example: The file.txt is deleted.
{
    function asyncDeleteFile(pathName) {
        const { name, ext } = path.parse(pathName)
        fs.unlink(pathName, (error) => {
            if (error) {
                console.log(error.message);
                return;
            }
            console.log(`The file ${name + ext} is deleted.`);

        })

    }
}
// 11. Write a function that creates a folder synchronously. (1 Grade)
// • Output Example: “Success”
{
    function createFolder(folderName) {
        try {
            fs.mkdirSync(folderName)
            return "Success"
        } catch (error) {
            return "Not Success"

        }
    }
}
// 12. Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade)
// • Output Example: Welcome event triggered!
{
    event.on("Start", () => { console.log("hello"); })
    event.emit("Start")
}
// 13. Emit a custom "login" event with a username parameter. (0.5 Grade)
// • Input Example:"Ahmed"
// • Output Example: “User logged in: Ahmed”


{
    // event.on("login" , (user)=>{
    //     console.log(user.name + "user logged in");
        
    // })
    // function login (name) {

    //     event.emit ("login" , {name})
    // }
}
// login("marwan")

// 14. Read a file synchronously and log its contents. (1 Grade)
// • Input Example:"./notes.txt"
// • Output Example: the file content => “This is a note.”
// 15. Write asynchronously to a file. (1 Grade)
// • Input: path:"./async.txt", content:"Async save"
// 16. Check if a directory exists. (0.5 Grade)
// • Input Example: "./notes.txt"
// • Output Example: true
// 17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade)
// • Output Example: {Platform: “win32”, Arch: “x64”}



function main() {
    // pathLog()    
    // getFilename("/user/files/report.pdf")
    // console.log(buildPath({ dir: "/folder", name: "app", ext: ".js"}));
    // console.log(getFileExt("/user/files/report.pdf"));
    // console.log(pathParse("/user/files/report.pdf"));
    // console.log(checkAbsolute("/user/files/report.pdf"));
    // console.log(pathJoins("src","components", "App.js"));
    // console.log(getAbsolute("./main.js"));
    // console.log(twoPathMerge("/folder1", "folder2/file.txt"));
    // console.log(createFolder("test"));
    asyncDeleteFile(path.resolve("./test/test.txt"));


}
main()