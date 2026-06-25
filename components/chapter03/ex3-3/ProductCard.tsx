/**
 * 演習 3-3 データ受け渡しできるコンポーネントを作成する
 * 商品カードコンポーネント
 */
// 受け取るデータのルール（商品名、価格）を決める
type ProductCardProps = {
    title: string; // 商品名は文字列
    price: number; // 価格は数字
};

/**
 * ProductCardというReactコンポーネントを定義する
 * @param title 商品名 (受け取った商品名がreturnで表示される)
 * @param price 価格 (受け取った価格がreturnで表示される)
 * @returns ProductCardPropsを返す
 */
export default function ProductCard({ title, price }: ProductCardProps) {
    // このコンポーネントが画面に表示するJSXを返す(画面の見た目)
    return (
        <div className="border border-gray-300 p-4 rounded-md shadow-sm mb-4 bg-white flex justify-between items-center">
            <h2 className="text-lg font-bold text-blue-700">{title}</h2>
            {/* 
                toLocaleString: 数値や日付を「地域に合った形式の文字列」に変換するメソッド 
                カンマが3桁ごとにつく(3,000など)
            */}
            <p className="text-xl font-semibold text-gray-800">¥{price.toLocaleString()}</p>
        </div>
    );
}