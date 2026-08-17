# CLAUDE.md — 本站内容铁律（AI 每次会话自动加载，必须遵守）

> 本文件由项目所有者维护。Claude Code 每次启动自动读取本文件，无需提醒。
> 违反本文件规则的输出 = 不合格，会被打回重写。

## 🚨 第零条：工作目录确认（防呆守则，动手前必做）

**本站所有操作只允许在目标项目文件夹内进行，禁止在其他项目文件夹里干活。**

```bash
# 动手前必做：确认当前目录 = 本项目的绝对路径
pwd
cd <本项目绝对路径>
```

- 本项目绝对路径：`D:\code\<本项目名>`（如 `D:\code\sandustry-wiki-site`）
- **禁止**在 hll-vietnam-wiki / anvil-template-v2 / 其他项目文件夹里执行本任务
- 所有操作（改代码/建文件/部署）只发生在目标项目内
- 若发现当前目录不对，立即 cd 到正确目录再动手

## 🚨 第零·五条：部署必须用全局 deploy-site 工具（硬性规则，禁止其他方式）

**本站部署已全部配置好，禁止要求用户重新授权/登录，禁止用本地 wrangler 登录。**

```bash
# 0. 确认在正确目录（第零条）
pwd   # 必须是本项目目录
# 1. 先提交所有改动（关键！工具只commit site.ts，其他改动会导致部署被拒）
git add -A
git commit -m "站名: 页面数en+zh攻略站（改动说明）"
git status   # 必须干净
# 2. 部署（工具自动：建仓→commit site.ts→push→Worker→域名→GA4→GSC→sitemap）
node C:\Users\Administrator\.claude\site-deploy\deploy-site.mjs \
  --source <本项目目录> --repo leyang866-debug/<仓库名> --domain <域名>
```

- 凭证已存在 `C:\Users\Administrator\.claude\credentials\`（Cloudflare Token/账号ID），**永远不要要求用户提供**
- 部署自动完成：建GitHub仓库→建Worker→绑域名→GA4独立资源→GSC验证→sitemap提交
- 此工具是唯一合法部署方式（GRAIN ROT/HLL:Vietnam/Sandustry 均如此部署成功）
- 报错"Wrangler not authenticated"= 你走错路了，改用上面的 deploy-site.mjs
- 报错"Deployment source has uncommitted changes"= 部署前忘了commit，先 `git add -A && git commit` 再重跑

## 🚨 第一条：内容必须"攻略化"，禁止"笔记化"

**目标读者是玩家**：他们打开页面是为了学到"怎么玩"，不是读你的资料总结。

### ❌ 禁止（笔记腔/论文脚注腔——一票否决，全部打回）
- "The supplied material lists 15 firearms..."
- "Reference notes indicate that..."
- "According to the provided sources..."
- "It is noted that..."
- "The supplied references divide melee weapons into..."
- 任何"根据资料/来源显示"的转述腔调
- 任何"这个系统存在，但不展开"的干瘪说明

### ✅ 必须（攻略腔——直接教玩家怎么玩）
- 直接写武器/机制本身："The M781 is the best all-round firearm..."
- 用**第二人称**："You should... / When you... / If you find..."
- 每个条目给出**具体怎么用/强在哪/弱在哪/什么场景用**
- 大量使用**表格**列数据（武器表：武器|评级|弹匣|特点|适用场景）
- 玩家视角："This is why... / This matters because..."

### 正反例对照（每个页面写完自查）

**❌ 反例（笔记腔）：**
> "The supplied references divide melee weapons into Blunt and Edged categories and note charged attacks."

**✅ 正例（攻略腔）：**
> "Melee weapons fall into two families. Blunt weapons like the mallet and wrench trade speed for stopping power — great for knocking zombies down in a tight hallway. Edged weapons like the cleaver and machete slice limbs off to slow the horde. The baseball bat tops both: fast, stamina-friendly, and it staggers enemies so you can reposition."

## 🚨 第二条：素材必须"展开"，禁止"要点清单当全文"

素材文件里每个要点 = 正文里的**一整段**（3-4句），不是一句话带过。
- 素材列了17个技能 → 正文要写成**技能表格**（技能名|效果|适用场景）
- 素材列了11把远程武器 → 正文要写成**武器表格+逐把点评**
- 素材给了地图任务链 → 正文要写成**分步攻略**（第1步做什么→第2步→…）

**判断标准：** 素材里出现过的每个具体数据/武器/机制，正文必须都有对应展开。遗漏 = 打回。

## 🚨 第三条：页面必须能"落地用"

写完每个页面，问自己："一个第一次玩的玩家看完这页，能不能直接上手？"
- 能 → 合格
- 只是"知道了有这个系统" → 不合格，重写

## 其他（继承自 SPEC 的底线）

- 禁词：待确认/coming soon/No official/unconfirmed/未找到
- 禁编造：素材没有的数据（官方数值/帧率）→ 写"玩家实测参考"或"官方未公布"
- 版本标注：EA旧素材写 "as of 1.0 launch, may differ"
- 每页：title≤60字符 / description 140-160 / H1唯一 / 4-6个H2
- 宁短勿水 ≠ 不展开——素材够的必须写够，素材不够才宁短
