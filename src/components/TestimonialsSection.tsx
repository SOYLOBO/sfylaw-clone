import Link from "next/link";

const TestimonialsSection = () => {
  return (
    <>
      <style>{`
        .testimonials-section {
          width: 100%;
          background: white;
          padding: 80px 0;
          text-align: center;
        }
        .testimonials-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .testimonials-heading {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 400;
          line-height: 44.8px;
          color: #333;
          margin: 0 0 24px 0;
        }
        .testimonials-divider {
          height: 2px;
          width: 60px;
          background: #FFD700;
          margin: 0 auto 40px;
        }
        .testimonials-slider {
          max-width: 800px;
          margin: 0 auto 40px;
        }
        .testimonials-quote {
          font-family: var(--font-sans);
          font-size: 18px;
          line-height: 27px;
          color: #666;
          font-style: italic;
          margin: 0;
        }
        .testimonials-cta {
          display: inline-block;
          background-color: #1E559E;
          color: white;
          border: 1px solid white;
          padding: 18px 40px;
          font-family: var(--font-sans);
          font-size: 18px;
          text-transform: uppercase;
          text-decoration: none;
          outline: 1px solid #1E559E;
          transition: background-color 0.2s ease;
        }
        .testimonials-cta:hover {
          background-color: #2a6ab8;
        }
        @media (max-width: 767px) {
          .testimonials-section {
            padding: 50px 0;
          }
          .testimonials-heading {
            font-size: 26px;
            line-height: 36px;
          }
          .testimonials-quote {
            font-size: 16px;
            line-height: 24px;
          }
          .testimonials-cta {
            font-size: 15px;
            padding: 14px 28px;
          }
        }
      `}</style>

      <section className="testimonials-section">
        <div className="testimonials-inner">
          <h2 className="testimonials-heading">
            Thoughts And
            <br />
            Endorsements From Former Clients
          </h2>
          <div className="testimonials-divider" />

          <div className="testimonials-slider">
            <p className="testimonials-quote">
              &ldquo;Hear what people have to say about{" "}
              <strong>The Law Offices of Sanford F. Young P.C.</strong>&rdquo;
            </p>
          </div>

          <Link
            href="/testimonials-and-endorsements/"
            className="testimonials-cta"
          >
            TESTIMONIALS AND ENDORSEMENTS
          </Link>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
