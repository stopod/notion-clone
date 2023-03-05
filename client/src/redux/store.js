import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

/**
 * ChatGPT
 * Reduxにおいて、アプリケーションの状態を変更するためには、アクションと呼ばれるオブジェクトを発行し、それを処理するリデューサーと呼ばれる関数が必要です。
 * アクションは、アプリケーション内で何が起こったかを表す純粋なJavaScriptオブジェクトです。
 * 一般的に、アクションには type プロパティと、必要に応じて追加のデータが含まれます。アクションは、
 * dispatch 関数を呼び出すことでReduxストアに送信されます。
 *
 * リデューサーは、アクションを受け取り、以前の状態を新しい状態に変更する純粋なJavaScript関数です。
 * リデューサーは、アプリケーションの状態を更新するために必要な計算を行い、新しい状態を返します。
 *
 * 簡単に言えば、アクションは何が起こったかを表し、リデューサーはそのアクションに応じて状態を更新する関数です。
 */

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
