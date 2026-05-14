---
layout: page
title: GPR Wheel Encoder--IMU Localization
description: Factor-graph localization using wheel odometry, IMU preintegration, yaw priors, and weak GPR revisit constraints.
importance: 1
category: research
github: https://github.com/Yuxi0048/wheel-imu-gpr
visibility: Private
---

This project studies when repeated ground penetrating radar observations can
reduce horizontal drift in a wheel encoder--IMU localization pipeline.

The v4 pipeline is deliberately narrow and testable: it mines GPR revisit
candidates from a matched no-GPR backend trajectory, verifies segment-level
GPR matches through score thresholding and clustering, then inserts only
factor-eligible horizontal-flip revisits as weak zero-relative-XY coincidence
constraints in the same factor graph.

Key implementation areas:

- GTSAM Pose3 factor graph with IMU preintegration, wheel displacement factors,
  velocity states, and IMU bias states.
- Frontend yaw-prior sources, including runtime stop-update variants.
- GPR candidate proposal, Hilbert-envelope gradient matching, and match
  clustering.
- Trajectory metrics against total-station ground truth, including XY ATE,
  percentile errors, endpoint drift, and fixed-distance RPE.

The project framing avoids treating geometric pseudo-label precision/recall as
semantic radar correspondence accuracy unless an independent GPR labeling
protocol is added.

Repository (private): [Yuxi0048/wheel-imu-gpr](https://github.com/Yuxi0048/wheel-imu-gpr)
