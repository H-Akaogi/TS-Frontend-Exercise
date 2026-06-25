"use client";
/**
 * リスト4-7 UserCard(ユーザー一覧)コンポーネントの実装
 */

// 1人分のユーザーデータのルール(型)
export type User = {
    id: number;
    name: string;
    role: string;
};

// コンポーネントが受け取るPropsのルール
type UserCardProps = {
    user: User; // User型のデータを丸ごと受け取る
};

export default function UserCard({ user }: UserCardProps) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-gray-800">
                        {user.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                        {user.role}
                    </p>
                </div>
                {/* IDをバッジのように右側に表示 */}
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    ID: {user.id}
                </span>
            </div>
        </div>
    );
}