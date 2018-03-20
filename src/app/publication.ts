// 論文から学会発表、国際会議、全国大会、ポスター発表を含む
// STUDENTSとはJSON形式が異なるので注意

// 最新のを追加する場合は上にObject型の配列で格納追加すること

// ポスター発表の場合はtitleの最後に(ポスター発表) をつけ、nameにもポスター番号などを記載
// ex) メトリクスの分布情報を考慮したFP予測手法(ポスター発表)
// 第24回ソフトウェア工学の基礎ワークショップ(FOSE2017), P-07

// こちらのyearは実際の年で記述
// ex) 2018年開催 -> 年度にかかわらず全て2018年


// 新しい年度時にはここに年度を追加を忘れずに
export const PUBLICATIONYEARRANGE: number[] = [
  2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009,
];


// 論文追加はこちら
// 上に追加してくこと！！
export const PUBLICATIONS: {year: number, author: string, title: string, name: string}[] = [
  {
    year: 2018,
    author: '大嶋乃斗, 岸知二',
    title: 'コンポーネント指向フレームワークを用いたSPAの画面遷移を対象とするモデル検査手法',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2018-SE-198, No.8, pp.1-7'
  },
  {
    year: 2018,
    author: 'SHICHONGYUAN, 岸知二',
    title: '多目的最適化手法を用いたテストケース優先度決定手法',
    name: '情報処理学会第80回全国大会論文集, pp.(公開予定)'
  },
  {
    year: 2018,
    author: '徐運康, 岸知二',
    title: 'SSNオントロジに基づくエッジ側での効率的なIoTデータフィルタリング手法',
    name: '情報処理学会第80回全国大会論文集, pp.(公開予定)'
  },
  {
    year: 2018,
    author: '中村将仁, 岸知二',
    title: 'IoTシステムのゲートウェイにおける実行履歴を利用した運用プロファイル生成手法',
    name: '情報処理学会第80回全国大会論文集, pp.(公開予定)'
  },
  {
    year: 2018,
    author: '矢島大嗣, 岸知二',
    title: 'IoTにおけるエッジ側アクセス規制のセキュリティ検証',
    name: '情報処理学会第80回全国大会論文集, pp.(公開予定)'
  },
  {
    year: 2018,
    author: '木村健太, 岸知二',
    title: '貢献度を用いた共通ゴール判別手法の提案',
    name: '情報処理学会第80回全国大会論文集, pp.(公開予定)'
  },
  {
    year: 2018,
    author: '張唅宇, 岸知二',
    title: 'MDAアプローチを適用したスマートフォン・アプリケーション・プロトタイプ自動生成手法',
    name: '情報処理学会第80回全国大会論文集, pp.(公開予定)'
  },
  {
    year: 2017,
    author: 'Hosoai, Shintaro; Noda, Natsuko; Kishi, Tomoji',
    title: 'System product line engineering for small appliances with driver derivation',
    name: 'Proceedings - Asia-Pacific Software Engineering Conference(APSEC), pp.389-392'
  },
  {
    year: 2017,
    author: '岸知二',
    title: 'ソフトウェアモデルにおける有用性優先についての考察',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2017-SE-197, No.10, pp.1-5'
  },
  {
    year: 2017,
    author: '田中颯, 岸知二',
    title: 'メトリクスの分布情報を考慮したFP予測手法(ポスター発表)',
    name: '第24回ソフトウェア工学の基礎ワークショップ(FOSE2017), P-07(ポスター発表)'
  },
  {
    year: 2017,
    author: '岸知二',
    title: 'フィーチャモデル記述の妥当性に関する考察',
    name: '第24回ソフトウェア工学の基礎ワークショップ(FOSE2017), pp.195-200'
  },
  {
    year: 2017,
    author: '大嶋乃斗, 岸知二',
    title: 'Ruby on Rails を対象としたモデル検査による画面遷移検証',
    name: '情報処理学会第79回全国大会論文集, pp.261-262 【学生奨励賞】'
  },
  {
    year: 2017,
    author: '木村健太, 岸知二',
    title: 'テスト順序を考慮したペアワイズ法によるテストケース生成手法',
    name: '情報処理学会第79回全国大会論文集, pp.369-370'
  },
  {
    year: 2017,
    author: '張カンウ, 岸知二',
    title: 'スマートフォン特有の操作性に注目した GUI のモデル駆動開発手法',
    name: '情報処理学会第79回全国大会論文集, pp.331-332'
  },
  {
    year: 2017,
    author: '大竹　遼, 岸知二',
    title: 'BLE 接続による柔軟なセンサ連携手法の提案',
    name: '情報処理学会第79回全国大会論文集, pp.359-360'
  },
  {
    year: 2017,
    author: '櫻井佳樹, 岸知二',
    title: 'ソフトウェアの更新差分情報を用いたテストケース生成手法',
    name: '情報処理学会第79回全国大会論文集, pp.371-372 【学生奨励賞】'
  },
  {
    year: 2016,
    author: '田中颯, 岸知二',
    title: '変更履歴を活用したFault-prone予測モデル(ポスター発表)',
    name: '第23回ソフトウェア工学の基礎ワークショップ(FOSE2016), P-03(ポスター発表)'
  },
  {
    year: 2016,
    author: '田中颯, 岸知二',
    title: '変更履歴を活用したFault-prone予測モデルの提案',
    name: 'ソフトウェアエンジニアリングシンポジウム2016論文集, pp.42-49'
  },
  {
    year: 2016,
    author: '野田夏子, 小笠原秀人, 岸知二',
    title: 'SPL開発と派生開発',
    name: 'ソフトウェアエンジニアリングシンポジウム2016論文集, pp.262-263'
  },
  {
    year: 2016,
    author: '岸知二, 野田夏子',
    title: '近似化によるフィーチャモデルからの製品導出法',
    name: '知能ソフトウェア工学研究会(KBSE), 2016-41, pp.13-18'
  },
  {
    year: 2016,
    author: '岸知二, 野田夏子',
    title: 'SPLの近似的製品導出における近似度に関する考察',
    name: 'ソフトウェア工学の基礎ワークショップ, FOSE2016, XXIII, pp.169-174'
  },
  {
    year: 2016,
    author: '城谷まりな, 岸知二',
    title: 'SPL開発におけるペアワイズ法を用いたテスト手法について',
    name: '情報処理学会第78回全国大会論文集, pp.319-320 【学生奨励賞】'
  },
  {
    year: 2016,
    author: '北村宗大, 岸知二',
    title: 'Fault-Proneモジュール予測を利用した効率的な上位テスト手法の提案',
    name: '情報処理学会第78回全国大会論文集, pp.327-328'
  },
  {
    year: 2016,
    author: '宮里章太, 岸知二',
    title: 'API利用における設計構造のパターンマイニング手法について',
    name: '情報処理学会第78回全国大会論文集, pp.391-392 【学生奨励賞】'
  },
  {
    year: 2015,
    author: '岸知二, 高松幸平',
    title: 'フィーチャモデルの近似化と製品導出コストに関する考察',
    name: '知能ソフトウェア工学研究会(KBSE), 2015-55, pp43-37'
  },
  {
    year: 2015,
    author: '宮里章太, 岸知二',
    title: 'API利用に関するパターンマイニング手法について',
    name: '情報処理学会第77回全国大会論文集, pp.319-320'
  },
  {
    year: 2015,
    author: '城谷まりな, 岸知二',
    title: 'SPLのためのフィーチャ組合せテスト手法に関する考察',
    name: '情報処理学会第77回全国大会論文集, pp.343-344'
  },
  {
    year: 2015,
    author: '北村宗大, 岸知二',
    title: '再利用資産を利用した効率的なテストケース生成手法の提案',
    name: '情報処理学会第77回全国大会論文集, pp.345-346'
  },
  {
    year: 2015,
    author: 'ALI HOKROH, 岸知二',
    title: 'WebアプリケーションのGUIを対象としたMBT手法の提案',
    name: '情報処理学会第77回全国大会論文集, pp.393-394 【学生奨励賞】'
  },
  {
    year: 2015,
    author: '降籏裕太, 岸知二',
    title: 'OpenFlowコントローラの負荷を考慮した同期手法の提案',
    name: '情報処理学会第77回全国大会論文集, pp.159-160'
  },
  {
    year: 2015,
    author: '岸知二, 野田夏子',
    title: 'SPLにおける近似的製品導出に関する一考察',
    name: 'ソフトウェア工学の基礎ワークショップ, FOSE2015, XXII, pp.115-120'
  },
  {
    year: 2014,
    author: '野田夏子, 岸知二',
    title: 'アスペクト指向を利用したアーキテクチャ設計に関する考察',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2014-SE-186(17)'
  },
  {
    year: 2014,
    author: '野田夏子, 岸知二',
    title: 'プロダクトライン開発における可変性のモデル化手法',
    name: 'コンピュータソフトウェア, Vol.31(No.4),p.66-76'
  },
  {
    year: 2014,
    author: '岸知二, 川島優樹, 野田夏子',
    title: '近似的モデリングアーキテクチャに関する考察',
    name: 'ソフトウェアエンジニアリングシンポジウム2014論文集, pp.152-157'
  },
  {
    year: 2014,
    author: '岸知二, 宮里章太, 野田夏子',
    title: '近似的構成管理について',
    name: '研究報告ソフトウェア工学（SE）, 2014-SE-186'
  },
  {
    year: 2014,
    author: '大迫正和, 岸知二',
    title: 'アスペクト指向技術に基づいたOpenFlow制御プログラムの開発支援',
    name: '情報処理学会第76回全国大会論文集, pp.329-330'
  },
  {
    year: 2014,
    author: '川嶋優樹, 岸知二',
    title: '可変性モデル間の製品バリエーション不均衡に関するメトリクスの提案',
    name: '情報処理学会第76回全国大会論文集, pp.435-436'
  },
  {
    year: 2014,
    author: '牧隆史, 岸知二',
    title: 'プロダクトライン開発におけるアーキテクチャリファクタリングの意思決定法',
    name: '情報処理学会論文誌55(2), pp.1069-1078'
  },
  {
    year: 2013,
    author: '永野寛丸, 岸知二',
    title: 'ソフトウェアプロダクトラインにおける非機能特性を考慮した製品導出支援手法の提案',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2013-SE-182, no.13, pp.1-8'
  },
  {
    year: 2013,
    author: '岸知二',
    title: '近似的モデリングメカニズムについての考察',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2013-SE-181, pp.1-7'
  },
  {
    year: 2013,
    author: '権藤晃徳, 岸知二',
    title: 'メタモデル進化に対するモデル変換共進化手法',
    name: 'ソフトウェアエンジニアリングシンポジウム2013予稿集, pp.1-8'
  },
  {
    year: 2013,
    author: '野田夏子, 岸知二',
    title: 'プロダクトライン開発における検証',
    name: 'コンピュータソフトウェア, Vol.30(No.3), pp.3-17'
  },
  {
    year: 2013,
    author: '岸知二, 細合晋太郎',
    title: 'ソフトウェア工学の共通問題とは',
    name: '情報処理Vol.54(No.9), pp.878-881'
  },
  {
    year: 2013,
    author: '岸知二, 野田夏子',
    title: 'ソフトウェア工学の共通問題',
    name: '情報処理Vol.54(No.9), pp.876-877'
  },
  {
    year: 2012,
    author: '岸知二',
    title: '近似的モデリング技法についての考察',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2012-SE-177, no.34'
  },
  {
    year: 2012,
    author: '権藤晃徳, 岸知二',
    title: 'メタモデル進化を考慮したモデル変換開発手法の提案',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2012-SE-178, no.28, pp.1-8'
  },
  {
    year: 2012,
    author: '井上尚紀, 岸知二',
    title: 'コードからの抽象ユーザインタフェース情報抽出手法',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2012-SE-178, no.27, pp.1-8'
  },
  {
    year: 2012,
    author: '緑川達也, 岸知二',
    title: '重み付き有向グラフを用いたセンサ隣接関係の自動推定手法',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2012-SE-178, no.15, pp.1-5'
  },
  {
    year: 2012,
    author: '石井良亮, 岸知二',
    title: 'GUIアプリケーションのテスト駆動開発の一手法',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2012-SE-178, no.9, pp.1-6'
  },
  {
    year: 2012,
    author: '川井彬央,　岸知二',
    title: 'モデル検査技術を用いたユースケース記述分析手法の提案',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2012-SE-178, no.4, pp.1-7'
  },
  {
    year: 2011,
    author: '岸知二',
    title: 'スケーラブルなモデリング技法に関する考察',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2011-SE-173, No.10, pp.1-8'
  },
  {
    year: 2011,
    author: '岸知二',
    title: 'ソフトウェアモデル間のスケーラブルな整合化戦略について',
    name: 'ソフトウェア工学の基礎XVIII日本ソフトウェア科学会FOSE2011, pp.97-102'
  },
  {
    year: 2011,
    author: '井上尚紀, 岸知二',
    title: 'GUIを考慮したMDA開発手法の提案',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2011-SE-172, pp.1-8'
  },
  {
    year: 2010,
    author: 'Tomoji Kishi',
    title: 'Scalable Modeling Techniques for Software Product Lines',
    name: '2nd Workshop on Scalable Modeling Techniques for Software Product Lines'
  },
  {
    year: 2010,
    author: 'Tomoji Kishi and Natsuko Noda',
    title: 'New Challenge of Scalable Modeling',
    name: 'the second proc. of SPLC2010, pp.191-192'
  },
  {
    year: 2010,
    author: 'Takashi Maki and Tomoji Kishi',
    title: 'Problem Factor Analysis for Product Line Architecture Refactoring',
    name: '17th Asia-Pacific Software Engineering Conference (APSEC 2010) 【Best Industry Paper Award】'
  },
  {
    year: 2010,
    author: '岸知二',
    title: 'モデル検査のための設計モデル構築手法に関する考察',
    name: 'ソフトウェア工学研究会(SIGSE), Vol2010-SE-168, No.9, pp1-6, 2010'
  },
  {
    year: 2009,
    author: '岸知二',
    title: 'ソフトウェア設計・検証手法に関する考察～モデリンの観点より～',
    name: 'ソフトウェア工学研究会(SIGSE), Vol.2009-SE-165, No.5, pp1-5, 2009'
  },
  {
    year: 2009,
    author: '朝倉功太,岸知二',
    title: '想定モデリングに基づくソフトウェアプロダクトラインのコア資産検証手法',
    name: '情報処理学会組込みシステムシンポジウム2009(ESS2009), pp169-177'
  },
  {
    year: 2009,
    author: 'Tomoji Kishi and Kyo Chul Kang',
    title: 'Scalable Modeling Techniques for Software Product Lines (SCALE 2009)',
    name: 'proceedings of SPLC2009, pp.299-299'
  },
  {
    year: 2009,
    author: 'Natsuko Noda and Tomoji Kishi',
    title: 'Aspect-oriented Modeling for Variability Management',
    name: '12th International Software Product Line Conference (SPLC2008), pp.213-222'
  }
]
