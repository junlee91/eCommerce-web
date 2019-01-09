import Head from "next/head";
import { withRouter } from "next/router";

const Movie = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Soda Movie</title>
    </Head>
    <h1>{props.router.query.title}</h1>
    <p>lalalalalala</p>
  </div>
);

export default withRouter(Movie);
