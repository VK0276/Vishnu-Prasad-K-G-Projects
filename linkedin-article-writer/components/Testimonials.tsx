const testimonials = [
  {
    name: "Priya Sharma",
    title: "HR Business Partner, Infosys",
    avatar: "PS",
    quote:
      "LinkedInk transformed my content game. I went from publishing once a month to twice a week. My follower count tripled in 90 days and I received three speaking invitations directly from my articles.",
    stat: "3x follower growth in 90 days",
  },
  {
    name: "Karan Mehta",
    title: "Talent Acquisition Lead, Flipkart",
    avatar: "KM",
    quote:
      "I always had ideas but couldn't find the right words. LinkedInk drafts articles that actually sound like me — not robotic AI text. The HR templates are spot on for our industry.",
    stat: "Published 24 articles in 3 months",
  },
  {
    name: "Ananya Iyer",
    title: "L&D Manager, Wipro",
    avatar: "AI",
    quote:
      "The engagement optimizer alone is worth the subscription. My articles now consistently get 1000+ views. My manager noticed and it led to a promotion conversation. Highly recommend for any HR pro.",
    stat: "Avg. 1,200+ views per article",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0077B5] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            HR Professionals Love
            <br />
            <span className="text-[#0077B5]">LinkedInk</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Join thousands of HR leaders who have built their personal brand and unlocked new career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gradient-to-br from-[#f0f8ff] to-white border border-[#0077B5]/10 rounded-2xl p-8 flex flex-col gap-6"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 text-lg">
                {"★★★★★"}
              </div>

              <p className="text-gray-700 leading-relaxed italic">&quot;{t.quote}&quot;</p>

              {/* Stat badge */}
              <div className="inline-flex items-center gap-2 bg-[#0077B5]/10 text-[#0077B5] text-sm font-semibold px-4 py-2 rounded-full w-fit">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                {t.stat}
              </div>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
