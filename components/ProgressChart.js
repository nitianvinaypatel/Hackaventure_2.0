import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import { ProgressChart } from "react-native-chart-kit";


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


  const data2 = {
    labels: ["Aizawl", "Kolasib", "Mamit", "Lenglui", "Lawngtlai",],
    data: [0.3, 0.8, 0.6, 0.9, 0.7]
  };
  

const CustomProgressChart = () => {
  return (
    <View>
       <ProgressChart
            data={data2}
            width={screenWidth}
            style={styles.graph}
            height={200}
            strokeWidth={10}
            radius={32}
            backgroundColor={"transparent"}
            chartConfig={chartConfig}
            hideLegend={false}
          />
    </View>
  )
}

export default CustomProgressChart

const styles = StyleSheet.create({
  graph:{
    padding:10
  }
})