"use client";

import { useState } from "react";
import { Button, Column, Icon, Input, Text, Textarea } from "@once-ui-system/core";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Une erreur est survenue.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setErrorMsg("Impossible de joindre le serveur.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Column
        border="brand-alpha-medium"
        background="brand-alpha-weak"
        radius="l"
        padding="32"
        gap="m"
        horizontal="center"
        align="center"
      >
        <Icon name="checkCircle" size="xl" onBackground="brand-weak" />
        <Text variant="heading-strong-m">Message envoyé !</Text>
        <Text variant="body-default-s" onBackground="neutral-weak" align="center">
          Merci, je te répondrai dès que possible.
        </Text>
        <Button variant="secondary" size="s" onClick={() => setStatus("idle")}>
          Envoyer un autre message
        </Button>
      </Column>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "contents" }}>
      <Column
        border="neutral-alpha-medium"
        background="neutral-alpha-weak"
        radius="l"
        padding="32"
        gap="m"
      >
        <Text variant="heading-strong-m">Envoyer un message</Text>

        <Input
          id="name"
          label="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Textarea
          id="message"
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          lines={5}
          required
        />

        {status === "error" && (
          <Text variant="body-default-s" onBackground="danger-weak">
            {errorMsg}
          </Text>
        )}

        <Button
          type="submit"
          variant="primary"
          size="m"
          prefixIcon="email"
          loading={status === "loading"}
          fillWidth
        >
          {status === "loading" ? "Envoi en cours…" : "Envoyer via Gmail"}
        </Button>
      </Column>
    </form>
  );
}
