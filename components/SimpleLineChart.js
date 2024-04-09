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

  const data7 = {
    labels: ["Murder", "Dacoity", "Robbery", "Rape", "Extortion", "Fraud"],
    datasets: [
      {
        data: [60, 95, 28, 70, 120, 63],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Pending Cases"] // optional
  };

const SimpleLineChart = () => {
  return (
    <View>
     
     <LineChart
            data={data7}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
    </View>
  )
}

export default SimpleLineChart

const styles = StyleSheet.create({})