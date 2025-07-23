export default async function ProductDetail({ params }) {
  const { productID } = await params;
  return (
    <div>
      <h1>Product Detail {productID}</h1>
    </div>
  );
}
