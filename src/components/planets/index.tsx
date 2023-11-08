import { Component } from "react";

type PlanetProps = {};

type PlanetState = {
  showObjectBox: boolean;
  selectedObject: { id: number; name: string } | null;
};

class Planet extends Component<PlanetProps, PlanetState> {


  render() {
    const data: { id: number; name: string }[] = [
      { id: 1, name: "Virani" },
      { id: 2, name: "virani2" },
      { id: 3, name: "virani3" },
      { id: 4, name: "virani3" },
      { id: 5, name: "virani3" },
      { id: 6, name: "virani3" },
    ];

    return (<>
      <div className="planet_box w-full h-screen flex justify-center items-center mx-auto">

        <div className="planet_box_container">
          <div className="sun bg-gradient-to-r from-red-600 to-red-800 shadow-lg w-16 h-16 rounded-full absolute left-0 right-0 top-0 bottom-0 m-auto"></div>

          {data.map((d, index) => (
            <div
              key={d.id}
              className="orbit absolute left-0 right-0 border border-solid border-black shadow-red rounded-full top-0 bottom-0 m-auto"
              style={{
                width: 100 + index * 50 + "px",
                height: 100 + index * 50 + "px",
                animation: `gravity ${5 + index * 3}s linear infinite`,
              }}
            >
              <div
                className="circle cursor-pointer bg-gradient-to-r from-umber-600 to-umber-800 shadow-inner w-5 h-5 rounded-full absolute left-1/2 transform -translate-x-1/2 top-0"

              ></div>
            </div>
          ))}
        </div>

      </div></>

    );
  }
}

export default Planet;
