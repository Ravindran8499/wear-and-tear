import React from "react";
import CollectionItems from "../collectionitem/collectionitem.component";
import "./collectionpreview.styles.css";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, indc) => indc < 4)
          .map(({ id, name, imageUrl, price }) => {
            return (
              <CollectionItems
                key={id}
                name={name}
                imageUrl={imageUrl}
                price={price}
              />
            );
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
