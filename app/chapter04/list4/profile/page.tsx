"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
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
    const [bloodType, setBlood] = useState("");
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

            {/* 名前
            shadcn/uiのLabel、Inputを使用 */}
            <div className="mt-4">
                <Label htmlFor="name" className="text-base">お名前</Label>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="名前を入力..."
                />
            </div>

            {/* 血液型 */}
            <div className="mt-4">
                <Label className="text-base">血液型</Label>
                <RadioGroup
                    value={bloodType}
                    onValueChange={(newValue) => setBlood(newValue)}
                    className="flex mt-2"
                >
                    {bloodOptions.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem
                                id={`blood-${option.value}`}
                                value={option.value}
                            />
                            <Label htmlFor={`blood-${option.value}`}>
                                {option.label}
                            </Label>

                        </div>
                    ))}
                </RadioGroup>
            </div>



            {/* 星座
            shadcn/uiのSelectを使用 */}
            {/* Label: htmlForはidと対応 */}
            <div className="mt-4">
                <Label htmlFor="zodiacSign" className="text-base">星座</Label>
                {/* Select: shadcn/uiのセレクトボックス
            onValueChangeで、選ばれた星座のvalueをzodiacSignに保存する */}
                <Select value={zodiacSign} onValueChange={(newValue) => setZodiacSign(newValue)}>
                    {/* SelectTrigger: セレクトボックスの押す部分 */}
                    <SelectTrigger id="zodiacSign">
                        {/* SelectValue: 選択中の値を表示する部分 */}
                        <SelectValue placeholder="星座を選択" />
                    </SelectTrigger>

                    {/* SelectContent: クリックしたときに開く選択肢一覧の部分
                .map(): 配列の中身を1つずつ変換する処理 */}
                    <SelectContent>
                        {zodiacSignOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {/* SelectItem: 画面に表示する文字 */}
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* 好きな食べ物 */}
            <div className="mt-4">
                <Label htmlFor="food" className="text-base">好きな食べ物</Label>
                <div className="mt-2 flex flex-wrap gap-4">
                    {foodOptions.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                            <Checkbox
                                id={`food-${option.value}`}
                                // 現在の状態(true/false)をcheckedに渡す
                                checked={food.includes(option.value)}
                                // チェックが切り替わったときに、onCheckedChangeが呼ばれる
                                onCheckedChange={(checked) => {
                                    if (checked) {
                                        setFood([...food, option.value]);
                                    } else {
                                        setFood(
                                            food.filter((value) => value !== option.value)
                                        );
                                    }
                                }}
                            />
                            <Label htmlFor={`food-${option.value}`}>
                                {option.label}
                            </Label>
                        </div>
                    ))}

                </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded border text-gray-700 font-bold">
                <p>現在のStateの値：</p>
                <p className="text-blue-600 ml-2">✏️{name}</p>
                <p className="text-blue-600 ml-2">✏️{bloodType}</p>
                <p className="text-blue-600 ml-2">✏️{zodiacSign}</p>
                <p className="text-blue-600 ml-2">✏️{food}</p>
            </div>

            <div className="mt-4 text-center">
                {/* 作成したボタン部品 */}
                <Button variant="secondary" onClick={handleClick}> 登録</Button>

            </div>
            <div className="mt-6 text-gray-700 font-bold text-center text-lg text-blue-600">
                <p>⭐{message1}</p>
                <p>{message2}</p>
                <p>{message3}</p>
                <p>{message4}</p>
            </div>
        </main>
    );
}