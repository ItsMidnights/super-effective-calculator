import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Excess } from "./sub/excessBubble";
import { LeftGroup } from "./sub/leftGroup";
import { TypeGroup } from "./sub/typeGroup";
import { termStyles } from "./terms.style";

export interface TermUIProps {
  excess?: number;
  leftIcon?: JSX.Element;
  onPress?: () => void;
  term: string;
  types?: string[];
}

export const TermUI: React.FC<TermUIProps> = ({
  excess,
  leftIcon,
  onPress,
  term,
  types,
}): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={termStyles.container}>
        <LeftGroup leftIcon={leftIcon} term={term} />
        <TypeGroup types={types} />
        {excess != undefined && excess > 0 ? <Excess excess={excess} /> : null}
      </View>
    </TouchableOpacity>
  );
};
