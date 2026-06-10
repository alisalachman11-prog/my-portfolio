/**
 * Lightweight analytics wrapper around PostHog.
 *
 * Setup (one-time):
 *   1. Create a free PostHog project at https://posthog.com (US or EU cloud).
 *   2. Copy your *project API key* (starts with `phc_`). This is a PUBLIC,
 *      write-only client key — safe to commit and ship in the browser bundle.
 *   3. Paste it into POSTHOG_KEY below, or set VITE_POSTHOG_KEY in the env.
 *      If you used EU cloud, also set the host to https://eu.i.posthog.com.
 *
 * Until a real key is set, every call here is a no-op in production. In dev,
 * events are logged to the console so you can verify tracking without a key.
 *
 * PostHog is loaded from its CDN (no npm dependency), which suits a static
 * GitHub Pages site. Pageviews are captured manually on route change (see
 * `capturePageview`) because this is a single-page app.
 */

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY || 'phc_REPLACE_ME'
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com'
const ASSET_HOST = POSTHOG_HOST.replace('.i.posthog.com', '-assets.i.posthog.com')

const isConfigured = POSTHOG_KEY && POSTHOG_KEY !== 'phc_REPLACE_ME'
const isDev = import.meta.env.DEV

function ph() {
  return typeof window !== 'undefined' ? window.posthog : undefined
}

/**
 * Inject the PostHog snippet and initialize it. Safe to call once at startup.
 * No-op (with a dev hint) when no key is configured.
 */
export function initAnalytics() {
  if (!isConfigured) {
    if (isDev) {
      // eslint-disable-next-line no-console
      console.info(
        '[analytics] PostHog key not set — events log to console only. ' +
          'Add VITE_POSTHOG_KEY (or edit src/lib/analytics.js) to enable.',
      )
    }
    return
  }
  if (typeof window === 'undefined' || window.posthog?.__loaded) return

  // Official PostHog loader snippet (creates a queue stub, then loads array.js).
  !(function (t, e) {
    var o, n, p, r
    e.__SV ||
      ((window.posthog = e),
      (e._i = []),
      (e.init = function (i, s, a) {
        function g(t, e) {
          var o = e.split('.')
          2 == o.length && ((t = t[o[0]]), (e = o[1])),
            (t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
            })
        }
        ;(p = t.createElement('script')).type = 'text/javascript'
        p.crossOrigin = 'anonymous'
        p.async = !0
        p.src = s.api_host.replace('.i.posthog.com', '-assets.i.posthog.com') + '/static/array.js'
        ;(r = t.getElementsByTagName('script')[0]).parentNode.insertBefore(p, r)
        var u = e
        for (
          void 0 !== a ? (u = e[a] = []) : (a = 'posthog'),
            u.people = u.people || [],
            u.toString = function (t) {
              var e = 'posthog'
              return 'posthog' !== a && (e += '.' + a), t || (e += ' (stub)'), e
            },
            u.people.toString = function () {
              return u.toString(1) + '.people (stub)'
            },
            o =
              'init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId'.split(
                ' ',
              ),
            n = 0;
          n < o.length;
          n++
        )
          g(u, o[n])
        e._i.push([i, s, a])
      }),
      (e.__SV = 1))
  })(document, window.posthog || [])

  window.posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    // SPA: we send pageviews ourselves on route change.
    capture_pageview: false,
    // Still auto-capture clicks/inputs for breadth alongside our named events.
    autocapture: true,
    capture_pageleave: true,
    persistence: 'localStorage+cookie',
  })
}

/** Capture a virtual pageview. Call on every route change. */
export function capturePageview(path) {
  if (isDev) {
    // eslint-disable-next-line no-console
    console.debug('[analytics] $pageview', path)
  }
  ph()?.capture('$pageview', path ? { $pathname: path } : undefined)
}

/**
 * Track a named event with optional properties. This is the one helper the
 * rest of the app calls — keeps instrumentation centralized.
 */
export function track(event, props) {
  if (isDev) {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', event, props || {})
  }
  ph()?.capture(event, props)
}
