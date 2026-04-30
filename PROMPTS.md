# Prompting Log - ITDEV-164

## Activity-1: The AI-Native Launchpad

### Prompt 1
**What I asked:**
> can we update the bio to say I am a web developer student that enjoys music, art, and the future of technology, trying to find a place to use my passions together

**What Happend**
> Copilot updated the bio my statement verbatim "I am a web developer student that enjoys music, art, and the future of technology, trying to find a place to use my passions together"

>It technically did what I asked, but what I was intending was for the AI to help me rewrite my own simple statement into something more provactive. I had the AI undo its work and rewrote my initial prompt.

**What I asked**
> Can you update my bio to be more personal. I would like you to help me create a quirky way to say I am passionate about music, art, and the future of technology, and that by being a web development student, the skills I learn help me enter a career where my passion can aid in my work.

**What Happend**
> Copilot updated the bio to say "I am a web development student remixing code with the things I love most: music, art, and the future of technology. Every project helps me build the skills to turn those passions into a career where creativity and innovation are part of my everyday work."
> I thought this was a great way to quickly express my intention for a bio without having to spend too much time or thought on it, and close to what I would've expressed myself.

### Reflection
> I have used AI before for many purposes, usually involving mental road blocks or turning ideas into something tangible. 
> This was a great experience as it follows along the idea that we live in a time where we stand on the shoulders of giants.
> It doesn't make sense to spend more time than necessary learning basic coding when a computer can do it in seconds, and if we are to be
>successful in a webdev career, we have to add value that AI can't produce, and that would be the individual prompting the AI at a higher level.
> It feels genuinely right, to guide this course towards using AI so that we are better suited for the IT jobs of tomorrow, not yesterday.
> Next time, I think that I will take more time in creating my prompts in attempts to get a result I desire without having to make too many unnecessary requests.


____________________________________________



## Activity 2: Building the Dashboard Shell

### Prompt 1
**What I asked:**
> Using the shadcn sidebar components that are now in my src/components/ui/ folder,
create a professional, collapsible dashboard layout. It should include:

1. A sidebar (src/components/app-sidebar.tsx) with navigation links for:
   - Overview (use the Home icon from lucide-react)
   - Projects (use the FolderOpen icon)
   - Settings (use the Settings icon)

2. A top navigation area with breadcrumbs showing the current page.

3. A main content area that wraps the existing page content.

4. Update src/app/layout.tsx to use the new SidebarProvider and sidebar layout.

Important: Preserve the Developer Profile content from Activity 1 in
src/app/page.tsx — it should appear in the main content area of the new layout.
Keep the dark mode toggle working.

**What happened:**
> It took Copilot a little time to review the files it was working on and come up with a solution that worked. Eventually it built app-sidebar.tsx and checked to make sure the side menu button opened and collapsed as requested.

>Copilot updated the layout.tsx file to replace the previous header with the new Sidebar Menu while also keeping the rest of the page components untouched

### Prompt 2
**What I asked:**
 I noticed an error on layout.tsx line ** import "./globals.css"; **
 The error said "Cannot find module or type declarations for side-effect import of './globals.css'.

**What happened:**
> Copilot needed several attempts to fix the error as it kept showing the same issue. Eventually what it did was create styles.d.ts which it claims should resolve any TypeScript error for CSS imports, which is how Next.js handles CSS imports in the app directory.

### Reflection
> Did the Agent accidentally delete or overwrite any of your Activity 1

    It seems like the Agent did a good job at only making minimal changes and additions to the code from Activity 1, however it did seem the new code affected some code that it didn't take into account when building a solution the first time and took several tries to work correctly.

    So far I have not had to use the Revert button, however I did have to go back and look at what the AI did in each step of its build to see if any changes were made that should not have occurred.


    ## Activity 3: Server-Side Data with Supabase

### Prompt 1

**What I asked:**
> 
'Using the Supabase client at src/lib/supabase.ts, create a new Server Component at src/app/projects/page.tsx that:

1. Fetches all records from the "projects" table in Supabase
2. Displays them in a professional layout using shadcn/ui Card components
   (run `npx shadcn@latest add card` if needed)
3. Each card should show the project title, description, and a status badge
4. The status badge should be color-coded:
   - "active" = green
   - "completed" = blue
   - "archived" = gray

Use @workspace context to match the styling of our existing Dashboard.
This must be a React Server Component (async function, no "use client").
Do NOT use useEffect or useState for data fetching. 
>

**What happened:**

>
 This prompt led the Agent to use the Supabase client component to create a React server component that uses the async function. The React Server component then takes the data provided from the client and displays it according to the layout set up within the server component.

 The Agent created the async function right away. I believe this was due to the prompt including the words "This Must ... async funtion, no use client" guiding the Agent to follow the strict guidance.

 Had that phrase not been included, the Agent may have decided on another route other than the async function 

### Prompt 2

**What I asked:**

> (Paste any follow-up prompt — fixing a connection error, refactoring
> from useEffect to a Server Component, or adjusting the card layout)

The breadcrumb in src/app/layout.tsx always shows "Overview" because the page
name is hardcoded. Extract the breadcrumb into its own client component at
src/components/breadcrumb-nav.tsx that uses usePathname() from next/navigation
to display the correct page name. Map "/" to "Overview", "/projects" to
"Projects", and "/settings" to "Settings". Keep "ITDEV-164" as the first
breadcrumb segment. Then update layout.tsx to use the new component.

**What happened:**

> 
The Agent replaced the hardcoded breadcrumb label in layout.tsx with a client component that uses usePathname() to detect the current route.

This made the breadcrumb update dynamically so it now shows Overview, Projects, or Settings depending on which page the user is actually visiting. The routing behavior of the app did not change; the breadcrumb only displays the correct current page name.
>

### Reflection

> How does fetching data on the server feel different from the useEffect
> pattern you used in Web Programming 1?
Fetching the data on the server feels different from the useEffect pattern because the data is loaded first, and then the page and layout is rendered.

I also feel that because this simplifies the code, reduces how much is needed, that using a Server Component makes the code cleaner and easier to understand.