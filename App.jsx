import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaTwitch, FaInstagram, FaDiscord, FaTiktok } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white p-4">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Willkommen bei ToDo_Gaming_TV</h1>
        <p className="text-lg">Deine Quelle für Gaming, Entertainment und Community Vibes.</p>
        <p className="mt-4 text-xl text-green-400">
          💥 Nutze Code <strong>ToDo97</strong> für 10% Rabatt bei Triebwerk Energy!
        </p>
        <a href="https://triebwerk-energy.com/?sca_ref=5089831.Zc6Lg5ioZz" target="_blank" rel="noopener noreferrer">
          <button className="mt-6 px-4 py-2 bg-green-600 rounded text-lg hover:bg-green-700 transition">
            Jetzt Triebwerk checken
          </button>
        </a>
      </section>

      <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-10">
        <Card>
          <CardContent className="flex flex-col items-center p-4">
            <FaTwitch size={40} />
            <p className="mt-2">Twitch</p>
            <a href="https://twitch.tv/ToDo_Gaming_TV" target="_blank">Follow</a>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-4">
            <FaInstagram size={40} />
            <p className="mt-2">Instagram</p>
            <a href="https://instagram.com/deinname" target="_blank">Follow</a>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-4">
            <FaTiktok size={40} />
            <p className="mt-2">TikTok</p>
            <a href="https://tiktok.com/@deinname" target="_blank">Follow</a>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-4">
            <FaDiscord size={40} />
            <p className="mt-2">Discord</p>
            <a href="https://discord.gg/deinserver" target="_blank">Join</a>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
