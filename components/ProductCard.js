import Link from "next/link";
import { Card, Icon } from "antd";
const { Meta } = Card;

const Text = ({ text, color }) => <span style={{ color }}>{text}</span>;

export default ({ id, name, subtitle, photoUrl }) => (
  <div style={{ marginBottom: "25px" }}>
    <Link href={`/product?id=${id}`} as={`/product/${id}`}>
      <a>
        <Card
          hoverable
          actions={[<Icon type="eye" theme="outlined" />]}
          cover={<img alt="example" src={photoUrl} />}
        >
          <Meta
            title={<Text text={name} color={"black"} />}
            description={<Text text={subtitle} color={"#6c5ce7"} />}
          />
        </Card>
      </a>
    </Link>
  </div>
);
