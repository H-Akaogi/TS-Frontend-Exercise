/**
* 演習 6-2 データアクセスとサービスを実装する
* DIコンテナ用の識別子(Symbol)定義
* インスタンスに名前(Symbol)を付ける
*/
export const TYPES = {
    // I...インターフェース名: Symbol.for("クラスの識別名")
    // インフラストラクチャ層
    IProductRepository: Symbol.for("IProductRepository"),
    // サービス(ユースケース)層
    ISearchProductService: Symbol.for("ISearchProductService")
};