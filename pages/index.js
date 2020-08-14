
import axios from "axios"
import MutualFunds from "./components/mutualFunds"




const Home = (props) => {
  return <MutualFunds initialFundsList={props.initialFundsList}/>
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const { data } = await await axios.post(
    `https://apus.scripbox.com/api/v1/search`,
    {
      "q": "",
      "from": 0,
      "size": 20
    }
  );
  const initialFundsList = await data

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      initialFundsList,
    },
  }
}

export default Home
