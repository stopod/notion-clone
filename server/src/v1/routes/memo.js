const router = require("express").Router();
const memoController = require("../controllers/memo");
const tokenHandler = require("../handlers/tokenHandler");

// メモを作成
router.post("/", tokenHandler.veryfyToken, memoController.create);

// ログインユーザーが投稿したメモをすべて取得
router.get("/", tokenHandler.veryfyToken, memoController.getAll);

// ログインしているユーザーが投稿したメモを１つ取得
router.get("/:memoId", tokenHandler.veryfyToken, memoController.getOne);

// ログインしているユーザーが投稿したメモを１つ更新
router.put("/:memoId", tokenHandler.veryfyToken, memoController.update);

// ログインしているユーザーが投稿したメモを１つ削除
router.delete("/:memoId", tokenHandler.veryfyToken, memoController.delete);

module.exports = router;
