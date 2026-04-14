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