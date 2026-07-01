import type { Card, DeckGroup } from './types';

const rawData = `
1. **Front:** 判断
**Back:** はんだん (handan) — qaror chiqarish / judgment
2. **Front:** 影響
**Back:** えいきょう (eikyō) — ta'sir / influence
3. **Front:** 状況
**Back:** じょうきょう (jōkyō) — vaziyat, holat / situation
4. **Front:** 解決
**Back:** かいけつ (kaiketsu) — hal qilish / resolution
5. **Front:** 確認
**Back:** かくにん (kakunin) — tasdiqlash, tekshirish / confirmation
6. **Front:** 経験
**Back:** けいけん (keiken) — tajriba / experience
7. **Front:** 成長
**Back:** せいちょう (seichō) — o'sish, rivojlanish / growth
8. **Front:** 努力
**Back:** どりょく (doryoku) — harakat, tirishish / effort
9. **Front:** 競争
**Back:** きょうそう (kyōso) — raqobat / competition
10. **Front:** 目標
**Back:** もくひょう (mokuhyō) — maqsad / goal/target
11. **Front:** 重要
**Back:** じゅうよう (jūyō) — muhim, zaruriy / important
12. **Front:** 支援
**Back:** しえん (shien) — yordam, qo'llab-quvvatlash / support
13. **Front:** 決定
**Back:** けってい (kettei) — qaror, hal / decision
14. **Front:** 改善
**Back:** かいぜん (kaizen) — yaxshilash, tuzatish / improvement
15. **Front:** 段階
**Back:** だんかい (dankai) — bosqich, dar'aja / stage
16. **Front:** 活動
**Back:** かつどう (katsudō) — faoliyat, harakat / activity
17. **Front:** 基本
**Back:** きほん (kihon) — asos, negiz / basics
18. **Front:** 方法
**Back:** ほうほう (hōhō) — usul, yo'l / method
19. **Front:** 関係
**Back:** かんけい (kankei) — bog'lanish, munosabat / relationship
20. **Front:** 現実
**Back:** げんじつ (genjitsu) — haqiqat, voqelik / reality
21. **Front:** 利益
**Back:** りえき (rieki) — foyda, manfaat / profit
22. **Front:** 危険
**Back:** きけん (kiken) — xavf, xطرnaк / danger
23. **Front:** 継続
**Back:** けいぞく (keizoku) — davom etish / continuation
24. **Front:** 調査
**Back:** ちょうさ (chōsa) — tadqiqot, tekshirish / investigation
25. **Front:** 資料
**Back:** しりょう (shiryō) — material, hujjat / material
26. **Front:** 担当
**Back:** たんとう (tantō) — mas'ul, javobgar / in charge
27. **Front:** 予算
**Back:** よさん (yosan) — byudjet, taqqoslash / budget
28. **Front:** 管理
**Back:** かんり (kanri) — boshqarish, nazorat / management
29. **Front:** 要求
**Back:** ようきゅう (yōkyゅう) — talab, arzu / demand
30. **Front:** 対象
**Back:** たいしょう (taishō) — maqsam, ob'ekt / target
31. **Front:** 組織
**Back:** そしき (soshiki) — tashkilot, tuzilma / organization
32. **Front:** 制度
**Back:** せいど (seido) — sistema, tartib / system
33. **Front:** 原因
**Back:** げんいん (gen'in) — sabab, manba / cause
34. **Front:** 結果
**Back:** けっか (kekka) — natija, natijaviy / result
35. **Front:** 問題
**Back:** もんだい (mondai) — muammo, savollar / problem
36. **Front:** 対応
**Back:** たいおう (taiō) — javob, munosabat / response
37. **Front:** 報告
**Back:** ほうこく (hōkoku) — xabar, ma'lumot / report
38. **Front:** 適切
**Back:** てきせつ (tekisetsu) — mos, to'g'ri / appropriate
39. **Front:** 従事
**Back:** じゅうじ (jūji) — ishlash, mashg'ulot / engage
40. **Front:** 効果
**Back:** こうか (kōka) — ta'sir, natija / effect
41. **Front:** 選択
**Back:** せんたく (sentaku) — tanlash, tanlov / selection
42. **Front:** 能力
**Back:** のうりょく (nōryoku) — qobiliyat, salohiyat / ability
43. **Front:** 機会
**Back:** きかい (kikai) — imkoniyat, fursat / opportunity
44. **Front:** 技術
**Back:** ぎじゅつ (gijutsu) — texnika, usul / technique
45. **Front:** 知識
**Back:** ちしき (chishiki) — bilim, ma'lumot / knowledge
46. **Front:** 最初
**Back:** さいしょ (saisho) — boshlanish, avvali / beginning
47. **Front:** 最後
**Back:** さいご (saigo) — oxiri, so'ngi / end
48. **Front:** 変化
**Back:** へんか (henka) — o'zgarish, tathir / change
49. **Front:** 進行
**Back:** しんこう (shinkō) — davom, progres / progress
50. **Front:** 達成
**Back:** たっせい (tassei) — erisish, amalga oshirish / achievement
51. **Front:** 関心
**Back:** かんしん (kanshin) — qiziqish, e'tibor / interest
52. **Front:** 承認
**Back:** しょうにん (shōnin) — tasdiq, ruxsat / approval
53. **Front:** 提案
**Back:** ていあん (ていあん) — taklif, shuvorish / proposal
54. **Front:** 実施
**Back:** じっし (jisshi) — amalga oshirish, bajarilish / implementation
55. **Front:** 評価
**Back:** ひょうか (hyōka) — baholash, qiymat / evaluation
56. **Front:** 構成
**Back:** こうせい (kōsei) — tuzilma, o'rganish / composition
57. **Front:** 投資
**Back:** とうし (tōshi) — sarmoya qo'yish / investment
58. **Front:** 収入
**Back:** しゅうにゅう (shūnyū) — daromad, kelim / income
59. **Front:** 費用
**Back:** ひよう (hiyō) — xarajat, pul / expense
60. **Front:** 環境
**Back:** かんきょう (kankyō) — muhit, atrof / environment
61. **Front:** 製品
**Back:** せいひん (seihin) — mahsulot, toza'la / product
62. **Front:** 品質
**Back:** ひんしつ (hinshitsu) — sifat, xususiyat / quality
63. **Front:** 販売
**Back:** はんばい (hanbai) — sotish, tijorat / sales
64. **Front:** 顧客
**Back:** こきゃく (kokyaku) — mijoz, xaridor / customer
65. **Front:** 市場
**Back:** しじょう (shijō) — bozor, savdo / market
66. **Front:** 需要
**Back:** じゅよう (juyō) — talab, talabchanlik / demand
67. **Front:** 供給
**Back:** きょうきゅう (kyōkyū) — ta'minot, berish / supply
68. **Front:** 価格
**Back:** かかく (kakaku) — narx, qiymat / price
69. **Front:** 取引
**Back:** とりひき (torihiki) — savdo, muomala / transaction
70. **Front:** 契約
**Back:** けいやく (keiyaku) — shartnoma, shartlov / contract
71. **Front:** 協力
**Back:** きょうりょく (kyōryoku) — hamkorlik, birgalikda / cooperation
72. **Front:** 調整
**Back:** ちょうせい (chōsei) — moslashtirish, tartibga / adjustment
73. **Front:** 確保
**Back:** かくほ (kakuho) — ta'minlash, saqlab qolish / securing
74. **Front:** 維持
**Back:** いじ (iji) — saqlash, davom ettirlish / maintenance
75. **Front:** 強化
**Back:** きょうか (kyōka) — mustahkamlash, kuchayish / strengthening
76. **Front:** 削減
**Back:** さくげん (sakugen) — kamaytirish, qisqartirish / reduction
77. **Front:** 展開
**Back:** てんかい (tenkai) — yoyilma, tasvir / deployment
78. **Front:** 統合
**Back:** とうごう (tōgō) — birlashish, uyg'unlash / integration
79. **Front:** 分析
**Back:** ぶんせき (bunseki) — tahlil, o'rganish / analysis
80. **Front:** 戦略
**Back:** せんりゃく (senryaku) — strategiya, reja / strategy
81. **Front:** 課題
**Back:** かだい (kadai) — masala, topshiriq / issue
82. **Front:** 解釈
**Back:** かいしゃく (kaishaku) — talqin, tushuntirish / interpretation
83. **Front:** 仮説
**Back:** かせつ (kasetsu) — gipoteza, taxmin / hypothesis
84. **Front:** 検証
**Back:** けんしょう (kenshō) — tekshirish, isbotlash / verification
85. **Front:** 根拠
**Back:** こんきょ (konkyo) — asoslanish, dalil / basis
86. **Front:** 論証
**Back:** ろんしょう (ronshō) — dalildan berish / argumentation
87. **Front:** 矛盾
**Back:** むじゅん (mujun) — ziddiyat, qarama-qarshi / contradiction
88. **Front:** 一貫
**Back:** いっかん (ikkan) — izchil, birga / consistency
89. **Front:** 整合
**Back:** せいごう (seigō) — uyg'unlash, moslik / consistency
90. **Front:** 妥当
**Back:** だとう (datō) — muvozanat, to'g'ri / reasonableness
91. **Front:** 優先
**Back:** ゆうせん (yūsen) — ustunlik, birinchi / priority
92. **Front:** 厳密
**Back:** げんみつ (genmitsu) — qat'iy, aniq / strict
93. **Front:** 柔軟
**Back:** じゅうなん (jūnan) — moslashuvchan, yumshoq / flexible
94. **Front:** 効率
**Back:** こうりつ (kōritsu) — samaradorlik, unumlilik / efficiency
95. **Front:** 実績
**Back:** じっせき (jisseki) — natija, oqibat / performance
96. **Front:** 信頼
**Back:** しんらい (shinrai) — ishonch, etibor / trust
97. **Front:** 誠実
**Back:** せいじつ (seijitsu) — halollik, sadoqat / sincerity
98. **Front:** 責任
**Back:** せきにん (sekinin) — mas'uliyat, javobgarlik / responsibility
99. **Front:** 義務
**Back:** ぎむ (gimu) — majburiyat, vazifa / obligation
100. **Front:** 権利
**Back:** けんり (kenri) — huquq, ruxsat / right
101. **Front:** 利害
**Back:** りがい (rigai) — manfaat va zarar / interests
102. **Front:** 利益者
**Back:** りえきしゃ (riekisha) — foyda ko'ruvchi / beneficiary
103. **Front:** 被害
**Back:** ひがい (higai) — zarar, shikost / damage
104. **Front:** 補償
**Back:** ほしょう (hoshō) — kompensatsiya, qoplash / compensation
105. **Front:** 救済
**Back:** きゅうさい (kyūsai) — qutqarish, yordam / relief
106. **Front:** 保護
**Back:** ほご (hogo) — himoya, qo'llab-quvvatlash / protection
107. **Front:** 規制
**Back:** きせい (kisei) — nazorat, cheklash / regulation
108. **Front:** 違反
**Back:** いはん (ihan) — buzish, nosoz qilish / violation
109. **Front:** 罰
**Back:** ばつ (batsu) — jazo, chuqur / punishment
110. **Front:** 免除
**Back:** めんじょ (menjo) — ozod qilish, bekor qilish / exemption
111. **Front:** 申請
**Back:** しんせい (shinsei) — ariza berish, talab / application
112. **Front:** 許可
**Back:** きょか (kyoka) — ruxsat, ijozat / permission
113. **Front:** 承知
**Back:** しょうち (shōchi) — tushunish, ma'lumot / acknowledgment
114. **Front:** 同意
**Back:** どうい (dōi) — rozilik, kelishuv / consent
115. **Front:** 異議
**Back:** いぎ (igi) — e'tiroz, qarama-qariliq / objection
116. **Front:** 抗議
**Back:** こうぎ (kōgi) — norozilik, e'tiroz / protest
117. **Front:** 苦情
**Back:** くじょう (kujō) — shikoyat, norozilik / complaint
118. **Front:** 謝罪
**Back:** しゃざい (shazai) — uzur so'rash, amalatash / apology
119. **Front:** 赦免
**Back:** しゃめん (shamen) — bekor qilish, ozod / pardon
120. **Front:** 和解
**Back:** わかい (wakai) — yarashish, tinchlik / reconciliation
121. **Front:** 仲介
**Back:** ちゅうかい (chūkai) — vositachilik, oraliq / mediation
122. **Front:** 仲裁
**Back:** ちゅうさい (chūsai) — hakamlik, qaror / arbitration
123. **Front:** 調停
**Back:** ちょうてい (chōtei) — tinchlik, shartlash / conciliation
124. **Front:** 交渉
**Back:** こうしょう (kōshō) — muloqot, muomala / negotiation
125. **Front:** 合意
**Back:** ごうい (gōi) — kelishuv, rozilik / agreement
126. **Front:** 契約書
**Back:** けいやくしょ (keiyakusho) — shartnoma qog'ozi / contract document
127. **Front:** 条件
**Back:** じょうけん (jōken) — shart, talablar / condition
128. **Front:** 特例
**Back:** とくれい (tokurei) — istisno, alohida holat / exception
129. **Front:** 規則
**Back:** きそく (kisoku) — qoida, tartibi / rule
130. **Front:** 慣例
**Back:** かんれい (kanrei) — odatiy holat, urf / custom
131. **Front:** 伝統
**Back:** でんとう (dentō) — an'ana, urf-odat / tradition
132. **Front:** 文化
**Back:** ぶんか (bunka) — madaniyat, bunkashunoslik / culture
133. **Front:** 価値観
**Back:** かちかん (kachikan) — qadr-qimmatlar, e'tiqodlar / values
134. **Front:** 信仰
**Back:** しんこう (shinkō) — din, e'tiqod / faith
135. **Front:** 思想
**Back:** しそう (shisō) — fikr, mafkura / ideology
136. **Front:** 哲学
**Back:** てつがく (tetsugaku) — falsafa, hikmat / philosophy
137. **Front:** 原理
**Back:** げんり (genri) — printsip, asos / principle
138. **Front:** 論理
**Back:** ろんり (ronri) — mantiq, fikrlash / logic
139. **Front:** 理性
**Back:** りせい (risei) — aql, oqillik / reason
140. **Front:** 感情
**Back:** かんじょう (kanjō) — his-tuyg'u, xulq / emotion
141. **Front:** 欲望
**Back:** よくぼう (yokubō) — shahvat, istak / desire
142. **Front:** 野心
**Back:** やしん (yashin) — ambitsiya, orzu / ambition
143. **Front:** 執着
**Back:** しゅうちゃく (shūchaku) — qo'zg'oqlik, qo'zg'otilish / attachment
144. **Front:** 執念
**Back:** しゅうねん (shūnen) — istalik, qattiq istak / obsession
145. **Front:** 信念
**Back:** しんねん (shinnen) — e'tiqod, ishonch / belief
146. **Front:** 確信
**Back:** かくしん (kakushin) — aniq ishonch / conviction
147. **Front:** 疑い
**Back:** うたがい (utagai) — shubha, guman / doubt
148. **Front:** 迷い
**Back:** まよい (mayoi) — adashish, mushkubiy / confusion
149. **Front:** 恐怖
**Back:** きょうふ (kyōfu) — qo'rquv, xavf / fear
150. **Front:** 不安
**Back:** ふあん (fuan) — xalvotirchilik, bechinnlik / anxiety
151. **Front:** 焦燥
**Back:** しょうそう (shōsō) — shoshqaloqlik, sabrang / impatience
152. **Front:** 沈静
**Back:** ちんせい (chinsei) — tinchlik, xotirjamlik / calmness
153. **Front:** 平静
**Back:** へいせい (heisei) — barqararilik, osoyishta / serenity
154. **Front:** 安定
**Back:** あんてい (antei) — barqarorlik, mustahkamlik / stability
155. **Front:** 動揺
**Back:** どうよう (dōyō) — o'zgarish, tebranish / fluctuation
156. **Front:** 混乱
**Back:** こんらん (konran) — tartibsizlik, begona / chaos
157. **Front:** 秩序
**Back:** つつじょ (chitsujo) — tartib, nizam / order
158. **Front:** 統制
**Back:** とうせい (tōsei) — nazorat, boshqaruv / control
159. **Front:** 自由
**Back:** じゆう (jiyū) — ozodlik, erkinlik / freedom
160. **Front:** 束縛
**Back:** そくばく (sokubaku) — chegaralash, mahkam qilish / constraint
161. **Front:** 解放
**Back:** かいほう (kaihō) — ozod qilish, erkinlashtirish / liberation
162. **Front:** 独立
**Back:** どくりつ (dokuritsu) — mustaqillik, o'zod / independence
163. **Front:** 従属
**Back:** じゅうぞく (jūzoku) — tavsif, qo'lliqga / subordination
164. **Front:** 支配
**Back:** しはい (shihai) — hukmronlik, boshqaruv / dominance
165. **Front:** 隷属
**Back:** れいぞく (reizoku) — qullik, tavsif / servitude
166. **Front:** 奴隷
**Back:** どれい (dorei) — qul, gadoyi / slavery
167. **Front:** 解奴
**Back:** かいど (kaido) — qullikdan ozod / emancipation
168. **Front:** 主権
**Back:** しゅけん (shuken) — suverenitet, hokimiyat / sovereignty
169. **Front:** 権力
**Back:** けんりょく (kenryoku) — hokimiyat, qudrat / power
170. **Front:** 影響力
**Back:** えいきょうりょく (eikyōryoku) — ta'sir qilish quvvati / influence
171. **Front:** 支持
**Back:** しじ (shiji) — qo'llab-quvvatlash / support
172. **Front:** 反対
**Back:** はんたい (hantai) — qarama-qariliq / opposition
173. **Front:** 賛成
**Back:** さんせい (sansei) — rozilik, kelishuv / approval
174. **Front:** 批判
**Back:** ひはん (hihan) — tanqid, e'tiroz / criticism
175. **Front:** 擁護
**Back:** ようご (yōgo) — himoya qilish / defense
176. **Front:** 非難
**Back:** ひなん (hinan) — tanqid, malamat / blame
177. **Front:** 中傷
**Back:** ちゅうしょう (chūshō) — resiqa, suhbat / slander
178. **Front:** 名誉
**Back:** めいよ (meiyo) — sharaf, faxri / honor
179. **Front:** 恥辱
**Back:** ちじょく (chijoku) — sharmanda, bejamol / disgrace
180. **Front:** 基礎
**Back:** きそ (kiso) — poydevor, asos / foundation
181. **Front:** 核心
**Back:** かくしん (kakushin) — mag'iz, tub ma'no / core
182. **Front:** 契機
**Back:** けいき (keiki) — imkoniyat, turtki / opportunity, turning point
183. **Front:** 由来
**Back:** ゆらい (yurai) — kelib chiqishi, tarixi / origin
184. **Front:** 経過
**Back:** けいか (keika) — o'tishi, jarayon / passage, progress
185. **Front:** 終了
**Back:** しゅうりょう (shūryō) — yakun, tugash / end, close
186. **Front:** 役割
**Back:** やくわり (yakuwari) — rol, vazifa / role
187. **Front:** 負担
**Back:** ふたん (futan) — yuk, mas'uliyat xarajati / burden, load
188. **Front:** 効率的
**Back:** こうりつてき (kōritsuteki) — samarali / efficient
189. **Front:** 適切
**Back:** てきせつ (tekisetsu) — muvofiq, loyiq / appropriate
190. **Front:** 慎重
**Back:** しんちょう (shinchō) — vazmin, ehtiyotkor / cautious
191. **Front:** 迅速
**Back:** じんそく (jinsoku) — tezkor, chaqqon / prompt, rapid
192. **Front:** 正確
**Back:** せいかく (seikaku) — aniq, to'g'ri / accurate
193. **Front:** 密接
**Back:** みっせつ (missetsu) — chambarchas, yaqin / close, intimate
194. **Front:** 過剰
**Back:** かじょう (kajō) — ortiqcha, me'yoridan ko'p / excess
195. **Front:** 頻繁
**Back:** ひんぱん (hinpan) — tez-tez, surunkali / frequent
196. **Front:** 貴重
**Back:** きちょう (kichō) — nodir, qadrli / precious, valuable
197. **Front:** 深刻
**Back:** しんこく (shinkoku) — jiddiy, og'ir / serious, grave
198. **Front:** 膨大
**Back:** ぼうだい (bōdai) — ulkan, juda ko'p / huge, vast
199. **Front:** 莫大
**Back:** ばくだい (bakudai) — ulkan xarajat/zarar / enormous, vast
200. **Front:** 独自
**Back:** どくじ (dokuji) — xususiy, o'ziga xos / original, unique
201. **Front:** 祖先
**Back:** そせん (sosen) — ajdodlar / ancestors
202. **Front:** 子孫
**Back:** しそん (shison) — avlodlar / descendants
203. **Front:** 祖父母
**Back:** そふぼ (sofubo) — buva va buvi / grandparents
204. **Front:** 孫
**Back:** まご (mago) — nevara / grandchild
205. **Front:** 三世代
**Back:** さんせだい (sansedai) — uch avlod / three generations
206. **Front:** 一家
**Back:** いっか (ikka) — butun oila / a family, a household
207. **Front:** 親類
**Back:** しんるい (shinrui) — qarindoshlar / relatives
208. **Front:** 親孝行
**Back:** おやこうこう (oyakōkō) — ota-onaga g'amxo'rlik / filial piety
209. **Front:** 実家
**Back:** じっか (jikka) — ota-onaning uyi / one's parents' home
210. **Front:** 末っ子
**Back:** すえっこ (suekko) — oilaning eng kichigi / youngest child
211. **Front:** 一人っ子
**Back:** ひとりっこ (hitorikko) — yolg'iz farzand / only child
212. **Front:** 双子
**Back:** ふたご (futago) — egizaklar / twins
213. **Front:** 仲良し
**Back:** なかよし (nakayoshi) — yaqin do'st / close friends
214. **Front:** 工作仲間
**Back:** こうさくなかま (kōsakunakama) — ishxonadagi sherik / work colleague
215. **Front:** 知り合い
**Back:** しりあい (shiriai) — tanish odam / acquaintance
216. **Front:** 奥様
**Back:** おくさま (okusama) — rafiqa (birovning) / someone's wife
217. **Front:** ご主人
**Back:** ごしゅじん (goshujin) — xo'jayin (birovning eri) / someone's husband
218. **Front:** お母様
**Back:** おかあさま (okāsama) — ona (birovning) / someone's mother
219. **Front:** お父様
**Back:** おとうさま (otōsama) — ota (birovning) / someone's father
220. **Front:** お嬢ちゃん
**Back:** おじょうちゃん (ojōchan) — qizaloq (birovning) / someone's daughter (young)
221. **Front:** お坊ちゃん
**Back:** おぼっちゃん (obotchan) — o'g'il bola (birovning) / someone's son (young)
222. **Front:** 夫妻
**Back:** ふさい (fusai) — er-xotin / married couple
223. **Front:** 夫人
**Back:** ふじん (fujin) — xonim, xanim / Mrs., Madame
224. **Front:** 職場
**Back:** しょくば (shokuba) — ish joyi / workplace
225. **Front:** 上司
**Back:** じょうし (jōshi) — boshliq, rahbar / boss, superior
226. **Front:** 部下
**Back:** ぶか (buka) — qo'l ostidagi ishchi / subordinate
227. **Front:** 先輩
**Back:** せんぱい (senpai) — katta tajribali xodim/o'quvchi / senior
228. **Front:** 後輩
**Back:** こうはい (kōhai) — kichik tajribali xodim/o'quvchi / junior
229. **Front:** 目上
**Back:** めうえ (meue) — yoshi yoki martabasi katta / superior, elder
230. **Front:** 目下
**Back:** めした (meshita) — yoshi yoki martabasi kichik / subordinate, junior
231. **Front:** 年上
**Back:** としうえ (toshiue) — yoshi katta / older
232. **Front:** 年下
**Back:** としした (toshishita) — yoshi kichik / younger
233. **Front:** 同い年
**Back:** おないどし (onaidoshi) — tengdosh / same age
234. **Front:** 周囲
**Back:** しゅうい (shūi) — atrof, tevarak / surroundings
235. **Front:** 付き合い
**Back:** つきあい (tsukiai) — muloqot, aloqa / association, socializing
236. **Front:** コミュニケーション
**Back:** こみゅにけーしょん (komyunikēshon) — muloqot / communication
237. **Front:** 約束
**Back:** やくそく (yakusoku) — va'da, uchrashuv / promise, appointment
238. **Front:** 丁寧
**Back:** ていねい (teinei) — xushmuomala, muloyim / polite
239. **Front:** 握手
**Back:** あくしゅ (akushu) — qo'l berib ko'rishish / handshake
240. **Front:** お辞儀
**Back:** おじぎ (ojigi) — ta'zim qilish / bow
241. **Front:** 仲間
**Back:** なかま (nakama) — guruh, o'rtoqlar / companion, circle
242. **Front:** 知人
**Back:** ちじん (chijin) — tanish inson / acquaintance
243. **Front:** 遣い
**Back:** づかい (dzukai) — foydalanish, ishlatish / usage, spending
244. **Front:** 親しい
**Back:** したしい (shitashii) — yaqin, qalin / close, intimate
245. **Front:** 長年
**Back:** ながねん (naganen) — ko'p yillar / long time, many years
246. **Front:** たとえ
**Back:** たとえ (tatoe) — hatto, agarda... ham / even if
247. **Front:** まるで
**Back:** まるで (marude) — xuddi, go'yo / just like
248. **Front:** 性格
**Back:** せいかく (seikaku) — xarakter, xulq-atvor / personality
249. **Front:** 長所
**Back:** ちょうしょ (chōsho) — kuchli tomon, yutuq / strong point, merit
250. **Front:** 短所
**Back:** たんしょ (tansho) — zaif tomon, kamchilik / weak point
251. **Front:** 積極的
**Back:** せっきょくてき (sekkyokuteki) — faol, aktiv / active, positive
252. **Front:** 消極的
**Back:** しょうきょくてき (shōkyokuteki) — sust, passiv / passive
253. **Front:** おとなしい
**Back:** おとなしい (otonashii) — yosh yuvosh, tinch / quiet, gentle
254. **Front:** やかましい
**Back:** やかましい (yakamashii) — shovqinli, tinmaydigan / noisy, fussy
255. **Front:** 慎重
**Back:** しんちょう (shinchō) — ehtiyotkor / cautious
256. **Front:** そそっかしい
**Back:** そそっかしい (sosokkashii) — shoshqaloq, palapartish / careless, hasty
257. **Front:** 器用
**Back:** きよう (kiyou) — epchil, usta (qo'li gul) / adroit, skillful
258. **Front:** 不器用
**Back:** ぶきよう (bukiyou) — noepchil, qo'lidan ish kelmaydigan / clumsy
259. **Front:** 要領
**Back:** ようりょう (yōryō) — ishning ko'zi, usuli / knack, tact
260. **Front:** 謙虚
**Back:** けんきょ (kenkyo) — kamtarin / humble, modest
261. **Front:** 生意気
**Back:** なまいき (namaiki) — tirantak, haddidan oshgan / impudent, cheeky
262. **Front:** 勘
**Back:** かん (kan) — sezgi, ichki sezgi / intuition, sixth sense
263. **Front:** 鈍い
**Back:** にぶい (nibui) — o'tmas, sekin, lanj / dull, blunt, slow
264. **Front:** 弱気
**Back:** よわき (yowaki) — qo'rqoq, jur'atsiz / timid, weak-kneed
265. **Front:** 強気
**Back:** つよき (tsuyoki) — qat'iy, o'ziga ishongan / confident, firm
266. **Front:** 頼もしい
**Back:** たのもしい (tanomashii) — suyansa bo'ladigan, ishonchli / reliable, trustworthy
267. **Front:** 礼儀正しい
**Back:** れいぎただしい (reigitadashii) — odobli, tarbiyali / well-mannered
268. **Front:** 冷静
**Back:** れいせい (reisei) — xotirjam, sovuqqon / calm, composed
269. **Front:** 陽気
**Back:** ようき (yōki) — quvnoq, xushchaqchaq / cheerful
270. **Front:** ユーモア
**Back:** ゆーもあ (yūmoa) — yumor, hazil / humor
271. **Front:** はきはき
**Back:** はきはき (hakihaki) — aniq, dadil / briskly, clearly
272. **Front:** 純粋
**Back:** じゅんすい (junsui) — sof, begubor / pure
273. **Front:** 穏やか
**Back:** おだやか (odayaka) — tinch, muloyim / gentle, calm
274. **Front:** わがまま
**Back:** わがまま (wagamama) — xudbin, o'zbilarmon / selfish
275. **Front:** 強引
**Back:** ごういん (gōin) — majburlab, zo'rlab / pushy, forceful
276. **Front:** 厚かましい
**Back:** あつかましい (atsukamashii) — betgachop, uyatsiz / impudent, brazen
277. **Front:** ずうずうしい
**Back:** ずうずうしい (zūzūshii) — surbet, beti qalin / cheeky, shameless
278. **Front:** けちな
**Back:** けちな (kechi na) — xasis / stingy, miserly
279. **Front:** 乱暴
**Back:** らんぼう (ranbō) — qo'pol, zo'ravon / rough, violent
280. **Front:** 気が荒い
**Back:** きがあらい (ki ga arai) — jahldor, tajovuzkor / bad-tempered
281. **Front:** ひきょうな
**Back:** ひきょうな (hikyō na) — nomard, qo'rqoq / unfair, cowardly
282. **Front:** 裏切る
**Back:** うらぎる (uragiru) — xiyonat qilish / betray
283. **Front:** 威張る
**Back:** いばる (ibaru) — maqtanmoq, o'zini yuqori tutmoq / boast, swagger
284. **Front:** ふざける
**Back:** ふざける (fuzakeru) — hazillashmoq, masxaralashmoq / play around, joke
285. **Front:** 飽きる
**Back:** あきる (akiru) — bezor bo'lmoq, zerikmoq / get tired of, lose interest
286. **Front:** 慌てる
**Back:** あわてる (awateru) — shoshilib qolmoq, sarosimaga tushmoq / panic, fluster
287. **Front:** のん気
**Back:** のんき (nonki) — xotirjam, beparvo / easygoing
288. **Front:** 率直
**Back:** そっちょく (sotchoku) — ochiqchasiga, samimiy / frank, candid
289. **Front:** 心理
**Back:** しんり (shinri) — ruhiyat, psixologiya / psychology, mentality
290. **Front:** 緊張
**Back:** きんちょう (kinchō) — hayajonlanmoq / get nervous
291. **Front:** いらいら
**Back:** いらいら (iraira) — g'ash kelish / irritated
292. **Front:** 気楽
**Back:** きらく (kiraku) — bemalol, erkin / carefree, comfortable
293. **Front:** 機嫌
**Back:** きげん (kigen) — kayfiyat / mood, humor
294. **Front:** 清潔
**Back:** せいけつ (seiketsu) — toza, ozoda / clean, hygienic
295. **Front:** 見かけ
**Back:** みかけ (mikake) — tashqi ko'rinish / appearance
296. **Front:** 派手
**Back:** はぜ (hade) — dabdabali, yorqin / flashy, gaudy
297. **Front:** 地味
**Back:** じみ (jimi) — oddiy, kamtarona / plain, sober
298. **Front:** 心理的
**Back:** しんりてき (shinriteki) — psixologik / psychological
299. **Front:** 不器用
**Back:** ぶきよう (bukiyou) — uquvsiz, qo'pol / clumsy
300. **Front:** 不真面目
**Back:** ふまじめ (fumajime) — mas'uliyatsiz / insincere, unserious
301. **Front:** 正しい
**Back:** ただしい (tadashii) — to'g'ri / correct
302. **Front:** 規則正しい
**Back:** きそくただしい (kisokutadashii) — tartibli, muntazam / regular
303. **Front:** 飽きっぽい
**Back:** あきっぽい (akippoi) — tez zerikadigan / fickle, quick to tire of
304. **Front:** 怒りっぽい
**Back:** おこりっぽい (okorippoi) — jahli tez, jizzaki / hot-tempered
305. **Front:** 忘れっぽい
**Back:** わすれっぽい (wasureppoi) — unutiluvchan / forgetful
306. **Front:** わざと
**Back:** わざと (wazato) — ataylab, qasddan / on purpose, intentionally
307. **Front:** めっきり
**Back:** めっきり (mekkiri) — sezilarli darajada / remarkably, noticeably
308. **Front:** 相変わらず
**Back:** あいかわらず (aikawarazu) — odatdagidek / as usual, as ever
309. **Front:** 一切
**Back:** いっさい (issai) — umuman, aslo / completely, (not) at all
310. **Front:** 陽気
**Back:** ようき (yōki) — quvnoq fe'l-atvor / cheerful nature
311. **Front:** 穏やか
**Back:** おだやか (odayaka) — sokinlik, yumshoqlik / calm manner
312. **Front:** 感情
**Back:** かんじょう (kanjō) — his-tuyg'u / emotion, feeling
313. **Front:** うらやむ
**Back:** うらやむ (urayamu) — havas qilmoq, hasad qilmoq / envy
314. **Front:** 尊敬
**Back:** そんけい (sonkei) — hurmat qilmoq / respect
315. **Front:** 敬う
**Back:** うやまう (uyamau) — ulug'lamoq, hurmat ko'rsatmoq / honor, revere
316. **Front:** 疑う
**Back:** うたがう (utagau) — shubha qilmoq / doubt, suspect
317. **Front:** 恐れる
**Back:** おそれる (osoreru) — qo'rqmoq / fear
318. **Front:** 憎む
**Back:** にくむ (nikumu) — nafratlanmoq / hate, detest
319. **Front:** 恨む
**Back:** うらむ (uramu) — gina qilmoq / resent, bear a grudge
320. **Front:** 嫌がる
**Back:** いやがる (iyagaru) — yoqtirmasligini ko'rsatmoq / dislike, show dislike
321. **Front:** 敬意
**Back:** けいい (keii) — hurmat (tuyg'usi) / respect, homage
322. **Front:** あこがれる
**Back:** あこがれる (akogarel) — havas qilmoq, intilmoq / long for, admire
323. **Front:** 恩
**Back:** おん (on) — yaxshilik, minnatdorlik qarzi / favor, obligation
324. **Front:** 失望
**Back:** しつぼう (shitsubō) — umidsizlik / disappointment
325. **Front:** うらやましい
**Back:** うらやましい (urayamashii) — havasingni keltiradigan / envious, jealous
326. **Front:** 憎らしい
**Back:** にくらしい (nikurashii) — nafratli / hateful, detestable
327. **Front:** 哀れ
**Back:** あわれ (aware) — rahmdillikni keltiradigan, bechora / pitiful, miserable
328. **Front:** 申し訳ない
**Back:** もうしわけない (mōshiwakenai) — uzrli / inexcusable, sorry
329. **Front:** ありがたい
**Back:** ありがたい (arigatai) — minnatdor / grateful, thankful
330. **Front:** 行動
**Back:** こう行動 (kōdō) — harakat, faoliyat / action, behavior
331. **Front:** 慰める
**Back:** なぐさめる (nagusameru) — yupatmoq, tasalli bermoq / comfort, console
332. **Front:** けなす
**Back:** けなす (kenasu) — kamsitmoq, yomonlamoq / speak ill of, disparage
333. **Front:** ののしる
**Back:** ののしる (nonoshiru) — so'kmoq, haqoratlamoq / abuse, scold loudly
334. **Front:** にらむ
**Back:** にらむ (niramu) — tikilib qaramoq (g'azab bilan) / glare at, stare down
335. **Front:** 避ける
**Back:** さける (sakeru) — qochmoq, chetlab o'tmoq / avoid
336. **Front:** 助言
**Back:** じょげん (jogen) — maslahat, yo'l-yo'riq / advice, suggestion
337. **Front:** 言いつける
**Back:** いいつける (iitsukeru) — chaqimchilik qilmoq, buyurmoq / tell on, order
338. **Front:** 皮肉
**Back:** ひにく (hiniku) — kesatiq, qochiriq gap / irony, sarcasm
339. **Front:** 不平
**Back:** ふへい (fuhei) — norozilik, shikoyat / complaint, dissatisfaction
340. **Front:** 自慢
**Back:** じまん (jiman) — faxrlanish, maqtanchoqlik / boasting, pride
341. **Front:** 怒鳴る
**Back:** どなる (donaru) — baqirmoq / shout, yell
342. **Front:** 秘密
**Back:** ひみつ (himitsu) — sir / secret
343. **Front:** うわさ
**Back:** うわさ (uwasa) — mish-mish / rumor
344. **Front:** 誤解
**Back:** ごかい (gokai) — noto'g'ri tushunish / misunderstanding
345. **Front:** 仲直り
**Back:** なかなおり (nakanaori) — yarashib olmoq / reconciliation
346. **Front:** 礼儀
**Back:** れいぎ (reigi) — odob, etiket / manners, etiquette
347. **Front:** 敬語
**Back:** けいご (keigo) — hurmat formasi (til) / honorific language
348. **Front:** 反抗的
**Back:** はんこうてき (hankōteki) — isyonkor, qarshi chiquvchi / rebellious
349. **Front:** 道徳
**Back:** どうとく (dōtoku) — axloq, ma'naviyat / morals, morality
350. **Front:** 姿勢
**Back:** しぜい (shisei) — qomat, yondashuv / posture, attitude
351. **Front:** みっともない
**Back:** みっともない (mittomonai) — uyatli, odobsiz / disgraceful, shameful
352. **Front:** 恋愛
**Back:** れんあい (ren'ai) — sevgi, muhabbat / love, romance
353. **Front:** もてる
**Back:** もてる (moteru) — mashhur bo'lmoq / be popular (with)
354. **Front:** 理想
**Back:** りそう (risō) — ideal / ideal
355. **Front:** 偶然
**Back:** ぐうぜん (gūzen) — tasodifan / by chance, coincidentally
356. **Front:** 冷める
**Back:** さめる (sameru) — sovimoq (tuyg'ular) / cool down (feelings)
357. **Front:** 振る
**Back:** ふる (furu) — rad etmoq (sevgini), silkitmoq / dump (a lover), shake
358. **Front:** 失恋
**Back:** しつれん (shitsuren) — sevgida omadsizlik / broken heart, unrequited love
359. **Front:** 寒がる
**Back:** さむがる (samugaru) — sovqotayotganini ko'rsatmoq / feel the cold
360. **Front:** 欲しがる
**Back:** ほしがる (hoshigaru) — xohlamoq (birov) / desire, want
361. **Front:** 可愛らしい
**Back:** かわいらしい (kawairashii) — yoqimtoy, shirin / lovely, sweet
362. **Front:** 結びつける
**Back:** むすびつける (musubitsukeru) — bog'lamoq / connect, tie together
363. **Front:** 広める
**Back:** ひろめる (hiromeru) — kengaytirmoq, tarqatmoq / spread, popularize
364. **Front:** 強める
**Back:** つよめる (tsuyomeru) — kuchaytirmoq / strengthen
365. **Front:** 高める
**Back:** たかめる (takameru) — oshirmoq, ko'tarmoq / heighten, raise
366. **Front:** 思い切って
**Back:** おもいきって (omoikitte) — dadillik bilan / resolutely, boldly
367. **Front:** ようやく
**Back:** ようやく (yōyaku) — nihoyat, oxiri / finally, at last
368. **Front:** いつ（の）間にか
**Back:** いつのまにか (itsunomanika) — qachonligini bilmay / before one knows it
369. **Front:** 食生活
**Back:** しょくせいかつ (shokuseikatsu) — ovqatlanish odati / eating habits
370. **Front:** 食う
**Back:** くう (kū) — yemoq / eat (informal)
371. **Front:** かじる
**Back:** かじる (kajiru) — tishlamoq, ozroq tushunmoq / gnaw, nibble, dabble in
372. **Front:** 含む
**Back:** ふくむ (fukumu) — o'z ichiga olmoq / include, contain
373. **Front:** しゃぶる
**Back:** しゃぶる (shaburu) — shimmoq / suck
374. **Front:** 味わう
**Back:** あじわう (ajiwau) — tatib ko'rmoq / taste, savor
375. **Front:** 香り
**Back:** かおり (kaori) — xushbuy hid / aroma, fragrance
376. **Front:** 食欲
**Back:** しょくよく (shokuyoku) — ishtaha / appetite
377. **Front:** 湯読み
**Back:** ゆのみ (yunomi) — choy piyola / teacup (Japanese style)
378. **Front:** お盆
**Back:** おぼん (obon) — patnis / tray
379. **Front:** 栄養
**Back:** えいよう (eiyō) — ozuqa, vitamin / nutrition
380. **Front:** 消化
**Back:** しょうか (shōka) — hazm qilish / digestion
381. **Front:** もたれる
**Back:** もたれる (motarelu) — og'irlik qilmoq / feel heavy (stomach)
382. **Front:** 宴会
**Back:** えんかい (enkai) — ziyofat, bazm / banquet, party
383. **Front:** つぐ
**Back:** つぐ (tsugu) — quymoq (ichimlik) / pour (a drink)
384. **Front:** 勧める
**Back:** すすめる (susumeru) — taklif qilmoq / recommend, urge
385. **Front:** 冷やす
**Back:** ひやす (hiyasu) — sovutmoq / cool, chill
386. **Front:** 温める
**Back:** あたためる (atatameru) — isitmoq / warm up, heat up
387. **Front:** 酔う
**Back:** よう (you) — mast bo'lmoq / get drunk
388. **Front:** 頭痛
**Back:** ずつう (zutsū) — bosh og'rig'i / headache
389. **Front:** 吐き気
**Back:** はきけ (hakike) — ko'ngil aynishi / nausea
390. **Front:** めまい
**Back:** めまい (memai) — bosh aylanishi / dizziness
391. **Front:** 意識
**Back:** いしき (ishiki) — hush, ong / consciousness
392. **Front:** 酔い
**Back:** よい (yoi) — mastlik holati / drunkenness
393. **Front:** 刺身
**Back:** さしみ (sashimi) — xom baliq bo'laklari / sashimi
394. **Front:** 贅沢
**Back:** ぜいたく (zeitaku) — dabdabali, hashamatli / luxurious
395. **Front:** 粗末
**Back:** そまつ (somatsu) — oddiy, arzon / poor, shabby, crude
396. **Front:** 貴重
**Back:** きちょう (kichō) — qadrli, qimmatbaho / precious, valuable
397. **Front:** 新鮮
**Back:** しんせん (shinsen) — yangi, barra / fresh
398. **Front:** 天然
**Back:** てんねん (tennen) — tabiiy / natural
399. **Front:** 調味料
**Back:** ちょうみりょう (chōmiryō) — ziravorlar / seasoning, condiment
400. **Front:** 塩辛い
**Back:** しおからい (shiokarai) — sho'r / salty
`;

export const flashcards: Card[] = [];

const lines = rawData.trim().split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('**Front:**')) {
    const idMatch = lines[i].match(/^(\d+)\./);
    const frontText = lines[i].split('**Front:**')[1]?.trim();
    
    // Look at next line for back
    const backLine = lines[i + 1];
    let backText = '';
    if (backLine && backLine.includes('**Back:**')) {
      backText = backLine.split('**Back:**')[1]?.trim();
      i++; // Skip the back line since we consumed it
    }

    if (idMatch && frontText && backText) {
      flashcards.push({
        id: parseInt(idMatch[1], 10),
        front: frontText,
        back: backText,
      });
    }
  }
}

export const deckGroups: DeckGroup[] = [
  {
    id: "Set-1",
    title: "Vocabulary 1-100",
    level: "JLPT N3",
    startIndex: 1,
    endIndex: 100,
    cardCount: 100
  },
  {
    id: "Set-2",
    title: "Vocabulary 101-200",
    level: "JLPT N3",
    startIndex: 101,
    endIndex: 200,
    cardCount: 100
  },
  {
    id: "Set-3",
    title: "Vocabulary 201-300",
    level: "JLPT N3",
    startIndex: 201,
    endIndex: 300,
    cardCount: 100
  },
  {
    id: "Set-4",
    title: "Vocabulary 301-400",
    level: "JLPT N2",
    startIndex: 301,
    endIndex: 400,
    cardCount: 100
  }
];

export function getCardsForGroup(groupId: string): Card[] {
  const group = deckGroups.find(g => g.id === groupId);
  if (!group) return [];
  
  return flashcards.filter(c => c.id >= group.startIndex && c.id <= group.endIndex);
}
