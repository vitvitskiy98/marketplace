
import mirCard from "../assets/icons/mir.svg";
import visaCard from "../assets/icons/visa.svg";
import mastercard from "../assets/icons/mastercard.svg";
import maestroCard from "../assets/icons/maestro.svg";

export const paymentMethodOptions = {
  "MIR": {
    number: "1234 56•• •••• 1234",
    validity: "01/30",
    icon: mirCard,
    alt: "Банковская карта Мир",
    cssClass: "credit-card-mir-img selected-img"
  },
  "VISA": {
    number: "1234 56•• •••• 1234",
    validity: "01/30",
    icon: visaCard,
    alt: "Банковская карта Visa",
    cssClass: "credit-card-visa-img selected-img"
  },
  "MasterCard": {
    number: "1234 56•• •••• 1234",
    validity: "01/30",
    icon: mastercard,
    alt: "Банковская карта MasterCard",
    cssClass: "credit-card-mastercard-img selected-img"
  },
  "Maestro": {
    number: "1234 56•• •••• 1234",
    validity: "01/30",
    icon: maestroCard,
    alt: "Банковская карта Maestro",
    cssClass: "credit-card-maestro-img selected-img"
  },
};
