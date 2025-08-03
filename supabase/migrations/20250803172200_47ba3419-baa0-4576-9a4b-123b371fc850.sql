-- Create a table for app downloads
CREATE TABLE public.app_downloads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  platform TEXT NOT NULL CHECK (platform IN ('android', 'ios')),
  downloaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.app_downloads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since this is for app downloads)
CREATE POLICY "Anyone can submit download requests" 
ON public.app_downloads 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading own downloads (optional, for future use)
CREATE POLICY "Users can view all download requests" 
ON public.app_downloads 
FOR SELECT 
USING (true);