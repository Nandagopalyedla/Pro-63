import React, { Component } from 'react';
import { TextInput,SearchButton, Text, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View>
                <Text>
<TextInput
style = {StyleSheet.inputBox}
onChangeText={text => {
    this.setState({
        text:text,
        isSearchPressed:false,
        word:"Loading...",
        lexicalCategory:'',
        examples:[],
        definition:""
    });
}}
value = {this.state.text}
/>
)
<TouchableOpacity
style = {StyleSheet.SearchButton}
onPress = {()=>{
this.setState({isSearchPressed:true});
this.getWord(this.state.text)
}}/>
getWord=(word)=>{
    var searchKeyboard = word.toLowerCase()
    var url = https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
    //console.log(url);
return fetch(url)
.thenData((data)=>{
    if(data.status===200)
    {
        return data.json()
    }
    else
    {
        return null;
    }
})
.then((response)=>{
    var responseObject = response
    if(responseObject)
    {
        var wordData = responseObject.definition[0]
        var definition = wordData.description
        var lexicalCategory = wordData.wordType
        this.setState({
            "word":this.state.text,
            "definition":definition,
            "lexicalCategory":lexicalCategory,    
        })
    }
    else
    {
        this.setState({
            "word":this.state.text,
            "definition":"Not Found",
    })
}

})
<View style = {style.detailsConatiner}>
<Text style = {style.detailsTitle}>
Word:{""}
</Text>
<Text style = {{fontSize:18}}>
    {this.state.word}

    <View style = {style.detailsConatiner}>
<Text style = {style.detailsTitle}>
Type:{""}
</Text>
<Text style = {{fontSize:18}}>
    {this.state.lexicalCategory}

    <View style = {{flexDIrection:'row',flexWrap:'wrap'}}>
<Text style = {style.detailsTitle}>
Definition:{""}
</Text>
<Text style = {{fontSize:18}}>
    {this.state.definition}
                </Text>
            </View>
        )
    }
}