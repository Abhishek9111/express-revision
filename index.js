const express = require("express");
const app = express();

var users = [
  {
    name: "Abhishek",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];
app.get("/", (req, res) => {
  let kidneys = users[0].kidneys.filter((kidney) => {
    return kidney.healthy;
  });
  res.send("Number of healthy kidneys " + kidneys.length);
});

app.use(express.json());

app.post("/add", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Added the new data",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  users[0].kidneys = users[0].kidneys.filter((kidney) => kidney.healthy);

  res.json({ msg: "Done" });

  //   res.status(411).json('No kidneys')
});

app.listen(3000);

// const express = require("express");

// const app = express();

// function sum(n) {
//   let ans = 0;
//   for (let i = 1; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }
// app.get("/", (req, res) => {
//   //   console.log(req);
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("Hello" + ans);
// });

// app.listen(3000);
