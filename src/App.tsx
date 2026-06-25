import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";

const normalizePath = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = window.location.pathname;
  const withoutBase = base && path.startsWith(base) ? path.slice(base.length) : path;
  return withoutBase || "/";
};

export default function App() {
  const path = normalizePath();

  if (path === "/" || path === "") return <HomePage />;
  if (path === "/privacy" || path === "/privacy/") return <PrivacyPage />;

  return <NotFoundPage />;
}
