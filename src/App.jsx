import "./styles.css";

function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`poster-section ${className}`}>
      <div className="section-content">{children}</div>
    </section>
  );
}

function App() {
  return (
    <main className="poster">
      <Section id="hero" className="hero-section">
        <p className="eyebrow">SpaceCHI 2026 - Poster</p>

        <h1>
          Visual Prosody:
        </h1>

        <p className="hero-subtitle">
          A Legibility-Preserving Approach for Emotionally Expressive Text in Interplanetary Communication
        </p>

        <p className="authors">
          Shichen Zhang, Ann Bessemans, Kris Luyten | UHasselt
        </p>
      </Section>

      <Section id="problem" className="problem-section">
        <p className="eyebrow">Problem space</p>

        <h2 className="section-title">
          Text Has Advantages in Delayed Space Communication But Strips Away Emotional Information
        </h2>

        <div className="problem-layout">
        <div className="problem-copy">
          <p>
            As humanity moves toward sustained interplanetary presence, 
            communication must adapt to constraints fundamentally different from those on Earth and in Low-Earth Orbit (LEO). 
            Future missions will face unavoidable signal latency and limited networking bandwidth [15, 22]. 
            Communication between Earth and Mars experiences 8.5 to 40 minutes of round-trip delay depending on orbital positioning [1, 19], 
            making conversational multimedia channels increasingly impractical [18]. Although technologies such as Delay-Tolerant Networking (DTN) 
            and the future InterPlaNetary Internet (IPN) can improve networking reliability, they cannot eliminate the physical constraint of 
            signal delay [1, 12].
          </p>

          <p>
            Research suggests that astronauts prefer text-based communication under delayed conditions because 
            it supports asynchronous workflows, reprocessability, and structured information exchange [6, 9, 10, 14]. 
            However, text inherently lacks prosodic and emotional cues such as emphasis, intonation, and tone, increasing the
            risk of misinterpretation when clarification may require up to 40 minutes [1, 5, 21]. Studies have documented misunderstandings, 
            weakened common ground, and frustration during delayed missions [8, 10, 19]. Beyond operational risks, the absence of emotional 
            expressiveness may also undermine interpersonal connection and psychological wellbeing in isolated environments [11, 13, 15]. 
            Existing solutions primarily improve communication reliability and continuity but do not address the loss of prosodic 
            information [9, 10]. This motivates the need for an emotionally expressive, latency-resilient communication channel that 
            preserves the benefits of text under interplanetary conditions.
          </p>
        </div>

        <figure className="problem-figure">
          <img
            src="/images/earth-mars-delay.png"
            alt="Earth and Mars communication delay"
          />
        </figure>
        </div>
      </Section>

      <Section id="idea" className="idea-section">
        <p className="eyebrow">Proposed Solution</p>

        <h2 className="idea-title">
          Visually Enrich Prosodic Infromation: Use Type to Suggest How a Message Sounds
        </h2>

        <div className="idea-layout">
          <div className="idea-copy">
          <p>
          Visual prosody refers to visual cues embedded in text that convey prosodic and emotional information, 
          such as emphasis, intonation, and tone, through typographic variation [5, 16, 21]. 
          By representing how something is said rather than only what is said, visual prosody makes text more expressive and closer to spoken 
          communication [16, 17].
          </p>

          <p>
          This project investigates how speech prosodic and emotional cues can be automatically extracted from speech and represented through 
          dynamic typographic morphing using an arousal-valence model and variable fonts. The goal is to develop and empirically validate an 
          interactive, emotionally expressive text communication system while preserving text legibility.
          </p>
          </div>

          <div className="idea-image">
          <img 
          src="/images/Screenshot 2026-08-03 at 21.18.54.png"
          alt="Visual prosody illustration"
          />
          </div>
        </div>
      </Section>

      {/*
      <Section id="example" className="example-section">
        <p className="eyebrow">See the difference</p>

        <div className="comparison">
          <article>
            <span className="comparison-label">Plain text</span>
            <p className="plain-message">
              We lost the signal for a moment, but everything is under control.
            </p>
          </article>

          <article>
            <span className="comparison-label">Visual prosody</span>
            <p className="expressive-message">
              We lost the signal for a moment, but everything is under control.
            </p>
          </article>
        </div>
      </Section>
      */}

      <Section id="design-space" className="design-section">
        <p className="eyebrow">Design space</p>

        <h2 className="design-title">
          Systematic Mapping Between Prosody and Typography: Atomizing Speech and Type into a Shared Design Space
        </h2>

        <div className="design-copy">
        <p>
          We propose an intermediate layer of design atoms that bridges speech and typography.
          Prosodic atoms capture perceptually relevant aspects of spoken expression, 
          while font atoms describe independent dimensions of typography. Visual prosody is then created 
          by systematically relating these two sets of atoms, providing a flexible and extensible framework 
          for expressive text design.
        </p>
        </div>

      <div className="design-figure">
      <img
        src="/images/Screenshot 2026-08-03 at 22.04.56.png"
        alt="Visual Prosody Design Space"
      />
      </div>
      </Section>

      <Section id="relay" className="relay-section">
        <p className="eyebrow">In context</p>

        <h2 className="relay-title">
          Experience Visual Prosody in Earth-Mars Messaging Scenario
        </h2>

        <div className="relay-copy">
        <p>
          This interactive prototype demonstrates one possible application of visual prosody in 
          a future Earth-Mars messaging system. Try sending and receiving messages to explore how expressive 
          typography may communicate emotional nuance while preserving the advantages of text-based communication.
        </p>
        </div>

        <div className="relay-demo">
         <iframe
          src="https://krisluyten.net/visual-prosody-01082026/relay/"
          title="Earth-Mars Relay Prototype"
          className="relay-frame"
         />
        </div>
      </Section>

      <footer className="footer">
      <div className="footer-content">
       <div className="footer-logos">
       <img src="/images/uhasselt-logo.png" alt="UHasselt" />
       <img src="/images/digital-future-lab-logo.jpg" alt="Digital Future Lab" />
       <img src="/images/readsearch-logo.png" alt="READSEARCH" />
       </div>
      
        <div className="footer-contact">
        <p>SpaceCHI 2026 | Contact: shichen.zhang@uhasselt.be</p>
        </div>
      </div>
      </footer>
    </main>
  );
}

export default App;