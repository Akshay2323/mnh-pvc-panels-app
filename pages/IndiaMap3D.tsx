"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";
import { geoCentroid } from "d3-geo";
import { MapPin } from "lucide-react";

const INDIA_MAP_URL = "/data/in.json"; // Ensure this file exists in /public/data/

export default function IndiaMap3D() {
  const [hovered, setHovered] = useState<{
    name: string;
    coordinates: [number, number];
  } | null>(null);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
          <div className="title align-center">
            <h2>We Deliver All India</h2>
            <p>Our Branches</p>
          </div>

        <div style={{ width: "100%", height: "600px" }}>
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 950,
              center: [80, 22],
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={INDIA_MAP_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const name = geo.properties.name;
                  const centroid = geoCentroid(geo);
                  const isHovered = hovered?.name === name;

                  return (
                    <motion.g
                      key={geo.rsmKey}
                      animate={{
                        scale: isHovered ? 1.06 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                    >
                      <Geography
                        geography={geo}
                        onMouseEnter={() =>
                          setHovered({
                            name,
                            coordinates: centroid as [number, number],
                          })
                        }
                        onMouseLeave={() => setHovered(null)}
                        style={{
                          default: {
                            fill: isHovered ? "#f06522" : "#231f20",
                            stroke: "#fff",
                            strokeWidth: 0.4,
                            outline: "none",
                            transition: "fill 0.15s ease-out",
                          },
                          hover: {
                            fill: "#f06522",
                            outline: "none",
                          },
                          pressed: {
                            fill: "#2563eb",
                            outline: "none",
                          },
                        }}
                      />
                    </motion.g>
                  );
                })
              }
            </Geographies>

            {/* Hovered State Pin + Label */}
            {hovered && (
              <Marker coordinates={hovered.coordinates}>
                <motion.g
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: -6 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <MapPin color="#ffffff" size={22} fill="#f06522" />
                  <text
                    textAnchor="middle"
                    y={-16}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      fill: "#ffffff",
                      fontWeight: 600,
                      textShadow: "0 0 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    {hovered.name}
                  </text>
                </motion.g>
              </Marker>
            )}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
