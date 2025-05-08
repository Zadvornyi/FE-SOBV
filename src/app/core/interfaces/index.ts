export interface RateHealth {
  report_id: string,
  health: number,
  score: string,
  start_time: number,
  end_time: number,
  width: number,
  left: number,
}

export interface Serviceman {
  first_name: string,
  last_name: string,
  surname_name: string,
  aliases: string,
  email: string,
  phone?: string,
  company?: string,
  platoon?: string,
  current_health?: number,
  average_health?: number
}


export interface Platoon {
  id: string,
  sequence_number: number,
  description: string,
  commander: string,
  company: string
}


export interface Company {
  id: string,
  sequence_number: number,
  description: string,
  commander: string
}

