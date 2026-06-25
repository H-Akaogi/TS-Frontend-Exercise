/**
 * リスト4-1 ActionButtonコンポーネントの実装
 */
// 親(page.tsx)の先頭に必ず付加する
"use client";
import ActionButton from "@/components/chapter04/li4-1/button/ActionButton";

export default function SamplePage() {
    const handleClick = () => {
        alert("ボタンがクリックされました！"); // 画面に警告ダイアログを出す
    };

    return (
        <main className="p-4">
            {/* 共通ボタンに、文字と処理をPropsで渡す */}
            <ActionButton label="登録する" onClick={handleClick} />
        </main>
    );
}