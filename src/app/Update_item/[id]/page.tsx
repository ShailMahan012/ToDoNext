import ItemForm from "@/components/ItemForm";

export default function UpdateItem({ params }: { params: { id: number } }) {
  const item_id = params.id;
  return <ItemForm title="Update To Do" item_id={item_id} update={true} />;
}
