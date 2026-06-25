import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputDemo() {
    return (
        <div className="p-8 max-w-sm">
            <h2 className="text-2xl font-bold mb-6">ユーザー登録フォーム</h2>

            {/* 項目間の余白を空けるための div */}
            <div className="space-y-2">
                {/* htmlFor と id を "email" で一致させるのが重要！ */}
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                    type="email"
                    id="email"
                    placeholder="taro@example.com"
                />
            </div>
        </div>
    );
}