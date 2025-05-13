const express = require("express");
const router = express();
let { posts, port, localHost } = require("./posts");

// # INDEX

router.get("/", (req, res) => {
  res.json({ description: "lista dei post", data: posts });
});

// # SHOW
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const post = posts.find((currentPost) => currentPost === id);
  res.json({ description: "lettura del post " + id, data: post });
});
// # STORE
router.post("/", (req, res) => {
  res.json("creazione di una nuova pizza");
});

router.listen(port, () => {
  console.log(`Server in ascolto su ${localHost}`);
});

// # UPDATE

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const post = posts.find((currentPost) => currentPost === id);
  res.json({ description: "sostituzione del post " + id });
});

// # DELETE

module.exports = router;
