# Pomodoro Timer — Product truth

> Product truth inferred from the existing README, routes, copy, and implementation because this batch was explicitly authorized to proceed without an interview.

## Purpose

Pomodoro Timer is a client-side focus clock for alternating work, short-break,
and long-break sessions. The useful loop is choose a mode, start/pause the
countdown, reset when needed, and see completed work sessions.

## Core flow

1. Choose Focus, Short Break, or Long Break.
2. Start or pause the active countdown.
3. Reset the active mode when the plan changes.
4. Read the session count as a local visual record.

## Boundaries

- The timer runs in the browser and does not sync across devices.
- Session count is in-memory for the current page; there is no account,
  notification service, analytics, or shared history.
- The existing end-of-timer comment mentions sound/notification as future work;
  this surface must not claim that audio or notifications are connected.
