/**
 * Configurações da página de captura — Seminário de Relatórios.
 *
 * Atualize os valores conforme as decisões forem fechadas
 * (data, hora, links de checkout dos tiers VIP/Platinum, grupo do WhatsApp).
 */

export const SITE_URL = 'https://seminario.doutoraescola.com.br';

export const SEMINARIO = {
  nome: 'Seminário de Relatórios',
  /** Data exibida no Hero, ex.: "Quarta, 12 de junho" */
  dataExibida: '[DEFINIR DATA]',
  /** Hora exibida no Hero, ex.: "19h30 (horário de Brasília)" */
  horaExibida: '[DEFINIR HORA]',
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

/** Link do grupo de WhatsApp usado na página de obrigado */
export const WHATSAPP_GRUPO = 'https://chat.whatsapp.com/EXEMPLO';

/** ID do Facebook Pixel — mesmo da Doutora Escola por padrão */
export const FACEBOOK_PIXEL_ID = '903214411087074';
