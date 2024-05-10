"use client";

import { StyledButton } from "@/components/ui";
import { useRouter } from "next/navigation";

export const NavbarMainButtons = () => {
  const router = useRouter();
  return (
    <>
      <StyledButton
        type="button"
        option="secondary"
        onClick={() => router.push("/login")}
      >
        Iniciar
      </StyledButton>
      <StyledButton
        type="button"
        option="primary"
        onClick={() => router.push("/register")}
      >
        Registarse
      </StyledButton>
    </>
  );
};
