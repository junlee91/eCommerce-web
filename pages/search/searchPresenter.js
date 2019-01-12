import Head from "next/head";
import { Layout, Input } from "antd";

import Header from "../../components/Header";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";
import CartButton from "../../components/CartButton";

const { Content } = Layout;

export default ({ data, updateSearchTerm, searchTerm }) => (
  <>
    <Head>
      <title>Search | Soda Store</title>
    </Head>
    <Header
      centerColumn={
        <h4>{searchTerm === "" ? "Search" : `Searching by ${searchTerm}`}</h4>
      }
      rightColumn={<CartButton />}
      leftColumn={<Button href="/" text="Home" />}
    />
    <Content style={{ padding: "0 50px" }}>
      <Input
        onChange={updateSearchTerm}
        placeholder={"Search by name"}
        value={searchTerm}
      />
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          width: "100%",
          margin: "50px 0px"
        }}
      >
        {data &&
          data.products &&
          data.products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              subtitle={product.detail}
              price={product.price}
              photoUrl={product.photo.url}
            />
          ))}
      </div>
      {data && data.products && data.products.length === 0 && (
        <h1>There are no results to be shown.</h1>
      )}
    </Content>
  </>
);
