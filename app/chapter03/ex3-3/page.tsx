/**
 * 演習 3-3 データ受け渡しできるコンポーネントを作成する
 * 商品一覧ページ
 */
// ProductCardコンポーネントを読み込む (@はプロジェクトのルートからのパス)
import ProductCard from "@/components/chapter03/ex3-3/ProductCard";
// export degault: このファイルのメインのコンポーネントとして外に出す
export default function ProductListPage() {

    // ProductCardコンポーネントが画面に表示するJSXを返す
    // max-w-md でカードの幅を制限し、mx-auto で左右の中央に配置します
    // mt-8 でヘッダーとの間に適度な余白を開けます
    return ( // returnの後ろは改行しないで(を付ける
        <main className="max-w-md mx-auto mt-8 p-4 bg-gray-50 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-6 text-center border-b pb-2">
                今週のおすすめ商品
            </h1>

            {/* 同じ部品（子）に、親から違うデータ（Props=properties）を渡して使い回す！ */}
            <ProductCard title="高性能ノートPC" price={145000} />
            <ProductCard title="ワイヤレスイヤホン" price={12800} />
            <ProductCard title="メカニカルキーボード" price={8500} />
        </main>
    );
}