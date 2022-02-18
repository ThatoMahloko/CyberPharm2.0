import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Modal, TouchableWithoutFeedback, FlatList, ScrollView, TextInput, TouchableOpacity, Picker } from 'react-native';
import { Title, RadioButton, List, Provider, Portal } from 'react-native-paper';
import SymptomList from '../Api/SymptomList';
import Treatment_Diagnosis from '../Api/Treatment_Diagnosis';
import CloseButton from '../components/CloseButton';

const deviceHeight = Dimensions.get('window').height;

export class AssetExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      symptomId: '',
      title: "",
      birthYear: "",
      checked: 'first'
    };
  }
  symptomId = () => {
    this.setState()
  }
  show = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };

  selected = () => {
    this.setState({ show: true });
  }

  test = () => {

    return (
      this.props.d()
    )


  }

  renderOutsideTouchable(onTouch) {
    const view = <View style={{ flex: 1, width: '100%' }} />;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: '100%' }}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  renderTitle = () => {
    const { title } = this.props;

    return (
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            color: '#182e44',
            fontSize: 25,
            fontWeight: '500',
            marginTop: 15,
            marginBottom: 30,
            textAlign: 'center'
          }}>
          {title}

          {this.test()}

        </Text>
      </View>
    );
  };

  renderContent = () => {
    const { data } = this.props;
    return (
      <View>
        <FlatList
          style={{ marginBottom: 20 }}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderItem}
          extraData={data}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeperator}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
        />
      </View>
    );
  };

  renderItem = ({ item }) => {
    return (
      <View
        style={{
          height: 50,
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginLeft: '20',
        }}>
        <Text style={{ fontSize: 18, fontWeight: 'normal', color: '#182e44' }}>
          {item.name}
        </Text>
      </View>
    );
  };

  renderSeperator = () => {
    <View
      style={{
        opacity: 0.1,
        height: 1,
      }}
    />;
  };



  render() {
    let { show } = this.state;
    let popupRef = React.createRef();
    const { onTouchOutside, title } = this.props;
    const onShowPopup = () => {
      popupRef.show();
    };
    const onClosePopup = () => {
      popupRef.close();
    };
    const Pressable = (symptomId, title) => { };
    const { checked } = this.state;
    
    return (
      <View>
        <Image source={require('../assets/icons/diagnose.png')} style={styles.img} />
        <Text style={styles.text1}>What symptoms do experience?</Text>
        <TextInput placeholder={'BIRTH YEAR'} style={styles.input} />

        <View style={styles.view}>
          <Text style={styles.text}>Symptoms</Text>
          <Picker style={styles.picker} onValueChange={(itemValue, itemIndex) => this.setState({
            title: itemValue
          })}>
            {SymptomList.map((data) => (
              <Picker.Item label={data.title} value={data.title} onValueChange={() => this.setState({
                symptomId: data.tagId
              })} />
            ))}
          </Picker>
        </View>
        <Title style={styles.title}>Gender</Title>
        <RadioButton.Group >
          <View style={styles.groupCenter}>
            <Title style={styles.titleGender}>male</Title>
            <RadioButton value="male" 
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checked: 'first' }); }}
            />
            <Title style={styles.titleGenderFemale}>female</Title>
            <RadioButton value="female" 
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checked: 'second' }); }}
            />
          </View>
        </RadioButton.Group>

        <Modal
          animationType={'fade'}
          transparent={true}
          visible={show}
          onRequestClose={this.close}>

          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          {this.renderOutsideTouchable(onTouchOutside)}
            <View style={{ 
              backgroundColor: 'white', 
              width: '100%',
              borderTopRightRadius: 20, 
              borderTopLeftRadius: 10, 
              paddingHorizontal: 10,
              maxHeight: deviceHeight * 0.5,
              justifyContent:'center',
              }}>

                <CloseButton />
                 
              {this.renderTitle()}
              {this.renderContent()}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    paddingLeft: 14,
    alignSelf: 'center',
    marginTop: 20,
  },
  groupCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  titleGender: {
    color: '#3E64FF',
  },
  titleGenderFemale: {
    color: '#3E64FF',
    marginLeft: '25%',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  picker: {
    width: 300,
    height: 32,
    borderRadius: 20,
    marginLeft: 5,
    marginTop: 10,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: 400,
    height: 290
  },
  text1:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:40,
    marginTop:10
  }
});


export default AssetExample;
