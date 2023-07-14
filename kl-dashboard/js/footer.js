class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <!--Footer-->
      <footer class="bg-light text-lg-start">
          <hr class="m-0" />
          <div class="text-center py-4 align-items-center">
            <p>Links</p>
            <a href="https://www.staubli.com/ch/en/corp.html" class="btn m-1" role="button"
              rel="nofollow" target="_blank">
              <img src="assets/Stäubli_International_logo.svg" height="64" width="64"/>
            </a>
            <a href="https://myextranet.staubli.com/sites/Corporate/HawkEye/Documents/Forms/AllItems.aspx" class="btn m-1" role="button" rel="nofollow"
              target="_blank">
              <img src="assets/sharepoint-icon.png"/>
            </a>
            <a href="https://staubli-squad.monday.com/" class="btn m-1" role="button" rel="nofollow"
              target="_blank">
              <img src="assets/monday-icon.png" height="48" width="48"/>
            </a>
          </div>
      
          <!-- Copyright -->
          <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Stäubli:
            <a class="text-dark" href="https://staubli.com/">Staubli.com</a>
          </div>
          <!-- Copyright -->
        </footer>
        <!--Footer-->
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
  