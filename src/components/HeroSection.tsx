import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          text-align: center;
          background-image: url('/sfylaw-clone/images/NewBanner2.jpg'),
            linear-gradient(135deg, #03204C 0%, #1a1a3e 100%);
          background-size: cover;
          background-position: center;
          min-height: 730px;
          padding-top: 150px;
          padding-bottom: 220px;
        }
        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
        }
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .hero-heading {
          font-family: var(--font-heading);
          font-size: 42px;
          font-weight: 400;
          line-height: 54.6px;
          color: white;
          margin-bottom: 20px;
        }
        .hero-heading span {
          font-family: var(--font-heading);
          font-size: 42px;
          font-weight: 400;
          line-height: 54.6px;
          color: white;
        }
        .hero-description {
          font-family: var(--font-sans);
          font-size: 18px;
          line-height: 27px;
          color: white;
          margin-bottom: 30px;
        }
        .hero-cta {
          display: inline-block;
          background-color: #1E559E;
          color: white;
          border: 1px solid white;
          padding: 18px 40px;
          font-family: var(--font-sans);
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 0;
          max-width: 500px;
          width: 100%;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }
        .hero-cta:hover {
          background-color: #2a6ab8;
        }
        @media (max-width: 767px) {
          .hero-section {
            padding-top: 80px;
            padding-bottom: 120px;
          }
          .hero-heading,
          .hero-heading span {
            font-size: 28px !important;
            line-height: 1.3 !important;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-content">
          {/* H1 Heading */}
          <h1 className="hero-heading">
            There Is No Substitute
            <br />
            <span>For Skill, Experience And Commitment</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            When complex litigation has you in a bind, turn to the skilled team
            at{" "}
            <strong>The Law Offices of Sanford F. Young P.C.</strong> to keep
            you on the right path toward a favorable resolution.
          </p>

          {/* CTA Button */}
          <Link href="/contact/" className="hero-cta">
            CONTACT THE FIRM
          </Link>
        </div>
      </section>
    </>
  );
}
