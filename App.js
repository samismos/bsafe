import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles.js';
import logo from './assets/bsafe-inApp.png';
import { MenuItem, ResultItem, Ergasia } from './menuItem.js';

export default function App() {
  const [menuItems, setMenuItems] = useState([
    { name: 'CR123', price: 3, count: 0 },
    { name: 'AA/AAA', price: 1, count: 0 },
    { name: '14500', price: 5, count: 0 },
    { name: '14250', price: 5, count: 0 },
    { name: '12V7Ah', price: 15, count: 0 },
    { name: '12V1.3Ah', price: 10, count: 0 },
    { name: '9V', price: 2, count: 0 },
    { name: 'CR2032/1225/1620', price: 2, count: 0 },
    { name: 'A23/A27', price: 2, count: 0 },
    { name: 'ΣΕΙΡΗΝΑ TEXECOM', price: 15, count: 0 },
    { name: 'ΠΙΝΑΚΑΣ EL LINE', price: 50, count: 0 },
    { name: 'ΠΙΝΑΚΑΣ-ΣΕΙΡΗΝΑ VISONIC', price: 80, count: 0 },
    { name: 'ΠΙΝΑΚΑΣ-ΣΕΙΡΗΝΑ AJAX', price: 60, count: 0 },
    { name: 'VISONIC PM30', price: 35, count: 0 },
    // Add more menu items as needed
  ]);

  const [totalSum, setTotalSum] = useState(0); // Define totalSum as a state variable
  const [vat, setVat] = useState(0);
  const [ergasia, setErgasia] = useState(20);// Κόστος εργασίας σε €
  
  const vatRate = 0.24; // Ποσοστό ΦΠΑ

  // Function to update the individual menu item sum
  const updateMenuItemSum = (index, newCount) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index].count = newCount;
    console.log('Updated menu items:', newMenuItems);
    setMenuItems(newMenuItems);
  };

  const updateErgasia = (erg) => {
    setErgasia(erg);
  }

  // Calculate the total sum
  useEffect(() => {
    const newTotalSum = menuItems.reduce((acc, menuItem) => {
      return acc + menuItem.count * menuItem.price;
    }, 0);

    console.log('New Total Sum:', newTotalSum);
    setTotalSum(newTotalSum);

    const newVat = (newTotalSum * vatRate) + (ergasia * vatRate);
    setVat(newVat);
  }, [menuItems, ergasia]);


  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>ΥΠΟΛΟΓΙΣΜΟΣ ΜΠΑΤΑΡΙΩΝ</Text>

        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            menuItem={menuItems[index]}
            updateCount={(newCount) => updateMenuItemSum(index, newCount)}
          />
        ))}
        <Ergasia updateErgasia={updateErgasia}/>
        {/*<ResultItem type={'Εργασία'} numValue={ergasia} />*/}
        <ResultItem type={'Αξία προ ΦΠΑ'} numValue={totalSum.toFixed(2)} />
        <ResultItem type={'ΦΠΑ'} numValue={vat.toFixed(2)} />
        <ResultItem type={'ΣΥΝΟΛΟ'} numValue={ totalSum > 0 ? (totalSum+vat+ergasia).toFixed(2) : 0} />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
