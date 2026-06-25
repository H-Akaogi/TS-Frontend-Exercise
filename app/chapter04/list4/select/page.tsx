"use client";
/**
 * リスト4-4 SelectInput(プルダウン)コンポーネントの実装
 */
import SelectInput from "@/components/chapter04/list4/select/SelectInput";
import { useState } from "react";

export default function SelectSamplePage() {
    // 選択された値を記憶するState(初期値は空文字)
    const [drink, setDrink] = useState("");

    // プルダウンに渡す「選択肢」のデータ(配列)を用意する
    const drinkOptions = [
        { value: "coffee", label: "コーヒー" },
        { value: "tea", label: "紅茶" },
        { value: "juice", label: "オレンジジュース" },
    ];

    return (
        <main className="p-4 max-w-sm mx-auto mt-10 border rounded shadow-sm bg-white">
            <h1 className="text-xl font-bold mb-4 border-b pb-2">プルダウンの基本</h1>
            {/* 自作したプルダウン部品に、選択肢(options)とStateを渡す */}
            <SelectInput
                label="好きな飲み物"
                options={drinkOptions}
                value={drink}
                onChange={(newValue) => setDrink(newValue)}
            />

            <div className="mt-6 p-4 bg-gray-50 rounded border">
                <p className="text-gray-700 font-bold">
                    現在のStateの値：
                    <span className="text-blue-600 ml-2">
                        {drink || "未選択"}
                    </span>
                </p>
            </div>
        </main>

    );
}