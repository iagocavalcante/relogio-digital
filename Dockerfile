# Usar imagem base leve do Nginx
FROM nginx:1.27-alpine

# Remover arquivos default do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar os arquivos do projeto para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Expor a porta padrão HTTP
EXPOSE 80

# O comando default já inicia o Nginx, não é necessário sobrescrever