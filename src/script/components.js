class HeaderMain extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="header__main">
                <h2 class="header__covid-text"> Covid - 19 </h2> 
                <p class="header__description-text"> This site for information about covid - 19 </p> 
                <p class="header__description-text"> made by raihan muhammad </p>
                <div class="mt-md">
                    <a href="#main" class="btn btn-primary"> Get Started </a> 
                </div> 
            </section>
        `
    }
}

customElements.define("header-main", HeaderMain);