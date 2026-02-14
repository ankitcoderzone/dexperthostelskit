import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply as Department Expert",
  description:
    "Apply to become a Department Expert at and help juniors with verified guidance about courses and hostels.",
};

export default function DeFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
