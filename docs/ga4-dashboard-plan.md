# GA4 Setup Plan For Lehsun

This site is a local lead-generation website, not an ecommerce storefront.

The main business questions are:

- Which landing pages generate the most catering enquiries?
- Which CTAs drive WhatsApp and phone leads?
- Which service areas produce the strongest lead intent?
- Which traffic sources bring people who actually enquire, not just browse?
- How many users move from homepage or location page visits into menu views, FAQ opens, and lead actions?

## 1. GA4 Property Setup.

Use one GA4 property for `lehsun.co.uk` with one web data stream.

Recommended admin setup:

- Enable enhanced measurement.
- Exclude internal traffic.
- Link Google Ads and Search Console if they are in use.
- Keep default channel grouping and cross-domain settings simple unless Lehsun starts sending users to separate booking or payment domains.
- Keep data retention at 14 months if possible for year-over-year seasonal comparison.

## 2. Key Events To Mark In GA4

Mark these as key events first:

- `generate_lead`
- `view_menu`

Treat them differently in analysis:

- `generate_lead` is the primary conversion.
- `view_menu` is a strong mid-funnel intent event, useful for judging page quality and campaign traffic.

Do not mark these as primary conversions yet, but report on them:

- `faq_open`
- `view_section`
- `click_review`
- `click_social`
- `select_content`

## 3. Custom Dimensions To Create

The code already sends useful event parameters from [`src/lib/analytics.ts`](/Users/ankitsinghal/projects/personal/lehsun_website/src/lib/analytics.ts:1).

Create these event-scoped custom dimensions in GA4 Admin > Data display > Custom definitions:

- `placement` -> `placement`
- `destination_type` -> `destination_type`
- `link_text` -> `link_text`
- `section_id` -> `section_id`
- `is_primary_cta` -> `is_primary_cta`
- `lead_type` -> `lead_type`
- `section_name` -> `section_name`
- `section_order` -> `section_order`
- `faq_variant` -> `faq_variant`
- `faq_index` -> `faq_index`

Only add custom metrics if you know you need numeric value rollups beyond standard key-event reporting.

## 4. Event Model Already In The Site

Current implementation already supports the core reports:

- `generate_lead` for WhatsApp and phone enquiry clicks
- `view_menu` for menu-intent clicks
- `view_section` for meaningful section exposure
- `faq_open` for question expansion
- `click_review` for review proof clicks
- `click_social` for social destination clicks
- `select_content` for section navigation clicks

Lead differentiation already exists:

- `catering_enquiry`
- `menu_enquiry`
- `general`

This means the most useful GA4 reports should pivot on `lead_type`, `placement`, `destination_type`, and landing page.

## 5. Dashboards / Collections To Build

In current GA4, the cleanest way is:

1. Create the detail reports you need.
2. Create one or two overview reports.
3. Add them into a custom collection in Library.
4. Publish the collection so it appears in left navigation.

Recommended custom collection name:

`Lehsun Growth`

Recommended topics inside that collection:

- `Lead Funnel`
- `Landing Pages`
- `Traffic Quality`
- `Local Intent`

## 6. Reports That Matter Most

### Lead Funnel Overview

Build an overview report with cards for:

- Users
- Sessions
- Key events
- `generate_lead` by event name
- `view_menu` by event name
- Landing page by key events
- Session default channel group by key events
- Page path by event count

This should become the main operating dashboard.

### Detail Report: Lead Actions

Primary dimension options:

- Event name
- `lead_type`
- `placement`
- `destination_type`
- Landing page + query string
- Page path and screen class

Primary metrics:

- Event count
- Key events
- Total users
- Sessions
- Event count per user

Use this report to answer:

- Which CTA placements actually create enquiries?
- Are WhatsApp clicks outperforming phone clicks?
- Are menu visitors turning into catering leads?

### Detail Report: Landing Page Performance

Primary dimension options:

- Landing page + query string
- Page path and screen class
- Session default channel group
- Source / medium

Primary metrics:

- Sessions
- Users
- Engagement rate
- Average engagement time
- Key events
- Session key event rate

This is the report for judging `/`, `/catering`, `/menu`, and local area pages like Dartford and Gravesend.

### Detail Report: CTA Placement Performance

Primary dimension options:

- `placement`
- `link_text`
- `is_primary_cta`
- `destination_type`

Primary metrics:

- Event count
- Key events
- Total users

This is the most important custom report for design and CRO decisions.

### Detail Report: Local Intent

Primary dimension options:

- Landing page + query string
- Page path and screen class
- City
- Region
- `lead_type`

Primary metrics:

- Sessions
- Users
- Key events
- Session key event rate

Use this to compare the local SEO pages against the main catering page.

### Detail Report: Engagement Signals

Primary dimension options:

- `section_name`
- `section_id`
- `faq_variant`
- `faq_index`

Primary metrics:

- Event count
- Users

This helps answer which parts of the page are actually being seen and which FAQs are doing selling work.

## 7. Explorations To Create

Keep these as explorations, not permanent nav reports:

- Funnel exploration: landing page -> `view_menu` or `faq_open` -> `generate_lead`
- Path exploration: users starting on `/catering/*` pages and the next action they take
- Free-form exploration: `placement` x `lead_type` x landing page
- Free-form exploration: source / medium x landing page x key events

## 8. Suggested Reports Snapshot Cards

If you only want one dashboard to open daily, use these cards:

- Users trend
- Sessions trend
- Key events trend
- `generate_lead` trend
- Landing pages by key events
- Session default channel group by key events
- `placement` by event count
- `lead_type` by event count
- Top pages by views
- City by key events

## 9. What To Ignore For Now

These are usually low-value for this website at the current stage:

- Retention reports
- Ecommerce templates
- Monetization reports
- Cohort analysis
- Detailed demographics beyond location
- Excessive engagement vanity metrics without lead context

## 10. Implementation Gaps Worth Fixing Next

The analytics base is already solid, but these additions would improve reporting quality:

- Add `form_submit` or `email_click` events if those actions exist later.
- Capture explicit page type, such as `home`, `menu`, `catering`, `location_catering`, for easier reporting.
- Add UTM governance so paid and social traffic is consistently named.
- If Google Ads is used, import the GA4 key events and keep `generate_lead` as the optimization target.

## 11. Fastest Setup Order

If you want the shortest path to a useful GA4 account:

1. Create the property and web stream.
2. Confirm events are arriving in Realtime and DebugView.
3. Mark `generate_lead` and `view_menu` as key events.
4. Create the custom dimensions listed above.
5. Build `Lead Actions`, `Landing Page Performance`, and `CTA Placement Performance`.
6. Build one `Lead Funnel Overview` report.
7. Add those reports into a `Lehsun Growth` collection and publish it.

## 12. Current Code References

- Analytics event definitions: [`src/lib/analytics.ts`](/Users/ankitsinghal/projects/personal/lehsun_website/src/lib/analytics.ts:1)
- Tracked CTA component: [`src/components/analytics/TrackedLink.tsx`](/Users/ankitsinghal/projects/personal/lehsun_website/src/components/analytics/TrackedLink.tsx:1)
- Route pageview tracking: [`src/components/analytics/PageViewTracker.tsx`](/Users/ankitsinghal/projects/personal/lehsun_website/src/components/analytics/PageViewTracker.tsx:1)
- Section visibility tracking: [`src/components/analytics/SectionViewTracker.tsx`](/Users/ankitsinghal/projects/personal/lehsun_website/src/components/analytics/SectionViewTracker.tsx:1)
- GA script setup: [`src/app/layout.tsx`](/Users/ankitsinghal/projects/personal/lehsun_website/src/app/layout.tsx:1)

## 13. Click-By-Click GA4 Setup Checklist

Use this in order. Do not try to build reports before the events and custom definitions exist.

### Step 1: Create The Property And Web Stream

In GA4:

1. Go to Admin.
2. Under Account, create or choose the Google Analytics account for Lehsun.
3. Under Property, click Create property.
4. Property name: `Lehsun GA4`.
5. Reporting time zone: `United Kingdom`.
6. Currency: `British Pound Sterling (GBP)`.
7. Complete the business info screens.
8. Choose Web as the data platform.
9. Website URL: `https://lehsun.co.uk`
10. Stream name: `Lehsun Website`
11. Leave Enhanced measurement enabled.
12. Create stream.

After the stream is created:

1. Copy the Measurement ID.
2. Put it into the environment variable used by the site:
   `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. Redeploy the site if needed.

### Step 2: Verify Data Is Arriving

In GA4:

1. Go to Reports > Realtime.
2. Open the site yourself in a fresh browser session.
3. Visit the homepage, menu page, and catering page.
4. Click a few tracked CTAs.

You should expect to see at least:

- `page_view`
- `generate_lead`
- `view_menu`
- `faq_open` when an FAQ is opened

If events are not appearing:

- Confirm the measurement ID matches production.
- Confirm ad blockers are disabled during testing.
- Confirm the cookie consent banner is not setting analytics to denied.

### Step 3: Validate In DebugView

In GA4:

1. Go to Admin.
2. Under Data display, open DebugView.
3. Trigger the same actions on the site again.
4. Click into the event stream and inspect parameters.

For `generate_lead`, confirm these parameters are present when applicable:

- `placement`
- `destination_type`
- `link_text`
- `is_primary_cta`
- `lead_type`
- `value`
- `currency`

For `view_section`, confirm:

- `section_id`
- `section_name`
- `section_order`

For `faq_open`, confirm:

- `question`
- `faq_index`
- `faq_variant`

### Step 4: Mark Key Events

In GA4:

1. Go to Admin.
2. Under Data display, click Events.
3. Find or search for `generate_lead`.
4. Turn on Mark as key event.
5. Find or search for `view_menu`.
6. Turn on Mark as key event.

Do not mark the rest as key events yet.

### Step 5: Create Custom Definitions

In GA4:

1. Go to Admin.
2. Under Data display, click Custom definitions.
3. Open the Custom dimensions tab.
4. Click Create custom dimensions.

Create these one by one:

1. Dimension name: `Placement`
   Scope: `Event`
   Event parameter: `placement`

2. Dimension name: `Destination Type`
   Scope: `Event`
   Event parameter: `destination_type`

3. Dimension name: `Link Text`
   Scope: `Event`
   Event parameter: `link_text`

4. Dimension name: `Section ID`
   Scope: `Event`
   Event parameter: `section_id`

5. Dimension name: `Primary CTA`
   Scope: `Event`
   Event parameter: `is_primary_cta`

6. Dimension name: `Lead Type`
   Scope: `Event`
   Event parameter: `lead_type`

7. Dimension name: `Section Name`
   Scope: `Event`
   Event parameter: `section_name`

8. Dimension name: `Section Order`
   Scope: `Event`
   Event parameter: `section_order`

9. Dimension name: `FAQ Variant`
   Scope: `Event`
   Event parameter: `faq_variant`

10. Dimension name: `FAQ Index`
    Scope: `Event`
    Event parameter: `faq_index`

Notes:

- GA4 can take 24 to 48 hours before new custom dimensions are fully available in reports.
- Event data can arrive before the dimensions become selectable in report builders.

### Step 6: Clean Up Core Admin Settings

In GA4:

1. Go to Admin > Data collection and modification > Data retention.
2. Set event data retention to `14 months` if available.
3. Go to Admin > Data collection and modification > Data filters.
4. Add internal traffic filters if you and the team regularly test the site.
5. Go to Admin > Product links and link Search Console if available.
6. Link Google Ads only if you plan to run ads or import conversions.

### Step 7: Build The First Detail Report

Start with the report that matters most: CTA and lead actions.

In GA4:

1. Go to Reports.
2. Open any detail report that is closest to Engagement or Events.
3. Click Customize report in the top right.
4. Make a copy if you want to preserve the original.
5. Add dimensions to the dimension picker.

Use these dimensions:

- Event name
- `Lead Type`
- `Placement`
- `Destination Type`
- `Link Text`
- Landing page + query string
- Page path and screen class

Use these metrics:

- Event count
- Key events
- Total users
- Sessions
- Event count per user

Save this as:

`Lead Actions`

Set the default dimension to:

`Placement`

### Step 8: Build Landing Page Performance Report

Create another custom detail report with:

Dimensions:

- Landing page + query string
- Page path and screen class
- Session default channel group
- Source / medium

Metrics:

- Sessions
- Users
- Engagement rate
- Average engagement time
- Key events
- Session key event rate

Save this as:

`Landing Page Performance`

This is the report you will use the most for SEO and page quality.

### Step 9: Build CTA Placement Performance Report

Create another custom detail report with:

Dimensions:

- `Placement`
- `Link Text`
- `Primary CTA`
- `Destination Type`

Metrics:

- Event count
- Key events
- Total users

Save this as:

`CTA Placement Performance`

### Step 10: Build Local Intent Report

Create another detail report with:

Dimensions:

- Landing page + query string
- Page path and screen class
- City
- Region
- `Lead Type`

Metrics:

- Sessions
- Users
- Key events
- Session key event rate

Save this as:

`Local Intent`

This is where you compare:

- homepage
- main catering page
- local pages like Dartford, Gravesend, and Ebbsfleet Valley

### Step 11: Build Engagement Signals Report

Create another detail report with:

Dimensions:

- Event name
- `Section Name`
- `Section ID`
- `FAQ Variant`
- `FAQ Index`

Metrics:

- Event count
- Total users

Add a report filter or comparison when needed:

- Event name exactly matches `view_section`
- Event name exactly matches `faq_open`

Save this as:

`Engagement Signals`

### Step 12: Create The Overview Dashboard

In GA4:

1. Go to Reports.
2. Scroll to Library in the lower-left navigation.
3. In the Reports area, click Create new report.
4. Choose Create overview report.
5. Add cards from your detail reports.

Use cards for:

- Users trend
- Sessions trend
- Key events trend
- `generate_lead` by event name
- `view_menu` by event name
- Landing page by key events
- Session default channel group by key events
- `Placement` by event count
- `Lead Type` by event count
- City by key events

Save the overview report as:

`Lead Funnel Overview`

### Step 13: Build The Custom Navigation Collection

In GA4:

1. Go to Reports > Library.
2. Click Create new collection.
3. Choose Blank collection.
4. Name it `Lehsun Growth`.
5. Create the topic `Lead Funnel`.
6. Drag `Lead Funnel Overview` into that topic.
7. Drag `Lead Actions` into that topic.
8. Create the topic `Landing Pages`.
9. Drag `Landing Page Performance` into that topic.
10. Create the topic `Traffic Quality`.
11. Drag `Local Intent` into that topic.
12. Create the topic `On-site Signals`.
13. Drag `CTA Placement Performance` and `Engagement Signals` into that topic.
14. Save.
15. Publish the collection.

Once published, it appears in the left navigation for the property.

### Step 14: Create Explorations For Analysis

In Explore, create these four explorations:

1. `Lead Funnel`
   Use a funnel of:
   landing page view -> `view_menu` or `faq_open` -> `generate_lead`

2. `Local Page Paths`
   Start with users on `/catering/*` pages and inspect next event or next page.

3. `CTA Winners`
   Free-form table:
   Rows = `Placement`
   Columns = `Lead Type`
   Values = Event count, key events

4. `Source Quality`
   Free-form table:
   Rows = Source / medium
   Columns = Landing page + query string
   Values = Sessions, key events, session key event rate

### Step 15: Weekly Review Routine

Check these every week:

1. Which landing pages drove the most `generate_lead` key events?
2. Which CTA `placement` produced the strongest lead count?
3. Which `lead_type` is rising or falling?
4. Which traffic sources have traffic but weak key event rate?
5. Which local pages are getting visits without turning into enquiries?

### Step 16: Known Limitations Of The Current Setup

Important interpretation notes:

- `generate_lead` currently measures click intent, not confirmed booked orders.
- WhatsApp click volume is a strong proxy, but not the same as qualified enquiries.
- `view_menu` is a useful quality signal, but not a business outcome.
- If the team starts handling leads in a CRM, connect final outcome data later.

## 17. Cleanup For Blank And `(not set)` Rows

The blank and `(not set)` rows are expected when a report uses a CTA-specific custom dimension while the metrics are still based on `All events`.

Examples:

- `page_view` does not send `destination_type`, `lead_type`, or `link_text`.
- `view_section` sends `section_id`, `section_name`, and `section_order`, but not CTA fields.
- `faq_open` sends FAQ fields, but not CTA fields.
- Enhanced measurement events like `scroll` and outbound clicks may not send Lehsun custom parameters.

The fix is to filter each custom report to the event names where the selected dimension is meaningful.

### Destination Type Report

Use this report when judging WhatsApp, phone, maps, social, and internal-link behavior.

Recommended primary dimension:

- `Destination Type`

Recommended metrics:

- Event count
- Key events
- Total users
- Sessions
- Event count per active user

Apply this report filter:

- Include `Event name` exactly matches regex:
  `generate_lead|view_menu|select_content|click_social|click_review`

Expected result:

- `whatsapp`, `phone`, `maps`, `internal`, `instagram`, `facebook`, and `external` remain.
- Most blank and `(not set)` rows disappear because non-link events are excluded.

### Lead Type Report

Use this report only for enquiry intent.

Recommended primary dimension:

- `Lead Type`

Recommended metrics:

- Event count
- Key events
- Total users
- Sessions
- Event count per active user

Apply this report filter:

- Include `Event name` exactly matches regex:
  `generate_lead|view_menu`

Expected result:

- `catering_enquiry`, `menu_enquiry`, and `general` remain.
- Events like page views, section views, FAQ opens, and social clicks are excluded.

### Link Text Report

Use this report to see which CTA labels people click.

Recommended primary dimension:

- `Link Text`

Recommended metrics:

- Event count
- Key events
- Total users
- Sessions
- Event count per active user

Apply this report filter:

- Include `Event name` exactly matches regex:
  `generate_lead|view_menu|select_content|click_social|click_review`

Expected result:

- CTA labels like `Browse Today's Menu`, `Daily Menu`, `Catering`, and `Get Catering Quote` remain.
- Non-click events stop creating blank rows.

### Landing Page Report

Do not judge landing page quality from an all-event custom-dimension report.

Recommended primary dimension:

- Landing page + query string

Recommended metrics:

- Sessions
- Total users
- Engagement rate
- Average engagement time
- Key events
- Session key event rate

Avoid using these as primary landing-page metrics:

- Event count
- Event count per active user

Expected result:

- `/`, `/menu`, `/catering`, and local catering pages are judged by session quality and key-event rate.
- Blank rows matter less because the report is session-oriented rather than event-oriented.

### Screenshot Diagnosis

For the screenshots shared:

- The `Destination Type` report shows `(not set)` because events without `destination_type` are included.
- The `Lead Type` report shows `(not set)` because events without `lead_type` are included.
- The `Link Text` report shows blank and `(not set)` rows because events without CTA labels are included.
- The `Landing page + query string` report should be rebuilt with session/page metrics, not all-event counts.

### Validation Exploration

Create a temporary free-form exploration:

Dimensions:

- Event name
- Destination Type
- Lead Type
- Link Text

Metrics:

- Event count
- Key events
- Total users

Rows:

- Event name
- Destination Type
- Lead Type
- Link Text

Use it to confirm:

- `generate_lead` and `view_menu` carry useful CTA parameters.
- Blank and `(not set)` rows mostly belong to `page_view`, `view_section`, `faq_open`, `scroll`, or other enhanced measurement events.
- New custom dimensions may take 24 to 48 hours before old-looking blanks settle in standard reports.
