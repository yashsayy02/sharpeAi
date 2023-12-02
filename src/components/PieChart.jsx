import React from 'react'
import { Chart } from 'chart.js/auto';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Pie} from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const PieChart = ({userPost, allPost}) => {
    console.log(userPost, allPost)
    const data = {
        labels: ["user's Posts", "other's posts"],
        datasets: [
            {
                data: [userPost.length, allPost.length - userPost.length],
                backgroundColor: ["#ADD8E6", "#6495ED"],
            },
        ],
    };

    const options ={}

  return (
    <div>
         <Pie data={data} options={options}>

         </Pie>
    </div>
  )
}

export default PieChart