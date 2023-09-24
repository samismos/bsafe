import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'flex-end',
      justifyContent: 'flex-end',
      padding: 35,
      
    },

    logo: {
      alignSelf: 'center'
    },

    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 5,
      alignSelf: 'center'
    },  
    
    itemContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginVertical: -7,
    },

    nameContainer: {
      width:110,
      textAlign: 'right'
    },

    button: {
      backgroundColor: 'lightblue',
      width: 30,
      textAlign: 'center',
      padding: 10,
      margin: 3,
      
    },

    textInput: {
      borderWidth: 1,
      padding: 5,
      margin: 10,
      width:50,
      textAlign: 'center'
    },

    sum: {
      borderWidth: 1,
      width:75,
      paddingVertical:10,
      paddingHorizontal: 5,
      margin:10
    },

    resultContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end'
      
    },
    resultInput: {
      borderWidth: 1,
      padding: 5,
      margin: 10,
      width:75,
    },

    textContainer: {
      borderWidth: 1,
      paddingVertical: 10,
      paddingHorizontal: 5,
      margin:10,
      width:75
    }

    
  });

  export { styles };