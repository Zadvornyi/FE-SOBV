export interface Serviceman {
  id: number,
  first_name: string,
  last_name: string,
  surname_name: string,
  aliases: string,
  email: string,
  phone?: string,
  company?: number,
  platoon?: number,
  serviceman_type?:number,
  current_health?: number,
  average_health?: number,
}
