import {
  Source_Sans_3,
  Spectral,
  The_Girl_Next_Door,
  Vidaloka,
} from "next/font/google";

export const spectral = Spectral({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

export const theGirlNextDoor = The_Girl_Next_Door({
  weight: ["400"],
  subsets: ["latin"],
});

export const vidaLoka = Vidaloka({
  weight: ["400"],
  subsets: ["latin"],
});
