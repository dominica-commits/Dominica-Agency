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
      <section className="about-section" id="approach">
        <div className="section-kicker"><span/> A LITTLE ABOUT MY WORK</div>
        <div className="about-grid">
          <div className="about-heading">
            <p className="section-overline">THE PERSON BEHIND THE PROCESS</p>
            <h2>Good design should do more than <em>look good.</em></h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">I’m Obiefuna Chinaecherem, a Shopify-focused creative who cares about what happens after someone lands on your store.</p>
            <p>I bring together conversion thinking and visual design to help eCommerce businesses create clearer, more confident shopping experiences. My work starts with understanding the customer journey, spotting what may be getting in the way, and making thoughtful improvements.</p>
            <p>Whether I’m reviewing a Shopify store or creating graphics for a campaign, the goal is the same: make the message clearer, the experience smoother, and the next step easier for customers.</p>
            <a className="about-link" href="#contact">Have a project in mind? Let’s talk <ArrowUpRight size={16}/></a>
          </div>
        </div>
        <div className="approach-row">
          <div className="approach-intro"><span>HOW I THINK</span><b>Thoughtful work.<br/>Purposeful outcomes.</b></div>
          <article className="approach-card"><span>01</span><h3>Understand</h3><p>Look at the store, its products and the people it needs to serve.</p></article>
          <article className="approach-card"><span>02</span><h3>Identify</h3><p>Find friction in the shopping journey and opportunities to communicate better.</p></article>
          <article className="approach-card"><span>03</span><h3>Improve</h3><p>Make considered changes that support a clearer path from discovery to purchase.</p></article>
        </div>
      </section>
      <div id="work" className="anchor-marker"/>
      <div id="contact" className="anchor-marker"/>
    </main>
  );
}
