/**
 * 演習 3-1 WelcomeMessageコンポーネントを作成する
 * プロジェクトフォルダにcomponentsフォルダを作成して配置する
 * exportを記述して、ページなどから呼び出せるようにする
 */
/* ページ本体となる関数はexport default function 関数名(){...}で公開する */
export default function WelcomeMessage() {
    return (
        /* classではなくclassNameを使う */
        <div className="text-center my-4">
            <p className="text-3xl">2026年06月24日(水)</p>
            <p className="text-4xl my-4">⛅15:50⛅</p>
            <h1 className="text-2xl">ようこそ</h1>
            <img
                src="/globe.svg"
                alt="globe"
                /* {}を使うことで、TypeScriptの変数や計算式を埋め込むことができる */
                width={100}
                className="mx-auto my-4"
            />
            <p>⭐初めてのReactコンポーネントです⭐</p>

            <p className="mt-4 text-sm">✏️演習 3-1 WelcomeMessageコンポーネントを作成する</p>

            <ul className="text-sm text-left inline-block">
                <li>✅ コンポーネントの作成</li>
                <li>✅ 画像の表示</li>
            </ul>

        </div>
    );
}