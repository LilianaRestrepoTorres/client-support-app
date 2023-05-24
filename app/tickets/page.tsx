"use client";
import React, { useEffect, useState } from "react";
import api from "../api/api";
import TicketCard from "../(shared)/TicketCard";
import Navbar from "../(shared)/Navbar";
import { FormattedTicket } from "../types";

const Tickets: React.FC = () => {
  const [tickets, setTickets] = useState<FormattedTicket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await api.get("/tickets");
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets", error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <main className="flex flex-col items-start justify-start min-h-screen p-8 bg-gray-100">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <Navbar />
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tickets.map((ticket: any) => (
          <TicketCard key={ticket.ticket_id} {...ticket} />
        ))}
      </div>
    </main>
  );
};

export default Tickets;
