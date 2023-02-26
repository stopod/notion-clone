import { Box, Button, TextField } from "@mui/material";
import React, { useRef } from "react";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 入力欄の文字列を取得
    const data = new FormData(e.target);
    const username = data.get("username").trim();
    const password = data.get("password").trim();
    const confirmPassword = data.get("confirmPassword").trim();
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="username"
          label="お名前"
          margin="normal"
          name="username"
          required
        />
        <TextField
          fullWidth
          id="password"
          label="パスワード"
          margin="normal"
          name="password"
          type="password"
          required
        />
        <TextField
          fullWidth
          id="confirmPassword"
          label="確認用パスワード"
          margin="normal"
          name="confirmPassword"
          type="password"
          required
        />
        <LoadingButton
          sx={{ mt: 3, md: 2 }}
          fullWidth
          type="submit"
          loading={false}
          color="primary"
          variant="outlined"
        >
          アカウント作成
        </LoadingButton>
      </Box>
      <Button component={Link} to="/login">
        すでにアカウントを持っていますか？ログイン
      </Button>
    </>
  );
};

const RegisterByUseRef = () => {
  /**
   * useRefは、Reactのフックの一つで、コンポーネントで管理するデータを作成するための手段の1つです。
   * 通常の変数とは異なり、useRefで作成されたデータは変更されてもレンダリングが再実行されないため、
   * コンポーネント内で状態を保持したいが、再レンダリングを引き起こしたくない場合に使用されます。
   *
   * useRefは、単一の可変値を管理するためのものであり、
   * useStateとは異なり、更新関数が呼び出されたときに再レンダリングを引き起こすわけではありません。
   * また、useRefで作成されたオブジェクトのcurrentプロパティを使用して、DOMノードへの参照を作成することもできます。
   */
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    /**
     * formRef.currentには、useRef()で作成されたオブジェクトが格納されます。
     * useRef()は、常に同じオブジェクトを返すフックであり、
     * その返り値であるオブジェクトの.currentプロパティに現在の値が格納されます。
     */
    const data = new FormData(formRef.current);
    console.log(formRef.current);
    const username = data.get("username").trim();
    const password = data.get("password").trim();
    const confirmPassword = data.get("confirmPassword").trim();
    console.log(username, password, confirmPassword);
  };

  return (
    <>
      <Box component="form" ref={formRef} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="username"
          label="お名前"
          margin="normal"
          name="username"
          required
        />
        <TextField
          fullWidth
          id="password"
          label="パスワード"
          margin="normal"
          name="password"
          type="password"
          required
        />
        <TextField
          fullWidth
          id="confirmPassword"
          label="確認用パスワード"
          margin="normal"
          name="confirmPassword"
          type="password"
          required
        />
        <LoadingButton
          sx={{ mt: 3, md: 2 }}
          fullWidth
          type="submit"
          loading={false}
          color="primary"
          variant="outlined"
        >
          アカウント作成
        </LoadingButton>
      </Box>
      <Button component={Link} to="/login">
        すでにアカウントを持っていますか？ログイン
      </Button>
    </>
  );
};

const RegisterByUseRefWithValue = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const confirmPassword = confirmPasswordRef.current.value.trim();

    console.log(username, password, confirmPassword);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="username"
          label="お名前"
          margin="normal"
          name="username"
          required
          inputRef={usernameRef}
        />
        <TextField
          fullWidth
          id="password"
          label="パスワード"
          margin="normal"
          name="password"
          type="password"
          required
          inputRef={passwordRef}
        />
        <TextField
          fullWidth
          id="confirmPassword"
          label="確認用パスワード"
          margin="normal"
          name="confirmPassword"
          type="password"
          required
          inputRef={confirmPasswordRef}
        />
        <LoadingButton
          sx={{ mt: 3, md: 2 }}
          fullWidth
          type="submit"
          loading={false}
          color="primary"
          variant="outlined"
        >
          アカウント作成
        </LoadingButton>
      </Box>
      <Button component={Link} to="/login">
        すでにアカウントを持っていますか？ログイン
      </Button>
    </>
  );
};

export default RegisterByUseRefWithValue;
