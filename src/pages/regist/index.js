import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import TextInput from './textinput';
import Button from './button'
import Gap from './gap';

const App = () => {

  const [welcome, setWelcome] = useState('Selamat Datang')
  const [UserName, setUserName] = useState('')
  const [Pasword, setPasword] = useState('')

  useEffect(() => {
  console.log('component did mount')
  }, []);

  useEffect(() => {
    console.log('componen did update')

  }, [welcome])


  const handleSubmit =()=>{
    setWelcome('Hai Semua');

    const data ={
      UserName: UserName,
      password: Pasword,
    }
    console.log(data)
  }

  console.log('render componen')
  return (
      <ScrollView>

            <View style={styles.container}>
            <Text style={styles.title}>{welcome}</Text>
            <Gap height={40} />
            <TextInput label="Nama" placeholder="Nama Lengkap Anda" value ={UserName} onChangeText ={(e)=>setUserName(e)}/>
            <Gap height={24} />
            <TextInput label="Username" placeholder="Username disambung" value ={Pasword} onChangeText ={(e)=>setPasword(e)} secureTextEntry ={true}/>
            <Gap height={48} />
            <TextInput label="Email" placeholder="E-mail Anda" value ={Pasword} onChangeText ={(e)=>setPasword(e)} secureTextEntry ={true}/>
            <Gap height={48} />
            <TextInput label="Address" placeholder="Alamat Anda" value ={Pasword} onChangeText ={(e)=>setPasword(e)} secureTextEntry ={true}/>
            <Gap height={48} />
            <TextInput label="Phone Number" placeholder="Nomor Telegon" value ={Pasword} onChangeText ={(e)=>setPasword(e)} secureTextEntry ={true}/>
            <Gap height={48} />
            <Button  label="Register" onsubmit ={()=> handleSubmit()} />
            </View>
      </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
  button:{
    marginTop: 10,
    backgroundColor: '#C238CE',
    borderRadius: 7,
  },
  TextButton:{
    paddingVertical: 15,
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  }

});

export default App;