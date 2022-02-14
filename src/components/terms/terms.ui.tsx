import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../style/colors";
import { TypesUI } from "../pokemon-types/types.ui";
import { termStyles } from "./terms.style";



export interface TermUIProps {
  leftIcon?: JSX.Element;
  onPress?: () => void;
  name: string;
  types?: string[];
};

export const TermUI: React.FC<TermUIProps> = ({
  leftIcon,
  onPress,
  name,
  types,
}): JSX.Element => {

  let moreTypes = 0;

  return (
    <TouchableOpacity onPress={onPress}>
    <View
      style={termStyles.container} 
    >
        <View
          style={termStyles.nameContainer} 
        >
          {
            leftIcon != undefined
            ? leftIcon
            : null
          }  
          <Text style={termStyles.name}>{name}</Text>
        </View>
        <View
          style={termStyles.typeContainer} 
        >
          {
            types?.map((type, idx) => {

              if (idx > 1) {
                moreTypes += 1;
                return;
              }

              return (
                <TypesUI
                  key={idx}
                  name={type}
                />
              );
            })
          }  
        </View>
          {
            moreTypes > 0
            ? <View
              style={[
                termStyles.bubble,
              ]}
            ><Text style={[ 
              colors.white,
              termStyles.bubbleText
            ]}>
              { moreTypes + "+" }
              </Text>
            </View>
            : null
          }
    </View>
    </TouchableOpacity>
  );
};