import { LINKS } from "../data";
import { LayoutPage } from "../../../components/layout";

export default async function Page(props: {
  params: Promise<{ linkId: string }>;
}) {
  const params = await props.params;
  const link = LINKS.find((l) => l.id === params.linkId);

  if (!link) {
    return <p>Error</p>;
  }

  return (
    <LayoutPage>
      <p>{link.label}</p>
      <p>{link.url}</p>
    </LayoutPage>
  );
}
