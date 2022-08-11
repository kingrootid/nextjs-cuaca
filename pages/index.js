import React, { useState, useEffect } from "react";

import axios from "axios";
import Swal from "sweetalert2";
import Sidebar from "../components/Sidebar";
export default function Home() {
  const [location, setLocation] = useState("Jakarta");
  const [weather, setWeather] = useState(null);
  const [tempLocation, setTempLocation] = useState(null);
  const fetchWeather = async () => {
    const response = await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL_V2}/weather?q=${location}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        setWeather(res.data);
      })
      .catch((err) => {
        Swal.fire({
          title: "Failed",
          icon: "error",
          text: "Kota yang anda cari tidak ditemukan",
        });
      });
  };
  useEffect(() => {
    fetchWeather();
  }, [location]);
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col py-3 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari Lokasi"
                    aria-label="Cari Lokasi"
                    aria-describedby="button-addon2"
                    defaultValue={location}
                    onChange={(e) => setTempLocation(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    id="button-addon2"
                    onClick={() => {
                      setLocation(tempLocation);
                    }}
                  >
                    Cari
                  </button>
                </div>

                <div className="card">
                  <div className="card-header">Cuaca Kota {location}</div>
                  <div className="card-body">
                    <h5 className="card-title">Longitude / Latitude</h5>
                    <p className="card-text">
                      {weather
                        ? weather.coord.lon + " / " + weather.coord.lat
                        : ""}
                    </p>
                    <h5 className="card-title">Cuaca</h5>
                    <p className="card-text">
                      {weather
                        ? weather.weather[0].main +
                          " (" +
                          weather.weather[0].description +
                          ")"
                        : ""}
                    </p>
                    <h5 className="card-title">Kecepatan Angin</h5>
                    <p className="card-text">
                      Arah Angin: {weather ? weather.wind.deg + "°" : ""}
                      {weather
                        ? " (" + weather.wind.speed + " Meter per detik)"
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
