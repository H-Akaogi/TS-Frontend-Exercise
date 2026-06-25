"use client";

/**
 * 演習 4-1 計算機を作成する(加算機能のみ)
 * 計算ページ
 */
import ActionButton from "@/components/chapter04/ex4-1/button/ActionButton";
import NumberInput from "@/components/chapter04/ex4-1/input/NumberInput";
import { useState } from "react";
// 追加
import SelectInput from "@/components/chapter04/list4/select/SelectInput";

export default function CalculatorPage() {
    // 1. 入力値を記憶するState（初期値を 0 に設定）
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    // 2. 計算方法を記憶するState（初期値を「選択してください」に設定
    const [calc, setCalc] = useState("選択してください");
    const CalcOptions = [
        { value: "+", label: "+ (足し算)" },
        { value: "-", label: "- (引き算)" },
        { value: "×", label: "× (掛け算)" },
        { value: "÷", label: "÷ (割り算)" }
    ]
    // 2. 計算結果を記憶するState（初期値を 0 に設定）
    const [result, setResult] = useState(0);

    // 計算ボタンが押された時の処理
    const handleCalculate = () => {
        let sum = 0;
        if (calc === "+") {
            sum = num1 + num2;
        }
        else if (calc === "-") {
            sum = num1 - num2;
        }
        else if (calc === "×") {
            sum = num1 * num2;
        }
        else if (calc === "÷") {
            sum = num1 / num2;
        }
        // 子部品(NumberInput)が確実に数値で渡してくれるため、シンプルに足し算できる
        //const sum = num1 + num2;
        setResult(sum);
    };

    return (
        <main className="p-4 max-w-sm mx-auto mt-10 border rounded shadow-sm bg-white">
            <h1 className="text-xl font-bold mb-4 border-b pb-2">計算機</h1>

            {/* 数値入力専用コンポーネントを2つ配置 */}
            <NumberInput label="数値1" value={num1} onChange={(val) => setNum1(val)} />
            <NumberInput label="数値2" value={num2} onChange={(val) => setNum2(val)} />
            <SelectInput
                label="計算方法"
                options={CalcOptions}
                value={calc}
                onChange={(newValue) => setCalc(newValue)}
            />
            <div className="mt-4 mb-6">
                <ActionButton label="計算する" onClick={handleCalculate} isRounded={true} />
            </div>

            <p className="text-gray-700 font-bold text-lg">
                計算結果：<span className="text-blue-600">{result}</span>
            </p>
        </main>
    );
}