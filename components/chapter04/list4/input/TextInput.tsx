/**
 * リスト4-3 TextInputコンポーネントの実装
 */
"use client";

// 受け取るデータのルール
type TextInputProps = {
    label: string; // 入力欄の上に表示されるラベル文字
    value: string; // 現在の入力値(Stateの値)
    onChange: (value: string) => void; // 文字が入力されたときに実行する関数。イベントは絶対に戻り値voidになる
};

// コンポーネントの実装
export default function TextInput({ label, value, onChange }: TextInputProps) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                type="text"
                value={value}
                // e.target.valueに入力された文字が入っている
                // eはイベントオブジェクト：イベントを表し、イベントハンドラに渡すデータなどを保持している
                onChange={(e) => onChange(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
}