import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import styles from "./styles.module.scss";
import { coordinations } from "../../config";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDm26O2KXTLvztMpE7TgjpKGbejU2bYCEs",
  });

  if (!isLoaded) return <div>Loading...</div>;
  console.log("puto");

  return (
    <div className={styles.storeLocationPage}>
      <div className={styles.visitDiv}>
        <p>
          Explore our website and discover a world of possibilities. Visit us
          today and embark on an extraordinary journey.
        </p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${coordinations.lat},${coordinations.lng}`}
          target="_blank"
        >
          Visit our Store!
        </a>
      </div>
      <Map />
    </div>
  );
}

function Map() {
  const center = useMemo(
    () => ({ lat: coordinations.lat, lng: coordinations.lng }),
    []
  );

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName={styles.map}>
      <MarkerF position={center} />
      {/* <Marker position={center} /> */}
    </GoogleMap>
  );
}
