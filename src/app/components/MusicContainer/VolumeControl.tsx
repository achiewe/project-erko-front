"use client";

import { VolumeControlProps } from "../../../../type/type";
import { useEffect, useRef } from "react";

export default function VolumeControl({
  volume,
  changeVolume,
}: VolumeControlProps) {
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.setProperty("--volume-percent", `${volume * 100}%`);
    }
  }, [volume]);

  // Handler for change events (mouse and keyboard)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeVolume(parseFloat(e.target.value));
  };

  // Handler for touch events (mobile devices)
  const handleTouch = (e: React.TouchEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    changeVolume(parseFloat(target.value));
  };

  return (
    <div className="w-full">
      <input
        type="range"
        ref={sliderRef}
        id="volume-slider"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleChange} // For mouse and keyboard input
        onTouchStart={handleTouch} // For touch input
        onTouchMove={handleTouch} // For touch input
        className="volume-slider"
        style={{
          WebkitAppearance: "none",
          appearance: "none",
          background: `linear-gradient(to right, #858585 ${
            volume * 100
          }%, #DBDBDB ${volume * 100}%)`,
        }}
      />
    </div>
  );
}
