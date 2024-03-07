"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

const SweetAlertComponentError = () => {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");

  useEffect(() => {
    if (errorMessage) {
      Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }, [errorMessage]);

  return null;
};

export default SweetAlertComponentError;
