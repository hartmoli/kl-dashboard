class Header extends HTMLElement {
    constructor() {
      super();
    }
  
      connectedCallback() {
      this.innerHTML = `
      <!-- navbar -->
      <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html"><img src="assets/Stäubli_International_logo.svg" alt="Staubli Logo" class="logo" height="87" width="150"/></a>
        <!-- toggle button for mobile nav -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- navbar links -->
        <div class="collapse navbar-collapse justify-content-end align-center" id="collapsibleNavbar">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>

            <!-- Finance -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Finance</a>
              <ul class="dropdown-menu dropdown-menu-light">
                  <li><a class="dropdown-item" href="revenuegrowth.html">Revenue Growth</a></li>
                  <li><a class="dropdown-item" href="roic.html">ROIC</a></li>
                  <!--- FCF to be hide for now
                  <li><a class="dropdown-item" href="nopagefound.html">FCF</a></li>
                  -->
                </ul>
            </li>

            <!-- Markets -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Markets</a>
              <ul class="dropdown-menu dropdown-menu-light">
                  <!--- RMS to be hide for now
                  <li><a class="dropdown-item" href="nopagefound.html">Relative Market Share</a></li>
                  -->
                  <li><a class="dropdown-item" href="nps.html">NPS</a></li>
                </ul>
            </li>

            <!-- Business -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Business</a>
              <ul class="dropdown-menu dropdown-menu-light">
                  <li><a class="dropdown-item" href="revenuegrowthbybusiness.html">Revenue Growth by Business</a></li>
                  
                </ul>
            </li>

            <!-- Organization - to be hide for now
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Organisation</a>
              <ul class="dropdown-menu dropdown-menu-light">
                  <li><a class="dropdown-item" href="nopagefound.html">Earned Value</a></li>
                  <li><a class="dropdown-item" href="nopagefound.html">Employee Engagement</a></li>                  
                </ul>
            </li>
            -->

            <!-- Supply Chain -->                                            		  
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Supply Chain</a>
              <ul class="dropdown-menu dropdown-menu-light">
                  <li><a class="dropdown-item" href="inventory.html">Inventory</a></li>
                  <li><a class="dropdown-item" href="doh.html">DoH</a></li>
                  <li><a class="dropdown-item" href="cops.html">COPS</a></li>
                  <li><a class="dropdown-item" href="otif.html">OTIF</a></li>
                  <li><a class="dropdown-item" href="mpi.html">MPI</a></li>                  
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
  