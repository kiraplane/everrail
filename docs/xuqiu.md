# EverRail Wiki 网站开发需求

## 项目标识

- 游戏名称：EverRail
- 网站名称：EverRail Wiki
- 平台：Steam
- 规范域名：https://www.everrail.wiki
- 本地项目目录名：`everrail`
- GitHub 仓库名：`everrail`
- Cloudflare Worker 项目名：`everrail`

## 已核验的官方身份

- Steam 官方商店：https://store.steampowered.com/app/4134600/EverRail/
- Steam App ID：`4134600`
- 开发者：Aesir Interactive
- 发行商：Aesir Interactive
- Steam 关联官方网站：https://aesir-interactive.com/games/19/everrail
- Early Access 上线日期：2026-07-20
- 官方定位：一款可单人或最多 4 人在线合作的开放世界生存建造游戏。玩家在冰封系外卫星 Inara 上驾驶并扩建持续移动的列车，通过探索、采集、制作、战斗、滑翔与救援乘客维持旅程；列车停止时会消耗电力，乘客数量也决定死亡后能否继续。

身份边界：本项目只描述 Steam App `4134600` 的 EverRail Early Access 正式版本。不得把 EverRain、Unrailed!、Frostrail、Railborn、Frostliner、Enginefall，或源模板的开发者、发行商、商店链接、玩法、成就和素材当作目标游戏内容。Steam 商店内提供的 EverRail Demo 只能在明确标注 Demo 与 Early Access 正式版本差异时作为辅助资料。

## 核心种子关键词

- `everrail`
- `everrail wiki`
- `everrail guide`
- `everrail beginner guide`
- `everrail survival guide`
- `everrail train guide`
- `everrail crafting guide`
- `everrail co op`
- `everrail steam`
- `everrail achievements`

以上仅为建站预检种子词。完整开发前必须重新进行当前长尾需求、People Also Ask、相关搜索、竞品与 YouTube 资料调研，再将候选词标记为 `keep`、`ignore`、`watch` 或 `localize_later`，并据此决定实际页面、实体命名和路由；不预设 `codes`、`tier list` 或数据库页面。

## 目标文件与命名空间

- 计划 PRD：`docs/everrail-wiki-prd-and-implementation-plan.md`
- 目标数据层：`src/data/everrail/`
- 目标 App Router 路由组：`src/app/[locale]/(everrail)/`
- 目标组件命名空间：`src/components/everrail/`
- 目标静态资源命名空间：`public/everrail/`

## 确认后的开发范围

1. 基于当前搜索需求、Steam 官方资料、Steam 关联官网与官方渠道、可靠竞品和 YouTube 攻略，编写关键词矩阵、竞品基准和 PRD。
2. 将复制的模板彻底迁移为只服务 EverRail 的英文攻略站，按资料厚度决定首发页面数量，不为凑数制造空页面。
3. 根据已核验需求决定是否建设 beginner、train power、crafting、resources、passengers、expeditions、glider、combat、co-op、achievements、system requirements、demo/full-version differences 或其他页面；不得机械保留模板栏目。
4. 首页、分类枢纽、攻略详情、侧边 Wiki 导航、移动端 Wiki 菜单、相关链接、法律页面、sitemap、robots 和 manifest 均使用 EverRail 专属内容与元数据，并明确标注会随 Early Access 更新变化的系统与数值。
5. 完成模板迁移残留检查、lint、TypeScript、构建和浏览器预览 QA；未请求广告，因此确认后移除一切继承的第三方广告配置。
6. 验证完成后创建并推送 GitHub 仓库 `everrail`，部署同名 Cloudflare Worker，绑定 `everrail.wiki` 与 `www.everrail.wiki`，以 `www` 为 canonical，并在权限允许时配置 GitHub 自动构建和 GA4。
7. 创建并验证 GSC Domain Property `sc-domain:everrail.wiki`，通过 Cloudflare apex DNS TXT 验证，提交完整 sitemap，并同步 GA-GTM 注册信息。
8. 按 `wiki-site-builder` 流程将站点幂等注册到 Shipmanager；第二个核心链接必须从实际实现且需求最强的 hub 中选择，不能预设为模板栏目。
