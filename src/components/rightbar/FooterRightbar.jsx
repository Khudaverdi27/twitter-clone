import { Link } from "react-router-dom";

function FooterRightbar() {
  const footerItem = [
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility",
    "Ads info",
    "More...",
    "© 2024 X Corp.",
  ];
  return (
    <footer className="text-sm text-[#575b5f] space-x-2 px-2">
      {footerItem.map((item, i) => (
        <Link key={i} to={"#"}>
          {item}
        </Link>
      ))}
    </footer>
  );
}

export default FooterRightbar;
