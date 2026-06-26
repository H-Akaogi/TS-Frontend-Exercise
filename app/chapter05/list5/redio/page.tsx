"use client";
/**
 * リスト5-4 ラジオボタン
 */
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioSample() {
    // 選択された値を管理するState（初期値は"apple"）
    const [fruit, setFruit] = useState<string>("apple");

    return (
        <div className="p-8">
            <h3 className="mb-4 font-bold">好きなフルーツは？</h3>

            {/* RadioGroup本体：onValueChangeでStateを更新する */}
            <RadioGroup value={fruit} onValueChange={setFruit}>

                {/* 選択肢1 */}
                <div className="flex items-center space-x-2">
                    {/* RadioGroupItemのValueが、選択時にStateに保存される値 */}
                    <RadioGroupItem value="apple" id="apple" />
                    {/* LabelのhtmlForとItemのidを一致させる（文字クリックで選択） */}
                    <Label htmlFor="apple">りんご</Label>
                </div>

                {/* 選択肢2 */}
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="banana" id="banana" />
                    <Label htmlFor="banana">ばなな</Label>
                </div>
            </RadioGroup>
            <p className="mt-4 text-sm text-gray-500">選択中: {fruit}</p>
        </div>
    );
}