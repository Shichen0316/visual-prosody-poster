import "./styles.css";

function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`poster-section ${className}`}>
      <div className="section-content">{children}</div>
    </section>
  );
}

const references = [
  {
    id: 1,
    text: "Ian F. Akyildiz, Özgür B. Akan, Chao Chen, Jian Fang, and Weilian Su. 2003. InterPlaNetary Internet: state-of-the-art and research challenges. Computer Networks 43, 2 (October 2003), 75–112.",
    url: "https://doi.org/10.1016/S1389-1286(03)00345-1",
  },
  {
    id: 2,
    text: "Bryan Caldwell, Pete Roma, and Kim Binsted. 2016. Team Cohesion, Performance, and Biopsychosocial Adaptation Research at the Hawai’i Space Exploration Analog and Simulation (HI-SEAS). April 15, 2016.",
    url: "https://doi.org/10.13140/RG.2.2.34272.89605",
  },
  {
    id: 3,
    text: "Saemi Choi and Kiyoharu Aizawa. 2019. Emotype: Expressing emotions by changing typeface in mobile messenger texting. Multimedia Tools and Applications 78, 11 (June 2019), 14155–14172.",
    url: "https://doi.org/10.1007/s11042-018-6753-3",
  },
  {
    id: 4,
    text: "Alan R. Dennis, Robert M. Fuller, and Joseph S. Valacich. 2008. Media, Tasks, and Communication Processes: A Theory of Media Synchronicity. MIS Quarterly 32, 3 (September 2008), 575–600.",
    url: "https://doi.org/10.2307/25148857",
  },
  {
    id: 5,
    text: "Ute Fischer and Kathleen Mosier. 2014. The Impact of Communication Delay and Medium on Team Performance and Communication in Distributed Teams. Proceedings of the Human Factors and Ergonomics Society Annual Meeting 58, 1 (September 2014), 115–119.",
    url: "https://doi.org/10.1177/1541931214581025",
  },
  {
    id: 6,
    text: "Ute Fischer and Kathleen Mosier. 2015. Communication Protocols to Support Collaboration in Distributed Teams Under Asynchronous Conditions. Proceedings of the Human Factors and Ergonomics Society Annual Meeting 59, 1 (September 2015), 1–5.",
    url: "https://doi.org/10.1177/1541931215591001",
  },
  {
    id: 7,
    text: "Ute Fischer, Kathleen Mosier, Josef Schmid, Andrew Smithsimmons, and Rob Brougham. 2023. Braiding – A novel approach to supporting space/ground communication under signal latency. Acta Astronautica 207 (June 2023), 411–424.",
    url: "https://doi.org/10.1016/j.actaastro.2023.03.023",
  },
  {
    id: 8,
    text: "Taara Kumar and Kokil Jaidka. 2026. Reading Between the Lines: How Electronic Nonverbal Cues Shape Emotion Decoding.",
    url: "https://doi.org/10.48550/arXiv.2603.21038",
  },
  {
    id: 9,
    text: "Maarten Renckens, Leo De Raeve, Erik Nuyts, María Pérez Mena, and Ann Bessemans. 2021. A preliminary study exploring the relation between visual prosody and the prosodic components in sign language. Visible Language 55, 1 (September 2021).",
    url: "https://doi.org/10.34314/vl.v55i1.4604",
  },
  {
    id: 10,
    text: "Tara Rosenberger and Ronald L. MacNeil. 1999. Prosodic font: translating speech into graphics. In CHI ’99 Extended Abstracts on Human Factors in Computing Systems (CHI EA ’99), May 15, 1999. Association for Computing Machinery, New York, NY, USA, 252–253.",
    url: "https://doi.org/10.1145/632716.632872",
  },
  {
    id: 11,
    text: "Drew Smithsimmons. Topical campaign for the interactional effects of human long-duration spaceflight hazards under conditions of time-delayed communication.",
    url: "https://science.nasa.gov/wp-content/uploads/2023/05/188_fed0ad8278e728107533d509b24dc68b_SmithsimmonsDrew.pdf",
  },
  {
    id: 12,
    text: "Mengzhu Yan and Xue Wu. 2024. Prosody in linguistic journals: a bibliometric analysis. Humanities and Social Sciences Communications 11, 1 (February 2024), 311.",
    url: "https://doi.org/10.1057/s41599-024-02825-9",
  },
];

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
          Shichen Zhang, Kris Luyten, Ann Bessemans | UHasselt, KU Leuven
        </p>
      </Section>

      <Section id="problem" className="problem-section">
        <p className="eyebrow">Problem space</p>

        <h2 className="section-title">
          Text Has Advantages in Delayed Space Communication, But Strips Away Emotional Information
        </h2>

        <div className="problem-layout">
        <div className="problem-copy">
          <p>
            Communication between Earth and Mars can experience 8.5-40 minutes of round-trip delay, making synchronous conversation increasingly difficult [1]. 
            Technologies such as Delay-Tolerant Networking (DTN) and the future InterPlaNetary Internet (IPN) can improve communication reliability 
            but cannot eliminate the physical constraint of signal delay [1].
          </p>

          <p>
            Under delayed conditions, text supports asynchronous workflows, reprocessability, and structured information exchange [4, 6]. 
            Yet conventional text loses much of how something is said, missing prosodic and emotional cues such as emphasis, intonation, and tone [3, 12]. 
            This can increase the risk of misinterpretation when clarification itself may take tens of minutes. Research observed crewmembers misinterpret 
            text content and misread interpersonal signals under delay, causing weakened common ground, confusion, and frustration during missions [5, 7, 11]. 
            Beyond operational communication, reduced emotional expressiveness may make it harder to maintain interpersonal connection and psychological 
            wellbeing during prolonged isolation [2, 8].
          </p>

          <p>
            Existing solutions address communication reliability and continuity, but not the loss of prosodic information. 
            This creates a need for an expressive, latency-resilient communication channel that preserves the advantages of text.
          </p>
        </div>

        <figure className="problem-figure">
          <img
            src="/images/image_earth_mars.png"
            alt="Earth and Mars communication delay"
          />
        </figure>
        </div>
      </Section>

      <Section id="idea" className="idea-section">
        <p className="eyebrow">Proposed Solution</p>

        <h2 className="idea-title">
          Visually Enrich Prosodic Information: Use Type to Suggest How a Message Sounds
        </h2>

        <div className="idea-layout">
          <div className="idea-copy">
          <p>
          Visual Prosody embeds visual cues into text to convey aspects of prosodic and emotional information, such as emphasis, intonation, 
          and tone, through typographic variation [3, 9, 12]. By representing how something is said alongside what is said, Visual Prosody 
          makes text more expressive and closer to spoken communication [9, 10]. 
          </p>

          <p>
          For delayed space communication, Visual Prosody offers a middle ground between plain text and expressive voice communication: 
          restoring aspects of information normally carried by speech while preserving the asynchronous compatibility, reprocessability, 
          and searchability of text. It is not intended to replace voice or media-rich communication, but to enhance text when latency and 
          communication constraints make synchronous interaction difficult, potentially supporting clearer communication and interpersonal connection.
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
          Our Visual Prosody design space introduces an intermediate layer of design atoms that bridges speech and typography. 
          Prosodic atoms represent individual acoustic and prosodic features of spoken expression, while font atoms represent 
          independent typographic design elements. Visual Prosody emerges by systematically mapping prosodic atoms to font atoms, 
          providing a flexible and extensible framework for translating characteristics of spoken expression into typographic variation.
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
        <p className="eyebrow">What's Next | In context</p>

        <h2 className="relay-title">
          From Concept to Communication System
        </h2>

        <div className="relay-copy">
        <p>
          We are developing Visual Prosody into a dynamic communication system that translates prosodic and emotional cues from speech into 
          expressive typography, providing a platform for empirical validation in space communication scenarios. Future work will examine how 
          Visual Prosody can support asynchronous communication under the extreme delays and constraints of interplanetary communication.
        </p>
        </div>

        <div className="relay-demo">
         <iframe
          src="https://demo.visualprosody.org/"
          title="Earth-Mars Relay Prototype"
          className="relay-frame"
         />
        </div>
      </Section>

      <Section id="references" className="references-section">
      <p className="eyebrow">References</p>

      <div className="references-list">
        {references.map((reference) => (
        <div className="reference-item" key={reference.id}>
         <span className="reference-number">[{reference.id}]</span>

        <p>
          {reference.text}{" "}
          <a
            href={reference.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {reference.url}
          </a>
        </p>
      </div>
      ))}
      </div>
      </Section>

      <footer className="footer">
      <div className="footer-content">
       <div className="footer-logos">
       <img src="/images/New Uhasselt_PXL Logo.png" alt="UHasselt" />
       <img src="/images/KU Leuven_LUCA Logo.png" alt="KU Leuven + LUCA" />
       <img src="/images/New READSEARCH Logo.png" alt="READSEARCH" />
       </div>
      
        <div className="footer-contact">
        <p>SpaceCHI 2026 | Contact: shichen.zhang@uhasselt.be | ann.bessemans@uhasselt.be</p>
        </div>
      </div>
      </footer>
    </main>
  );
}

export default App;