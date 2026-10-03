import Counter from "./Counter";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <section className="relative border-t border-border-muted bg-background px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-3">
          {achievements.map((a) => (
            <Counter key={a.id} achievement={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
