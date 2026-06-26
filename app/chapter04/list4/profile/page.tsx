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

    // 2. 勤務地【ラジオボタン】
    const [message2, setMessage2] = useState("")
    const [areaType, setArea] = useState("");
    const areaOptions = [
        { value: "渋谷", label: "渋谷" },
        { value: "STC", label: "STC" },
        { value: "上野", label: "上野" },
        { value: "目黒", label: "目黒" },
        { value: "その他", label: "その他" },
    ];
    // 3. 部署
    const [message3, setMessage3] = useState("")
    const [department, setDepartment] = useState("1");
    const departmentOptions = [
        { value: "1", label: "開発本部" },
        { value: "2", label: "人事部" },
        { value: "3", label: "総務部" },
        { value: "4", label: "営業部" },
        { value: "5", label: "マーケティング部" },
        { value: "6", label: "法務部" },
        { value: "7", label: "企画部" },
        { value: "8", label: "その他" },
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
        const selectedDept = departmentOptions.find(
            (option) => option.value === department
        );

        const selectedFoods = foodOptions
            .filter((option) => food.includes(option.value))
            .map((option) => option.label);

        setMessage1(`名前：${name}`);
        setMessage2(`勤務地：${areaType}`);
        setMessage3(`部署：${selectedDept?.label}`);
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

            {/* 勤務地 */}
            <div className="mt-4">
                <Label className="text-base">勤務地</Label>
                <RadioGroup
                    value={areaType}
                    onValueChange={(newValue) => setArea(newValue)}
                    className="flex mt-2"
                >
                    {areaOptions.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem
                                id={`area-${option.value}`}
                                value={option.value}
                            />
                            <Label htmlFor={`area-${option.value}`}>
                                {option.label}
                            </Label>

                        </div>
                    ))}
                </RadioGroup>
            </div>



            {/* 部署
            shadcn/uiのSelectを使用 */}
            {/* Label: htmlForはidと対応 */}
            <div className="mt-4">
                <Label htmlFor="department" className="text-base">部署</Label>
                <div>
                    {/* Select: shadcn/uiのセレクトボックス
            onValueChangeで、選ばれた部署のvalueをdepartmentに保存する */}
                    <Select value={department} onValueChange={(newValue) => setDepartment(newValue)}>
                        {/* SelectTrigger: セレクトボックスの押す部分 */}
                        <SelectTrigger id="department">
                            {/* SelectValue: 選択中の値を表示する部分 */}
                            <SelectValue placeholder="部署を選択" />
                        </SelectTrigger>

                        {/* SelectContent: クリックしたときに開く選択肢一覧の部分
                .map(): 配列の中身を1つずつ変換する処理 */}
                        <SelectContent>
                            {departmentOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {/* SelectItem: 画面に表示する文字 */}
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
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
                <p className="text-blue-600 ml-2">✏️{areaType}</p>
                <p className="text-blue-600 ml-2">✏️{department}</p>
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