/*
  # Create waitlist table for Mindscape Vaults

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null) - user email for waitlist signup
      - `referral_source` (text) - where the user came from (e.g., "hero", "footer")
      - `created_at` (timestamptz) - signup timestamp

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for authenticated users to read their own data
    - Add policy for anonymous inserts (anyone can join the waitlist)
    - No update or delete policies (waitlist entries are permanent)

  3. Notes
    - Email is unique to prevent duplicate signups
    - referral_source tracks which CTA the user clicked
    - Only INSERT is allowed for anon users (no reading other entries)
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  referral_source text DEFAULT 'unknown',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own waitlist entry"
  ON waitlist FOR SELECT
  TO authenticated
  USING (auth.uid()::text = email);

CREATE POLICY "Anyone can join the waitlist"
  ON waitlist FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
