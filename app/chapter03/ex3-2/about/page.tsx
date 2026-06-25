/**
 * 演習 3-2 Rootレイアウトを作成する
 * アバウトページ
 */
/* ページ本体となる関数はexport default function 関数名(){...}で公開する */
/* 関数名は「画面の内容+Page()」とする */
export default function AboutPage() {
    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">アバウトページ</h1>
            <p>/chapter03/ex3-2/aboutのURLに対応するページです。</p>
            <p>Next.jsのファイルベースルーティングによって表示されています。</p>
        </main>
    );
}