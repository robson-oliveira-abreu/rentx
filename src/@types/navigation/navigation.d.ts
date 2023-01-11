import { MarkedDateProps } from "../../components/Calendar";
import { CarDTO } from "../../dtos/CarDTO";
import { ConfirmatinParamns } from "../../screens/Confirmation";
import { SignUpParamns } from "../../screens/SignUp/SignUpSecondStep";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            CarDetails: { car: CarDTO };
            Scheduling: { car: CarDTO };
            SchedulingDetails: {
                car: CarDTO,
                dates: string[],
            };
            SchedulingComplete: undefined;
            MyCars: undefined;
            SignIn: undefined;
            SignUpFirstStep: undefined;
            SignUpSecondStep: SignUpParamns;
            Confirmation: ConfirmatinParamns;
        }
    }
}