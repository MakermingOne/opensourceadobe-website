# Cloudflare Workers 部署指南

## 当前部署方式

### 方式1：GitHub 直连（当前默认）
- push 到 main → Cloudflare 自动拉取 → 云端构建 → 部署
- 消耗 Cloudflare Workers Builds 免费额度（3000分钟/月）

### 方式2：GitHub Actions 本地构建（推荐）
- push 到 main → GitHub Actions 构建 → wrangler deploy --no-bundle
- 不消耗 Cloudflare 构建额度，只消耗 GitHub Actions 额度

## 配置 GitHub Actions 部署

### 步骤1：获取 Cloudflare API Token
1. 登录 Cloudflare Dashboard
2. 进入 My Profile → API Tokens → Create Token
3. 使用 "Edit Cloudflare Workers" 模板
4. 权限确认：
   - Account: Workers Scripts:Edit
   - Account: Account Settings:Read
5. 复制生成的 Token

### 步骤2：获取 Account ID
1. Cloudflare Dashboard 右侧栏可以看到 Account ID
2. 或运行 `wrangler whoami` 查看

### 步骤3：配置 GitHub Secrets
1. 进入 GitHub 仓库 → Settings → Secrets and variables → Actions
2. 添加以下 secrets：
   - `CLOUDFLARE_API_TOKEN`: 步骤1的 Token
   - `CLOUDFLARE_ACCOUNT_ID`: 步骤2的 Account ID

### 步骤4：禁用 Cloudflare Git 集成（可选）
1. Cloudflare Dashboard → Workers → opensourceadobe → Settings → Builds
2. 断开 GitHub 连接，避免重复部署

## 本地部署

```bash
# 方式1：一键部署（需要本地 wrangler 认证）
pnpm deploy:cloudflare

# 方式2：分步执行
DEPLOYMENT_ENV=production pnpm build
npx wrangler deploy --no-bundle
```

## 故障排查

### 部署失败：认证错误
- 检查 GitHub Secrets 是否正确配置
- 检查 API Token 权限是否足够

### 部署失败：构建错误
- 检查 `pnpm build` 是否本地能成功
- 检查 `pnpm validate:static` 是否通过

### 部署失败：--no-bundle 不识别
- 确保 wrangler 版本 >= 3.78.0
- 旧版本用 `wrangler deploy --assets ./out --name opensourceadobe --compatibility-date 2026-10-11`

## 回滚

```bash
# 查看部署历史
npx wrangler deployments list

# 回滚到指定版本
npx wrangler rollback [deployment-id]
```
