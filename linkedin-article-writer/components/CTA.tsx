export default function CTA() {
  return (
    <section className="py-24 px-6 bg-[#0077B5]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Your Expertise Deserves
          <br />
          to Be Heard
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Thousands of HR professionals are already building their brand on LinkedIn with LinkedInk.
          Start your free account today — no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-white text-[#0077B5] font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Start Writing for Free
          </button>
          <button className="w-full sm:w-auto border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors">
            See All Features
          </button>
        </div>

        <p className="mt-8 text-white/50 text-sm">
          Join 4,200+ HR professionals already on LinkedInk
        </p>
      </div>
    </section>
  );
}
