"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle, // 💡 リンクの見た目を作るための関数
} from "@/components/ui/navigation-menu";
/**
 * リスト5-9 ナビゲーションメニュー
 */
export default function GlobalNav() {
    return (
        <header className="border-b bg-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-xl font-bold">商品管理システム</h1>

                <NavigationMenu>
                    <NavigationMenuList>

                        {/* 商品登録 */}
                        <NavigationMenuItem>
                            {/* navigationMenuTriggerStyle() を適用することで、綺麗な余白とホバー効果がつく */}
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/products/new">商品登録</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* 商品一覧 */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/products/list">一覧表示</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}