import React from 'react'
import { Marquee } from "@/components/ui/marquee";
import { reviews } from '@/constants';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  return (
    <section className='py-20'>
      <div className='container px-4 md:px-6 mx-auto'>
        <h1 className="text-3xl md:text-5xl font-medium text-center tracking-tight mb-5">
          Beyond Expectations
        </h1>
        <p className="text-white/70 text-center font-light tracking-tight text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Our revolutionary AI SEO tools have transformed our clients' strategies.
        </p>

        <div className="relative mt-10 flex w-full items-center justify-center overflow-hidden">
          <Marquee
            className="[--duration:60s]"
            pauseOnHover
          >
            {reviews.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#050608]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#050608]"></div>
        </div>
      </div>
    </section>
  )
}

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure className={cn(
      "relative w-[300px] md:w-[400px] h-auto",
      "mx-2 flex flex-col",
      "rounded-2xl border border-white/10",
      "bg-[linear-gradient(110deg,rgba(140,69,255,0.1),transparent)]",
      "p-6"
    )}>
      <div className="flex items-center gap-3 mb-4">
        <img
          className="rounded-full w-10 h-10 object-cover"
          width="40"
          height="40"
          alt={name}
          src={img}
        />
        <div>
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-sm text-white/50">{username}</p>
        </div>
      </div>
      <blockquote className="text-[15px] leading-relaxed text-white/80">
        {body}
      </blockquote>
    </figure>
  );
};

export default Testimonials