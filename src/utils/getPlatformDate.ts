import { addDays } from "date-fns";
import { Platform } from "react-native";


//era pra funcionar apenas em ios no curso, porem preciou usar no android também

export function getPlatformDate(date: Date) {
    if(Platform.OS === 'ios') {
        return addDays(date, 1);
    } else {
        return addDays(date, 1);
    }
}