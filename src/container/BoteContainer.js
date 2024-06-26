import { useParams } from "react-router-dom";
import { BoatDetails } from "../pages/Boatdetails.js";
import { BoteDatabase } from "../data/BoteDatabase.ts";
import React, { useEffect } from "react";

export function BoteContainer() {
  const params = useParams();

  if (!params.id) return <p>No viene el id del bote </p>;

  const bote = BoteDatabase.find(params.id);
  console.log({ bote });

  return (
    <div>
      <BoatDetails bote={bote} />
    </div>
  );
}
