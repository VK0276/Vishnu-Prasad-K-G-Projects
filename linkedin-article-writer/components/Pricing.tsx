const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for getting started and building your writing habit.",
    features: [
      "5 AI-generated articles/month",
      "10 HR-specific templates",
      "Basic engagement score",
      "LinkedIn export (manual)",
      "Email support",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹799",
    period: "per month",
    description: "For HR professionals serious about building their personal brand.",
    features: [
      "Unlimited AI-generated articles",
      "50+ HR-specific templates",
      "Advanced engagement optimizer",
      "One-click LinkedIn publish",
      "Scheduling & analytics dashboard",
      "Tone & style customization",
      "Priority support",
    ],
    cta: "Start 14-Day Free Trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "₹2,499",
    period: "per month",
    description: "For HR teams, agencies, and leadership academies.",
    features: [
      "Everything in Pro",
      "Up to 5 team members",
      "Shared content calendar",
      "Team analytics & benchmarks",
      "Custom brand voice training",
      "White-label option",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-br from-[#f0f8ff] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0077B5] font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Start free and upgrade when you're ready. No hidden fees, no contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border flex flex-col gap-6 ${
                plan.highlighted
                  ? "bg-[#0077B5] text-white border-[#0077B5] shadow-2xl shadow-[#0077B5]/30 scale-105"
                  : "bg-white text-gray-900 border-gray-100 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="inline-flex items-center gap-1 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full w-fit">
                  ⭐ Most Popular
                </div>
              )}

              <div>
                <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-white/80" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex items-end gap-1">
                <span className={`text-5xl font-extrabold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-2 ${plan.highlighted ? "text-white/70" : "text-gray-400"}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 ${plan.highlighted ? "text-white" : "text-[#0077B5]"}`}>✓</span>
                    <span className={plan.highlighted ? "text-white/90" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto w-full py-3.5 rounded-full font-bold text-sm transition-colors ${
                  plan.highlighted
                    ? "bg-white text-[#0077B5] hover:bg-gray-100"
                    : "bg-[#0077B5] text-white hover:bg-[#005f8e]"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
