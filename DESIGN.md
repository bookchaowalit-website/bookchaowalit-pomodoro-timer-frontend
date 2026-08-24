---
name: Focus Fold
description: A local interval clock shaped like a paper-fold work sheet.
---

# Design System: Focus Fold

## Overview

Focus Fold turns a Pomodoro timer into a small physical ritual: choose a fold, start one room of time, then return when the mark is complete. Vermilion paper, dark ink, and a gold stamp make the active interval legible without pretending that alerts, history, or sync exist.

## Colors

- **Ink** `#27211e`: surrounding room and primary numerals.
- **Paper** `#f3eadb`: timer sheet and controls.
- **Washi** `#e3d5bf`: mode rail and inactive fold surface.
- **Vermilion** `#c8503d`: action, active progress, and correction signal.
- **Gold** `#d2a84b`: the fold mark and selected emphasis.
- **Rule** `#b7a68e`: crease and paper structure.

Vermilion means action; gold means the current interval. Neither is used as a decorative wash.

## Typography

Geist Sans carries the direct instruction and mode names. Geist Mono is reserved for timer numerals, labels, session marks, and the local boundary. Georgia italic supplies the reflective note beneath the clock.

## Layout

The first viewport establishes the ritual and then opens a two-part desk: the active timer sheet on the left and the fold-type rail on the right. On mobile the timer remains first, followed by the mode rail, so Start, Pause, Reset, and mode changes remain reachable.

## Elevation & Depth

Depth comes from ink surrounding paper, paper against washi, and one-pixel crease rules. There are no shadows or gradient surfaces; the active bar and open fold state carry the change.

## Shapes

The sheet and controls are square like a work sheet. The rotated stamp is a physical mark, not a reusable card pattern. The progress strip is a straight crease rather than a ring.

## Components

- **Timer sheet:** mode label, large clock, crease progress, Start/Pause, Reset, and local boundary.
- **Fold rail:** Focus, Short break, and Long break rows with duration and state.
- **Session marks:** four small slots show the current cycle without claiming persistent history.

## Do's and Don'ts

- Do keep the current interval and next action obvious.
- Do preserve automatic break transitions and the in-memory boundary.
- Do keep the surface calm enough to work beside.
- Don't add notification or sound claims, cloud history, or productivity scores.
- Don't turn the timer into a rounded dashboard or a decorative progress ring.
