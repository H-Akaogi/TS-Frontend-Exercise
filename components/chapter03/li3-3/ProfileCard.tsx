/**
 * リスト3-3 コンポーネント間のデータ受け渡し
 */
// 受け取るデータのルール(型)を決める
type ProfileCardProps = {
    name: string; // 名前は文字列
    age: number;  // 年齢は数字
};

// 引数で{ name, age }を受け取り、型を指定する
export default function ProfileCard({ name, age }: ProfileCardProps) {
    return (
        <div className="border p-4 rounded shadow-sm mb-4 bg-white">
            <h2 className="text-lg font-bold">名前: {name}</h2>
            <p className="text-gray-600">年齢: {age}歳</p>
        </div>
    );
}