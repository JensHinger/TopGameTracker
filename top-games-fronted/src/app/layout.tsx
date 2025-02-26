"use client"

import type { Metadata } from "next";
import Header from "./components/Header/header";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const storedTheme = localStorage.getItem("theme");
  const initialMode = storedTheme || "dark";

  const [mode, setMode] = useState<"light" | "dark">(
    initialMode as "light" | "dark",
  );

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const metadata: Metadata = {
    title: "Steam Ranking",
    description: "Steam ranking data",
  };

  const chosenTheme = mode === "dark" ? darkTheme : lightTheme;

  const changeColor = () => {
    setMode(mode === "dark"? "light" : "dark");
  };

  return (
    
    <html lang="en">
      <head>
        <title>{metadata.title as React.ReactNode}</title>
        <meta charSet="UTF-8"/>
        <meta
          name="description"
          content={metadata.description as string | undefined}
        />
        <meta 
          name="viewport" 
          content="initial-scale=1, width=device-width"
        />
      </head>
      <ThemeProvider theme={createTheme(chosenTheme)}>
        <CssBaseline/>
        <body
          style={{
            backgroundColor: chosenTheme?.palette?.background?.default,
            margin: "auto"
          }}
        >
          <Header changeColor={changeColor} />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
