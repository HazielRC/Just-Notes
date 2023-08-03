import express from "express";
import session from "express-session";
import passport from "passport";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

const app = express()

app.set("port", process.env.PORT || 3555);

/* Middle wares */
app.use(express.json())
app.use(bodyParser())
app.use(morgan("dev"))
app.use(session({
  secret: "lllkjkj887.dssa-3e3dadawdwda-33dsadg44ad",
  resave: true,
  saveUninitialized: false,
}))
app.use(cors())

app.listen(app.get("port"), () => {
  console.log(`App listening on port: ${app.get("port")}`);
})