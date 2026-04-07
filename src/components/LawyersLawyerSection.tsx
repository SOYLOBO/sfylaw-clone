import Link from "next/link";

const LawyersLawyerSection = () => {
  return (
    <>
      <style>{`
        .lawyers-section {
          width: 100%;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.8)),
            linear-gradient(135deg, #e8e8e8, #f5f5f5);
          padding: 100px 0;
        }
        .lawyers-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 60px;
        }
        .lawyers-left {
          flex: 0 0 60%;
        }
        .lawyers-right {
          flex: 0 0 40%;
          display: flex;
          justify-content: center;
        }
        .lawyers-heading {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 400;
          line-height: 44.8px;
          color: #333;
          margin: 0 0 24px 0;
        }
        .lawyers-heading-span {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 400;
          line-height: 44.8px;
          color: #333;
          font-style: italic;
        }
        .lawyers-divider {
          height: 2px;
          width: 60px;
          background: #FFD700;
          margin-bottom: 28px;
        }
        .lawyers-body {
          font-family: var(--font-sans);
          font-size: 18px;
          line-height: 27px;
          color: #666;
          margin: 0 0 20px 0;
        }
        .lawyers-body:last-child {
          margin-bottom: 0;
        }
        .lawyer-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .lawyer-photo {
          width: 200px;
          height: auto;
          display: block;
        }
        .lawyer-photo-initials {
          font-family: var(--font-heading);
          font-size: 48px;
          font-weight: 700;
          color: #FFD700;
          letter-spacing: 4px;
        }
        .lawyer-card-link {
          font-family: var(--font-heading);
          font-size: 20px;
          color: #03204C;
          text-decoration: none;
          transition: text-decoration 0.2s ease;
        }
        .lawyer-card-link:hover {
          text-decoration: underline;
        }
        @media (max-width: 1023px) {
          .lawyers-inner {
            flex-direction: column-reverse;
            align-items: center;
          }
          .lawyers-left {
            flex: 1 1 auto;
            width: 100%;
          }
          .lawyers-right {
            flex: 1 1 auto;
            width: 100%;
          }
        }
      `}</style>

      <section className="lawyers-section">
        <div className="lawyers-inner">
          <div className="lawyers-left">
            <h2 className="lawyers-heading">
              Sanford F. Young:
              <br />
              <span className="lawyers-heading-span">A Lawyer&apos;s Lawyer</span>
            </h2>
            <div className="lawyers-divider" />
            <p className="lawyers-body">
              While Mr. Young is well-equipped to advocate and negotiate on behalf
              of businesses, corporate executives, entrepreneurs and families
              across a wide range of complex cases and appeals, other attorneys in
              New York and New Jersey often call upon him to serve as of-counsel.
            </p>
            <p className="lawyers-body">
              Both a street fighter and academician, Mr. Young is regularly
              retained to take on lawsuits and appeals that call for a
              sophisticated understanding of the subject matter and business
              environment coupled with a laser focus on strategy, tactics, legal
              precedents and technology.
            </p>
          </div>

          <div className="lawyers-right">
            <div className="lawyer-card">
              <img src="/sfylaw-clone/images/young_sanford_f.jpg" alt="Sanford F. Young" className="lawyer-photo" />
              <Link href="/meet-sanford-f-young/" className="lawyer-card-link">
                Meet Sanford F. Young
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LawyersLawyerSection;
