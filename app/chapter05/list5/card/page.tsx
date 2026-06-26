import { Button } from "@/components/ui/button";
// 💡 Cardに関連するすべての部品をインポートする
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function CardSample() {
    return (
        <div className="p-8 bg-slate-50 min-h-screen">

            {/* Card本体：全体の枠線、角丸、影をつける */}
            {/* w-[350px] でカードの横幅を指定 */}
            <Card className="w-[350px] mx-auto mt-10">

                {/* ヘッダー部分：見出しと補足説明 */}
                <CardHeader>
                    <CardTitle>ログイン</CardTitle>
                    <CardDescription>
                        アカウント情報を入力してログインしてください。
                    </CardDescription>
                </CardHeader>

                {/* コンテンツ部分：メインの中身（入力フォームなど） */}
                <CardContent>
                    <p className="text-sm text-gray-500 text-center py-4">
                        （ここに入力欄などのフォーム部品が入ります）
                    </p>
                </CardContent>

                {/* フッター部分：アクションボタンなど */}
                {/* flex justify-between でボタンを左右に配置できる */}
                <CardFooter className="flex justify-between">
                    <Button variant="outline">キャンセル</Button>
                    <Button>ログイン</Button>
                </CardFooter>
            </Card>
        </div>
    );
}