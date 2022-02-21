import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

export const StatsData = [
  {
    icon: (
      <GiEarthAmerica
        style={{
          color: "#047bf1",
        }}
      />
    ),
    title: "Over 100 destinations",
    desc: "Travel all over the world and unique spots",
  },
  {
    icon: (
      <MdAirplanemodeActive
        style={{
          color: "#047bf1",
        }}
      />
    ),
    title: "1 million trips made",
    desc: "Over 1 million trips completed in the last yea",
  },
  {
    icon: (
      <MdTimer
        style={{
          color: "#f3a82e",
        }}
      />
    ),
    title: "Fastest support service",
    desc: "Access our support team 24/7",
  },
  {
    icon: (
      <FaMoneyCheck
        style={{
          color: "#f34f2e",
        }}
      />
    ),
    title: "Best deals",
    desc: "We offer the best prices",
  },
]
