import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

export const StatsData = [
  {
    icon: (
      <GiEarthAmerica
        style={{
          color: "#4445a3",
        }}
      />
    ),
    title: "Over 100 Destinations",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: (
      <MdAirplanemodeActive
        style={{
          color: "#4dbac6",
        }}
      />
    ),
    title: "1 Million Trips",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: (
      <MdTimer
        style={{
          color: "#f3a82e",
        }}
      />
    ),
    title: "Fastest Support ",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: (
      <FaMoneyCheck
        style={{
          color: "#f34f2e",
        }}
      />
    ),
    title: "Best Deals Online",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
]
