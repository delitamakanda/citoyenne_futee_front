import { defineStore } from "pinia";
import {LOCAL_STORAGE_KEY} from "@/utils/constants.ts";

export type Role = "admin" | "student" | "teacher" | "parent";
export type User = {
    id: number;
    name: string;
    email: string;
    role: Role | undefined;
    token: boolean;
}

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: null as User | null,
        }
    },
    actions: {
        login(user: User) {
            this.user = user;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
        },
        logout() {
            this.user = null;
            localStorage.removeItem(LOCAL_STORAGE_KEY);
        },
        restore() {
            const userString = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (userString) {
                this.user = JSON.parse(userString) as User;
            } else {
                this.user = null;
            }
        }
    },
    getters: {
        isLoggedIn(): boolean {
            return this.user !== null;
        },
        isStudent: (state) => state.user?.role === "student",
        isTeacher: (state) => state.user?.role === "teacher",
        isParent: (state) => state.user?.role === "parent",
        isAdmin: (state) => state.user?.role === "admin",
    }
})