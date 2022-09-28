const express = require("express");
const dotenv = require("dotenv").config({ path: "./.env" });
const colors = require("colors");
var cors = require("cors");

const connectDB = require("./config/db.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//index of the API
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Welcome to my API, check the site it provides info:",
    API_github: "https://github.com/davi38/portfolio-en-server",
    site: {
      portfolio_english: "not deployed yet",
      portfolio_english_github: "https://github.com/davi38/portfolio-en-client",
    },
    routes: {
      about: "/portfolio/en/about",
      work: "/portfolio/en/work",
      skills: "/portfolio/en/skills",
      testimonials: "/portfolio/en/testimonials",
    },
    visit_my_Github: "https://github.com/davi38/",
  });
});

//about section route
app.use("/portfolio/en/about", require("./routes/aboutRoutes.js"));

//work section route
app.use("/portfolio/en/work", require("./routes/workRoutes.js"));

//skills section route
app.use("/portfolio/en/skills", require("./routes/skillsRoutes.js"));

//testimonials section route
app.use("/portfolio/en/testimonials", require("./routes/testimonialsRoutes.js"));

const PORT = process.env.PORT || 3001;
connectDB();

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
