import React from "react";
import { View } from "react-native";
import { Types } from "../../pokemon-types";
import { termStyles } from "../terms.style";

interface TypeGroupProps {
  types?: string[];
};

export const TypeGroup: React.FC<TypeGroupProps> = ({ 
  types,
}) => {
  return (
    <View
      style={termStyles.typeContainer}    
    >
      {
        types?.map((type, idx) => {
          if (idx > 1) {
            return;
          }
          return (
            <Types
              key={idx}
              type={type}
            />
          );
        })
      }  
    </View>
  );
};