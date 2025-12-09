# SCAAGP - Deploy Vercel

## Passo a Passo para Deploy

### 1. Criar conta na Vercel

- Acesse: https://vercel.com
- Faça login com sua conta GitHub

### 2. Preparar repositório GitHub

Se ainda não tem o projeto no GitHub:

```bash
# Inicializar git (se ainda não foi)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Preparar deploy Vercel"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/SEU_USUARIO/NOME_REPO.git
git branch -M main
git push -u origin main
```

### 3. Fazer Deploy na Vercel

**Opção A - Via Dashboard Vercel (Recomendado)**:

1. Acesse https://vercel.com/new
2. Clique em "Import Git Repository"
3. Selecione seu repositório do GitHub
4. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: (deixe vazio)
   - **Output Directory**: (deixe vazio)
5. Clique em "Deploy"

**Opção B - Via CLI**:

```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Deploy
vercel
```

### 4. Configurações Importantes

O projeto já está configurado com:

- ✅ `vercel.json` - Configuração de roteamento
- ✅ `package.json` - Engines e scripts
- ✅ `server.js` - Servidor Express

### 5. Após Deploy

A Vercel vai gerar uma URL como:

```
https://seu-projeto.vercel.app
```

Para domínio customizado:

1. Vá em Project Settings > Domains
2. Adicione seu domínio

### 6. Atualizações Automáticas

Toda vez que fizer push no GitHub:

```bash
git add .
git commit -m "Atualização"
git push
```

A Vercel detecta e faz deploy automático!

## Variáveis de Ambiente (Futuro)

Quando precisar de variáveis de ambiente:

1. Vá em Project Settings > Environment Variables
2. Adicione as variáveis necessárias

## Troubleshooting

**Erro 404**: Verifique se `vercel.json` está na raiz
**Erro de Build**: Verifique se `package.json` tem todas as dependências
**Erro de Rota**: Todas as rotas devem passar pelo `server.js`

## Comandos Úteis

```bash
# Ver logs
vercel logs

# Remover deploy
vercel remove nome-do-projeto

# Ver lista de deploys
vercel ls
```
