export type FormattedTicket = {
  ticket_id: string;
  problem_location: string;
  problem_type: 'software' | 'hardware' | 'field' | 'unknown';
  summary: string;
  bot_id: string;
  status: 'open' | 'in progress' | 'closed';
};
