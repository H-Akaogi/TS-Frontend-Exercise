"use client";
/**
 * ラジオボタンバージョン
 */
type RadioOption = {
    value: number,
    label: string
};

type RadioGroupInputProps = {
    label: string;
    name: string;
    options: RadioOption[]
    value: number;
    onChange: (value: number) => void;
};

export default function RadioGroupInput({ label, name, options, value, onChange }: RadioGroupInputProps) {
    return (
        <div className="mb-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            {/* 選択肢を横並び(flex)で配置 */}
            <div className="gap-4">
                {options.map((opt) => (
                    <label key={opt.value} className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            name={name} // すべての選択肢に同じnameを指定してグループ化
                            value={opt.value}
                            // 現在のState(value)と、このラジオボタンのvalueが同じならON(true)にする
                            checked={value === opt.value}
                            onChange={(e) => onChange(Number(e.target.value))}
                            className="mr-2 cursor-pointer"
                        />
                        <span className="text-gray-700">{opt.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}