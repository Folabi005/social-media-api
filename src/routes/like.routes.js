router.post("/:id", auth, like);
router.delete("/:id", auth, unlike);