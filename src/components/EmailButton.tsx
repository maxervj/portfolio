"use client";

import { Button } from "@once-ui-system/core";

interface EmailButtonProps {
  user: string;
  domain: string;
}

export function EmailButton({ user, domain }: EmailButtonProps) {
  const email = `${user}@${domain}`;
  return (
    <Button
      href={`mailto:${email}`}
      variant="primary"
      size="m"
      prefixIcon="email"
      fillWidth
    >
      Envoyer un email
    </Button>
  );
}
