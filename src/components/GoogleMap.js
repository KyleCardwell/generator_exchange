"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

import { brandColors } from "@/constants/colors";
import { cardClasses, sectionClasses } from "@/constants/styles";

const generatorExchangePosition = {
  lat: 40.572002,
  lng: -112.0368217,
};

export default function GoogleMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <section id="find-us" className={`${sectionClasses} py-8`}>
      <div className="mb-4 flex flex-col gap-2">
        {/* <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: brandColors.accent }}>
          04 / Find us
        </p> */}
        <h2 className="text-2xl font-semibold text-slate-900">Right off Mountain View Corridor — easy in, easy out.</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.6fr_1fr]">
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

        <aside className={cardClasses}>
          <h3 className="text-lg font-semibold text-slate-900">Generator Exchange</h3>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            6113 West 9860 South
            <br />
            West Jordan, UT 84081
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-700">
            Mon–Fri: 7:30 AM – 5:00 PM
            <br />
            Sat/Sun: Closed
          </p>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=6113+W+9860+S,+West+Jordan,+UT+84081"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex text-sm font-semibold underline-offset-4 hover:underline"
            style={{ color: brandColors.accent }}
          >
            Get Directions
          </a>
        </aside>
      </div>

      <div className="mt-4 text-sm text-slate-700">
        <p>
          Need help first? Call{" "}
          <a href="tel:8012600642" className="font-semibold underline-offset-4 hover:underline" style={{ color: brandColors.ink }}>
            801-260-0642
          </a>
          .
        </p>
      </div>
    </section>
  );
}
