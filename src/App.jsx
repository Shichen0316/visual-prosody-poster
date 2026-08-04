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
        <p className="eyebrow">SpaceCHI 2026</p>

        <h1>
          Visual Prosody:
        </h1>

        <p className="hero-subtitle">
          A legibility-preserving approach for emotionally expressive text in
          interplanetary communication
        </p>

        <p className="authors">
          Shichen Zhang, Ann Bessemans
        </p>
      </Section>

      <Section id="problem">
        <p className="eyebrow">Problem space</p>

        <h2 className="section-title">
          Text Has Advantages in Delayed Space Communication But Strips Away Emotional Information
        </h2>

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
      </Section>

      <Section id="idea" className="idea-section">
        <p className="eyebrow">The idea</p>

        <h2 className="idea-title">
          Visually Enrich Prosodic Infromation: Use Type to Suggest How a Message Sounds
        </h2>

        <div className="idea-layout">
          <div className="idea-copy">
          <p>
          Visual prosody uses visible changes in text to suggest parts of spoken delivery. 
          In this prototype, heavier text suggests a louder voice, raised text a higher voice, wider text a slower voice, 
          and extra space a pause. Earlier visual-prosody work explored these links in reading materials.[3][16] 
          The cues are suggestions, not a universal language. Readers need a clear key, the original words must remain easy to read, 
          and the idea still needs testing in a communication setting. These prototypes are research tools for that testing.
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

      <Section id="example">
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

      <Section id="design-space" className="design-section">
        <p className="eyebrow">Design space</p>

        <h2 className="design-title">
          Add expression without hiding the message.
        </h2>

        <div className="design-copy">
        <p>
          Visual prosody builds upon the multidimensional framework proposed by
          Bessemans et al., mapping prosodic and emotional characteristics of speech
          to typographic variables while preserving readability. The framework
          establishes a design space that links emotional dimensions and speech
          attributes with font dimensions, providing a systematic foundation for
          expressive typography.
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
          Experience visual prosody in an Earth–Mars messaging scenario.
        </h2>

        <div className="relay-copy">
        <p>
          This prototype illustrates how visual prosody could be incorporated into
          future interplanetary messaging systems. Rather than replacing text, it
          augments text with expressive typographic cues while preserving the
          advantages of asynchronous communication.
        </p>
        </div>

        <div className="relay-demo">
          <p>Relay prototype will be embedded here.</p>
        </div>
      </Section>
    </main>
  );
}

export default App;