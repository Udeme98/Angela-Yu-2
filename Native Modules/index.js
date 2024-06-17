const fs = require("fs");

// fs.writeFile("Message.txt", "Hello from nodeJS!", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved");
// });

fs.readFile("./Message.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    console.log("File content:", data);
  }
});
