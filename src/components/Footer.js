import { brandColors } from "@/constants/colors";
import { brandStyles, sectionClasses } from "@/constants/styles";

export default function Footer() {
  return (
    <footer style={brandStyles.footerBackground}>
      <div className={`${sectionClasses} py-10`}>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-sm text-white/80">
            <h3 className="mb-2 text-base font-semibold text-white">Address</h3>
            <p>6113 West 9860 South</p>
            <p>West Jordan, UT 84081</p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=6113+W+9860+S,+West+Jordan,+UT+84081"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex font-semibold underline-offset-4 hover:underline"
              style={{ color: brandColors.accent }}
            >
              Get Directions
            </a>
          </div>

          <div className="text-sm text-white/80">
            <h3 className="mb-2 text-base font-semibold text-white">Hours</h3>
            <p>Mon–Fri 7:30 AM – 5:00 PM</p>
            <p>Sat/Sun Closed</p>
          </div>

          <div className="text-sm text-white/80">
            <h3 className="mb-2 text-base font-semibold text-white">Phone</h3>
            <p>801-260-0642</p>
            <a
              href="tel:8012600642"
              className="mt-2 inline-flex font-semibold underline-offset-4 hover:underline"
              style={{ color: brandColors.accent }}
            >
              Call now
            </a>
          </div>
          <div className="text-sm text-white/80">
            <h3 className="mb-2 text-base font-semibold text-white">Email a quote</h3>
            <a className="block hover:text-white" href="mailto:scott.genx@hotmail.com">Scott.genx@hotmail.com</a>
            <a className="mt-1 block hover:text-white" href="mailto:mcarter383@aol.com">Mcarter383@aol.com</a>
            <p className="mt-2">Scott: 801-556-7819</p>
            <p>Mike: 801-556-1700</p>
          </div>
        </div>

        <p className="mt-10 border-t border-white/15 pt-5 text-xs text-white/70">
          © 2026 Generator Exchange. Family owned and locally operated since 1965.
        </p>
      </div>
    </footer>
  );
}
