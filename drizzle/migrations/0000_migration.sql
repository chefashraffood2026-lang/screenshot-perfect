CREATE TABLE public.booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  service text NOT NULL,
  item text,
  event_date date,
  guests int,
  location text,
  full_name text NOT NULL,
  phone text NOT NULL,
  email text,
  notes text,
  language text NOT NULL DEFAULT 'he',
  status text NOT NULL DEFAULT 'new',
  payment_status text NOT NULL DEFAULT 'unpaid'
);
GRANT INSERT ON public.booking_requests TO anon, authenticated;
GRANT ALL ON public.booking_requests TO service_role;
ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a booking request" ON public.booking_requests
  FOR INSERT TO anon, authenticated
  WITH CHECK (status = 'new' AND payment_status = 'unpaid' AND length(full_name) BETWEEN 2 AND 100 AND length(phone) BETWEEN 7 AND 20);