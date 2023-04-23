export interface Menu {
  /**
   * Nome do módulo
   */
  modulo: string;

  /**
   * Imagem do módulo
   */
  backgroundImage: string;

  /**
   * Cor do separador que é mostrado no módulo
   */
  separatorColor: string;

  /**
   * Cor do background que é mostrado no módulo
   */
  backgroundColor: string;

  /**
   * Cor da borda que é mostrada no módulo
   */
  borderColor: string;

  /**
   * Rota que o módulo deve abrir
   */
  router?: string;
}
