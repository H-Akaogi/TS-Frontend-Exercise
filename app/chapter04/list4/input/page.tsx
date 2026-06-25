/**
 * リスト4-3 TextInputコンポーネントの実装
 */
"use client"; // クライアントコンポーネント
// { useState }: 画面上で変化する値を記憶する
import { useState } from "react";
import ActionButton from "@/components/chapter04/list4/button/ActionButton";
import TextInput from "@/components/chapter04/list4/input/TextInput";

/**
 * メインのコンポーネント
 * InputSampleImage()
 * @returns 
 */
export default function InputSampleImage() {
    // 入力された名前を記憶するState(初期値は空文字)
    const [name, setName] = useState("");

    // ボタンを押した後のメッセージを記憶するState
    const [message, setMessage] = useState("名前を入力してください");

    // ボタンが押されたときの処理
    const handleClick = (): void => {
        // Stateに記憶されているnameを使ってメッセージを作成
        setMessage(`${name}さん、こんにちは！`);
    };

    return (
        <main className="p-4 max-w-sm mx-auto mt-10 border rounded shadow-sm bg-white">
            <h1 className="text-xl font-bold mb-4 border-b pb-2">入力コンポーネント</h1>

            {/* 
            作成したテキスト入力部品(ラベル、値、変更時の処理を渡す) 
            valueというPropsに、親コンポーネントのnameというstateを渡す
            */}
            <TextInput
                label="お名前"
                value={name}
                onChange={(newValue) => setName(newValue)}
            />

            <div className="mt-4">
                {/* 作成したボタン部品 */}
                <ActionButton label="挨拶する" onClick={handleClick} />
            </div>

            <p className="mt-6 text-gray-700 font-bold text-center text-lg text-blue-600">
                {message}
            </p>
        </main>
    );
}