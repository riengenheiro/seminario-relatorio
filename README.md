# Seminário de Relatórios — Página de Captura

Projeto Astro da página de captura do **Seminário de Relatórios** da Doutora Escola.
Reaproveita a base técnica do projeto `doutora-escola-v2` (Astro 4 + Tailwind + React) e o rodapé institucional `DOUTORA ESCOLA`.

## Estrutura

```
seminario-relatorio/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   ├── favicon.png
│   └── images/seminario/
│       └── guaciara-foto.webp
└── src/
    ├── components/
    │   ├── SRHero.astro          → Headline + data/hora + chamada de certificado
    │   ├── SRTiers.astro         → 3 cards: Gratuito / VIP / Platinum
    │   ├── SRFormulario.astro    → Captura de nome/e-mail/WhatsApp
    │   ├── SRAutoridade.astro    → Mini bio da Guaciara
    │   └── SRFooter.astro        → Rodapé institucional Doutora Escola
    ├── config/
    │   └── seminario.ts          → Data, hora, links de checkout, WhatsApp, Pixel
    ├── layouts/
    │   └── Layout.astro          → HTML base + Meta Pixel + UTM forwarder
    ├── pages/
    │   ├── index.astro           → Página de captura
    │   └── obrigado.astro        → Página de obrigado com botão do WhatsApp
    └── styles/global.css
```

## Scripts

```bash
npm install      # instala dependências
npm run dev      # ambiente local em http://localhost:4321
npm run build    # gera /dist com saída estática
npm run preview  # preview do build estático
```

## Pontos a fechar antes de subir

Edite `src/config/seminario.ts` com os valores finais:

- `dataExibida` e `horaExibida` do Seminário
- `CHECKOUT_VIP` e `CHECKOUT_PLATINUM` (Kiwify / Hotmart / Voomp etc.)
- `WHATSAPP_GRUPO` com o link real do grupo
- `SITE_URL` com o domínio definitivo
- `FACEBOOK_PIXEL_ID` (já vem com o ID padrão da Doutora Escola)

## Fluxo da página

1. Usuária cai na Home (`/`) e vê o Hero com data/hora do Seminário.
2. Rola até a seção `#tiers` e escolhe um dos 3 planos.
3. Ao clicar em qualquer botão de tier, o formulário (`#formulario`) recebe o tier selecionado em um campo oculto e atualiza o texto "Plano escolhido".
4. Submete o formulário → vai para `/obrigado/` com os dados na query string.
5. Na página de obrigado, o nome é restaurado do `sessionStorage` e o CTA principal leva ao grupo de WhatsApp.

> Observação: os tiers VIP e Platinum atualmente apontam para placeholders (`#vip-checkout` / `#platinum-checkout`). Quando os links reais de pagamento forem definidos, basta substituí-los em `src/config/seminario.ts`. Se for desejado integrar o checkout em modal (como no `doutora-escola-v2`), podemos portar o componente `DE2CheckoutModal.astro`.
// Ultima atualizacao: 2026-05-11 19:56:20
