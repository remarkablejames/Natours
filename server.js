
import dotenv from "dotenv";

// LOAD ENV VARIABLES
dotenv.config();
import app from "./app.js";
const PORT = process.env.PORT || 3000;
// console.log(process.env.NODE_ENV);
// START SERVER
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
} );