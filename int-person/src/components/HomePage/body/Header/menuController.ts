export class MenuController {
  private ListaHTML: NodeListOf<HTMLElement>;

  constructor(buttonSelector: string) {
    this.ListaHTML = document.querySelectorAll(buttonSelector);
    this.initialize();
  }

  private initialize() {
    this.ListaHTML.forEach(button => {
      const targetMenuId = button.dataset.target;
      if (!targetMenuId) return;

      const menuElement = document.getElementById(targetMenuId);
      if (!menuElement) return;

      // Alterna o estado do menu ao clicar no botão
      button.addEventListener("click", () => {
        button.classList.toggle("is-open");
        menuElement.classList.toggle("is-active");
      });

      // Fecha o menu ao clicar em um link dentro dele
      menuElement.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          button.classList.remove("is-open");
          menuElement.classList.remove("is-active");
        });
      });
    });
  }
}
