export interface Category {
  id: number,
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

export interface Choice {
  id: number,
  choice_text: string,
  order: number,
  poll_id: number,
  value: number
}
