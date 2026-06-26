"use client";

import * as React from "react";
import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from "@/components/ui/item";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

export default function NavigationMenuPage() {
    return (
        <div className="flex min-h-screen flex-col gap-8 p-6">
            <div className="flex justify-start">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>shadcn/ui</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-96">
                                    <ListItem href="/chapter05/list5/button" title="ボタン">
                                        ボタンコンポーネントの表示とクリック操作を確認します。
                                    </ListItem>
                                    <ListItem href="/chapter05/list5/check" title="チェックボックス">
                                        複数の選択肢からチェックして選ぶ入力部品です。
                                    </ListItem>
                                    <ListItem href="/chapter05/list5/radio" title="ラジオボタン">
                                        複数の選択肢から1つだけ選ぶ入力部品です。
                                    </ListItem>
                                    <ListItem href="/chapter05/list5/select" title="選択">
                                        プルダウン形式で選択肢を表示する部品です。
                                    </ListItem>
                                    <ListItem href="/chapter05/list5/input" title="入力">
                                        テキスト入力欄の見た目と入力操作を確認します。
                                    </ListItem>
                                    <ListItem href="/chapter05/list5/list" title="カード">
                                        情報をカード形式で見やすく表示します。
                                    </ListItem>
                                    <ListItem href="/chapter05/list5/table" title="テーブル">
                                        データを表形式で整理して表示します。
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="hidden md:flex">
                            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">Docs</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="mx-auto flex w-full max-w-md flex-col gap-6">
                <Item variant="outline">
                    <ItemContent>
                        <ItemTitle>ボタン</ItemTitle>
                        <ItemDescription>
                            クリック操作を行うボタンコンポーネントの表示例です。
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/chapter05/list5/button">
                                開く
                            </Link>
                        </Button>
                    </ItemActions>
                </Item>

                <Item variant="outline">
                    <ItemContent>
                        <ItemTitle>チェックボックス</ItemTitle>
                        <ItemDescription>
                            複数の選択肢を選べるチェックボックスの表示例です。
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/chapter05/list5/check">
                                開く
                            </Link>
                        </Button>
                    </ItemActions>
                </Item>

                <Item variant="outline">
                    <ItemContent>
                        <ItemTitle>ラジオボタン</ItemTitle>
                        <ItemDescription>
                            複数の選択肢から1つだけ選ぶラジオボタンの表示例です。
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/chapter05/list5/radio">
                                開く
                            </Link>
                        </Button>
                    </ItemActions>
                </Item>

                <Item variant="outline">
                    <ItemContent>
                        <ItemTitle>選択</ItemTitle>
                        <ItemDescription>
                            プルダウンから項目を選択するセレクトボックスの表示例です。
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/chapter05/list5/select">
                                開く
                            </Link>
                        </Button>
                    </ItemActions>
                </Item>

                <Item variant="outline">
                    <ItemContent>
                        <ItemTitle>入力</ItemTitle>
                        <ItemDescription>
                            文字を入力するためのテキスト入力欄の表示例です。
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/chapter05/list5/input">
                                開く
                            </Link>
                        </Button>
                    </ItemActions>
                </Item>

                <Item variant="outline">
                    <ItemContent>
                        <ItemTitle>カード</ItemTitle>
                        <ItemDescription>
                            情報をまとまりごとに整理して表示するカードの表示例です。
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/chapter05/list5/list">
                                開く
                            </Link>
                        </Button>
                    </ItemActions>
                </Item>

                <Item variant="outline">
                    <ItemContent>
                        <ItemTitle>テーブル</ItemTitle>
                        <ItemDescription>
                            複数のデータを行と列で整理して表示するテーブルの表示例です。
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/chapter05/list5/table">
                                開く
                            </Link>
                        </Button>
                    </ItemActions>
                </Item>
            </div>
        </div>
    );
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">{title}</div>
                        <div className="line-clamp-2 text-muted-foreground">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    );
}