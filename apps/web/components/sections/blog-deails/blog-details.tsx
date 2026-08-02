import Link from "next/link";
import { ChevronRight, Clock, User } from "lucide-react";
import { posts, type Post } from "@/src/data/blog";
import Image from "next/image";

export default function BlogDetails({ post }: { post: Post }) {
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="bg-section-first py-2xl">
        <div className="container">
          <nav
            className="flex items-center gap-1 text-xs text-content-secondary"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="no-underline hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <Link
              href="/resources/blog"
              className="no-underline hover:text-primary"
            >
              Blog
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className="text-foreground">{post.title}</span>
          </nav>

          <div className="mx-auto mt-lg text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-small font-medium text-primary">
              {post.category}
            </span>
            <h1 className="mt-3 text-h2 font-semibold text-foreground">
              {post.title}
            </h1>

            <div className="mt-4 flex items-center justify-center gap-3 text-small text-content-secondary">
              <span className="inline-flex items-center gap-1">
                <User className="size-3.5" aria-hidden="true" />
                {post.author}
              </span>
              <span aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" aria-hidden="true" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-2xl">
        <div className="container">
          <div className="mx-auto">
            <Image
              height={200}
              width={200}
              src={post.image}
              alt=""
              className="aspect-video w-full h-full rounded-lg object-cover shadow-card"
            />

            <article className="mt-xl flex flex-col gap-5">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-body leading-relaxed text-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-section-second py-2xl">
          <div className="container">
            <h2 className="text-h4 font-semibold text-foreground">
              More From the Journal
            </h2>

            <div className="mt-lg grid grid-cols-1 gap-lg sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card p-md no-underline shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Image
                    width={200}
                    height={200}
                    src={item.image}
                    alt=""
                    className="size-20 shrink-0 rounded-md object-cover"
                    loading="lazy"
                  />
                  <div>
                    <span className="text-xs font-medium text-primary">
                      {item.category}
                    </span>
                    <h3 className="mt-1 text-small font-semibold leading-snug text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
