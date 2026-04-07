// SVG Icons extracted from the SFY Law website

export function LogoWhite({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 440 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="#FFD700">
        {/* Chess piece / scales icon */}
        <rect x="0" y="15" width="50" height="50" rx="2" opacity="0.9" />
        <circle cx="15" cy="8" r="5" />
        <circle cx="25" cy="5" r="5" />
        <circle cx="35" cy="8" r="5" />
        <rect x="10" y="12" width="30" height="3" rx="1" />
      </g>
      <g fill="#ffffff">
        <text x="60" y="22" fontFamily="'Noto Sans', sans-serif" fontSize="12" fontWeight="400" letterSpacing="0.5">The Law Offices of</text>
        <text x="60" y="52" fontFamily="'Playfair Display', Georgia, serif" fontSize="28" fontWeight="700">Sanford F. Young P.C.</text>
      </g>
    </svg>
  );
}

export function LogoColor({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 440 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="#03204C">
        <rect x="0" y="15" width="50" height="50" rx="2" opacity="0.9" />
        <circle cx="15" cy="8" r="5" />
        <circle cx="25" cy="5" r="5" />
        <circle cx="35" cy="8" r="5" />
        <rect x="10" y="12" width="30" height="3" rx="1" />
      </g>
      <g fill="#03204C">
        <text x="60" y="22" fontFamily="'Noto Sans', sans-serif" fontSize="12" fontWeight="400" letterSpacing="0.5">The Law Offices of</text>
        <text x="60" y="52" fontFamily="'Playfair Display', Georgia, serif" fontSize="28" fontWeight="700">Sanford F. Young P.C.</text>
      </g>
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// Divi ETmodules icon representations for practice areas
export function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 4a2 2 0 012 2v4h16l6 20c0 4-5 8-11 8s-11-4-11-8l6-20h-6v30h10a2 2 0 010 4H17a2 2 0 010-4h10V10h-6l6 20c0 4-5 8-11 8S5 34 5 30l6-20h16V6a2 2 0 012-2z"/>
    </svg>
  );
}

export function GavelIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="52" width="48" height="6" rx="2"/>
      <rect x="14" y="46" width="36" height="6" rx="1"/>
      <rect x="28" y="12" width="8" height="34" rx="2"/>
      <rect x="16" y="6" width="32" height="12" rx="3" transform="rotate(-30 32 12)"/>
    </svg>
  );
}

export function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4h24l12 12v40a4 4 0 01-4 4H16a4 4 0 01-4-4V8a4 4 0 014-4zm22 2H16a2 2 0 00-2 2v48a2 2 0 002 2h32a2 2 0 002-2V18H42a4 4 0 01-4-4V6zm-16 24h20v2H22v-2zm0 8h20v2H22v-2zm0 8h14v2H22v-2z"/>
    </svg>
  );
}

export function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 24h8v20H4V24zm48 0h8v20h-8V24zm-4 0l-10 10-6-4-8 8-6-6-6 6V24h36zM24 50l8-8 6 4 10-10v8L36 56l-6-4-6 6v-8z"/>
    </svg>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 4l8.5 17.2L59 24l-13.5 13.2L48.7 56 32 47.2 15.3 56l3.2-18.8L5 24l18.5-2.8z"/>
    </svg>
  );
}

export function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8h16v8h16a4 4 0 014 4v32a4 4 0 01-4 4H8a4 4 0 01-4-4V20a4 4 0 014-4h16V8zm2 8h12v-6H26v6zM8 18a2 2 0 00-2 2v12h56V20a2 2 0 00-2-2H8zm-2 16v18a2 2 0 002 2h48a2 2 0 002-2V34H6z"/>
    </svg>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  );
}
