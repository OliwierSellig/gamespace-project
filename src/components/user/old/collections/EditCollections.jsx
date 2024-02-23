"use client";

import { useOutletContext } from "react-router-dom";
import UpdateCollection from "../../global/UpdateCollection";

function EditCollections() {
  const collection = useOutletContext();

  return <UpdateCollection collection={collection} />;
}

export default EditCollections;
