import React from "react";
import dynamic from "next/dynamic";

const Forms = dynamic(() => import("forms/formBuilder"), {
  loading: <p>Loading...</p>
});


function FormBuilder() {
  return <Forms/>
}

export default FormBuilder;
