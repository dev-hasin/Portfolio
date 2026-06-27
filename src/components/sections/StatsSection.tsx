import { stats } from "../../data/profile";

export function StatsSection() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dd className="mb-1 bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-4xl text-transparent">
                {stat.value}
              </dd>
              <dt className="text-sm text-gray-500">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
