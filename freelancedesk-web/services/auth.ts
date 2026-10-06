import { http } from "@/api/http";
import { User } from "@/types";

async function csrf() {
    await http.get("/sanctum/csrf-cookie");
}

export async function fetchUser(): Promise<User> {
    try {
        await csrf();
        const response = await http.get<User>("/api/me");
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
}

export async function login(email: string, password: string): Promise<User> {
    try {
        const response = await http.post<User>("/api/login", { email, password });
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export async function register(name: string, email: string, password: string, passwordConfirmation: string): Promise<User> {
    try {
        const response = await http.post<User>("/api/register", { name, email, password, password_confirmation: passwordConfirmation });
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}
export async function logout(): Promise<void> {
    try {
        await http.post("/api/logout");
    } catch (error) {
        console.error("Error logging out:", error);
        throw error;
    }
}