export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-[#e8f4fb]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0077B5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#0077B5]/10 text-[#0077B5] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-[#0077B5] rounded-full animate-pulse" />
          Built for HR & People Leaders
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
          Write LinkedIn Articles
          <br />
          <span className="text-[#0077B5]">That Actually Get Read</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI-powered writing assistant designed for HR professionals, coaches, and thought leaders.
          Turn your expertise into compelling articles that grow your audience and build your brand.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-[#0077B5] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#005f8e] transition-colors shadow-lg shadow-[#0077B5]/30">
            Start Writing for Free
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-lg hover:border-[#0077B5] hover:text-[#0077B5] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
            Watch Demo
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-400">No credit card required • Free plan available • 5 articles/month</p>

        {/* Hero Preview Card */}
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden text-left">
          {/* Editor Top Bar */}
          <div className="bg-gray-50 border-b border-gray-100 px-6 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-4 text-xs text-gray-400 font-mono">linkedink.app — editor</span>
          </div>
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0077B5] to-blue-400 flex items-center justify-center text-white font-bold text-sm">VP</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Vishnu Prasad K G</p>
                <p className="text-xs text-gray-400">HR Generalist · Talent Acquisition</p>
              </div>
              <span className="ml-auto text-xs bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">AI Drafting...</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5 Ways Data-Driven Recruitment Is Transforming Talent Acquisition in 2025
            </h2>
            <div className="space-y-2">
              <div className="h-3 bg-gray-100 rounded-full w-full" />
              <div className="h-3 bg-gray-100 rounded-full w-5/6" />
              <div className="h-3 bg-gray-100 rounded-full w-4/6" />
              <div className="h-3 bg-blue-50 rounded-full w-full mt-4 animate-pulse" />
              <div className="h-3 bg-blue-50 rounded-full w-3/4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
