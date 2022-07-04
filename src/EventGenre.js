import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const EventGenre = ({ events }) => {

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#F77F00'];

  const [data, setData] = useState([]);

  //The mock data block below can be deleted once useEffect is implemented correctly
  /* ********************************* */
  // const data = [
  //   { name: 'Group A', value: 400 },
  //   { name: 'Group B', value: 300 },
  //   { name: 'Group C', value: 300 },
  //   { name: 'Group D', value: 200 }
  // ];
  /* ********************************* */

  useEffect(() => {

    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'jQuery,', 'AngularJS', 'Angular', 'AngularJS-Remote'];
      const scrubbedGenres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS']

      let testArray1 = [...events.map((event) => event.summary.split(' '))]
      let scrubbedArray = [];
      //  console.log(`testArray1: ${testArray1}`);

      //  console.log(`testArray1[0] is: ${testArray1[0]}`);
      //  console.log(`testArray1[1] is: ${testArray1[1]}`);

      for (let i = 0; i < testArray1.length; i++) {
        if ((testArray1[i].includes('AngularJS')) || (testArray1[i].includes('AngularJS-Remote'))) {
          scrubbedArray.push('AngularJS');
        }
        else if (testArray1[i].includes('jQuery,')) {
          scrubbedArray.push('jQuery');
        }
        else {
          scrubbedArray.push(testArray1[i])
        }
      }

      //console.log(`scrubbedArray: ${scrubbedArray}`);

      const data = scrubbedGenres.map((genre) => {
        const value = scrubbedArray.filter((event) => event.includes(genre)).length;
        // console.log(`name: ${genre}, value: ${value}`);
        return { name: genre, value };
      });
      return data;
    };
    setData(() => getData());
  }, [events]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => {
            if (percent > 0) {
              return `${name} ${(percent * 100).toFixed(0)}%`
            }
          }
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;