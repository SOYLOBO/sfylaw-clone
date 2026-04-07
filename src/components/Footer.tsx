import Link from "next/link";
import { FacebookIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background-color: #03204C;
          padding: 34px 0 60px;
          color: white;
        }
        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: row;
          gap: 48px;
          align-items: flex-start;
        }
        /* Left column */
        .footer-col-logo {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-social-row {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .footer-social-link {
          color: white;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
        }
        .footer-social-link:hover {
          color: #FFD700;
        }
        .footer-social-icon {
          width: 20px;
          height: 20px;
          display: block;
        }
        .footer-review-btn {
          display: inline-block;
          background-color: #1E559E;
          color: white;
          padding: 10px 20px;
          font-family: var(--font-sans);
          font-size: 14px;
          text-transform: uppercase;
          text-decoration: none;
          transition: background-color 0.2s ease;
          align-self: flex-start;
        }
        .footer-review-btn:hover {
          background-color: #2a6ab8;
        }
        /* Office columns */
        .footer-col-office {
          flex: 1 1 0;
          min-width: 0;
        }
        .footer-office-heading {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 400;
          color: white;
          margin-bottom: 12px;
        }
        .footer-office-body {
          font-size: 16px;
          color: rgba(255,255,255,0.8);
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .footer-phone-link {
          color: #FFD700;
          text-decoration: none;
        }
        .footer-phone-link:hover {
          text-decoration: underline;
        }
        .footer-outline-btn {
          display: inline-block;
          border: 1px solid white;
          color: white;
          padding: 8px 16px;
          font-family: var(--font-sans);
          font-size: 13px;
          text-decoration: none;
          margin-bottom: 16px;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .footer-outline-btn:hover {
          background-color: rgba(255,255,255,0.1);
        }
        .footer-map-placeholder {
          width: 200px;
          height: 150px;
          background-color: #1a1a3e;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          font-size: 14px;
          font-style: italic;
        }
        /* Copyright bar */
        .footer-copyright {
          max-width: 1280px;
          margin: 30px auto 0;
          padding: 20px 24px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          text-align: center;
        }
        .footer-copyright p {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          margin-bottom: 6px;
        }
        .footer-copyright-links {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
        }
        .footer-copyright-links a {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-copyright-links a:hover {
          color: #FFD700;
        }
        /* Responsive: stack below 1024px */
        @media (max-width: 1023px) {
          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-col-logo,
          .footer-col-office {
            width: 100%;
          }
        }
        /* Center everything below 768px */
        @media (max-width: 767px) {
          .footer-inner {
            align-items: center;
            text-align: center;
          }
          .footer-col-logo {
            align-items: center;
          }
          .footer-social-row {
            justify-content: center;
          }
          .footer-review-btn {
            align-self: center;
          }
          .footer-map-placeholder {
            margin: 0 auto;
          }
          .footer-outline-btn {
            display: block;
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          {/* Left: Logo + Social + Review */}
          <div className="footer-col-logo">
            <img src="/images/logo-white.png" alt="The Law Offices of Sanford F. Young P.C." className="block w-[300px]" />
            <div className="footer-social-row">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <FacebookIcon className="footer-social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="footer-social-icon" />
              </a>
            </div>
            <a href="#" className="footer-review-btn">
              REVIEW US
            </a>
          </div>

          {/* Middle: New York Office */}
          <div className="footer-col-office">
            <h4 className="footer-office-heading">New York Office:</h4>
            <div className="footer-office-body">
              <p>One World Trade Center</p>
              <p>#8500</p>
              <p>New York, NY 10007</p>
              <p>
                Phone:{" "}
                <a href="tel:2122279755" className="footer-phone-link">
                  212-227-9755
                </a>
              </p>
              <p>Fax: 973-285-0206</p>
            </div>
            <Link href="#" className="footer-outline-btn">
              New York Office Location
            </Link>
            <img src="/images/TradeCenterMap.jpg" alt="New York Office Map" style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
          </div>

          {/* Right: New Jersey Office */}
          <div className="footer-col-office">
            <h4 className="footer-office-heading">New Jersey Office:</h4>
            <div className="footer-office-body">
              <p>89 Headquarters Plaza</p>
              <p>#1449</p>
              <p>Morristown, NJ 07960</p>
              <p>
                Phone:{" "}
                <a href="tel:9732850205" className="footer-phone-link">
                  973-285-0205
                </a>
              </p>
              <p>Fax: 973-285-0206</p>
            </div>
            <Link href="#" className="footer-outline-btn">
              Morristown Office Location
            </Link>
            <img src="/images/JerseyMapNew.jpg" alt="New Jersey Office Map" style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Copyright bar */}
        <div className="footer-copyright">
          <p>
            &copy; 2026 The Law Offices of Sanford F. Young P.C. &bull; All Rights Reserved
          </p>
          <div className="footer-copyright-links">
            <Link href="#">Disclaimer</Link>
            {" | "}
            <Link href="#">Site Map</Link>
            {" | "}
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
