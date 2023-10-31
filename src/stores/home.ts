import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { request } from "../utils/request";

export interface AdminInfo {
  id?: number;
  name?: string;
  image?: string;
  email?: string;
  phoneNo?: string;
  resume?: string;
  blogUrl?: string;
  gitUrl?: string;
  linkedInUrl?: string;
  youtubeUrl?: string;
  about?: string;
  profession?: string;
  yearsOfExperience?: number;
  totalCoursesAndCertificates?: number;
}

export interface AdminState {
  admin: AdminInfo;
}

interface AdminMethod {
  getAdmin: () => Promise<void>;
}

export const useAdminStore = create<AdminState & AdminMethod>()(
  devtools(
    persist(
      (set) => ({
        admin: {},
        getAdmin: async () => {
          await request
            .get({
              url: "/admininfo",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            })
            .then((resp) => {
              if (resp !== undefined) {
                set({
                  admin: resp,
                });
              }
              //   console.log("GET Response");
              //   return resp as AdminInfo;
            });
          //   try {
          //     await axios(apiDomain, {
          //       url: "/admininfo",
          //       headers: {
          //         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          //         "Content-Type": "application/json",
          //         Accept: "application/json",
          //       },
          //       method: "get",
          //     }).then((resp) => {
          //       if (resp.status === 200) {
          //         set({
          //           admins: resp.data.admins,
          //         });
          //       }
          //     });
          //   } catch (error) {
          //     if (axios.isAxiosError(error)) {
          //       console.log("error message: ", error.message);
          //       return error.message;
          //     } else {
          //       console.log("unexpected error: ", error);
          //       return "An unexpected error occurred";
          //     }
          //   }
        },
      }),
      {
        name: "admininfos",
      }
    )
  )
);
