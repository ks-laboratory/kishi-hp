// recent news追加はこちら
// 追加時は上に追加すること（ソートしないので）
// 上が最新

// img_urlは"assets/img/about/message_kishi.png"のようなassetsからの形式で記述
// 写真はassets/img/news/*に入れること
// newsの写真は500KB以下を目安に。それ以上の場合はMacのプレビュー等でリサイズしてから入れる
// 載せる写真がない場合はimg_urlにnullを設定

export const NEWS: {date: Date, title: string, en_title: string,
  abstract: string, en_abstract: string, detail: string, img_url: string}[] = [
// 最新はここの上に追加していく
{
  date: new Date('2020-3-13'),
  title: '「Master the Mainframeコンテスト」にて磯上が地域優秀賞を受賞',
  en_title: 'Isogami won the Regional Excellence Award at the Master the Mainframe Contest.',
  abstract: '「Master the Mainframeコンテスト」にて磯上が地域優秀賞を受賞しました。',
  en_abstract: 'Isogami won the Regional Excellence Award at the Master the Mainframe Contest. at 16, Mar, 2020',
  detail: 'プログラミングコンテスト「Master the Mainframeコンテスト」が開催されました。3月13日に受賞者が発表され、磯上が地域優秀賞を受賞しました。。',
  img_url: null,
},
{
  date: new Date('2020-3-5'),
  title: '全国大会に秋本、佐藤が参加',
  en_title: 'Akimoto and Sato participate in the national convention',
  abstract: '情報処理学会創立60周年記念第82回全国大会に秋本、佐藤が参加しました。',
  en_abstract: 'Akimoto and Sato participated in the 82nd National Convention of the IPSJ 60th Anniversary. at 5-7, Mar, 2020',
  detail: '3月5-7日、情報処理学会創立60周年記念第82回全国大会に秋本、佐藤が参加しました。秋本が「Cordovaハイブリッドアプリケーションにおけるプラグインに着目したリパッケージング攻撃の防御手法」、佐藤が「製品使用ログからの可変性マイニングによる運用プロファイル生成手法の提案」を発表しました。現地開催は注視され、オンライン開催となりました。',
  img_url: null,
},
{
  date: new Date('2020-1-5'),
  title: 'IWCT 2020にて西野の論文が受理',
  en_title: 'Nishino’s paper was accepted at IWCT 2020',
  abstract: 'IWCT 2020にて西野の論文が受理されました。',
  en_abstract: 'Nishino’s paper was accepted at IWCT 2020, at 5, Jan, 2020',
  detail: 'IWCT 2020にて西野の論文「Toward encoding approach to Interaction-based Test Suite Minimization」が受理されました。',
  img_url: null,
},
{
  date: new Date('2019-12-2'),
  title: 'APSEC 2019にて秋本が発表',
  en_title: 'Akimoto presented at APSEC 2019',
  abstract: '12月2-5日、マレーシアで開かれたAPSEC 2019 (The 26th Asia-Pacific Software Engineering Conference)にて秋本裕史が発表しました。',
  en_abstract: 'Hirohumi Akimoto presented at APSEC 2019 (The 26th Asia-Pacific Software Engineering Conference) held in Malaysia at 2-5, Dec, 2019',
  detail: '12月2-5日、マレーシアのプトラジャヤで開かれたAPSEC 2019 (The 26th Asia-Pacific Software Engineering Conference)にて秋本裕史が「A Prioritization Method for SPL Pairwise Testing based on User Profiles」を発表しました。',
  img_url: 'assets/img/news/news20191202.jpg',
},
{
  date: new Date('2019-11-30'),
  title: 'FOSE 2019にて西野が発表',
  en_title: 'Nishino presented at FOSE 2019',
  abstract: '11月30日、第26回ソフトウェア工学の基礎ワークショップ（FOSE2019）にて西野航平が発表しました。',
  en_abstract: 'Kohei Nishino presented at FOSE2019, at 30, Nov, 2019.',
  detail: '11月30日、第26回ソフトウェア工学の基礎ワークショップ（FOSE2019）にて西野航平が、「t-way法に基づくテスト集合最小化問題のアルゴリズム」を発表しました。',
  img_url: 'assets/img/news/news20191130.jpg',
},
{
  date: new Date('2019-11-30'),
  title: 'IEEEで磯上がYoung Researcher Awardを受賞',
  en_title: 'Isogami presented at IEEE Computer Society',
  abstract: '磯上がIEEE Cmputer Societyにて発表し、Young Researcher Awardを受賞しました。',
  en_abstract: `Yuto Isogami won the contest at IEEE Computer Society held on November 30,2019.`,
  detail: `2019/11/30、IEEE Computer Societyで磯上雄人が発表しました。
 M2の磯上の「Doc2Vecを利用したGUIテストクリプトのロケータ修正手法」が「IEEE Computer Society Japan Chapter FOSE Young Researcher Award」を受賞しました。`,
  img_url: 'assets/img/news/IEEE20191130.jpg',
},
{
  date: new Date('2019-11-23'),
  title: '秋合宿',
  en_title: 'Autumn camp',
  abstract: '11月23-24日、本庄セミナーハウスにて、秋合宿を行いました。',
  en_abstract: 'We held autumn camp in Honjo seminar house at Nov.23-24.',
  detail: '2019/11/23(Sat.)〜24(Sun.)、本庄セミナーハウスにて、秋合宿を行いました。今回の合宿では学部3年に対しての研究内容共有や進捗発表のほか、学部3年が5班に分かれ、「Arduino」を使った発表を行いました。夜には、宴会を開催し、親睦を深めました。`',
  img_url: 'assets/img/news/news20191123.jpg',
},
{
  date: new Date('2019-09-21'),
  title: '北陸先端大との合同合宿',
  en_title: 'We held camp with JAIST',
  abstract: '9/21-23、北陸先端大と合同で合宿を行いました。',
  en_abstract: 'We held camp with JAIST at Sep. 21-23.',
  detail: '2019/9/21(Sut.)~23(Mon.)、北陸先端大と合同で合宿を行いました。',
  img_url: 'assets/img/news/JAISTcamp.JPG',
},

{
  date: new Date('2019-08-29'),
  title: '日本ソフトウェア科学会第36回大会にて磯上が発表',
  en_title: 'Isogai presented at 36th Japan Software Science Society',
  abstract: '8/29、日本ソフトウェア科学会第36回にて磯上雄人が発表しました。',
  en_abstract: 'Isogai Yuto presented at 36th Japan Software Science Society at Aug. 29',
  detail: '8/29、日本ソフトウェア科学会第36回にて磯上雄人が「Doc2Vecを利用したGUIテストクリプトのロケータ修正の提案」を発表しました。',
  img_url: null,
},

{
  date: new Date('2019-08-25'),
  title: '本庄セミナーハウスにて夏合宿',
  en_title: 'We held summer camp in Honjo seminar house.',
  abstract: '8/25-27で、本庄セミナーハウスにて、夏合宿を行いました。',
  en_abstract: `We held summer camp in honjo seminar house at Aug. 25-27.`,
  detail: `2019/8/25(Sun.)〜27(Tue.)、本庄セミナーハウスにて、夏合宿を行いました。
  今回の合宿では研究内容の理解共有や進捗発表のほか、学部3年〜修士2年が3班に別れ、ユニラブの新たなアイディアを発表しました。
  修士1年はソフトウェア工学に関係するテーマで授業を行いました。夜には、バーベキューや宴会を開催し、親睦を深めました。`,
  img_url: 'assets/img/news/summer_camp2019.jpg',
},
    {
    date: new Date('2019-08-07'),
    title: '早稲田理工主催のユニラブにて岸研究室として出展',
    en_title: 'Kishi Laboratory exhibite at the University Laboratory.',
    abstract: '8/7に開催の早稲田理工主催のユニラブにて小学生向けのプログラミング教室を出展',
    en_abstract: `Kishi Laboratory exhibited programming classes for elementary school students
    on August 7 at the University Lablatory sponsored by "Faculty of Science and Engineering, Waseda University".`,
    detail: `2019/8/7(Wed.)、早稲田大学西早稲田キャンパスで毎年開催されている
    早稲田理工学術院主催のユニラブ(University Lablatory)にて、昨年に引き続き、小中学生の科学実験教室「ユニラブ」に
    プログラミング教育の分野で、岸研究室として3度目の出展を行い、沢山の小学生に楽しんでいただきました。
    小学3,4年生を対象に、ビジュアルプログラミングScratchを用いて、
    「君もプログラマになれる！-自分だけのゲームを作ろう-」として、約2時間のゲーム作り教室を実施しました。`,
    img_url: 'assets/img/news/news20190807.jpg',
    },
    {
    date: new Date('2019-03-26'),
    title: '2018年度卒業生(2019年3月卒) ご卒業おめでとうございます！',
    en_title: 'Congratulations on graduation! (Graduated from March 26th 2019)',
    abstract: '3/26に2018年度卒業生(2019年3月卒)を祝う追い出しコンパを開催しました。',
    en_abstract: `We held a party to celebrate graduates of 2018 (graduated from March 2019) on March 26.`,
    detail: `2019/3/26に2018年度卒業生(2019年3月卒)を祝う追い出しコンパをバトゥール東京にて開催しました。
    卒業生の方々、今まで本当にありがとうございました。
    ご卒業おめでとうございます！`,
    img_url: 'assets/img/news/news20190326.JPG',
    },
  {
    date: new Date('2019-02-21'),
    title: 'IBM主催の「Master the Mainframe」にて、磯上が最優秀賞を受賞',
    en_title: 'At the Master the Mainframe of IBM, Isogami is awarded.',
    abstract: '2018年9月〜12月に開催されたIBM主催の「Master the Mainframe」にて、磯上が最優秀賞に選ばれました。',
    en_abstract: `Yuti ISOGAMI won the contest at the Master the Mainframe of IBM held from September to December.`,
    detail: `2018年9月〜12月に開催されたIBM主催の「Master the Mainframe」にて、磯上が最優秀賞に選ばれました。
    このコンテストは大企業で使用される基幹システム「メインフレーム」のスキル習得および技術者の養成を目的として、世界中の学生を対象に毎年開催されています。`,
    img_url: 'assets/img/news/news20190221.jpg',
  },
  {
    date: new Date('2018-11-24'),
    title: '本庄セミナーハウスにて秋合宿',
    en_title: 'We held autumn camp in Honjo seminar house.',
    abstract: '11/24-25で、本庄セミナーハウスにて、秋合宿を行いました。',
    en_abstract: `We held autumn camp in Honjo seminar house at Nov. 24-25.`,
    detail: `2018/11/24(Sat.)〜25(Sun.)、本庄セミナーハウスにて、秋合宿を行いました。
    今回の合宿では学部3年に対しての研究内容共有や進捗発表のほか、学部3年が3班に分かれ、「Sphero」を使った発表を行いました。
    夜には、宴会を開催し、親睦を深めました。`,
    img_url: '/assets/img/news/news20181124.jpeg',
  },
  {
    date: new Date('2018-11-08'),
    title: '国際会議UEMCON 2018にて、2019年卒業生のシュが発表、Best Paper Awardを受賞',
    en_title: 'Shu presented at the 9th UEMCON 2018',
    abstract: '米ニューヨーク開催の国際会議UEMCON 2018にて、2019年卒業生のシュが発表し、Best Paper Awardを受賞',
    en_abstract: `Shu presented the paper at the 9th UEMCON 2018
       (Ubiquitous Computing, Electronics &
        Mobile Communication Conference) held on 11/8-10.
       【YunkangXu and TomojiKishi,
       An Ontology-Based IoT Communication Data Reduction Method】`,
    detail: `2018/11/8(Thu.)〜10(Sat.)、Columbia University, NY, USA.にて開催された国際会議The 9th IEEE Annual Ubiquitous Computing, Electronics &
    Mobile Communication Conference (UEMCON 2018) で、2018年卒業生のシュが 「YunkangXu and TomojiKishi,
    An Ontology-Based IoT Communication Data Reduction Method」を発表し、Best Paper Awardを受賞しました。`,
    img_url: null,
  },
  {
    date: new Date('2018-10-03'),
    title: 'B3が新たに8名加入',
    en_title: '8 new members joined.',
    abstract: '2018/10/3に新たに8名のB3が加わりました。',
    en_abstract: `8 new members joined at Oct 3.`,
    detail: `全体ゼミの後にはB3歓迎会が催され、B3と親睦を深めました。`,
    img_url: null,
  },
  {
    date: new Date('2018-08-23'),
    title: '軽井沢セミナーハウスにて夏合宿',
    en_title: 'We held summer camp in Karuizawa seminar house.',
    abstract: '8/21-23で、軽井沢セミナーハウスにて、夏合宿を行いました。',
    en_abstract: `We held summer camp in Karuizawa seminar house at Aug. 21-23.`,
    detail: `2018/8/21(Tue.)〜23(Thu.)、軽井沢セミナーハウスにて、夏合宿を行いました。
    今回の合宿では研究内容の理解共有や進捗発表のほか、学部3年〜修士2年が3班に別れ、「切替スイッチ」をテーマにアプリを製作・発表しました。
    修士1年はソフトウェア工学に関係するテーマで授業を行いました。夜には、バーベキューや宴会を開催し、親睦を深めました。`,
    img_url: 'assets/img/news/summer_camp2018.jpg',
  },
  {
    date: new Date('2018-08-07'),
    title: '今年も早稲田理工主催のユニラブに岸研究室として出展',
    en_title: 'Kishi Laboratory exhibited at the University Laboratory.',
    abstract: '8/7に開催の早稲田理工主催のユニラブにて小学生向けのプログラミング教室を出展しました。',
    en_abstract: `Kishi Laboratory exhibited at the University Laboratory at Aug. 07.`,
    detail: `2018/8/07(Tue.)、早稲田大学西早稲田キャンパスで毎年開催されている
    早稲田理工学術院主催のユニラブ(University Lablatory)に、プログラミング教育の分野で、
    岸研究室として2度目の出展を行い、沢山の小学生に楽しんでいただきました。
    ビジュアルプログラミングScratchを用いて、迷路作り教室を実施しました。`,
    img_url: 'assets/img/news/160A1403.jpg',
  },
  {
    date: new Date('2018-07-03'),
    title: '国際会議SEKE2018にて、2018年卒業生の大嶋が発表',
    en_title: 'Naito Oshima presented at the 30th SEKE 2018',
    abstract: '米サンフランシスコ開催の国際会議SEKE2018にて2018年卒業生の大嶋乃斗が発表しました。',
    en_abstract: `Naito OSHIMA presented the paper at the 30th SEKE 2018
       (Software Engineering & Knowledge Engineering) held on 7/1-3.
       【Naito Oshima, Tomoji Kishi, "Model Checking Method for SPA Page Transition Based on Component-based Framework," SEKE2018, pp.675-680】`,
    detail: `2018/7/1(Sun.)〜3(Tue.)、San Francisco の Redwood City にて開催された国際会議Software Engineering & Knowledge Engineering (SEKE2018) で、2018年卒業生の大嶋乃斗が 「Model Checking Method for SPA Page Transition Based on Component-based Framework」を発表しました。 【Naito Oshima, Tomoji Kishi, "Model Checking Method for SPA Page Transition Based on Component-based Framework," SEKE2018, pp.675-680】`,
    img_url: null,
  },
  {
    date: new Date('2018-03-24'),
    title: '2017年度卒業生(2018年3月卒) ご卒業おめでとうございます！',
    en_title: 'Congratulations on graduation! (Graduated from March 24th 2018)',
    abstract: '3/24に2017年度卒業生(2018年3月卒)を祝う追い出しコンパを開催しました。',
    en_abstract: `We held a party to celebrate graduates of 2017 (graduated from March 2018) on March 24.`,
    detail: `2018/3/24に2017年度卒業生(2018年3月卒)を祝う追い出しコンパを新宿ワシントンホテルにて開催しました。
    卒業生の方々、今まで本当にありがとうございました。
    ご卒業おめでとうございます！`,
    img_url: 'assets/img/news/news20180324.jpg',
  },
  {
    date: new Date('2018-03-20'),
    title: '岸研究室HPの大幅アップデート',
    en_title: 'Large scale update of Kishi lab\'s web site.',
    abstract: 'この岸研究室のホームページをAngularを用いたモダンなSPAに一新。スマートフォンにも対応しました。',
    en_abstract: 'We renewed the website of this laboratory to modern SPA using Angular. We also adapted it for browsing by smartphones.',
    detail: `岸研究室の本ホームページのデザインやコンテンツ等を大幅に更新しました。
    内部的な技術スタックは、従来はJavaScriptライブラリのjQueryなどを主に用いていましたが、
    フレームワークAngular(Angular2系,Angular5)を用いたモダンなSingle-Page Application(SPA)に一新しました。
    スマートフォン対応もしておりますので、ぜひお好きなデバイスでご覧ください。`,
    img_url: 'assets/img/news/news20180320.jpg',
  },
  {
    date: new Date('2018-03-15'),
    title: '情報処理学会第80回全国大会にてM1,M2の6名が発表、張が受賞',
    en_title: 'At the 80th National Convention of IPSJ, six people M1 and M2 presented.',
    abstract: '3/13-15の全国大会でエン,徐,中村,矢島(M1),木村,張(M2)が発表しました。M2の張が学生奨励賞を受賞しました。',
    en_abstract: `Yuen, Xu, Nakamura, Yajima (M1), Kimura and Zhang (M2) presented at
     the 80th National Convention of IPSJ held at 3 /13-15.`,
    detail: `2018/3/13(Tue.)〜15(Thu.)、早稲田大学西早稲田キャンパスにて開催された
    情報処理学会 第80回全国大会で、岸研究室から木村,張(M2)、YUAN,徐,中村,矢島(M1)が発表しました。
    M2の張カンウの「MDAアプローチを適用したスマートフォン・アプリケーション・プロトタイプ自動生成手法」が「学生奨励賞」を受賞しました。
    また、今回は早稲田大学開催ということもあり、岸研究室B3〜M2まで沢山の岸研究室メンバーが運営のお手伝いのアルバイトを行いました。`,
    img_url: 'assets/img/news/news20180318.jpg',
  },
  {
    date: new Date('2018-03-10'),
    title: '第198回ソフトウェア工学研究会(SIGSE)にて、M2の大嶋が発表',
    en_title: 'M2 Oshima presented at the 198th IPSJ SIGSE.',
    abstract: '3/9-10の第198回ソフトウェア工学研究発表会でM2大嶋乃斗が発表しました。',
    en_abstract: `Naito OSHIMA of M2 presented the paper at the 198th IPSJ SIGSE
     (SIG Software Engineering) held on 3/9-10.
     【大嶋乃斗,岸知二,"コンポーネント指向フレームワークを用いたSPAの画面遷移を対象とするモデル検査手法,"2018-SE-198, No.8, pp.1-7】`,
    detail: `2018/3/9(Fri.)〜10(Sat.)、芝浦工業大学豊洲キャンパスにて開催された
    第198回ソフトウェア工学研究会(SIGSE)で、M2の大嶋乃斗が
    「コンポーネント指向フレームワークを用いたSPAの画面遷移を対象とするモデル検査手法」を発表しました。
    【大嶋乃斗,岸知二,"コンポーネント指向フレームワークを用いたSPAの画面遷移を対象とするモデル検査手法,"2018-SE-198, No.8, pp.1-7】`,
    img_url: null,
  },
  {
    date: new Date('2018-02-06'),
    title: '【OB向け】開催予定のOB会中止のご連絡',
    en_title: '【For OB】Canceling OB meeting',
    abstract: '2018/2/10開催予定のOB会は諸事情により、中止とさせていただきます。',
    en_abstract: `The OB meeting that was scheduled to be held on February 10,
     2018 will be canceled due to various circumstances.`,
    detail: `大変申し訳ございませんが、2018/2/10に開催予定だったOB会は諸事情により、
    中止とさせていただきます。来年度以降の開催についても、決定次第、本HPのRecent News欄にて告知していく予定です。`,
    img_url: null,
  },
  {
    date: new Date('2017-11-25'),
    title: '第24回FOSE2017にて、M2の田中がポスター発表',
    en_title: 'At the 24th FOSE 2017, M2 Tanaka made the presentation at the poster session.',
    abstract: '11/23-25のFOSE2017でM2田中颯がポスター発表,岸教授がショートペーパー発表をしました。',
    en_abstract: `At the 24th FOSE 2017 held on 11 / 23-25, M2's Hayate TANAKA presented at the poster session.
     Prof. Kishi also made a presentation at the short paper session.`,
    detail: `2017/11/23(Thu.)〜25(Sat.)、福井県あわら温泉 清風荘にて開催された
    第24回ソフトウェア工学の基礎ワークショップ2017で 、M2の田中颯が
    「メトリクスの分布情報を考慮したFP予測手法」をポスター発表しました。
    岸教授もショートペーパーセッションにて、「フィーチャモデルの記述の妥当性に関する考察」の発表を行いました。
    【岸知二,野田夏子,"フィーチャモデルの記述の妥当性に関する考察,"FOSE2017, pp.195-200】`,
    img_url: null,
  },
  {
    date: new Date('2017-11-20'),
    title: '鴨川セミナーハウスにて秋合宿',
    en_title: 'We conducted the autumn camp in Kamogawa seminar house.',
    abstract: '11/18-19で、鴨川セミナーハウスにて、秋合宿を行いました。',
    en_abstract: `The autumn camp held at the Kamogawa seminar house on 11/18-19.`,
    detail: `11/18(Sat.),19(Sun.)、鴨川セミナーハウスにて、秋合宿を行いました。
    9月から新しく岸研究室に入ったB3を交えての初めての合宿でした。
    B3もProgrammableなRobotic BallであるSpheroを用いたお題の発表を行い、
    学生と教授の投票によるコンテストを開催しました。B4,M2は春口の修論・卒論に向け、
    研究内容の理解共有や進捗発表を行いました。新しく加入したB3と親睦を深める良い機会となりました。`,
    img_url: 'assets/img/news/news20171120.jpg',
  },
  {
    date: new Date('2017-08-12'),
    title: '本庄セミナーハウスにて夏合宿',
    en_title: 'We held summer camp in Honjo seminar house.',
    abstract: '8/9-11で、本庄セミナーハウスにて、夏合宿を行いました。',
    en_abstract: `We held summer camp in Honjo seminar house at 8/9-11.`,
    detail: `2017/8/9(Sat.)〜11(Sun.)、本庄セミナーハウスにて、夏合宿を行いました。
    本庄セミナーハウスはこの春2017年4月に新たに開設されたセミナーハウスのため、
    初めての本庄での合宿となりました。研究内容の理解共有や進捗発表のほか、
    M1による授業なども行いました。夜には、バーベキューや飲み会なども開催しました。
    また、2017年卒のOBの方も来ていただきました。ありがとうございました。`,
    img_url: 'assets/img/news/news20170812.png',
  },
  {
    date: new Date('2017-08-08'),
    title: '早稲田理工主催のユニラブにて岸研究室として初出展',
    en_title: 'Kishi Laboratory exhibited for the first time at the University Laboratory.',
    abstract: '8/8に開催の早稲田理工主催のユニラブにて小学生向けのプログラミング教室を初出展',
    en_abstract: `Kishi Laboratory exhibited programming classes for elementary school students
    for the first time on August 8 at the University Lablatory sponsored by "Faculty of Science and Engineering, Waseda University".`,
    detail: `2017/8/8(Tue.)、早稲田大学西早稲田キャンパスで毎年開催されている
    早稲田理工学術院主催のユニラブ(University Lablatory)にて、小中学生の科学実験教室「ユニラブ」に
    プログラミング教育の分野で、岸研究室として初の出展を行い、沢山の小学生に楽しんでいただきました。
    学生が中心となって企画し、小学3,4年生を対象に、ビジュアルプログラミングScratchを用いて、
    「君もプログラマになれる！-自分だけのゲームを作ろう-」として、約2時間のゲーム作り教室を実施しました。`,
    img_url: 'assets/img/news/news20170808.jpg',
  },
  {
    date: new Date('2017-03-24'),
    title: '2016年度卒業生(2017年3月卒) ご卒業おめでとうございます！',
    en_title: 'Congratulations on your graduation in 2016 (graduated in March 2017)!!',
    abstract: '3/24に2016年度卒業生(2017年3月卒)を祝う追い出しコンパを開催しました。',
    en_abstract: `We held a party to celebrate graduates of 2016 (graduated from March 2017) on March 24.`,
    detail: `2017/3/24に2016年度卒業生(2017年3月卒)を祝う追い出しコンパを
    新宿ワシントンホテルにて開催しました。卒業生の方、今まで本当にありがとうございました。
    ご卒業おめでとうございます！`,
    img_url: 'assets/img/news/news20170324.jpg',
  },
  {
    date: new Date('2017-03-19'),
    title: '情報処理学会第79回全国大会にてM1,M2の5名が発表、櫻井と大嶋の2人が受賞。',
    en_title: 'At the 79th National Convention of IPSJ, five presenters M1 and M2 presented their presentations, two were awarded.',
    abstract: '3/16-18開催の全国大会で大竹,櫻井(M2),大嶋,木村,張(M1)が発表し、櫻井と大嶋が受賞。',
    en_abstract: `Otake, Sakurai (M2), Oshima, Kimura and Zhang (M1)
     made a presentation at the 79th National Convention of IPSJ held on 3/16-18. Additionally, Sakurai and Oshima received the award.`,
    detail: `2017/3/16(Thu.)〜18(Sat.)、名古屋大学にて開催された
    情報処理学会 第79回全国大会で、岸研究室から、大竹,櫻井(M2)、大嶋,木村,張(M1)が発表しました。
    M2の櫻井佳樹「ソフトウェアの更新差分情報を用いたテストケース生成手法」とM1の大嶋乃斗「Ruby on Railsを対象としたモデル検査による画面遷移検証」
    の2人が「学生奨励賞」を受賞しました。`,
    img_url: null,
  },
  {
    date: new Date('2016-09-03'),
    title: 'SES2016の論文セッションでM1の田中が発表',
    en_title: 'Mr. Tanaka made a presentation at SES 2016 paper session.',
    abstract: '8/31-9/2開催のSES2016の論文セッションでM1の田中が発表しました。',
    en_abstract: `M1's Hayate TANAKA made a presentation at the SES 2016 paper session held at 8/31-9/2.`,
    detail: `2016/8/31(Wed.)〜9/2(Fri.)、東洋大学白山キャンパスにて開催した
    ソフトウェアエンジニアリングシンポジウム2016(IPSJ/SIGSE Software Engineering Symposium[SES2016])
    の9/1(Thu.)の「論文セッション：プロジェクト予測・分析」でM1の田中颯が
    「変更履歴を活用したFault-prone予測モデルの提案」を発表しました。`,
    img_url: null,
  },
  {
    date: new Date('2016-08-18'),
    title: 'SES2016の査読付シンポジウム論文にM1の田中が採択',
    en_title: 'Congratulations to tanaka\'s paper accepted by SES2016',
    abstract: '8/31-9/2開催予定のSES2016のシンポジウム論文にM1の田中が採択されました。',
    en_abstract: `The paper of Mr.Tanaka was accepted in the peer-reviewed symposium paper of
     SES 2016 scheduled to be held on 8/31-9/2.
      【田中颯,岸知二,"変更履歴を活用したFault-prone予測モデルの提案,"ソフトウェアエンジニアリングシンポジウム2016論文集,pp.42-49】`,
    detail: `2016/8/31(Wed.)〜9/2(Fri.)、東洋大学にて開催予定の
    ソフトウェアエンジニアリングシンポジウム2016(IPSJ/SIGSE Software Engineering Symposium[SES2016])
    の査読付きシンポジウム論文にM1の田中颯の「変更履歴を活用したFault-prone予測モデルの提案」が
    採択されました。9/1に論文セッションで発表予定です。
    【田中颯,岸知二,"変更履歴を活用したFault-prone予測モデルの提案,"ソフトウェアエンジニアリングシンポジウム2016論文集,pp.42-49】`,
    img_url: null,
  },
];
