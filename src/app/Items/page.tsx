"use client";
import Item from "@/components/Item";
import { useState, useEffect } from "react";
import { Todo } from "@/lib/todo";
import api from "@/lib/api";

export default function ToDoItems() {
  const [todo_items, set_todo_items] = useState<Todo[]>([]);

  async function get_data() {
    const items = await api.findAll();
    set_todo_items(items);
  }
  useEffect(() => {
    get_data();
  }, []);

  async function handle_delete(id: number) {
    await api.delete(id);
    set_todo_items((prev) => prev.filter((item) => item.id !== id));
  }

  return <Item todo_items={todo_items} onDelete={handle_delete} />;
}
