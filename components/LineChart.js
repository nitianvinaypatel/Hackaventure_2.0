import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from "react-native-chart-kit";


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

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [20, 45, 28, 33, 33, 88, 34],
  
        strokeWidth: 4
      }
    ],
    legend: ["Monthly Registered Casess"]
  };

const CustomLineChart = () => {
  return (
    <View>
      <LineChart
            data={data}
            width={screenWidth}
            height={250}
            verticalLabelRotation={20}
            chartConfig={chartConfig}
            bezier
          />
    </View>
  )
}

export default CustomLineChart

const styles = StyleSheet.create({})