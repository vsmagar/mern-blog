import React from "react";
import { useSelector } from "react-redux";

export default function Protected({ element }) {
  const { login } = useSelector((state) => state.auth);

  return login && login.name ? element : "Unauthorized Access";
}
