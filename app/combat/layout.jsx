import SubNav from "./SubNav";

export const metadata = {
  title: {
    default: "Combat Training Center",
    template: "%s — Combat Training Center — Ironworks Gym",
  },
};

export default function CombatLayout({ children }) {
  // Combat gets its own bar, but it sits UNDER the shared Ironworks masthead,
  // which keeps rendering above it. That is the difference between a section
  // and a separate website.
  return (
    <>
      <SubNav />
      {children}
    </>
  );
}
