import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";

const baseUrl = "https://disease.sh/v3/covid-19/countries";
declare module "react-leaflet" {
  interface MapContainerProps {
    center: any;
    zoom: number;
  }
}
declare module "react-leaflet" {
  interface TileLayerProps {
    attribution: string;
  }
}
const CountryGraph: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch(baseUrl).then((res) => res.json()),
  });

  console.log(data);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[90vh]">
        <img
          className="h-16 w-16"
          src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
          alt="gif"
        />
      </div>
    );
  }

  return (
    <>
      <h2 className="text-center my-3 capitalize font-semibold text-[1.2rem] text-orange-500">
        Covid-19 worldwide Data
      </h2>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((country: any) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Total Active Cases: {country.active}</p>
                <p>Total Recovered Cases: {country.recovered}</p>
                <p>Total Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default CountryGraph;
