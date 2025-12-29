# =========================
# Base image
# =========================
FROM mcr.microsoft.com/playwright:v1.57.0-jammy AS base

WORKDIR /app

# =========================
# Install dependencies
# =========================
FROM base AS deps

COPY package.json package-lock.json ./
RUN npm ci

# =========================
# Test runner stage
# =========================
FROM base AS runner

WORKDIR /app

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy project files
COPY . .

# Ensure folders exist
RUN mkdir -p allure-results playwright-report

# Run Playwright tests with 4 workers
CMD ["npx", "playwright", "test", "--workers=4"]
