import Link from "next/link";

export default function CTABar() {
  return (
    <>
      <style>{`
        .cta-bar {
          background-image:
            linear-gradient(rgba(17,29,94,0.85), rgba(17,29,94,0.85)),
            linear-gradient(135deg, #111D5E, #03204C);
          padding: 100px 0;
          text-align: center;
        }
        .cta-bar-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .cta-bar-text {
          font-family: var(--font-heading);
          font-size: 28px;
          color: white;
          line-height: 1.4;
          margin-bottom: 36px;
        }
        .cta-bar-btn {
          display: inline-block;
          background-color: #1E559E;
          color: white;
          border: 1px solid white;
          padding: 18px 40px;
          font-family: var(--font-sans);
          font-size: 18px;
          text-transform: uppercase;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }
        .cta-bar-btn:hover {
          background-color: #2a6ab8;
        }
      `}</style>
      <section className="cta-bar">
        <div className="cta-bar-inner">
          <p className="cta-bar-text">
            Put your trust in a team that is known for securing countless victories
            through settlements and trial verdicts.
          </p>
          <Link href="/contact/" className="cta-bar-btn">
            CONTACT THE FIRM
          </Link>
        </div>
      </section>
    </>
  );
}
