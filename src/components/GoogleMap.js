"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

import { cardClasses, sectionClasses } from "@/constants/styles";

const generatorExchangePosition = {
  lat: 40.572002,
  lng: -112.0368217,
};

export default function GoogleMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <section id="coverage" className={`${sectionClasses} py-8`}>
      <div className="mb-4 flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-slate-900">Service Area</h2>
        <p className="text-sm text-slate-700">
          Visit us in West Jordan, UT for remanufactured starters, alternators, and batteries.
        </p>
      </div>

      <div className={`${cardClasses} overflow-hidden p-0`}>
        {apiKey ? (
          <APIProvider apiKey={apiKey}>
            <Map
              defaultCenter={generatorExchangePosition}
              defaultZoom={14}
              style={{ width: "100%", height: "400px" }}
              gestureHandling="greedy"
            >
              <Marker position={generatorExchangePosition} title="Generator Exchange" />
            </Map>
          </APIProvider>
        ) : (
          <div className="flex h-[400px] items-center justify-center bg-slate-100 p-6 text-center text-sm text-slate-600">
            Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your env file to render the live Google Map.
          </div>
        )}
      </div>

    </section>
  );
}
