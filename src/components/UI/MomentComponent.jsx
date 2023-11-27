"use client";

import React from "react";
import Moment from "react-moment";

export default function MomentComponent({ format, className, children }) {
  return (
    <>
      <Moment format="MMM DD YYYY" className={className}>
        {children}
      </Moment>
    </>
  );
}
