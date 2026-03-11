import ItemForm from "@/components/ItemForm";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function UpdateItem({ params }: Props) {
  const { id } = await params;

  return <ItemForm title="Update To Do" item_id={Number(id)} update />;
}
