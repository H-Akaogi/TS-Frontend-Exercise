import ProfileCard from "@/components/chapter03/li3-3/ProfileCard";
export default function UserListPage() {
    return (
        // max-w-md でカードの幅を制限し、mx-auto で左右の中央に配置します
        // mt-10 でヘッダーとの間に適度な余白を開けます
        <main className="max-w-md mx-auto mt-10 p-4">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                ユーザー一覧
            </h1>

            {/* 同じ部品（子）に、親から違うデータ（Props）を渡して使い回す！ */}
            <ProfileCard name="フルネス 太郎" age={25} />
            <ProfileCard name="React 花子" age={28} />
            <ProfileCard name="Next 次郎" age={22} />
        </main>
    );
}