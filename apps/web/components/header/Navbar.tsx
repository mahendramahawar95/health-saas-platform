import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import HeaderActions from "./HeaderActions";

export default function Navbar() {
  return (
    <nav
      className="shadow-header bg-surface h-16 flex justify-between items-center"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <DesktopNavigation />
          <HeaderActions />
        </div>
      </div>
    </nav>
  );
}
