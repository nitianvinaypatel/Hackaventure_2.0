import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { StackedBarChart} from "react-native-chart-kit";



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


  const data4 = {
    labels: ["Test1", "Test2"],
    legend: ["L1", "L2", "L3"],
    data: [
      [60, 60, 60],
      [30, 30, 60]
    ],
    barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
  };


const StackedBarChart = () => {
  return (
    <View>
      <StackedBarChart
            style={graphStyle}
            data={data4}
            width={screenWidth}
            backgroundColor={"transparent"}
            height={220}
            chartConfig={chartConfig}
          />
    </View>
  )
}

export default StackedBarChart

const styles = StyleSheet.create({
    graphStyle:{

    }
})