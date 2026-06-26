import { injectable, inject } from "inversify";
import type { ISearchProductService } from "../interfaces/ISearchProductService";
import type { IProductRepository } from "../interfaces/IProductRepository";
import type { Product } from "@/models/Product";
import { TYPES } from "@/di/types";
/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 商品キーワード検索サービスインターフェイスの実装
 */
// @injectable()デコレータを付与: SearchProductServiceクラスはDIコンテナの管理対象
@injectable()
export class SearchProductService implements ISearchProductService {

    /**
     * コンストラクタ
     * @param productRepository IProductRepositoryの実装をインジェクションする
     * @inject(識別子)の付与により、必要なインターフェースをコンストラクタの引数として受け取る
     * コンストラクタの引数と変数を同時に記述している
     * [@inject(TYPES.IProductRepository)...] :DIコンテナに登録されたIProductRepositoryが必要なのでインジェクションしてください
     * [...private productRepository: IProductRepository] :IProductRepositoryをproductRepository変数に代入してください
     */
    constructor(
        @inject(TYPES.IProductRepository) private productRepository: IProductRepository
    ) { }

    /**
     * 商品検索を実行する
     * @param keyword 検索キーワード
     * @returns 検索結果の商品のリスト
     * 非同期処理asyncのため、Promiseを返す
     */
    public async execute(keyword: string): Promise<Product[]> {
        // ユースケース固有のビジネスロジックをここに記述可能
        return await this.productRepository.searchKeyword(keyword);
    }
}