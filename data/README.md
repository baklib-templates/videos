# Jobs 主题数据目录说明

本目录用于沉淀 `themes/cms/jobs` 主题相关的参考数据与素材（案例、截图、原始站点 HTML 等），方便后续补齐配置、对齐实现与验收。

## 二级域名（subdomains）

将所有与 Jobs 主题相关的二级域名维护在一个数组里（用于采集、对照、验收时快速定位）。

> 约定：只写二级域名部分（不含协议、不含主域名），例如 `jobs`、`careers`、`talent`。

```ruby
SUBDOMAINS = %w[
  careers
  join
  jobs
  life
  lifeat
  recruit
  recruiting
  talent
  team
  work
].freeze
```

## 案例 URL（cases）

将可公开访问、可复现的案例链接维护为列表（用于页面结构参考、交互对照、截图对比）。

> 约定：
> - 使用完整 URL（含 `https://`）
> - 同一品牌多语言/多地区站点可分行列出
> - 如需标注用途，用括号补充短备注

```text
- https://vercel.com/careers (Vercel 招聘页：列表/详情/申请入口参考)
- https://jobs.netflix.com (Netflix：jobs 子域)
- https://www.apple.com/careers/ (Apple：jobs 子域入口)
- https://careers.google.com (Google：careers 子域)
- https://www.figma.com/careers/ (Figma：jobs 子域常见指向)
- https://stripe.com/careers (Stripe：careers 子域常见指向)
- https://www.grab.careers/ (Grab：careers 子域常见指向)
- https://klarna.com/careers (Klarna：careers 子域常见指向)
- https://www.robinhood.com/company/careers/ (Robinhood：join 子域常见指向)
- https://progression.monzo.com/ (Monzo：join 子域常见指向)
- https://join.skyscanner.net (Skyscanner：join 子域)
- https://careers.weber.com/ (Weber：team 子域常见指向)
- https://www.lifeatspotify.com/ (Spotify：lifeat 子域)
- https://career.huawei.com/ (Huawei：life 子域常见指向)
- https://www.coinbase.com/careers (Coinbase：work 子域（曾用）常见指向)
- https://www.crowdstrike.com/en-us/careers/ (CrowdStrike：talent 子域常见指向)
- https://jobs.trustpilot.com/ (Trustpilot：talent 子域常见指向)
- https://recruiting.adp.com (ADP：recruiting 子域)
```

## TODO（待补充清单）

- [ ] 补齐 `SUBDOMAINS` 数组（去重、按字母排序）
- [ ] 补齐案例 URL 列表（至少：首页 / 职位列表 / 职位详情 / 申请流程）
- [ ] 在 `cases/` 下按品牌新建子目录，沉淀关键信息（站点截图、关键 DOM、交互要点）
- [ ] 在 `screenshots/` 下补齐统一命名的对照截图（`brand-page-date.png`）
- [ ] 明确 `job-board-html/` 数据来源与用途（版本号/更新时间/用于哪些页面参考）
- [ ] 如果存在采集脚本或导入脚本，在本目录补充 `scripts/` 并记录使用方式

