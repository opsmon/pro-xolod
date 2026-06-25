import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { withBase } from "../lib/links";

export function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container-page text-center">
          <h1 className="text-5xl font-extrabold text-ink">Страница не найдена</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">Вернитесь на главную страницу сайта «Про-Холод».</p>
          <a className="primary-button mt-8" href={withBase("/")}>На главную</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
