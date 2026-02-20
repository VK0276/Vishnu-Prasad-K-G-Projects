const steps = [
  {
    step: "01",
    title: "Choose Your Topic",
    description:
      "Enter a topic, paste your notes, or pick from our HR-specific idea prompts. Our AI understands your niche and audience.",
  },
  {
    step: "02",
    title: "Generate & Customize",
    description:
      "Get a full draft in seconds. Edit tone, structure, and style with our intuitive editor. Add your personal stories and insights.",
  },
  {
    step: "03",
    title: "Optimize for Reach",
    description:
      "Run your article through the engagement optimizer. Get suggestions for a stronger hook, better CTA, and ideal length.",
  },
  {
    step: "04",
    title: "Publish & Grow",
    description:
      "Publish directly to LinkedIn or schedule for later. Watch your views, followers, and inbound opportunities grow.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-br from-[#f0f8ff] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0077B5] font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            Go from Idea to Published
            <br />
            <span className="text-[#0077B5]">in Under 10 Minutes</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A simple four-step process designed so you can focus on your expertise, not the writing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-[#0077B5]/20 z-0" />

          {steps.map((step, index) => (
            <div key={step.step} className="relative z-10 flex flex-col items-center text-center">
              {/* Step number circle */}
              <div className="w-20 h-20 rounded-full bg-[#0077B5] text-white flex items-center justify-center text-2xl font-extrabold mb-6 shadow-lg shadow-[#0077B5]/30">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden mt-6 text-[#0077B5]/40 text-2xl">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
