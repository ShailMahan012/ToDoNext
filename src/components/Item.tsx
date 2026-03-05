import { Todo } from "@/lib/todo";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function Item({
  todo_items,
  onDelete,
}: {
  todo_items: Todo[];
  onDelete: (id: number) => void;
}) {
  const router = useRouter();
  return (
    <ul className="w-full list-none flex flex-row gap-10 flex-wrap">
      {todo_items.map((item) => {
        return (
          <li
            key={item.id}
            className="shadow-black shadow-lg p-5 rounded-md w-70"
          >
            <div className="text-xl font-bold">{item.title}</div>
            <div>{item.description}</div>
            <div>
              {item.completed ? (
                <span className="text-green-800">Completed</span>
              ) : (
                <span className="text-red-500">Not Completed</span>
              )}
            </div>
            <div className="text-sm text-gray-500">{item.createdAt}</div>
            <div className="text-sm text-gray-500">{item.updatedAt}</div>
            <div className="mt-2">
              <button
                className="cursor-pointer bg-blue-500 text-white p-2 shadow-blue-300 rounded-md"
                onClick={() => {
                  router.push(`/Update_item/${item.id}`);
                }}
              >
                EDIT
              </button>
            </div>
            <div className="mt-2">
              <button
                className="cursor-pointer bg-red-500 text-white p-2 shadow-red-300 rounded-md"
                onClick={() => {
                  onDelete(item.id);
                }}
              >
                DELETE
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
