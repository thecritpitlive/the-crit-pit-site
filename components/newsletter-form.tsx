"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/site.config";

export default function NewsletterForm() {
  const [email,setEmail] = useState("");
  const [status,setStatus] = useState<"idle"|"ok"|"err">("idle");
  const action = siteConfig.newsletter.url;

  return (
    <form action={action} method="post" target="_blank" className="mx-auto max-w-md flex gap-2">
      <Input name="email" type="email" required placeholder="you@realm.com" value={email} onChange={e=>setEmail(e.target.value)} aria-label="Email address" />
      <Button type="submit" onClick={()=>setStatus("ok")}>Summon</Button>
      {status === "ok" && <span className="sr-only">Submitted</span>}
    </form>
  );
}
