const express = require("express");
const router = express();
let { posts, port, localHost } = require("./posts");
router.use(express.static("./imgs"));
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
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter((currentPost) => currentPost.id !== id);

  res.json({ description: "eliminazione della pizza" + id, data: posts });
});
module.exports = router;
