import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { BarChart } from "react-native-chart-kit";


const screenWidth = Dimensions.get("window").width;


const chartConfig = {
    backgroundGradientFrom: "#E5EEF5",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#C9E3F8",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 193, ${opacity})`,
    strokeWidth: 3,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };

  const data3 = {
    labels: ["Aizawl", "Kolasib", "Mamit", "Lenglui", "Lawngtlai"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99]
      }
    ]
  };



const CustomBarChart = () => {
  return (
    <View>
       <BarChart
            data={data3}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            verticalLabelRotation={0}
            fromZero={true}
            showBarTops={true}
            showValuesOnTopOfBars={true}
          />
    </View>
  )
}

export default CustomBarChart

const styles = StyleSheet.create({
   
})