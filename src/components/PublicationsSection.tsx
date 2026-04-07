import Link from "next/link";

const PublicationsSection = () => {
  return (
    <>
      <style>{`
        .publications-section {
          width: 100%;
          background-image:
            linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
            url('/images/AdobeStock_87237553-final.jpg');
          background-size: cover;
          background-position: center;
          padding: 100px 0;
          text-align: center;
        }
        .publications-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .publications-heading {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 400;
          line-height: 44.8px;
          color: white;
          margin: 0 0 24px 0;
        }
        .publications-divider {
          height: 2px;
          width: 60px;
          background: #FFD700;
          margin: 0 auto 28px;
        }
        .publications-subtext {
          font-family: var(--font-sans);
          font-size: 18px;
          line-height: 27px;
          color: white;
          opacity: 0.9;
          margin: 0 auto 50px;
          max-width: 700px;
        }
        .publications-cards {
          display: flex;
          flex-direction: row;
          gap: 30px;
          max-width: 800px;
          margin: 0 auto;
        }
        .publication-card {
          flex: 1;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 40px 30px;
          text-align: center;
          text-decoration: none;
          display: block;
          transition: background 0.3s ease;
        }
        .publication-card:hover {
          background: rgba(255,255,255,0.15);
        }
        .publication-card h3 {
          font-family: var(--font-heading);
          font-size: 26px;
          font-weight: 400;
          color: white;
          margin: 0;
          line-height: 1.4;
        }
        @media (max-width: 767px) {
          .publications-cards {
            flex-direction: column;
          }
          .publications-section {
            padding: 60px 0;
          }
        }
      `}</style>

      <section className="publications-section">
        <div className="publications-inner">
          <h2 className="publications-heading">
            Read
            <br />
            Our Publications
          </h2>
          <div className="publications-divider" />
          <p className="publications-subtext">
            Our lead attorney is extensively published and has been the subject
            of numerous media stories.
          </p>

          <div className="publications-cards">
            <Link
              href="/our-publications/articles-about-sanford-f-young/"
              className="publication-card"
            >
              <h3>
                Articles About
                <br />
                Sanford F. Young
              </h3>
            </Link>

            <Link
              href="/our-publications/articles-by-sanford-f-young/"
              className="publication-card"
            >
              <h3>
                Articles By
                <br />
                Sanford F. Young
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicationsSection;
