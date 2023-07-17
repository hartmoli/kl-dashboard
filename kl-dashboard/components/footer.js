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
            <a href="#" class="btn btn-primary m-1" role="button"
              rel="nofollow" target="_blank">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="#" class="btn btn-primary m-1" role="button" rel="nofollow"
              target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="btn btn-primary m-1" role="button" rel="nofollow"
              target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="btn btn-primary m-1" role="button" rel="nofollow"
              target="_blank">
              <i class="fab fa-github"></i>
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
  