{/* コンポーネントを表示したい画面の先頭で、該当するcomponentのファイルをimportする */ }
import WelcomeMessage from "@/components/chapter03/ex3-1/WelcomeMessage";
export default function Home() {
  return (
    <main className="text-center">
      {/* 独自のHTMLタグのように配置する */}
      <WelcomeMessage />
    </main>
  );
}