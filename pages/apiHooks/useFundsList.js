import { useQuery } from "react-query";
import axios from "axios";

const getFundsList = async (_, bodyData) => {
  const { data } = await axios.post(
    `https://apus.scripbox.com/api/v1/search`,
    {
      "q": bodyData.search,
      "from": 0,
      "size": 20,
      "filter": {
        "asset_class": bodyData.filters
      }
    }
  );
  return data;
};

export default function useFundsList(searchText, filters, initialData) {
  console.log("get funds list", initialData)
  return useQuery(["fundsList", { search: searchText, filters }], getFundsList);
}
