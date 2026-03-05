import { Todo, TodoUpdate } from "@/lib/todo";

class API {
  private baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }
  async create(data: Todo) {
    const res = await fetch(this.baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  }
  async findOne(id: number) {
    const res = await fetch(`${this.baseURL}/${id}`);
    return res.json();
  }
  async findAll() {
    const res = await fetch(this.baseURL);
    return res.json();
  }
  async update(id: number, data: TodoUpdate) {
    const res = await fetch(`${this.baseURL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  }
  async delete(id: number) {
    const res = await fetch(`${this.baseURL}/${id}`, {
      method: "DELETE",
    });
    return res.json();
  }
}
const api = new API("http://localhost:4000/todo");
export default api;
