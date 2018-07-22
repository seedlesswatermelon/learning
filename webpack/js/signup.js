let base = require("./base.js");
let open = base.open;

if (open) {
    document.body.innerHTML = `<h1>歡迎</h1>`
}
else{
    document.body.innerHTML = "<h1>滾</h1>"
}