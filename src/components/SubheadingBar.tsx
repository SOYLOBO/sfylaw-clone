const SubheadingBar = () => {
  return (
    <div className="w-full bg-white py-5">
      <div className="mx-auto max-w-[900px] text-center">
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "24px",
            color: "#000",
          }}
        >
          Protecting The Best Interests Of New York And New Jersey
        </p>

        <div
          style={{
            height: "2px",
            width: "60px",
            background: "#FFD700",
            margin: "10px auto",
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            color: "#666",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Residents For More Than Three Decades
        </p>
      </div>
    </div>
  );
};

export default SubheadingBar;
