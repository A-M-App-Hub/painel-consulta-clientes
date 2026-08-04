# syntax=docker/dockerfile:1
# AS1I canônico: bun build + FastAPI runtime (pip, sem uv no Docker).
FROM oven/bun:1 AS frontend-build
WORKDIR /frontend
COPY frontend/package.json frontend/bun.lock* ./
RUN bun install
COPY frontend/ ./
RUN bun run build

FROM python:3.13-slim
WORKDIR /app
RUN pip install --no-cache-dir --break-system-packages \
    "fastapi>=0.115.0" "uvicorn[standard]>=0.24.0"
COPY src/ ./src/
COPY --from=frontend-build /frontend/dist ./dist
EXPOSE 8080
CMD ["sh", "-c", "uvicorn src.main:app --host 0.0.0.0 --port ${PORT:-8080}"]
