"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

/**
 * 作成したページ一覧
 */
export default function GlobalNav() {
    return (
        <header className="border-b bg-white p-4">
            <div className="container mx-auto">
                <h1 className="text-xl font-bold mb-4">⭐⭐作成したページ一覧</h1>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
                        <CardHeader>
                            <CardTitle>🧮 計算機１（ラジオボタン）</CardTitle>
                            <CardDescription>
                                ラジオボタンで演算方法を選択する計算機です
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="hover:text-blue-900 hover:bg-blue-300 active:text-blue-900 w-full text-blue-900 bg-blue-200 border-blue-200">
                                <Link href="/chapter04/ex4-1">
                                    画面へ進む
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
                        <CardHeader>
                            <CardTitle>🔢 計算機２（プルダウン）</CardTitle>
                            <CardDescription>
                                プルダウンで演算方法を選択する計算機です
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="hover:text-blue-900 hover:bg-blue-300 active:text-blue-900 w-full text-blue-900 bg-blue-200 border-blue-200">
                                <Link href="/chapter04/ex4-2">
                                    画面へ進む
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
                        <CardHeader>
                            <CardTitle>📋 計算機３（shadcn/ui）</CardTitle>
                            <CardDescription>
                                shadcn/uiを使って作成した計算機です
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="hover:text-blue-900 hover:bg-blue-300 active:text-blue-900 w-full text-blue-900 bg-blue-200 border-blue-200">
                                <Link href="/chapter05/calc">
                                    画面へ進む
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
                        <CardHeader>
                            <CardTitle>🖱️ ボタン（shadcn/ui）</CardTitle>
                            <CardDescription>
                                shadcn/uiを使って作成したボタンです
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="hover:text-blue-900 hover:bg-blue-300 active:text-blue-900 w-full text-blue-900 bg-blue-200 border-blue-200">
                                <Link href="/chapter05/list5/button">
                                    画面へ進む
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
                        <CardHeader>
                            <CardTitle>🌼 プロフィール登録</CardTitle>
                            <CardDescription>
                                名前、勤務地、部署、好きな食べ物を登録します
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="hover:text-blue-900 hover:bg-blue-300 active:text-blue-900 w-full text-blue-900 bg-blue-200 border-blue-200">
                                <Link href="/chapter04/list4/profile" >
                                    画面へ進む
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
                        <CardHeader>
                            <CardTitle>✨ shadcn/ui</CardTitle>
                            <CardDescription>
                                shadcn/uiを使って製作したもの一覧です
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="hover:text-blue-900 hover:bg-blue-300 active:text-blue-900 w-full text-blue-900 bg-blue-200 border-blue-200">
                                <Link href="/chapter05/list5/nav-menu">
                                    画面へ進む
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </header>
    );
}