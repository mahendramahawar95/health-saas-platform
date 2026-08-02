import Link from "next/link";
import { Clock, User } from "lucide-react";
import Image from "next/image";
import { posts } from "@/src/data/blog";

export default function Page() {
  return (
    <section className="bg-background py-3xl">
      <div className="container">
        <div className="mx-auto text-center">
          <span className="text-small font-semibold uppercase tracking-wide text-primary">
            Blog
          </span>
          <h2 className="mt-2 text-h2 font-semibold text-foreground">
            From Our Health Journal
          </h2>
          <p className="mt-3 text-body text-content-secondary">
            Practical, doctor-reviewed reading to help you make sense of your
            health.
          </p>
        </div>

        <div className="mt-xl grid grid-cols-1 gap-lg md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-lg border border-border bg-card no-underline shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  height={200}
                  width={200}
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-background">
                  {post.category}
                </span>
              </div>

              <div className="p-lg">
                <h3 className="text-h5 font-semibold leading-snug text-foreground line-clamp-2">
                  {post.title}
                </h3>

                <div className="mt-4 flex items-center gap-3 text-xs text-content-secondary">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {post.readingTime}
                  </span>
                  <span aria-hidden="true">•</span>
                  <span className="inline-flex items-center gap-1">
                    <User className="size-3.5" aria-hidden="true" />
                    {post.author}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
