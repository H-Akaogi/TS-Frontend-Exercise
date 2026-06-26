"use client";
/**
 * リスト5-5 チェックボックス
 */
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxSample() {
    // チェック状態を管理するState（初期値はfalse=未チェック）
    const [agreed, setAgreed] = useState<boolean>(false);

    return (
        <div className="p-8">

            {/* 横並びにするためのコンテナ */}
            <div className="flex items-center space-x-2">

                {/* Checkbox本体 */}
                <Checkbox
                    id="terms"
                    // 現在の状態(true/false)をcheckedに渡す
                    checked={agreed}
                    // チェックが切り替わったときに、onCheckedChangeが呼ばれる
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />

                {/* Labelとの連携（文字クリックでON/OFF可能に */}
                <Label htmlFor="terms">利用規約に同意する</Label>

            </div>

            <p className="mt-4 text-sm text-gray-500">
                同意状態: {agreed ? "はい" : "いいえ"}
            </p>
        </div>
    )
}