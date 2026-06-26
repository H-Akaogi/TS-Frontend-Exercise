// 💡 Tableに関連するすべての部品をインポートする
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
/**
 * リスト5-7 テーブル
 */
// 表示したいデータ
const users = [
    { id: 1, name: "山田 太郎", email: "yamada@example.com", role: "管理者" },
    { id: 2, name: "鈴木 花子", email: "suzuki@example.com", role: "一般" },
    { id: 3, name: "佐藤 次郎", email: "sato@example.com", role: "一般" },
];

export default function TableSample() {
    return (
        <div className="p-8">
            <h2 className="text-xl font-bold mb-6">ユーザー一覧</h2>

            {/* Table本体：表全体を囲む */}
            <Table>
                {/* 表のキャプション（アクセシビリティのためにも推奨） */}
                <TableCaption>システムに登録されているユーザーの一覧です。</TableCaption>

                {/* 表のヘッダー（見出し部分） */}
                <TableHeader>
                    <TableRow>
                        {/* TableHead は見出し用のセル（太字になったりする） */}
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>名前</TableHead>
                        <TableHead>メールアドレス</TableHead>
                        <TableHead>権限</TableHead>
                    </TableRow>
                </TableHeader>

                {/* 表のボディ（データ部分） */}
                <TableBody>
                    {/* 💡配列データをmap()でループ処理して行(TableRow)を生成 */}
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            {/* TableCell はデータ用のセル */}
                            <TableCell className="font-medium">{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}