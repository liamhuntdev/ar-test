import React from "react";
import "@google/model-viewer";

const IndexPage = ()=>{
  return(
    <main>
      <h1>AR Test</h1>
      <model-viewer
        alt="A 3D mattress model"
        src="models/mattress.glb">
      </model-viewer>
    </main>
  );
}

export default IndexPage;