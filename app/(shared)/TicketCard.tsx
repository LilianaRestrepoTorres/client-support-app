"use client";
import React, {useState} from "react";

interface Props {
  bot_id: string;
  description_prompt: string;
  problem_location: string;
  problem_type: string;
  status: string;
  summary: string;
  ticket_id: string;
}

const TicketCard: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col max-w-sm p-6 m-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between pb-2 mb-2 border-b-2">
        <div className="text-lg font-semibold text-gray-900">
          Ticket ID: {props.ticket_id}
        </div>
        <div className="text-xs text-gray-500 ">Bot ID: {props.bot_id}</div>
      </div>
      <div className="mb-2">
        <div className="text-sm font-medium text-gray-700">
          Status: {props.status}
        </div>
        <div className="text-sm text-gray-500">
          Problem Location: {props.problem_location}
        </div>
      </div>
      <div className="mb-2">
        <div className="text-sm font-medium text-gray-700">
          Problem Type: {props.problem_type}
        </div>
        <div className="text-xs text-gray-500">Summary: {props.summary}</div>
      </div>
    </div>
  );
};

export default TicketCard;
