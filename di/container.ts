import { IProductRepository } from "@/interfaces/IProductRepository";
import { ISearchProductService } from "@/interfaces/ISearchProductService";
import { Container } from "inversify";
import { TYPES } from "./types";
import { MockProductRepository } from "@/infrastructures/MockProductRepository";
import { SearchProductService } from "@/services/SearchProductService";

/**
 * 演習 6-2 データアクセスとサービスを実装する
 * DIコンテナの初期化と依存関係の登録
 * 「このSymbolが呼ばれたら、このクラスを渡す」というルール
 */
// Container(DIコンテナ本体)の生成
const container = new Container();
// ---------------------------------------------------------
// バインディング（登録）設定
// container.bind<インターフェース名>(TYPES.Symbol名: bindメソッドで登録するSymbolを定義).to(紐付けるリポジトリ: 登録するインターフェース実装クラス)
// ---------------------------------------------------------
// リポジトリの登録(モック版を紐付ける)
container.bind<IProductRepository>(TYPES.IProductRepository).to(MockProductRepository);
// サービス(ユースケース)の登録
container.bind<ISearchProductService>(TYPES.ISearchProductService).to(SearchProductService);

export { container };