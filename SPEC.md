# Duskfade / 时夜渐明 — 建站SPEC v1.0

## 执行模式声明
**直接执行，不要提问、不要计划、不要确认。** 只有3种情况可以问：
1. 素材缺失且无法从任何素材文件推断
2. 命令/路径与SPEC冲突
3. 模板结构理解不了

**⚠️ 工作目录确认：**
- **项目目录：** `D:\code\duskfade-wiki`（**单文件夹**——素材、代码、图片全在此）
- **动手前必须 `cd D:\code\duskfade-wiki && pwd` 确认当前位置**
- 素材在 `D:\code\duskfade-wiki\素材\`（18文件，建站时引用路径相对即可）
- 图片在 `D:\code\duskfade-wiki\images\`（10张Steam截图+主图）
- 视频ID在 `D:\code\duskfade-wiki\videos\youtube_id.txt`

**内容完整优质为第一要素：** 素材多，必须"写哪页读哪档素材"，写一点查一点，禁止凭记忆/常识编造机制。

---

## 项目信息
| 项 | 值 |
|:----|:----|
| 游戏 | Duskfade（时夜渐明） |
| 开发者 | Weird Beluga（西班牙13人团队） |
| 发行商 | Fireshine Games |
| 类型 | 3D Action Platformer（Jak and Daxter精神续作） |
| 发售 | 2026-08-13（正式发售） |
| 价格 | $29.99（首发-20%=$23.99，8/27截止） |
| Steam App ID | 2542020 |
| 好评 | 特别好评(287) |
| 引擎 | Unreal Engine 5 |
| 中文名 | 时夜渐明（常见译名，未确认官方中文名） |
| 域名 | duskfade.store |

## 技术栈
- 模板：anvil-template-v2（clone到本目录）
- Astro 5 + Content Collections (MDX) + 多语言

## 第一步：clone模板到本目录
```bash
cd D:\code
# 先备份本目录已有的素材
cp -r duskfade-wiki 素材/ images/ videos/ keywords.json ~/temp_duskfade_backup/
# 删除本目录（模板要clone进来）
rm -rf duskfade-wiki
# clone模板
cp -r anvil-template-v2 duskfade-wiki
cd duskfade-wiki
rm -rf dist node_modules
rm -f src/content/wiki/en/*.mdx src/content/wiki/zh/*.mdx
# 恢复素材
cp -r ~/temp_duskfade_backup/* .
rm -rf ~/temp_duskfade_backup/
pnpm install
```

## 多语言
- **locales: en + zh + es + fr**
  - en（default，无前缀）
  - zh（带前缀 `/zh/`）— 中文玩家多，Steam有中文
  - es（带前缀 `/es/`）— 开发团队西班牙语母语，西语媒体评测多（MeriStation/ElDesmarque）
  - fr（带前缀 `/fr/`）— 法语市场平台跳跃热门
- 策略：en全站 + zh/es/fr核心页（首页/tips/collectibles/bosses），其余fallback英文
- 同步3处：`src/i18n/routing.ts` locales数组 + `src/locales/`各json + `src/content/`各目录

## 主题色（Clockpunk：黄铜金+深蓝黑夜）
```css
--brand: 38 80% 45%        /* 黄铜金 */
--brand-light: 38 80% 58%
--brand-h: 38
--brand-s: 80%
--background: 200 18% 7%   /* 深蓝黑（永恒黑夜主题） */
--foreground: 38 30% 92%   /* 暖白 */
--muted: 200 14% 13%
--muted-foreground: 38 12% 65%
--border: 200 16% 22%
--card: 200 16% 10%
--card-foreground: 38 30% 92%
```

**Logo+favicon：** 用你补充的Logo文件，替换public/下默认favicon

## 视频
- **Announce Trailer**（YouTube ID已存 `videos/youtube_id.txt`）
- 首页Hero嵌入

## 素材路径说明
```
D:\code\duskfade-wiki\
├── 素材\（18个md文件，建站按映射表引用）
├── images\（10张截图+主图，每页≥1张）
├── videos\（youtube_id.txt）
├── src\（建站代码，clone模板后在此写内容）
└── SPEC.md
```

## 页面↔素材映射表

| 页面 | 必读素材 | 必写要点 | 禁写 |
|:----|:----|:----|:----|
| **/**（首页） | `素材/首页素材.md` + `素材/genre.md` | 简介/数据表/平台(PC/PS5/Xbox/Switch2)/核心玩法(移动+战斗+探索)/新手4点/发售现状+时长/Metacritic 79 | 写"自由时间倒流玩法" |
| **/guides** | 引导页 | 列出所有guides页 | — |
| **/guide/gameplay** | `素材/gameplay.md` + `素材/review 评测.md` | 移动(双跳/Wall Jump/Grapple/Glide)/战斗(锁敌/连招/Dodge/Perfect Dodge/反击)/Boss战混合战斗+平台跳跃/4难度(推荐Master Clockmaker) | 编造能力名 |
| **/guides/tips** | `素材/gameplay.md` + `素材/how_long_to_beat.md` + `素材/parents_guide.md` | 难度选择/保持Momentum/收集品策略/去不了的位置记下+能力回访/ESRB E10+适龄 | 编造 |
| **/guides/bosses** | `素材/boss.md` + `素材/review 评测.md` | 已确认Boss(Wrath/Guayota/The Watcher)/每区2Boss(中途+最终)/混合战斗+平台跳跃/Guayota攻略要点 | 编造完整列表 |
| **/guides/collectibles** | `素材/collectibles.md` | 10类收集品表(Music Boxes/N1-C0ins/Kittens/Upgrade Gears/Clock Hearts/Dye Flasks/Rainbow Ingots/Echoes/Star Cores/Stained Glass)+是否奖杯必需 | 编造具体位置 |
| **/guides/achievements** | `素材/achievements.md` | Xbox/PC 25成就(1000G)/PS5 26奖杯(1白金)/成就类型(剧情/Boss/收集/升级) | 编造解锁条件 |
| **/faq/platforms** | `素材/platforms.md` + `素材/physical_copy.md` | PC✅/PS5✅/Xbox Series✅/Switch 2✅/PS4/Xbox One/初代Switch❌/数字版无实体 | 写有实体版 |
| **/faq/release** | `素材/release_date.md` + `素材/price.md` | 8/13发售/$29.99首发-20%/各平台价格一致 | 编造 |
| **/faq/demo** | `素材/demo.md` | 有Demo(PC+PS5)/约1-1.5h/含Wrath Boss/正式版完整世界更多能力 | 编造 |
| **/faq/howlong** | `素材/how_long_to_beat.md` | 主线10-15h/全收集15-20+h/MeriStation实测11h13min 73% | 编造 |
| **/faq/parents** | `素材/parents_guide.md` | ESRB E10+/PEGI 7/轻度幻想暴力+少量血/适合家庭 | 编造 |
| **/reviews** | `素材/review.md` + `素材/metacritic.md` | MC 79/用户8.6/代表性评测(MeriStation 8/PSX Brasil 95/TheGamer 80/TSA 7) | 编造分数 |
| **/soundtrack** | `素材/soundtrack.md` | $9.99/Rafa del Olmo/管弦乐+Metal+Electronic/Leitmotif | 编造曲目 |

## SEO
- **Title：** `Duskfade Guide – Tips, Walkthrough, Bosses & Secrets`（55字符）
- **Description：** `Master Duskfade with our guide covering platforming, combat, bosses, abilities, upgrades, secrets, collectibles, and essential tips for every region.`（~150字符）
- H1含主词duskfade，页面slug用关键词

## 验收清单
1. ✅ 换肤：Clockpunk黄铜金+深蓝黑夜（肉眼检查不像模板默认）
2. ✅ Logo替换+删模板favicon
3. ✅ 内容攻略化：抽查gameplay/tips页无笔记腔
4. ✅ 禁词扫描（coming soon/TBA/No official/待确认 = 0）
5. ✅ 每页≥1图
6. ✅ 多语言：en+zh+es+fr（中文西班牙语法语核心页）
7. ✅ pnpm check（0 errors）
8. ✅ pnpm build（退出码0）
9. ✅ sitemap兼容入口（public/sitemap.xml）
10. ✅ 本地 `pnpm dev` 打开 http://localhost:4321 肉眼验收

## 注意：本项目只建站不部署
建站完成后汇报：页面数/多语言页面数/换肤截图/禁词扫描结果
部署由用户本地验收后再执行