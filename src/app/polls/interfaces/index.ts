export interface Category {
  id: string,
  title: string;
  description: string;
  agreement?: string;
  polls?: Poll[]
}

export interface Poll {
  id: number,
  title: string;
  description: string;
  category: number;
}

export interface Question {
  id: number,
  question_text: string,
  description: string,
  opposite_description: string,
  poll_id: number,
  created_date: string
}

export interface Report {
  id: string
  serviceman: string,
  poll: string,
  category?: string,
  health_level: number| null,
  created_date: string,
  update_date: string,
  expired_date: string
}

export interface Choice {
  id: number,
  choice_text: string,
  order: number,
  poll_id: number,
  value: number
}

export interface Answer {
  id: string,
  serviceman: string,
  report: string,
  choice: string,
  question: string
}

export interface Serviceman {
  first_name: string,
  last_name: string,
  surname_name: string,
  aliases: string,
  phone:string,
  email: string,
  company?: number
  platoon?: number
  current_health?: number
  average_health?: number,
  response_rate?: number,
}
