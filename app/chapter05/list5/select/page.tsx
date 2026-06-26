"use client";

import { useState } from "react";
// 必要な部品をすべてインポートする
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function SelectSample() {
    // 選択された値を管理するState（初期値は空文字）
    const [framework, setFramework] = useState<string>("");

    return (
        <div className="p-8">
            <h3 className="mb-4 font-bold">好きなフレームワークは？</h3>

            {/* Select本体：onValueChangeでStateを更新する */}
            <Select value={framework} onValueChange={setFramework}>

                {/* トリガー部分（普段画面に表示されているボタン） */}
                <SelectTrigger className="w-[180px]">
                    {/* 選択されていない時に表示する薄い文字（プレースホルダー） */}
                    <SelectValue placeholder="選択してください" />
                </SelectTrigger>

                {/* コンテンツ部分(クリックすると開くドロップダウンの中身) */}
                <SelectContent>
                    {/* 各選択肢（valueに設定した値がStateに保存される) */}
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue.js</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                </SelectContent>

            </Select>

            {/* 選択された結果の表示 */}
            <p className="mt-4 text-sm text-gray-500">
                現在の選択値: {framework}
            </p>
        </div>
    );
}