import Link from "next/link";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "AI Coach", href: "#coach" },
      { label: "Community", href: "#community" },
      { label: "Education", href: "#education" },
      { label: "Premium", href: "#pricing" },
    ],
  },
  {
    heading: "Shop",
    links: [
      { label: "Dexcom G7", href: "#shop" },
      { label: "Omnipod 5", href: "#shop" },
      { label: "Omnipod DASH", href: "#shop" },
      { label: "Libre 3", href: "#shop" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story", href: "#story" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-0.5 mb-4">
              <span className="font-display text-xl font-normal italic text-gold">Dia</span>
              <span className="font-body text-xl font-semibold tracking-tight text-white">Style</span>
            </div>
            <p className="font-body font-light text-sm text-white/50 leading-relaxed max-w-[200px]">
              The premium lifestyle platform for people living with T1D.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              {["Instagram", "TikTok", "Pinterest"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-2xs font-body font-medium tracking-widest uppercase text-white/30 hover:text-gold transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-2xs font-body font-medium tracking-[0.45em] uppercase text-gold mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-body font-light text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-body font-light text-xs text-white/30 leading-relaxed max-w-xl">
            &copy; {new Date().getFullYear()} DiaStyle. All rights reserved.
            DiaStyle is not affiliated with or endorsed by Dexcom, Insulet, or Abbott.
            Stickers are decorative only and are not medical devices.
            DiaStyle does not provide medical advice.
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-2xs font-body text-white/30 tracking-wide">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
