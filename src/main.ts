import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <h1>An example <code>model</code> Element</h1>
    <model interactive width="670" height="1191">
      <source src="FlightHelmet.usdz" type="model/vnd.usdz+zip" />
      <source src="FlightHelmet.glb" type="model/gltf-binary" />
      <picture>
        <img src="FlightHelmet.png" width="670" height="1191" />
      </picture>
    </model>

    <model interactive width="670" height="1191">
      <source src="haha.usdz" type="model/vnd.usdz+zip" />
      <source src="haha.glb" type="model/gltf-binary" />
      <picture>
        <img src="haha.png" width="670" height="1191" />
      </picture>
    </model>
  </div>
`;
