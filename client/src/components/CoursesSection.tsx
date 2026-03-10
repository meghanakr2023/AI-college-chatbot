import { coursesContent, images } from "../data/content";
import { BookOpen, Users, TrendingUp } from "lucide-react";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-maroon font-semibold text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-maroon" />
            World-Class Education
            <span className="w-8 h-px bg-maroon" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Programs Offered
          </h2>
          <div className="section-divider" />
        </div>

        {/* B.Tech grid */}
        <div className="mb-4 flex items-center gap-3">
          <div className="w-1 h-6 bg-maroon rounded-full" />
          <h3 className="font-heading text-xl font-semibold text-gray-800">B.Tech Programs (4 Years)</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {coursesContent.btech.map((course, i) => (
            <div
              key={course.name}
              className={`group bg-white rounded-xl p-5 border border-gray-100 hover:border-maroon/40 hover:shadow-lg transition-all duration-300 card-hover animate-fade-in-up delay-${(i % 3) * 100 + 100}`}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-maroon/8 flex items-center justify-center flex-shrink-0 group-hover:bg-maroon/15 transition-colors duration-300">
                  <BookOpen className="w-4.5 h-4.5 text-maroon" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm leading-snug">{course.name}</h4>
                  <div className="flex items-center gap-3 mt-2.5 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> {course.seats} seats
                    </span>
                    <span className="flex items-center gap-1 text-maroon font-semibold">
                      <TrendingUp className="w-3 h-3" /> {course.avg}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* M.Tech & MBA */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* M.Tech */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 card-hover">
            <div className="flex items-center gap-4 mb-5">
              <img
                src={images.tech2}
                alt="Tech"
                className="w-14 h-14 rounded-xl object-cover shadow-sm"
              />
              <div>
                <div className="w-1 h-5 bg-maroon rounded-full inline-block mr-2 align-middle" />
                <h3 className="font-heading text-lg font-semibold text-gray-800 inline">M.Tech Programs</h3>
              </div>
            </div>
            <div className="space-y-0.5">
              {coursesContent.mtech.map((course) => (
                <div
                  key={course.name}
                  className="flex justify-between items-center text-sm py-2.5 border-b border-gray-50 last:border-0 hover:text-maroon transition-colors duration-200"
                >
                  <span className="text-gray-700 font-medium">{course.name}</span>
                  <span className="text-xs text-gray-400 bg-cream px-2.5 py-0.5 rounded-full">{course.seats} seats</span>
                </div>
              ))}
            </div>
          </div>

          {/* MBA */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 card-hover">
            <div className="flex items-center gap-4 mb-5">
              <img
                src={images.tech3}
                alt="MBA"
                className="w-14 h-14 rounded-xl object-cover shadow-sm"
              />
              <div>
                <div className="w-1 h-5 bg-amber-500 rounded-full inline-block mr-2 align-middle" />
                <h3 className="font-heading text-lg font-semibold text-gray-800 inline">MBA Program</h3>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-3">{coursesContent.mba.name}</p>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs bg-cream text-gray-600 px-3 py-1 rounded-full font-medium">{coursesContent.mba.seats} seats</span>
              <span className="text-xs bg-maroon/10 text-maroon px-3 py-1 rounded-full font-semibold">{coursesContent.mba.avg}</span>
            </div>
            <p className="text-gray-500 text-sm">
              Specializations in Finance, Marketing, HR, and IT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
