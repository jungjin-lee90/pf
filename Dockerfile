# 1단계: 빌드 환경
FROM node:18 AS build
WORKDIR /app

# package.json과 yarn.lock을 복사하고 패키지 설치
COPY package.json yarn.lock ./
RUN yarn install

# 소스 코드 복사 및 빌드 실행
COPY . .
RUN yarn build

# 2단계: 운영 환경 (Nginx 사용)
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# React 빌드 결과물 복사
COPY --from=build /app/build .

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 80 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]

