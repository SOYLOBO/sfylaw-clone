const AboutSection = () => {
  return (
    <section className="w-full bg-white" style={{ padding: "80px 0 100px" }}>
      <div className="mx-auto max-w-[1000px] text-center px-6">
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "32px",
            color: "#333",
            lineHeight: "44.8px",
            fontWeight: 400,
            margin: 0,
          }}
        >
          Tenacious And Skilled Attorneys
          <br />
          <span style={{ fontStyle: "italic" }}>Ready To Fight For You</span>
        </h2>

        <div
          style={{
            height: "2px",
            width: "60px",
            background: "#FFD700",
            margin: "30px auto",
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
          Established in 1978,{" "}
          <strong>The Law Offices of Sanford F. Young P.C.</strong> has proudly
          and confidently served a gap in New York and New Jersey&apos;s legal
          community, providing dedicated service and out-of-the-box thinking to
          resolve difficult or complex legal matters that oftentimes overwhelm
          unseasoned lawyers.
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
          Lead attorney Sanford F. Young and his staff are known for taking on
          cases other law firms leave behind, which has earned them a reputation
          for being challenging, forthright, tenacious and skillful whether they
          are at the negotiation table or in the courtroom.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
