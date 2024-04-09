import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import { PieChart } from "react-native-chart-kit";



const screenWidth = Dimensions.get("window").width;


const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 0.5) => `rgba(0, 0, 193, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };

  const data5 = [
    {
      name: "Murder",
      population: 30,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Robbery",
      population: 28,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Rape",
      population: 22,
      color: "blue",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Mischief",
      population: 8,
      color: "gray",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Extortion",
      population: 16,
      color: "yellow",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Others",
      population: 13,
      color: "brown",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

const CustomPieChart = () => {
  return (
    <View>
      
      <PieChart
            data={data5}
            width={screenWidth}
            height={200}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[0, 0]}
          />

    </View>
  )
}

export default CustomPieChart

const styles = StyleSheet.create({})