const ComplexLegalSection = () => {
  return (
    <section className="w-full bg-white">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* Left Column */}
        <div
          style={{
            flex: "0 0 60%",
            maxWidth: "60%",
            padding: "80px 60px",
            background: "#fff",
            boxSizing: "border-box",
          }}
          className="complex-legal-left"
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "32px",
              color: "#333",
              fontWeight: 400,
              lineHeight: "44.8px",
              margin: 0,
            }}
          >
            A Focus On Complex Legal
            <br />
            Matters Puts You Back In Control
          </h2>

          <div
            style={{
              height: "2px",
              width: "60px",
              background: "#FFD700",
              margin: "24px 0",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "18px",
              lineHeight: "27px",
              color: "#666",
              marginBottom: "24px",
            }}
          >
            Handling complex legal matters that cross over into a plethora of
            practice areas and require action from multiple parties might be
            overwhelming for some, but not Sanford F. Young. For more than 30
            years, Mr. Young has focused his knowledge base in a range of
            complex legal areas to better serve individuals, businesses and
            other lawyers.
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "18px",
              lineHeight: "27px",
              color: "#666",
              marginBottom: "24px",
            }}
          >
            Mr. Young is often called upon to provide knowledgeable and reliable
            second legal opinions, evaluate and provide his opinion on the case
            at hand, provide advice and suggestions on case strategies, and
            assess, audit and comment on issues or disputes.
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "18px",
              lineHeight: "27px",
              color: "#666",
              margin: 0,
            }}
          >
            Whether you have a business law or family law matter that needs
            resolving, or you are facing far more niche litigation in the areas
            of art, legal malpractice, appeals or contract matters within the
            Orthodox and Hasidic communities, Attorney Young is ready and poised
            to resolve.
          </p>
        </div>

        {/* Right Column */}
        <div
          style={{
            flex: "0 0 40%",
            maxWidth: "40%",
            minHeight: "600px",
            background: "url('/images/ChessContent1.jpg') center/cover no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            boxSizing: "border-box",
          }}
          className="complex-legal-right"
        />
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .complex-legal-left {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            padding: 60px 24px !important;
          }
          .complex-legal-right {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            min-height: 300px !important;
            background-attachment: scroll !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ComplexLegalSection;
