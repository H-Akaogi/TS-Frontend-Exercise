import WelcomeMessage from "@/components/chapter03/WelcomeMessage";
export default function Home() {
  return (
    <main className="text-center">
      {/* 独自のHTMLタグのように配置する */}
      <WelcomeMessage />
    </main>
  );
}