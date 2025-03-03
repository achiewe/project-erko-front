"use client";

import { VolumeControlProps } from "../../../../type/type";
import { useEffect } from "react";

export default function VolumeControl({
  volume,
  changeVolume,
}: VolumeControlProps) {
  // Calculate the initial gradient style based on the initial volume
  const initialGradient = `linear-gradient(to right, #858585 ${
    volume * 100
  }%, #DBDBDB ${volume * 100}%)`;

  // Update the gradient style whenever the volume changes
  useEffect(() => {
    const slider = document.getElementById("volume-slider") as HTMLInputElement;
    if (slider) {
      slider.style.setProperty("--volume-percent", `${volume * 100}%`);
    }
  }, [volume]);

  return (
    <div className="w-full">
      <input
        type="range"
        id="volume-slider"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => changeVolume(parseFloat(e.target.value))}
        className="volume-slider"
        style={{
          WebkitAppearance: "none",
          appearance: "none",
          background: initialGradient,
        }}
      />
    </div>
  );
}
