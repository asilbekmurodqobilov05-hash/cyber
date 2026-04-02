create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  email text not null unique,
  role text not null default 'alumni' check (role in ('admin', 'alumni')),
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.alumni_profiles (
  user_id uuid primary key references public.users(id) on delete cascade,
  year int not null,
  profession text not null,
  bio text,
  image_url text,
  location text,
  achievements text[] not null default '{}',
  socials jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.stories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  content text not null,
  excerpt text not null,
  image_url text,
  author_id uuid references public.users(id) on delete set null,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.users enable row level security;
alter table public.alumni_profiles enable row level security;
alter table public.stories enable row level security;
alter table public.messages enable row level security;

create policy "Users can view all profiles"
  on public.alumni_profiles for select
  using (true);

create policy "Users can update own profile"
  on public.alumni_profiles for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can insert own profile"
  on public.alumni_profiles for insert
  with check (auth.uid() = user_id);

create policy "Stories are publicly readable"
  on public.stories for select
  using (true);

create policy "Messages can be inserted by anyone"
  on public.messages for insert
  with check (true);
