import React, { Component } from "react";
import SHOP_DATA from "./shopdata.js";
import CollectionPreview from "../collectionpreview/collectionpreview.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {/* <h1>Hello world</h1> */}
        {collections.map(({ id, title, items }) => {
          return <CollectionPreview key={id} title={title} items={items} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
