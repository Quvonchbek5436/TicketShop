import React, {useEffect} from 'react';
import {useQuery, useQueryClient} from "react-query";
import {axiosInstance} from "../../config";

const fetchData = async () => {
    return await axiosInstance.get('events/all')
}
const HomePage = () => {
    // const queryClient = useQueryClient()
    const {data, status} = useQuery('data', () => fetchData())
    console.log(data)
    const postData = async () => {
      try {
          const data = await axiosInstance.post('events/create',{
              name: "asfdsfas",
              topic: "Information Technologies",
              date: "2023-09-09T08:03:11.038Z",
              place: "asdfas",
              number_of_seats: 3,
              ticket_price: "870",
              currency: "USD",
              thumbnail: "strfsdafsing",
              description: "strisafdasfng"
          })
          console.log(data)
      }catch (e) {
          console.log(e);
      }
    }
    postData()
    return (
        <>
            salom
        </>
    );
};

export default HomePage;