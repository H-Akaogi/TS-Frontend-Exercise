"use client";

import { useState } from "react";
import ActionButton from "@/components/chapter04/list4/button/ActionButton";
import TextInput from "@/components/chapter04/list4/input/TextInput";
import RadioGroupInput from "@/components/chapter04/list4/input/RadioGroupInput";
import SelectInput from "@/components/chapter04/list4/select/SelectInput";
import CheckboxGroupInput from "@/components/chapter04/list4/check/CheckboxGroupInput";

export default function ProfilePage() {
    // 1. 名前【入力】
    const [name, setName] = useState("");
    const [message1, setMessage1] = useState("プロフィール")

    // 2. 血液型【ラジオボタン】
    const [message2, setMessage2] = useState("")
    const [bloodType, setBlood] = useState("血液型を選択")
    const bloodOptions = [
        { value: "A", label: "A型" },
        { value: "B", label: "B型" },
        { value: "O", label: "O型" },
        { value: "AB", label: "AB型" },
        { value: "unknown", label: "不明" },
    ];
    // 3. 星座
    const [message3, setMessage3] = useState("")
    const [zodiacSign, setZodiacSign] = useState("1");
    const zodiacSignOptions = [
        { value: "1", label: "おひつじ座" },
        { value: "2", label: "おうし座" },
        { value: "3", label: "ふたご座" },
        { value: "4", label: "かに座" },
        { value: "5", label: "しし座" },
        { value: "6", label: "おとめ座" },
        { value: "7", label: "てんびん座" },
        { value: "8", label: "さそり座" },
        { value: "9", label: "いて座" },
        { value: "10", label: "やぎ座" },
        { value: "11", label: "みずがめ座" },
        { value: "12", label: "うお座" },
    ]
    // 4. 好きな食べ物
    const [message4, setMessage4] = useState("")
    const [food, setFood] = useState<string[]>([]);
    const foodOptions = [
        { value: "curry", label: "カレー" },
        { value: "ramen", label: "ラーメン" },
        { value: "sushi", label: "寿司" },
        { value: "pizza", label: "ピザ" },
        { value: "yakiniku", label: "焼肉" },
    ]
    // メッセージ
    const handleClick = (): void => {
        const selectedZodiac = zodiacSignOptions.find(
            (option) => option.value === zodiacSign
        );

        const selectedFoods = foodOptions
            .filter((option) => food.includes(option.value))
            .map((option) => option.label);

        setMessage1(`名前：${name}`);
        setMessage2(`血液型：${bloodType}型`);
        setMessage3(`星座：${selectedZodiac?.label}`);
        setMessage4(`好きな食べ物：${selectedFoods.join("、")}`);
    }

    return (
        <main className="p-4 max-w-sm mx-auto mt-10 border rounded shadow-sm bg-white">
            <h1 className="text-xl font-bold mb-4 border-b pb-2">プロフィールの登録</h1>

            {/* 名前 */}
            <TextInput
                label="お名前"
                value={name}
                onChange={(newValue) => setName(newValue)}
            />

            {/* 血液型 */}
            <RadioGroupInput
                label="血液型"
                name="bloodType" // HTMLとしてグループ化するための名前(任意の英数字)
                options={bloodOptions}
                value={bloodType}
                onChange={(newValue) => setBlood(newValue)}
            />

            {/* 星座 */}
            <SelectInput
                label="星座"
                options={zodiacSignOptions}
                value={zodiacSign}
                onChange={(newValue) => setZodiacSign(newValue)}
            />

            {/* 好きな食べ物 */}
            <CheckboxGroupInput
                label="好きな食べ物"
                options={foodOptions}
                values={food}
                onChange={(newValue) => setFood(newValue)}
            />

            <div className="mt-6 p-4 bg-gray-50 rounded border text-gray-700 font-bold">
                <p>現在のStateの値：</p>
                <p className="text-blue-600 ml-2">✏️{name}</p>
                <p className="text-blue-600 ml-2">✏️{bloodType}</p>
                <p className="text-blue-600 ml-2">✏️{zodiacSign}</p>
                <p className="text-blue-600 ml-2">✏️{food}</p>
            </div>

            <div className="mt-4 text-center">
                {/* 作成したボタン部品 */}
                <ActionButton label="登録" onClick={handleClick} />
            </div>
            <div className="mt-6 text-gray-700 font-bold text-center text-lg text-blue-600">
                <p>⭐{message1}</p>
                <p>⭐{message2}</p>
                <p>⭐{message3}</p>
                <p>⭐{message4}</p>
            </div>
        </main>
    );
}