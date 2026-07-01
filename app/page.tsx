"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { toast } from "sonner";
/**
 * 演習 7-5 ログアウト機能を実装する
 * インポートを変更する（signOut を追加）
 */
import { useSession, signOut } from "next-auth/react";

export default function MenuPage() {
  /**
   * 演習 7-4 ログインUIを作成し、ログイン可能にする
   */
  // 追加：セッションの認証状態(status)のみを取得
  const { status } = useSession();
  // 追加: ログイン中かどうかを判定
  const isAuthenticated = status === "authenticated";

  // スピナー表示
  const router = useRouter();
  const [loadingPath, setLoadingPath] = useState<string | null>(null);
  // ログアウト中かどうかを管理するState
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  // 画面遷移時に呼び出す関数
  const handleNavigate = (path: string) => {
    setLoadingPath(path);
    router.push(path);
  };

  // ログアウト時に呼び出す関数
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut({
        redirect: false,
      });

      toast.success("ログアウトしました。");

      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("ログアウトに失敗しました。");
      setIsLoggingOut(false);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // 他のボタンを押せないようにするための判定
  const isAnyLoading = loadingPath !== null || isLoggingOut;

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">

      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">トップメニュー</h1>
        <p className="text-gray-500">操作したいメニューを選択してください</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* 変更： 未ログイン時のみ表示：ログイン */}
        {!isAuthenticated && (
          <Card className="hover:shadow-lg transition-shadow border-blue-200">
            <CardHeader>
              <CardTitle className="font-bold">🔐 ログイン</CardTitle>
              <CardDescription>システムにログインします</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="hover:text-blue-900 hover:bg-blue-300 active:text-blue-900 w-full text-blue-900 bg-blue-200 border-blue-200"
                disabled={isAnyLoading}
                onClick={() => handleNavigate("/api/auth/login")}
              >
                {loadingPath === "/api/auth/login" && (
                  <Spinner className="mr-2 h-4 w-4" />
                )}
                ログイン画面へ
              </Button>
            </CardContent>
          </Card>
        )}

        {/* 変更： ログイン中のみ表示：ログアウト */}
        {isAuthenticated && (
          <Card className="hover:shadow-lg transition-shadow border-red-100">
            <CardHeader>
              <CardTitle className="font-bold">🌙 ログアウト</CardTitle>
              <CardDescription>システムから安全にログアウトします</CardDescription>
            </CardHeader>
            <CardContent>
              {/* LinkからButtonに変更して、signOut()関数を呼び出す */}
              <Button
                variant="outline"
                className="w-full border-red-200 text-red-600 hover:bg-red-50"
                disabled={isAnyLoading}
                onClick={handleLogout}
              >
                {isLoggingOut && (
                  <Spinner className="mr-2 h-4 w-4" />
                )}
                {isLoggingOut ? "ログアウト中..." : "ログアウト"}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* メニュー3：ユーザー登録 */}
        <Card className="hover:shadow-lg transition-shadow  border-blue-200 bg-white">
          <CardHeader>
            <CardTitle className="font-bold">🌱 ユーザー登録</CardTitle>
            <CardDescription>新しいユーザーをシステムに登録します</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full"
              disabled={loadingPath !== null}
              onClick={() => handleNavigate("/api/users/register")}
            >
              {loadingPath === "/api/users/register" && (
                <Spinner className="mr-2 h-4 w-4" />
              )}
              ユーザー登録画面へ
            </Button>
            {/*  
            <Button asChild variant="outline" className="w-full">
              <Link href="/api/users/register">ユーザー登録画面へ</Link>
            </Button>
            */}
          </CardContent>
        </Card>

        {/* メニュー4：商品キーワード検索 */}
        <Card className="hover:shadow-lg transition-shadow  border-blue-200 bg-white">
          <CardHeader>
            <CardTitle className="font-bold">🔎 商品キーワード検索</CardTitle>
            <CardDescription>登録されている商品をキーワードで検索します</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="hover:text-blue-900 hover:bg-blue-300 active:text-blue-900 w-full text-blue-900 bg-blue-200 border-blue-200"
              disabled={loadingPath !== null}
              onClick={() => handleNavigate("/api/products/search")}
            >
              {loadingPath === "/api/products/search" && (
                <Spinner className="mr-2 h-4 w-4" />
              )}
              検索画面へ
            </Button>
            {/*
            <Button asChild className="hover:text-blue-900 hover:bg-blue-300 active:text-blue-900 w-full text-blue-900 bg-blue-200 border-blue-200">
              <Link href="/api/products/search">検索画面へ</Link>
            </Button>
            */}
          </CardContent>
        </Card>

        {/* メニュー5：商品登録 */}
        <Card className="hover:shadow-lg transition-shadow  border-blue-200 bg-white">
          <CardHeader>
            <CardTitle className="font-bold">📦 商品の登録</CardTitle>
            <CardDescription>新しい商品をシステムに登録します</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="hover:text-blue-900 hover:bg-blue-300 active:text-blue-900 w-full text-blue-900 bg-blue-200 border-blue-200"
              disabled={isAnyLoading}
              onClick={() => handleNavigate("/api/products/register")}
            >
              {loadingPath === "/api/products/register" && (
                <Spinner className="mr-2 h-4 w-4" />
              )}
              登録画面へ進む
            </Button>
            {/*
            <Button asChild className="hover:text-blue-900 hover:bg-blue-300 active:text-blue-900 w-full text-blue-900 bg-blue-200 border-blue-200">
              <Link href="/api/products/register">登録画面へ進む</Link>
            </Button>
            */}
          </CardContent>
        </Card>

        {/* メニュー6：商品変更 */}
        <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
          <CardHeader>
            <CardTitle className="font-bold">🪄 商品の変更</CardTitle>
            <CardDescription>登録済みの商品情報を変更・更新します</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="secondary"
              className="w-full"
              disabled={isAnyLoading}
              onClick={() => handleNavigate("/api/products/update")}
            >
              {loadingPath === "/api/products/update" && (
                <Spinner className="mr-2 h-4 w-4" />
              )}
              変更画面へ進む
            </Button>
            {/*
            <Button asChild variant="secondary" className="w-full">
              <Link href="/api/products/update">変更画面へ進む</Link>
            </Button>
            */}
          </CardContent>
        </Card>

      </div>
    </div>
  );
}