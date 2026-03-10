import { topRecruiters, deptPlacements, images } from "../data/content";
import { TrendingUp, Award } from "lucide-react";

export default function HiringStatsSection() {
  return (
    <section id="placements" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-maroon font-semibold text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-maroon" />
            Where Our Students Go
            <span className="w-8 h-px bg-maroon" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Placement Highlights 2023–24
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Department Placement Chart */}
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h3 className="font-heading text-lg font-semibold text-gray-800 flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-maroon/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-maroon" />
              </div>
              Average Package by Department
            </h3>
            <div className="space-y-5">
              {deptPlacements.map((item, i) => (
                <div key={item.dept} className={`animate-fade-in-up delay-${i * 75 + 100}`}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-700 font-medium">{item.dept}</span>
                    <span className="text-maroon font-bold">{item.avg}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 progress-bar overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-maroon to-maroon-light h-full rounded-full transition-all duration-700"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiters */}
          <div className="flex flex-col gap-5">
            {/* Images row */}
            <div className="grid grid-cols-3 gap-3">
              {[images.recruter1, images.recruter2, images.moreStudents].map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden h-28 group">
                  <img
                    src={src}
                    alt="Placement"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Top Recruiters card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 hover:shadow-md transition-shadow duration-300">
              <h3 className="font-heading text-lg font-semibold text-gray-800 flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Award className="w-4 h-4 text-amber-600" />
                </div>
                Top Recruiters
              </h3>
              <div className="flex flex-wrap gap-2">
                {topRecruiters.map((company) => (
                  <span
                    key={company}
                    className="recruiter-tag px-3 py-1.5 bg-cream text-gray-700 rounded-full text-xs font-semibold border border-gray-200 cursor-default"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
