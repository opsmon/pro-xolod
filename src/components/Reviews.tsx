import { ExternalLink, Star } from "lucide-react";
import { reviews, reviewsConfig } from "../config/reviews";
import { siteConfig } from "../config/site";
import { externalAttrs } from "../lib/links";

export function Reviews() {
  const visibleReviews = reviews.filter((review) => siteConfig.demoMode || !review.demo);

  return (
    <section className="section bg-white" id="reviews">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-purple">Отзывы</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">
              Клиенты ценят аккуратность и понятный подход
            </h2>
          </div>
          <a className="secondary-button self-start md:self-auto" href={reviewsConfig.twoGisUrl} {...externalAttrs}>
            Посмотреть отзывы в 2ГИС
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        {(reviewsConfig.rating || reviewsConfig.reviewsCount) && (
          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-[8px] border border-black/10 bg-[#f7f8fb] p-5">
            {reviewsConfig.rating && (
              <div className="flex items-center gap-2 text-2xl font-extrabold text-ink">
                <Star className="h-6 w-6 fill-purple text-purple" aria-hidden="true" />
                {reviewsConfig.rating}
              </div>
            )}
            {reviewsConfig.reviewsCount && <div className="font-semibold text-muted">Отзывы: {reviewsConfig.reviewsCount}</div>}
          </div>
        )}
        {visibleReviews.length > 0 && (
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {visibleReviews.map((review, index) => (
              <article className="card rounded-[8px] p-6" key={`${review.name}-${index}`}>
                {review.demo && <p className="mb-4 text-xs font-extrabold uppercase text-purple">Демо-карточка</p>}
                <p className="text-base leading-7 text-muted">{review.text}</p>
                <p className="mt-5 font-extrabold text-ink">{review.name}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
