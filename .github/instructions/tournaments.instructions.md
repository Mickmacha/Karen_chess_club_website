---
description: Tournament booking feature guide for Karen Chess Club website
---

# Tournament Booking Feature - Architecture & Management Guide

## Overview

The Tournament Booking feature allows players to browse, filter, and register for chess tournaments with direct-contact registration (no payment integration). This keeps the site fully static while leveraging Sanity CMS for tournament management.

## Architecture

### Tech Stack
- **CMS**: Sanity Studio with custom Tournament schema
- **Frontend**: Next.js server component (ISR caching) + client component (section filtering)
- **Styling**: Tailwind CSS (matches site design system)
- **Registration**: Direct contact links (email, WhatsApp, contact form)
- **Display**: Homepage tournament booking section + dedicated `/tournaments` page

### How It Works

1. **Tournament Management**: Manage tournaments in Sanity Studio (date, time, location, section, participants)
2. **ISR Caching**: Tournament data cached for 1 hour, refreshed automatically
3. **Homepage Preview**: Featured tournaments displayed on homepage (up to 4 featured items)
4. **Full Page**: `/tournaments` page shows all tournaments with section filtering
5. **Registration**: "Register Now" button links to contact form with tournament pre-populated as query parameter

## Features

- ✅ **4 Tournament Sections**: Open, Ladies, Junior (Boy), Junior (Girl)
- ✅ **Participant Tracking**: Display current vs. max participants with color-coded availability bar
- ✅ **Registration Management**: Track open/closed registrations, registration deadlines
- ✅ **Rich Information**: Date, time, location, format, entry fee, prize fund displayed
- ✅ **Featured Tournaments**: Mark tournaments as featured for homepage display
- ✅ **Section Filtering**: Client-side filter for fast browsing
- ✅ **ISR Caching**: Tournaments update automatically every hour
- ✅ **Static Deployment**: No backend servers needed, hosted on Vercel

## File Structure

```
nextjs-kcc_site/
├── src/app/
│   ├── tournaments/
│   │   └── page.tsx (Server component, fetches all tournaments, sets ISR)
│   ├── components/
│   │   └── sections/
│   │       ├── TournamentsContent.tsx (Client component, filtering & full display)
│   │       └── TournamentBooking.tsx (Client component, homepage featured display)
│   ├── page.tsx (Updated with tournament data & TournamentBooking component)
│   └── components/layout/
│       └── Header.jsx (Updated with /tournaments link)
├── sanity/
│   └── queries.ts (Added tournament queries)

studio-kcc_site/
└── schemaTypes/
    ├── tournament.ts (New Tournament schema)
    └── index.ts (Updated exports)
```

## Tournament Schema Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Title | String | ✅ | Tournament name |
| Slug | Slug | ✅ | Auto-generated from title |
| Description | Text | ❌ | Detailed tournament info |
| Image | Image | ✅ | Tournament photo with hotspot |
| Date | Date | ✅ | Tournament date |
| Time | String | ✅ | Start time (HH:MM format) |
| Location | String | ✅ | Venue/location |
| Section | Select | ✅ | open, ladies, junior_boy, junior_girl |
| Format | String | ✅ | e.g., Round Robin, Swiss System, Knockout |
| Max Participants | Number | ✅ | Maximum player count |
| Current Participants | Number | ✅ | Current registrations (default: 0) |
| Entry Fee | Number | ✅ | Price in KES |
| Registration Deadline | Date | ✅ | Last day to register |
| Prize Fund | Text | ❌ | Prize breakdown (1st, 2nd, etc.) |
| Featured | Boolean | ❌ | Show on homepage (default: false) |
| Registration Open | Boolean | ✅ | Enable/disable registrations (default: true) |
| Published At | DateTime | ❌ | Auto-set to current time |

## GROQ Queries

```typescript
// Fetch featured tournaments (for homepage)
FEATURED_TOURNAMENTS_QUERY: Returns up to 6 featured tournaments ordered by date

// Fetch all tournaments (for /tournaments page)
ALL_TOURNAMENTS_QUERY: Returns all tournaments with full details ordered by date

// Fetch by section (optional, available for future use)
TOURNAMENTS_BY_SECTION_QUERY: Filter tournaments by section using $section parameter
```

## Managing Tournaments in Sanity

### Adding a Tournament
1. Go to Sanity Studio
2. Click "Create" → "Tournament"
3. Fill all required fields:
  - Title (e.g., "Karen Chess Open 2024")
   - Date and time
   - Location
   - Format (Round Robin, Swiss, etc.)
   - Max participants (e.g., 32)
   - Entry fee (e.g., 1500 for KES 1,500)
   - Tournament section (Open, Ladies, Junior Boy, Junior Girl)
   - Registration deadline
4. Mark as "Featured" if you want it on homepage
5. Click "Publish"

### Editing Tournament Details
1. Open tournament
2. Update any field (date, participants, entry fee, etc.)
3. Click "Publish"
4. Changes appear on site within 1 hour (ISR refresh)

### Managing Participant Count
1. Open tournament document
2. Update "Current Participants" field as registrations come in
3. Publish
4. Availability bar on site updates automatically after ISR refresh

### Setting Registration Status
- **Registration Open (checked)**: "Register Now" button active
- **Registration Open (unchecked)**: "Registration Closed" button (disabled)
- Can also be controlled via deadline date (automatically shows "Deadline Passed")

### Marking Tournament Full
Update "Current Participants" to equal or exceed "Max Participants":
- Button automatically changes to "Tournament Full" state

## Testing Locally

### Setup
```bash
cd nextjs-kcc_site
npm install
npm run dev
```

### Access Tournament Features
- Homepage: http://localhost:3000 (see Tournament Booking section)
- All tournaments: http://localhost:3000/tournaments
- Check Header for "Tournaments" link

### Test Features
1. **Filtering**: Click section filters on /tournaments page
2. **Availability**: Go to Sanity, change participant count, refresh browser after ISR (~60s)
3. **Registration**: Click "Register Now", verify it links to contact form with tournament pre-filled
4. **Featured**: Go to Sanity, mark a tournament as featured, refresh homepage

## Deployment

### Vercel (No changes needed)
- Already configured in `vercel.json`
- Just push to main branch
- ISR works automatically

### Environment Variables
No additional env vars needed. Uses existing Sanity setup:
- `projectId: "e0f5onws"`
- `dataset: "production"`
- `apiVersion: "2024-01-01"`
- `useCdn: false` (allows ISR)

## Enhancing Tournaments (Optional Features)

### Add Tournament Details Page
Create `src/app/tournaments/[slug]/page.tsx` for individual tournament pages with:
- Full description and rules
- Player list view (when available)
- Schedule/pairings (if stored in Sanity)

### Add Calendar View
Add a calendar component to `/tournaments` page for visual date browsing

### Email Notifications
Integrate with EmailJS to send tournament reminders on:
- Registration confirmation
- Tournament start notification (day before)
- Results announcements

### Participant Management
Add ability for tournament organizers to track:
- Registered players list
- Payment status
- Pairings and standings

### Payment Integration (Future)
If you decide to integrate payments later:
- Add Stripe or M-Pesa integration
- Store payment status in Sanity
- Limit registrations based on payments received

## Search Engine Optimization

### Meta Tags
- Tournaments page title: "Tournaments | Karen Chess Club"
- Meta description: "Browse and register for upcoming chess tournaments..."
- Auto-generated by Next.js `Metadata` export

### Rich Data
Consider adding Schema.org markup for events (future enhancement)

## Performance

- **ISR Caching**: 1-hour revalidation balances freshness with performance
- **Image Optimization**: Next.js auto-optimizes all tournament images
- **Static Export**: No database queries at runtime; all data cached via ISR
- **Bundle Size**: ~12KB additional JS (TournamentsContent filtering logic)

## Troubleshooting

### Tournaments not showing?
1. Check Sanity Studio — are tournaments published?
2. Verify tournaments have required fields (title, date, image, etc.)
3. Force ISR refresh after 1 hour on Vercel
4. Check browser console for Sanity API errors

### Registration links broken?
1. Verify query parameter: `/contact?tournament=TournamentName`
2. Check Contact component reads query params
3. Test locally first at http://localhost:3000/tournaments

### Availability not updating?
1. Update "Current Participants" in Sanity
2. Publish the tournament
3. Wait for ISR refresh (~60 seconds on Vercel)
4. Hard refresh browser (Ctrl+F5)

### Section filter not working?
1. Ensure tournaments have section set (Open, Ladies, Junior Boy, Junior Girl)
2. Check browser console for errors
3. Try refreshing the page

## Common Workflows

### Pre-Tournament Setup
1. Create tournament in Sanity 2-3 weeks before event
2. Set registration deadline 1 week before tournament
3. Mark as "Featured" for homepage visibility
4. Share tournament link on social media

### During Registration Period
1. Monitor "Current Participants" field
2. Update count as registrations come in via contact form
3. When capacity reached, update participant count to max
4. System automatically shows "Tournament Full"

### After Deadline
- Registration deadline passes automatically
- Button changes to "Deadline Passed"
- No manual action needed

### Post-Tournament
1. Archive tournament (keep for history) or soft-delete
2. Results can be added as blog post
3. Photos can be added to gallery

## Questions?

Refer to:
- Sanity CMS docs: https://www.sanity.io/docs
- Next.js ISR docs: https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
- Tournament schema: `studio-kcc_site/schemaTypes/tournament.ts`
