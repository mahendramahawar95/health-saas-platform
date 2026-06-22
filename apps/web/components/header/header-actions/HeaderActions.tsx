import SearchButton from "../search-button/SearchButton";
import AppointmentButton from "../appointment-button/AppointmentButton";
import MobileMenu from "../mobile-menu/MobileMenu";

export default function HeaderActions() {
  return (
    <>
      <SearchButton />
      <AppointmentButton />
      <MobileMenu />
    </>
  );
}
