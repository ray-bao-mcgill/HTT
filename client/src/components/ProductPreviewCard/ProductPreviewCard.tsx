import "./style.scss";

interface Props {
  title: string;
  description: string;
}

function ProductPreviewcard({ title, description }: Props) {
  return (
    <div className="product-preview-card">
      <h1 className="product-preview-card__title">{title}</h1>
      <p className="product-preview-card__description">{description}</p>
    </div>
  );
}

export default ProductPreviewcard;
