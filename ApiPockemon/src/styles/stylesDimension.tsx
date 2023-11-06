import { Dimensions } from "react-native";

let {height}            = Dimensions.get('window');
let box_count           = 1 || 2 || 3;
export const box_height = height / box_count;

