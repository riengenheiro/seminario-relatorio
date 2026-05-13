/**
 * Configurações da página de captura — Seminário de Relatórios.
 *
 * Atualize os valores conforme as decisões forem fechadas
 * (data, hora, links de checkout dos tiers VIP/Platinum, grupo do WhatsApp).
 */

export const SITE_URL = 'https://seminario.doutoraescola.com.br';

export const SEMINARIO = {
  nome: 'Seminário de Relatórios',
  /** Data exibida (ex.: obrigado, hero), texto legível */
  dataExibida: '26 de maio',
  /** Hora exibida */
  horaExibida: '19h37',
  /** Carga horária do certificado gratuito (texto livre) */
  cargaGratuita: '10 horas',
  cargaVip: '15 horas',
  cargaPlatinum: '30 horas',
};

/**
 * Links de checkout de todos os tiers.
 * Trocar pelos URLs definitivos (Hotmart, Kiwify, Voomp, etc.).
 */
export const CHECKOUT_GRATUITO = '#gratuito-checkout';
export const CHECKOUT_VIP = '#vip-checkout';
export const CHECKOUT_PLATINUM = '#platinum-checkout';

/** Links dos grupos de WhatsApp usados nas páginas de obrigado */
export const WHATSAPP_GRUPO_GOLD = 'https://chat.whatsapp.com/BRamHebNJTLDwNwmxh6ySg';
export const WHATSAPP_GRUPO_VIP = 'https://chat.whatsapp.com/BRamHebNJTLDwNwmxh6ySg';
export const WHATSAPP_GRUPO_PLATINUM = 'https://chat.whatsapp.com/GN89SaFivKu7FzSShLpte4';

/** Mantido como compatibilidade para fluxos antigos */
export const WHATSAPP_GRUPO = WHATSAPP_GRUPO_GOLD;

/** ID do Facebook Pixel — mesmo da Doutora Escola por padrão */
export const FACEBOOK_PIXEL_ID = '903214411087074';
