const features = [
  {
    icon: "✍️",
    title: "AI-Powered Drafting",
    description:
      "Describe your topic and let our AI generate a polished first draft tailored to LinkedIn's algorithm and your professional voice.",
  },
  {
    icon: "🎯",
    title: "HR-Specific Templates",
    description:
      "Pre-built templates for Talent Acquisition, Employee Engagement, L&D, HR Tech, and more — designed to resonate with HR audiences.",
  },
  {
    icon: "📊",
    title: "Engagement Optimizer",
    description:
      "Real-time readability score, headline analyzer, and hook strength meter to maximize your article's reach and engagement.",
  },
  {
    icon: "🔗",
    title: "One-Click LinkedIn Publish",
    description:
      "Draft, refine, and publish directly to LinkedIn without leaving the platform. Schedule posts for peak engagement times.",
  },
  {
    icon: "🧠",
    title: "Thought Leadership Mode",
    description:
      "Transform bullet points, case studies, or raw notes into long-form articles that position you as an industry authority.",
  },
  {
    icon: "📈",
    title: "Analytics Dashboard",
    description:
      "Track views, reactions, comments, and follower growth. Understand which topics drive the most engagement for your audience.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0077B5] font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            Everything You Need to Become a
            <br />
            <span className="text-[#0077B5]">LinkedIn Thought Leader</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From blank page to published article in minutes. Built specifically for HR professionals who want to share their expertise without the writer's block.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-[#0077B5]/30 hover:shadow-lg hover:shadow-[#0077B5]/5 transition-all duration-300 bg-white"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0077B5] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
