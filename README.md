# 🔐 Mini Sistema de Autenticação com Rotas Protegidas (React + Context API)

Este projeto é um mini sistema de autenticação feito com **React**, usando **React Router v6**, **Context API** e **Hooks** para gerenciamento de login, logout e proteção de rotas.

---

## ✅ Funcionalidades

- ✅ Login e Logout usando Context API
- ✅ Rota protegida que exige autenticação
- ✅ Navbar fixa com navegação entre páginas
- ✅ Persistência de usuário no `localStorage`
- ✅ Redirecionamento para a página original após login
- ✅ Estilo simples e elegante com feedback visual

---

## 🛠️ Tecnologias Usadas

| Ferramenta        | Descrição                       |
|-------------------|---------------------------------|
| **React**         | Biblioteca JavaScript UI        |
| **React Router**  | Gerenciamento de rotas SPA      |
| **Context API**   | Gerenciamento global de estado  |
| **Hooks**         | `useState`, `useContext`, `useEffect`, `useNavigate`, `useLocation`

---

## ▶️ Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git

# 2. Acesse a pasta
cd nome-da-pasta

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm start

---

💡 Como funciona
O AuthContext guarda o usuário e fornece login() e logout()

A ProtectedRoute impede o acesso ao Dashboard se não estiver logado

Após o login, o usuário é redirecionado de volta à rota protegida original

O estado do usuário é salvo no localStorage para persistência

