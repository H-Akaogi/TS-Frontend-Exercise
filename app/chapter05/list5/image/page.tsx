// 💡 next/image からインポートする(shadcn/uiではない)
import Image from "next/image";
/**
 * リスト5-8 イメージ
 */
export default function ImageSample() {
    return (
        <div className="p-8">
            <h3 className="font-bold mb-4">基本の画像表示</h3>

            {/* HTMLの<img>ではなく<Image>を使う */}
            <Image
                src="/globe.svg"     // publicフォルダ直下にある画像パス
                alt="地球" // 画像が表示されない時のテキスト（必須）
                width={256}          // 幅（必須）
                height={144}          // 高さ（必須）
                className="rounded-xl shadow-md" // Tailwindで角丸や影もつけられる
            />
        </div>
    );
}