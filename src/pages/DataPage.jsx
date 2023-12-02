import React, { useEffect, useState } from 'react'
import SwitchPage from '../components/SwitchPage'
import Table from '../components/Table';
import axios from 'axios'
import toast from 'react-hot-toast';
import PieChart from '../components/PieChart';

const DataPage = () => {
    const [userData, setUserData] = useState([]);
    const [allPost, setAllPost] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );

                const filterData = result.data.filter((post) => post.userId === 1);

                setAllPost(result.data)
                setUserData(filterData);
                setLoading(false);

                toast.success("data fetched")
                console.log(filterData);
            } catch (error) {
                console.error("Error fetching data:", error);
                toast.error("Error Occurred: Failed to fetch data");
            }
        };

        fetchData();
    }, []);


  return (
      <>
          <div className="p-8 overflow-auto text-center m-auto">
              <Table data={userData} />
              {!loading && <div className="flex justify-center">
                  <PieChart userPost={userData} allPost={allPost} />
              </div>}
          </div>
          <SwitchPage page1="homePage" page2="transactionPage" />
      </>
  );
}

export default DataPage