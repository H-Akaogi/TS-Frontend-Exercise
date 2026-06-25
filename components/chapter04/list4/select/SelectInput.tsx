"use client";

/**
 * リスト4-4 SelectInput(プルダウン)コンポーネントの実装
 */

// 選択肢1つ分のデータのルール(型)
type Option = {
    value: string; // プログラムで扱う型(例："apple")
    label: string; // 画面に表示する文字(例："りんご")
};

// コンポーネントが受け取るPropsのルール
type SelectInputProps = {
    label: string;  // 見出し
    options: Option[];  // 選択肢の配列データ
    value: string;  // 現在選択されている値
    onChange: (value: string) => void; // 値が変更されたときに実行する関数【アロー関数・コールバック関数】
};

/**
 * SelectInput関数
 * @param label 見出し
 * @param options 配列データ
 * @param value 選択された値
 * @param onChange コールバック関数 
 */
export default function SelectInput({ label, options, value, onChange }: SelectInputProps) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            >
                <option value="">選択してください</option>
                {/* 配列データ(options)をループ処理(map)して、<option>タグを自動生成する */}
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
