import Link from "next/link";
import {
  ScaleIcon,
  GavelIcon,
  DocumentIcon,
  HandshakeIcon,
  StarIcon,
  BriefcaseIcon,
} from "./icons";

const practiceAreas = [
  {
    title: "Appeals",
    href: "/appeals/",
    Icon: ScaleIcon,
  },
  {
    title: "Lawyer Of Last Resort",
    href: "/appeals/lawyer-of-last-resort/",
    Icon: GavelIcon,
  },
  {
    title: "Complex Litigation",
    href: "/Complex-Litigation/",
    Icon: DocumentIcon,
  },
  {
    title: "Contract Disputes",
    href: "/Contract-Disputes/",
    Icon: HandshakeIcon,
  },
  {
    title: "Jewish Orthodox Community",
    href: "/jewish-orthodox-community/",
    Icon: StarIcon,
  },
  {
    title: "Legal And Professional Malpractice",
    href: "/legal-professional-malpractice/",
    Icon: BriefcaseIcon,
  },
];

export function PracticeAreas() {
  return (
    <section
      className="w-full py-[100px] text-center"
      style={{ backgroundColor: "#03204C" }}
    >
      <h2
        className="text-white mx-auto px-4"
        style={{
          fontFamily: "var(--font-heading), Georgia, serif",
          fontSize: "32px",
          fontWeight: 400,
          lineHeight: "44.8px",
          marginBottom: "60px",
        }}
      >
        Handling A Wide Range Of
        <br />
        Complex Litigation And Appellate Matters
      </h2>

      <div
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ maxWidth: "1280px" }}
      >
        {practiceAreas.map(({ title, href, Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center transition-colors duration-300 ease-in-out hover:bg-white/5"
            style={{
              padding: "50px 15px",
              border: "1px solid rgba(255,255,255,0.1)",
              textDecoration: "none",
            }}
          >
            <Icon
              className="text-[#FFD700] w-[58px] h-[58px] mb-5"
            />
            <span
              style={{
                fontFamily: "'Times New Roman', Georgia, serif",
                fontSize: "23px",
                fontWeight: 400,
                lineHeight: "34.5px",
                color: "#ffffff",
                marginTop: "15px",
              }}
            >
              {title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PracticeAreas;
