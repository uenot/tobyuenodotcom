import createClient from "openapi-fetch/dist/index.cjs";
import type { paths, components } from "../api/schema";
import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

const client = createClient<paths>({ baseUrl: "" });

type Event = components["schemas"]["Event"];

const logEvent = async (body: Event) =>
  client.POST("/api/buskin/event", { body });

const logVisit = async (src: string) => logEvent({ tag: "Visit", src });
export const logInternalLink = async (src: string, dest: string) =>
  logEvent({ tag: "InternalLink", src, dest });
export const logExternalLink = async (src: string, dest: string) =>
  logEvent({ tag: "ExternalLink", src, dest });

export const useLogVisit = () => {
  const loc = useLocation();
  const ran = useRef(false);
  useEffect(() => {
    if (!ran.current) {
      logVisit(loc.pathname);
      ran.current = true;
    }
  }, []);
};
