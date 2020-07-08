import React from 'react';
import { View, Text, } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
class App extends React.Component {
 
  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: 'center' }}>
        <Text style={{ fontSize: 30, color: "blue", paddingTop: 200, fontWeight: 'bold' }}>
          Facebook Login
     </Text>

        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log("data",data);
                    console.log("token of facebook login", data.accessToken.toString())

                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}
          
          />
      </View>
    );
  };
}
export default App;
