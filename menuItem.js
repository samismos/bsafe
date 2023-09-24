import { Text, TextInput, View, TouchableOpacity, Pressable, Switch } from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from './styles.js';

const MenuItem = ({ menuItem,updateCount }) => {
    const [count, setCount] = useState(0);
    const [sum, setSum] = useState(0);

    const increase = () => {
        setCount(count + 1);
        updateSum(count + 1);
    };

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
            updateSum(count - 1);
        }
    };

    const updateSum = (newCount) => {
        const newSum = newCount * menuItem.price;
        setSum(newSum);
        updateCount(newCount);
    };

    return (
        <View style={styles.itemContainer}>
            <View style={styles.nameContainer}>
            <Text style={{flexWrap:'wrap', fontWeight:'bold', fontSize: 12}}>
                {menuItem.name}
            </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={increase}>
                <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={decrease}>
                <Text>-</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.textInput}
                value={count.toString()}
                keyboardType='numeric'
                onChangeText={(value) => {
                    const numericValue = parseInt(value, 10); // Parse the input as an integer
                    setCount(isNaN(numericValue) ? 0 : numericValue); // Handle non-numeric input
                    updateSum(isNaN(numericValue) ? 0 : numericValue);
                }}
            />
            <Text style={styles.sum}>
                {`${sum.toFixed(2)}€`}
            </Text>
        </View>
    );
}
{/*
const MenuItem = ({ name, price, updateCount }) => {
    const [count, setCount] = useState(0);
    const [sum, setSum] = useState(0);

    const increase = () => {
        setCount(count + 1);
        updateSum(count + 1);
    };

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
            updateSum(count - 1);
        }
    };

    const updateSum = (newCount) => {
        const newSum = newCount * price;
        setSum(newSum);
        updateCount(newCount);
    };

    return (
        <View style={styles.itemContainer}>
            <View style={styles.nameContainer}>
            <Text style={{flexWrap:'wrap'}}>
                {name}
            </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={increase}>
                <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={decrease}>
                <Text>-</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.textInput}
                value={count.toString()}
                keyboardType='numeric'
                onChangeText={(value) => {
                    const numericValue = parseInt(value, 10); // Parse the input as an integer
                    setCount(isNaN(numericValue) ? 0 : numericValue); // Handle non-numeric input
                    updateSum(isNaN(numericValue) ? 0 : numericValue);
                }}
            />
            <Text style={styles.sum}>
                {`${sum}€`}
            </Text>
        </View>
    );
}

*/}

const ResultItem = ({ type, numValue, updateTotalSum }) => {
    return (
      <View style={styles.resultContainer}>
        <Text>{type}</Text>
        <TextInput
          style={styles.resultInput}
          value={`${numValue}€`} // Ensure that the value is displayed with the Euro symbol
          keyboardType='numeric'
          onChangeText={(newValue) => {
            // Handle non-numeric input
            const numericValue = parseFloat(newValue);
            if (!isNaN(numericValue)) {
              // Update the total sum here
              // For example, you can call a function like updateTotalSum(newValue) to update it.
            }
          }}
        />
      </View>
    );
};

const Ergasia = ({updateErgasia}) => {
    const [isToggled, setIsToggled] = useState(false);
    
    const value = [20,30];

    toggleSwitch = () => {
        const erg = !isToggled ? value[1] : value[0];
        updateErgasia(erg);
        setIsToggled(!isToggled);
    }

    return (
        <View style={styles.resultContainer}>
             <Text>
            Εργασία
            </Text>    
        <Switch
        value={isToggled}
        onValueChange={() => { toggleSwitch() }}
      />
           
        <View style={styles.textContainer}>
        <Text>
        {`${isToggled ? value[1] : value[0]}€`}
        </Text>  
        </View>
        </View>
    );
}
export { MenuItem, ResultItem, Ergasia };
