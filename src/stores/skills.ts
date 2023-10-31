import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { request } from "../utils/request";

export interface Skill {
  skill?: string;
}

export interface SkillState {
  skills: Skill[];
}

export interface SkillMethod {
  getSkills: () => Promise<unknown>;
}

export const useSkillsStore = create<SkillState & SkillMethod>()(
  devtools(
    persist(
      (set) => ({
        skills: [],
        getSkills: async () => {
          await request
            .get({
              url: "/skills",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            })
            .then((resp) => {
              if (resp !== undefined) {
                set({
                  skills: resp,
                });
              }
            });
        },
      }),
      {
        name: "skills",
      }
    )
  )
);
