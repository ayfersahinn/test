export default async function Docs({ params }) {
  const { slug } = await params;
  if (slug && slug.length === 2) {
    return (
      <div>
        <h1>Documents</h1>
        <h2>Feature: {slug[0]}</h2>
        <h2>Concept: {slug[1]}</h2>
      </div>
    );
  }
  if (slug && slug.length === 1) {
    return (
      <div>
        <h1>Documents</h1>
        <h2>Feature: {slug[0]}</h2>
      </div>
    );
  }
  return <h1>Documents Home Page</h1>;
}
