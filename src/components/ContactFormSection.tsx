export default function ContactFormSection() {
  return (
    <>
      <style>{`
        .contact-form-section {
          background: white;
          padding: 70px 0;
          text-align: center;
        }
        .contact-form-inner {
          max-width: 600px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .contact-form-heading {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 400;
          color: #333;
          line-height: 1.3;
          margin-bottom: 16px;
        }
        .contact-form-heading span {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 700;
          color: #333;
        }
        .contact-form-divider {
          width: 60px;
          height: 3px;
          background-color: #FFD700;
          margin: 0 auto 36px;
        }
        .contact-form-placeholder {
          background: #f9f9f9;
          border: 1px solid #e5e5e5;
          padding: 40px;
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: #999;
          font-style: italic;
        }
      `}</style>
      <section className="contact-form-section">
        <div className="contact-form-inner">
          <h2 className="contact-form-heading">
            What Is Your
            <br />
            <span>Legal Issue?</span>
          </h2>
          <div className="contact-form-divider" />
          <div className="contact-form-placeholder">
            Contact form placeholder — integrate with your form provider
          </div>
        </div>
      </section>
    </>
  );
}
