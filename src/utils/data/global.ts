import { FaDiscord, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SocialPlatformType } from "../types/types";

export const API_KEY = "041a371c18934671bc7c7df826093657";

export const orderList = ["Relevance", "Release Date", "Popularity", "Rating"];

export const currentDate = new Date();

export const socials: SocialPlatformType[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: FaFacebookF,
    color: "#316FF6",
  },
  {
    name: "Twitter/X",
    url: "https://twitter.com/",
    icon: FaXTwitter,
    color: "#2C2C2C",
  },
  {
    name: "Discord",
    url: "https://discord.com/app",
    icon: FaDiscord,
    color: "#7289DA",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: FaInstagram,
    color: "#E4405F",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/",
    icon: FaYoutube,
    color: "#FF0000",
  },
];
