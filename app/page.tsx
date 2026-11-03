import { ArrowDown, ArrowUpRight, Check, Menu } from "lucide-react";

const photoUrl = "https://raw.githubusercontent.com/dominica-commits/Dominica-Agency/main/profile.jpg.png";

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Obiefuna Chinaecherem home">
          <span className="wordmark-mark">OC</span>
          <span className="wordmark-name">Obiefuna Chinaecherem</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#approach">Approach</a>
          <a href="#services">Services</a>
          <a href="#work">Selected work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:obiefunadominica@gmail.com">
          Let&apos;s talk <ArrowUpRight size={16} />
        </a>
        <a className="mobile-menu" href="#contact" aria-label="Go to contact"><Menu size={23}/></a>
      </header>

      <section className="hero">
        <div className="hero-main">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-rule"/> SHOPIFY CRO · GRAPHIC DESIGN</div>
            <p className="hero-pretitle">A thoughtful approach to eCommerce growth.</p>
            <h1>Shopify Conversion Rate Optimisation Expert <em>&amp; Graphic Designer.</em></h1>
            <p className="hero-description">
              I help Shopify businesses turn more visitors into customers through
              conversion-focused store experiences and purposeful graphics that
              make products easier to notice, understand and buy.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">Let&apos;s improve your store <ArrowUpRight size={17}/></a>
              <a className="button-text" href="#services">Explore what I do <ArrowDown size={15}/></a>
            </div>
            <div className="hero-proof">
              <span className="proof-check"><Check size={13}/></span>
              <span>Shopify conversion rate optimisation</span>
              <i/>
              <span>eCommerce graphic design</span>
            </div>
          </div>

          <div className="hero-image-area">
            <div className="image-backdrop"/>
            <div className="portrait-card">
              <img src={photoUrl} alt="Obiefuna Chinaecherem" className="portrait" />
              <div className="portrait-overlay">
                <span>OBIEFUNA CHINAECHEREM</span>
                <span>SHOPIFY CRO &amp; GRAPHIC DESIGN</span>
              </div>
            </div>
            <div className="floating-note">
              <span className="note-icon">✳</span>
              <span>Better journeys.<br/><b>Stronger conversions.</b></span>
            </div>
            <div className="image-index">01 <span>/</span> CREATIVE PARTNER</div>
          </div>
        </div>
        <div className="hero-bottom">
          <span className="scroll-label">SCROLL TO EXPLORE <ArrowDown size={13}/></span>
          <span className="hero-bottom-line"/>
          <span className="hero-location">WORKING WITH AMBITIOUS ECOMMERCE BRANDS</span>
        </div>
      </section>

      <section className="focus-strip" id="services">
        <div className="focus-label">MY CORE FOCUS</div>
        <div className="focus-item"><span>01</span><b>Shopify CRO</b><small>Improve the path to purchase</small></div>
        <div className="focus-divider"/>
        <div className="focus-item"><span>02</span><b>eCommerce Graphics</b><small>Make every visual work harder</small></div>
      </section>
      <div id="approach" className="anchor-marker"/>
      <div id="work" className="anchor-marker"/>
      <div id="contact" className="anchor-marker"/>
    </main>
  );
}
