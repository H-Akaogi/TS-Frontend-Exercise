"use client";
/**
 * リスト4-7 UserCard(ユーザー一覧)コンポーネントの実装
 */

import UserCard, { User } from "@/components/chapter04/list4/list/UserCard";

export default function ListSamplePage() {
    // 表示するための配列データ(実務ではデータベースやAPIから取得する)
    const usersData: User[] = [
        { id: 1, name: "山田 太郎", role: "管理者" },
        { id: 2, name: "鈴木 花子", role: "一般ユーザー" },
        { id: 3, name: "佐藤 次郎", role: "ゲスト" },
        { id: 4, name: "田中 結衣", role: "一般ユーザー" },
    ];

    return (
        <main className="p-4 max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-800">
                メンバー一覧
            </h1>

            {/* 
                配列データをループ処理(map)して、部品を連続生成する
                gridとgap-4を使って、カードとカードの間に隙間をあけてきれいに並べる 
            */}
            <div className="grid gap-4">
                {usersData.map((user) => (
                    /* 
                       【重要ループで生成するコンポーネントには、絶対に一意の「key」を渡す
                      （配列のインデックス番号ではなく、データ自身のidを使うのが鉄則）
                    */
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </main>
    );
}