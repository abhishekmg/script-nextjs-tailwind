import { useQuery, usePaginatedQuery } from "react-query";
import axios from "axios";
import isEmpty from "lodash/isEmpty"


// TODO : id bodyData.filters or subAsset is empty dont add the respective fields
const getFundsList = async (_, offset, bodyData) => {

  const body = {
    "q": bodyData.search,
    "from": offset,
    "size": 20,
    "filter": {}
  }

  // Object.assign(body, (!isEmpty(bodyData.filters)) && {"filter": {...body.filter , "asset_class": bodyData.filters}},  
  // (!isEmpty(bodyData.subAssetFilter)) && {...body.filter, "filter": {"sub_asset_class": bodyData.subAssetFilter}}
  // )

  const bodyfunc = () => {
    if (!isEmpty(bodyData.subAssetFilter)) {
      return {
        "q": bodyData.search,
        "from": offset,
        "size": 20,
        "filter": {
          "asset_class": bodyData.filters,
          "sub_asset_class": bodyData.subAssetFilter
        }
      }
    } else {
      return {
        "q": bodyData.search,
        "from": offset,
        "size": 20,
        "filter": {
          "asset_class": bodyData.filters
        }
      }
    }
  }


  const { data } = await axios.post(
    `https://apus.scripbox.com/api/v1/search`,
    bodyfunc()
    // {
    //   "q": bodyData.search,
    //   "from": offset,
    //   "size": 20,
    //   "filter": {
    //     "asset_class": bodyData.filters,
    //     // {"sub_asset_class": bodyData.subAssetFilter}

    //   },
    // }
  );
  return data;
};

export default function useFundsList(offset, searchText, filters, subAssetFilter, initialData) {
  console.log("get funds list")
  return usePaginatedQuery(["fundsList", offset, { search: searchText, filters, subAssetFilter }], getFundsList);
}
