import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'; // Import axios for making HTTP requests
import { Chart } from "react-google-charts";

const AnimalGraph = () => {
    const [data, setData] = useState([]);
    const [cat, setCat] = useState({
        "Bear": 0, "Boar": 0, "Cattle": 0, "Deer": 0, "Elephant": 0, "Horse": 0, "Monkey": 0
    });

    useEffect(() => {
        const fetchData = () => {
            axios.get('http://localhost:5050/analysis/getanimals')
                .then(response => {
                    if (!response.data) {
                        throw new Error('No data received');
                    }
                    const result = countAnimalsByDate(response.data);
                    setData(result);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });

            axios.get('http://localhost:5050/analysis/getAnimalCat')
                .then(response => {
                    if (!response.data) {
                        throw new Error('No data received');
                    }
                    const aml = {};
                    response.data.forEach(animal => aml[animal["animalname"]] = 0);
                    setCat(aml);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        };

        fetchData(); // Initial fetch

        const interval = setInterval(() => {
            fetchData(); // Refresh data at a specific interval
        }, 1000);

        return () => clearInterval(interval); // Cleanup function for interval
    }, [countAnimalsByDate]);

    function countAnimalsByDate(jsonData) {
        const result = [["Date", ...Object.keys(cat)]];
        const header = [...Object.keys(cat)];

        const dateSet = new Set(jsonData.map(entry => entry.enroachDate.slice(0, 10)));
        const dates = Array.from(dateSet).sort();

        for (const date of dates) {
            const row = [date];
            for (const animal of header) {
                const count = jsonData.reduce((acc, entry) => {
                    if (entry.enroachDate.slice(0, 10) === date && entry.animalname === animal) {
                        return acc + entry.animalCount;
                    }
                    return acc;
                }, 0);
                row.push(count);
            }
            result.push(row);
        }
        return result;
    };

    return (
        <div >
            <Chart
                chartType="ScatterChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: 'Animal Encroachment',
                    titleTextStyle: {
                        color: '#333',
                        fontSize: 20,
                        bold: true
                    },
                    hAxis: {
                        title: 'Date',
                        titleTextStyle: {
                            color: '#333',
                            fontSize: 20,
                            italic: false
                        },
                        textStyle: {
                            color: '#666'
                        },
                        gridlines: {
                            color: '#f5f5f5'
                        }
                    },
                    vAxis: {
                        title: 'Animal Count',
                        titleTextStyle: {
                            color: '#333',
                            fontSize: 20,
                            italic: false
                        },
                        textStyle: {
                            color: '#666'
                        }
                    },
                    legend: {
                        textStyle: {
                            color: '#333',
                            fontSize: 24
                        }
                    },
                    chartArea: {
                        width: '60%',
                        height: '70%',
                        backgroundColor: {
                            fill: '#f9f9f9',
                            opacity: 0.7
                        }
                    },
                    series: {
                        0: { color: '#3366cc' },
                        1: { color: '#dc3912' },
                        2: { color: '#ff9900' },
                        3: { color: '#109618' },
                        4: { color: '#990099' },
                        5: { color: '#0099c6' },
                        6: { color: '#dd4477' }
                    },
                    explorer: {
                        axis: 'horizontal',
                        keepInBounds: true
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
                width="95%"
                height="600px"
            />
        </div>
    );
}

export default AnimalGraph;
