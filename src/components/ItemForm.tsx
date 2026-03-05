"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { Todo, TodoUpdate } from "@/lib/todo";

export default function ItemForm({
  title,
  update,
  item_id,
}: {
  title: string;
  update?: boolean | false;
  item_id?: number | null;
}) {
  const router = useRouter();
  const [itemTitle, setItemTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchItem() {
      if (update && item_id) {
        const data: Todo = await api.findOne(item_id);
        setItemTitle(data.title);
        setDescription(data.description);
        setCompleted(data.completed);
      }
    }
    fetchItem();
  }, []);

  async function handleSave() {
    setLoading(true);
    try {
      const item_doc: TodoUpdate = {
        title: itemTitle,
        description: description,
        completed: completed,
      };
      if (item_id) {
        await api.update(item_id, item_doc);
      } else {
        await api.create(item_doc as Todo);
      }
      alert("Item saved successfully ✅");
      if (update) {
        router.push("/Items");
      }
      // reset form
      setItemTitle("");
      setDescription("");
      setCompleted(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Failed to save ❌");
    }
    setLoading(false);
  }
  return (
    <div className="flex flex-col items-center rounded-lg p-5 shadow-xl">
      <h1>
        {title} {item_id ? item_id : ""}
      </h1>

      {/* Title Row */}
      <div className="grid grid-cols-[150px_1fr] items-center p-2.5 w-full">
        <div className="p-1">Title</div>
        <div className="p-1">
          <input
            type="text"
            placeholder="Enter Title"
            value={itemTitle}
            onChange={(e) => setItemTitle(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
      </div>

      {/* Description Row */}
      <div className="grid grid-cols-[150px_1fr] items-center p-2.5 w-full">
        <div className="p-1">Description</div>
        <div className="p-1">
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
      </div>

      {/* Completed Row */}
      <div className="grid grid-cols-[150px_1fr] items-center p-2.5 w-full">
        <div className="p-1">Completed</div>
        <div className="p-1">
          <select
            value={String(completed)}
            onChange={(e) => setCompleted(e.target.value === "true")}
            className="border rounded px-2 py-1 w-full"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>

      {/* Save Button Row */}
      <div className="grid grid-cols-[150px_1fr] p-2.5 w-full">
        <div className="col-span-2 text-right">
          <button
            disabled={loading}
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 w-full"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
