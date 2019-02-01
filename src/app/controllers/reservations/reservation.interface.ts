export interface ReservationInterface {
  inquiry_id: number;
  first_name: string;
  last_name: string;
  email_address: string;
  day_phone_number: string;
  requested_party_size: number;
  desired_date: string;
  desired_time: string;
  contact_time_id: number;
  inquiry_type_id: number;
  inquiryStatusId: number;
  message: string;
  inquiry_timestamp: string;
  // inquiry_submission_timestamp: string;
  // confirmation_status: number;
}
