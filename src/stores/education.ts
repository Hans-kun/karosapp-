import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { request } from "../utils/request";

export interface EducationInfo {
  course?: string;
  school?: string;
  schoolLink?: string;
  description?: string;
  startYear?: number;
  endYear?: number;
}
export interface CoursesAndCertInfo {
  course?: string;
  school?: string;
  schoolLink?: string;
  description?: string;
  startYear?: number;
  endYear?: number;
}

export interface EducationState {
  eduList: EducationInfo[];
  ccList: CoursesAndCertInfo[];
}

export interface EducationMethods {
  getEduList: () => Promise<unknown>;
  getCcList: () => Promise<unknown>;
}

export const useEducationStore = create<EducationState & EducationMethods>()(
  devtools(
    persist(
      (set) => ({
        eduList: [],
        ccList: [],
        getEduList: async () => {
          await request
            .get({
              url: "/education",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            })
            .then((resp) => {
              if (resp !== undefined) {
                set({
                  eduList: resp,
                });
              }
              //   console.log("GET Response");
              //   return resp as AdminInfo;
            });
        },
        getCcList: async () => {
          await request
            .get({
              url: "/coursesandcert",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            })
            .then((resp) => {
              if (resp !== undefined) {
                set({
                  ccList: resp,
                });
              }
              //   console.log("GET Response");
              //   return resp as AdminInfo;
            });
        },
      }),
      {
        name: "eduList",
      }
    )
  )
);
