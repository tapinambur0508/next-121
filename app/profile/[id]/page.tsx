import { notFound } from "next/navigation";

interface ProfileProps {
  params: Promise<{ id: string }>;
}

async function Profile({ params }: ProfileProps) {
  const { id } = await params;

  if (parseInt(id, 10) === 4) {
    notFound();
  }

  return (
    <div>
      <h1>Profile {id}</h1>
    </div>
  );
}

export default Profile;
