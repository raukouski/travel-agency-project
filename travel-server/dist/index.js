"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 5000;
app_1.app.listen(port, () => console.log(`Server has been started on ${port}`));
//# sourceMappingURL=index.js.map