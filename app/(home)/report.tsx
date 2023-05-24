"use client";
import React, { useState } from "react";
import api from "../api/api";
import { FormattedTicket } from "../types";

interface BotData {
  bot_id: string;
  timestamp: string;
  location: {
    lat: string;
    lon: string;
  };
  status: string;
  battery_level: string;
  software_version: string;
  hardware_version: string;
}

interface Report {
  description: string;
  bot_data: BotData;
}

const Report: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [ticketData, setTicketData] = useState<FormattedTicket | null>(null);
  const [description, setDescription] = useState("");

  const reportProblem = async () => {
    setLoading(true);

    // Bot data
    const bot_data: BotData = {
      bot_id: "1238",
      timestamp: new Date().toISOString(),
      location: {
        lat: "24.4539",
        lon: "54.3773",
      },
      status: "available",
      battery_level: "80.2",
      software_version: "v2.0.1",
      hardware_version: "v3.0.1",
    };

    // POST request to /report
    const response = await api.post("/report", {
      description,
      bot_data,
    });

    setTicketData(response.data);
    setLoading(false);
    setDescription("");
  };

  return (
    <div className="z-10 w-full max-w-xl mx-auto space-y-4 font-mono text-sm">
      <div className="flex flex-col items-center space-y-3 lg:flex-row lg:space-y-0 lg:space-x-3">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
          placeholder="Describe the problem..."
        />
        <button
          onClick={reportProblem}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md lg:w-auto"
          disabled={!description}
        >
          Report
        </button>
      </div>
      {loading && (
        <div className="flex justify-center">
          <p>Loading...</p>
        </div>
      )}
      {ticketData && (
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-lg text-blue-600">
            Ticket successfully created!
          </h2>
          <p className="text-gray-500">Ticket ID: {ticketData.ticket_id}</p>
        </div>
      )}
    </div>
  );
};

export default Report;
