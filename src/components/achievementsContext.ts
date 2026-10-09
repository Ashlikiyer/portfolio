import { createContext, useContext } from "react";

export type AchievementId =
  | "hello"
  | "historian"
  | "stack"
  | "certified"
  | "curious"
  | "terminal"
  | "secret"
  | "explorer";

export const ACHIEVEMENTS: {
  id: AchievementId;
  title: string;
  description: string;
  hint: string;
}[] = [
  { id: "hello", title: "Hello, world", description: "Landed on the portfolio", hint: "Just show up" },
  { id: "historian", title: "Historian", description: "Read through the experience timeline", hint: "Look into where I've worked" },
  { id: "stack", title: "Full stack", description: "Checked out the skills", hint: "See what I work with" },
  { id: "certified", title: "Certified", description: "Browsed the certificates", hint: "Find the badges" },
  { id: "curious", title: "Curious", description: "Opened a project", hint: "Visit something I built" },
  { id: "terminal", title: "Root access", description: "Opened the terminal", hint: "Press ` or click the terminal on my photo" },
  { id: "secret", title: "Secret finder", description: "Ran a hidden terminal command", hint: "Some commands aren't in help. Try ls -a" },
  { id: "explorer", title: "Explorer", description: "Made it all the way to contact", hint: "Reach the end of the page" },
];

export interface AchievementsContextValue {
  unlocked: AchievementId[];
  unlock: (id: AchievementId) => void;
  reset: () => void;
}

export const AchievementsContext = createContext<AchievementsContextValue | null>(null);

export function useAchievements() {
  const ctx = useContext(AchievementsContext);
  if (!ctx) throw new Error("useAchievements must be used inside AchievementsProvider");
  return ctx;
}
