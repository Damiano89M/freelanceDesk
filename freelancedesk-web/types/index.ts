export interface User {id: number; name: string; email: string;}
export interface Client {id: number; name: string; company: string | null; email: string | null; phone: number | null; notes: string | null;}
export type ProjectsStatus = 'draft' | 'active' | 'completed' | 'cancelled';
export interface Project {id: number; name: string; description: string | null; status: ProjectsStatus; hourly_rate: string | null; started_at: string | null; deadline: string | null; client?: Client;}
export interface Dashboard {clients: number; activeProjects: number; workedHoursThisMonth: number; expensesThisMonth: number; potentialRevenue: number;}
export interface Paginated<T> {data: T[]; links: unknown; meta: unknown;}