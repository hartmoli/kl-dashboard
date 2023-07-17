class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar nav-item dropdown bg-dark navbar-dark">
      <div class="container-fluid">
          <img src="../assets/Stäubli_International_logo.svg" alt="Staubli Logo" class="logo" height="87" width="150" href="home.html"/>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="home.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Revenue Growth</a>
              <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="#roic.html">ROIC</a></li>
                  <li><a class="dropdown-item" href="#fcf.html">FCF</a></li>
                </ul>
            </li>   			  
            <li class="nav-item">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Supply Chain</a>
              <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="inventory.html">Inventory</a></li>
                  <li><a class="dropdown-item" href="doh.html">DoH</a></li>
                  <li><a class="dropdown-item" href="#cops.html">COPS</a></li>
                  <li><a class="dropdown-item" href="#otif.html">OTIF</a></li>
                </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Markets</a>
              <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="#rms.html">RMS</a></li>
                  <li><a class="dropdown-item" href="#nps.html">NPS</a></li>
                </ul>
            </li>   
          </ul>
        </div>
      </div>
    </nav>
      `;
    }
  }
  
  customElements.define('header-component', Header);
  