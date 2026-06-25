/**
 * リスト4-2 useState()フックの利用
 */
"use client"; // 状態管理(useState)を使用するため必須
// ReactからuseStateフックをインポート
import { useState } from "react";
import ActionButton from "@/components/chapter04/list4/button/ActionButton";

export default function StateSamplePage() {
    // 状態(State)の定義: 初期値を未登録に設定
    const [statusMessage, setStatusMessage] = useState("未登録");

    // ボタン押下時のイベントハンドラ【アロー関数】
    const handleClick = () => {
        // 更新関数を呼び出して状態を書き換える
        // ＊この関数が実行されると、Reactがデータの変更を検知して再レンダリングを行う
        setStatusMessage("登録が完了しました！");
    };

    return (
        <main className="p-4 max-w-sm mx-auto mt-10 border rounded shadow-sm bg-white">
            <h1 className="text-xl font-bold mb-4 border-b pb-2">状態管理の基本</h1>

            {/* 状態変数(statusMessage)の値をUIにバインド(表示)する */}
            <p className="mb-4 text-gray-700">
                現在のステータス：<span className="font-bold text-blue-600">{statusMessage}</span>
            </p>

            {/* 共通ボタンコンポーネントにイベントハンドラを渡す */}
            <ActionButton
                label="登録する"
                onClick={handleClick} // 【コールバック関数】
            />
        </main>
    )
}